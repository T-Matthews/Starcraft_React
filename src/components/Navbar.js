import React, {useContext, useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { DataContext } from '../DataProvider';
import {useAuth,useUser, useDatabase} from 'reactfire'
import {GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'
import { get,ref,child } from 'firebase/database';

let Navbar = () => {
    const [count,setCount] = useState(0);
    const auth = useAuth()
    const db=useDatabase();
  
  const changeCounter=() =>{
    setCount(count+1);
  }
  const {cart, setCart} = useContext(DataContext)
    const { status, data: user} = useUser() 
  const signin = async () =>{
    const provider = new GoogleAuthProvider()
    let u = await signInWithPopup(auth,provider);
    console.log(u)
  }
  const signout = async () =>{
    let message=await signOut(auth)
    setCart({items:{},vtotal:0,mtotal:0,stotal:0,size:0})
  }

useEffect(() => {
    if (user){
        get(child(ref(db), `carts/${user.uid}`)).then((snapshot) =>{
            if (snapshot.exists()){

            }else {
                console.log("No data available")
            }
        }).catch((error) =>{
            console.error(error);
        });
    }
}, [user])

  
    return (
<nav className='container pb-5 mb-3'>
<nav className="row navbar navbar-expand-sm navbar-dark bg-dark fixed-top pl-5 pr-5">
  <a className="navbar-brand" href="#"><img src='https://i.ibb.co/1rPyzHL/Starcraft-2-logo-png.png' height={36+'px'}/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/shop">Units</Link>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto">
        <li className = "nav-item active">
            { status === 'loading'?
            <p className='mr-4'>Logging in...</p>:
            user?
            <div className='signed-in-nav'>
            <div className='nav-item welcome-message'>
                <p className=" mr-4 welcome">Welcome {user.displayName}</p>
            </div>
              <div className='nav-item sign-out'>    
<button className=" btn btn-sm btn-info starcrafttext sign-in-btn mr-4" onClick={signout}><i class="fa fa-sign-in" aria-hidden="true"></i> Sign Out</button>    
            </div>
            </div>
            
            
            :
         <button className="btn btn-sm btn-info starcrafttext sign-in-btn mr-4" onClick={signin}><i class="fa fa-sign-in" aria-hidden="true"></i> Sign-in</button>       

        }
        
        </li>
    <li className = "nav-item active">
        { cart.size === 0 ?
        <Link className="btn btn-sm btn-info starcrafttext" to="/shop"><i class="fa fa-arrows-alt" aria-hidden="true"></i> Explore <i class="fa fa-arrows-alt" aria-hidden="true"></i></Link>
            :
            <Link className="btn btn-sm btn-info starcrafttext" to="/cart"><i class="fa fa-arrows-alt" aria-hidden="true"></i> {cart.size} Units <i class="fa fa-arrows-alt" aria-hidden="true"></i></Link>
        }
            
        </li>

    </ul>
  </div>
</nav>
</nav>
    )
}

export default Navbar