import { useContext, useState } from "react";
import { DataContext } from '../DataProvider'
import '../css/cartstyles.css'
import {useDatabase, useUser} from 'reactfire'
import {set,ref} from 'firebase/database'


let Cart = () => {

        
    let zerg_supply = 'https://i.ibb.co/2tpj004/zerg-supply.jpg'
    let terran_supply = 'https://i.ibb.co/SBN9mmY/terran-supply.jpg'
    let protoss_supply = 'https://i.ibb.co/Y3RfWkf/protoss-supply.jpg'
    let minerals_img = 'https://i.ibb.co/7zw0tvC/minerals-icon.jpg'
    let vespene_img = 'https://i.ibb.co/m48QM38/vespene-icon.jpg'

    const { cart, setCart } = useContext(DataContext);
    const {data: user}=useUser();
    const db=useDatabase();




    const incQuantity = unit => {

        
        let mutableCart = { ...cart }
        mutableCart.size++
        mutableCart.vtotal += unit.obj.vespene
        mutableCart.stotal += unit.obj.supply
        mutableCart.mtotal += unit.obj.minerals
        mutableCart.items[unit.obj.id].quantity++
        if (user){
            set(ref(db,'carts/'+user.uid), mutableCart);
        }
        setCart(mutableCart)
    }
    const decQuantity = unit => {
        let mutableCart = { ...cart }
        mutableCart.size--
        mutableCart.vtotal -= unit.obj.vespene
        mutableCart.stotal -= unit.obj.supply
        mutableCart.mtotal -= unit.obj.minerals
        mutableCart.items[unit.obj.id].quantity > 1 ?
            mutableCart.items[unit.obj.id].quantity-- :
            delete mutableCart.items[unit.obj.id]
            if (user){
                set(ref(db,'carts/'+user.uid), mutableCart);
            }
        setCart(mutableCart)
    }
    const remUnit = unit => {
        let mutableCart = { ...cart }
        mutableCart.size -= mutableCart.items[unit.obj.id].quantity;
        mutableCart.vtotal -= unit.obj.vespene * mutableCart.items[unit.obj.id].quantity;
        mutableCart.stotal -= unit.obj.supply * mutableCart.items[unit.obj.id].quantity;
        mutableCart.mtotal -= unit.obj.minerals * mutableCart.items[unit.obj.id].quantity;

        delete mutableCart.items[unit.obj.id]
        if (user){
            set(ref(db,'carts/'+user.uid), mutableCart);
        }
        setCart(mutableCart)
    }
    const clearCart = () => {
        let newCart = { items: {}, vtotal: 0, mtotal: 0, stotal: 0, size: 0 }
        if (user){
            set(ref(db,'carts/'+user.uid), null);
        }
        setCart(newCart)
    }




    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 justify-content-center">
                    <h3 className="p-2 text-center" id="cart-topper">Your Army:</h3>
                    {Object.values(cart.items).map((unit, index) => {
                        return <div key={index} className="cart-card mt-1">
                            <div className="cart-card-img-cell d-flex flex-row align-items-center">
                                <img className="cart-unit-image" src={unit.obj.unit_image} />
                            </div>
                            <div className="cart-card-desc-cell">
                                <h4 className="">{unit.obj.name}</h4>
                                <h6 className="">{unit.obj.desc}</h6>
                            </div>
                            <div className="unit-cost-text">
                                <p className="m-0"><img className="card-cost-img" src={minerals_img} />{unit.obj.minerals}</p>
                                <p className="m-0"><img className="card-cost-img" src={vespene_img} />{unit.obj.vespene}</p>
                                <p className="m-0"><img className="card-cost-img" src={unit.obj.race === 'Protoss' ? protoss_supply :
                                    unit.obj.race === 'Terran' ? terran_supply : zerg_supply} />{unit.obj.supply}</p>
                            </div>
                            <div className="card-count">
                                <i class="fa fa-minus-square" aria-hidden="true" onClick={() => { decQuantity(unit) }}></i>
                                <h5 className="card-qty-text">{unit.quantity} </h5>
                                <i class="fa fa-plus-square" aria-hidden="true" onClick={() => { incQuantity(unit) }}></i>
                            </div>

                            <div>
                                <i class="fa fa-trash" aria-hidden="true" onClick={() => { remUnit(unit) }}></i>
                            </div>
                        </div>
                    })
                    }
                    {/* For each Unit */}
                    <div className='cart-total-card '>
                        <div>
                            <h5>ARMY COST</h5>
                        </div>
                        <div className="total-cost-item">
                            <img className="card-cost-img" src={minerals_img} />
                            <h6>{cart.mtotal}</h6>
                        </div>
                        <div className="total-cost-item">
                            <img className="card-cost-img" src={vespene_img} />
                            <h6>{cart.vtotal}</h6>
                        </div>
                        <div className="total-cost-item">
                            <img className="card-cost-img" src={terran_supply} />
                            <h6>{cart.stotal}</h6>
                        </div>
                        <div>
                            {cart.size === 0 ?
                                <button className="disabled btn btn-success">NO UNITS!</button>
                                :
                                <button className="clearcart" onClick={clearCart}>CLEAR CART</button>

                            }

                        </div>
                    </div>
                    <div className='cart-battle-card'>
                        {cart.size === 0 ?
                            <button className=" battle-button disabled">

                                <h6 className="m-0 disabled"> Great results cannot be achieved with such small forces </h6>
                                </button>:
                            <button className="battle-button-function">
                                <h1 className="m-0">ENTER THE FRAY</h1>
                            </button>
                        }


                    </div>

                </div>
            </div>
        </div>
    )
}
export default Cart