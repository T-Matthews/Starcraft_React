import axios from 'axios'
import React, {useContext, useState} from 'react'
import { DataContext } from '../DataProvider';


let Protoss = () => {

    //
    let protoss_supply = 'https://i.ibb.co/Y3RfWkf/protoss-supply.jpg'
    let minerals_img = 'https://i.ibb.co/7zw0tvC/minerals-icon.jpg'
    let vespene_img = 'https://i.ibb.co/m48QM38/vespene-icon.jpg'
  
    let getUnitData = async () => {
        let data = await axios.get('https://tm-starcraft-api.herokuapp.com/api/protoss')
        return data.status === 200 ? data : null
    }
    let loadUnitData = async () => {
        let data = await getUnitData();
        console.log(data)
        setUnits(data.data)
    }
    // let getZUnitData = async() =>{
    //     let zdata = await axios.get('https://tm-starcraft-api.herokuapp.com/api/zerg')
    //     return zdata.status === 200 ? zdata : null
    // }
    // let loadZUnitData = async() =>{
    //     let zdata=await getZUnitData();
    //     setZUnits(zdata.data)
    // }
    // let getPUnitData = async() =>{
    //     let pdata = await axios.get('https://tm-starcraft-api.herokuapp.com/api/protoss')
    //     return pdata.status === 200 ? pdata : null
    // }
    // let loadPUnitData = async() =>{
    //     let pdata=await getPUnitData();
    //     setPUnits(pdata.data)
    // }
    // let getTUnitData = async() =>{
    //     let tdata = await axios.get('https://tm-starcraft-api.herokuapp.com/api/terran')
    //     return tdata.status === 200 ? tdata : null
    // }
    // let loadTUnitData = async() =>{
    //     let tdata=await getTUnitData();
    //     console.log(tdata)
    //     setTUnits(tdata.data)
    // }

    const [units, setUnits] = useState(() => { loadUnitData(); });
    // const [punits,setPUnits]=useState(()=>{loadPUnitData();});
    // const [zunits,setZUnits]=useState(()=>{loadZUnitData();});
    // const [tunits,setTUnits]=useState(()=>{loadTUnitData();});
    const {cart, setCart} = useContext(DataContext)

    return (
        <div className='container'>
            <div className='row justify-content-center' style={{ padding: 2 + 'vh' }}>
                <h1 className ="starcrafttext">Protoss</h1>
            </div>
            <div className='row col-10 offset-1'>
                {typeof units === 'object' && units[0] ? units.map((unit,index)=>{
                    
                    return   <div key={index} className="card mr-2 mt-2" style={{ width: 8 + 'rem' }}>
                    <img class="unitimage m-0 p-0"src={unit.unit_image} className="img-fluid card-img-top pb-0" alt="display image" />
                    <ul className="card-body m-0 p-0" id='p-card'>
                        <li className="list-group-item text-center m-0 p-0 pb-1">
                            <h3 className="unitname text-center m-0 p-0">{unit.name}</h3>
                        </li>
                        <li className="list-group-item text-center m-0 p-0">
                            <h6 className="m-0 p-0 card-text text-center text-muted description">{unit.desc}</h6>
                        </li>
                        <li className="list-group-item text-center m-0 p-1 tier">{unit.race} | Tier  {unit.unit_tier}</li>
                        <li className="list-group-item text-center costs m-0 p-1"><img className = "costimage" src={minerals_img} /> {unit.minerals} <img className = "costimage pr-1" src={vespene_img} />  
                        {unit.vespene} <img className = "costimage pr-1" src={protoss_supply} /> 
                        {unit.supply}</li>
                        <li className="list-group-item text-center wikilink p-0"><a className ="wikilink link" href={unit.url}>wiki</a></li>
                        
                    </ul>
                        <button className= "btn btn-success ml-2 mr-2 mb-1">Enlist</button>
                </div>
                    }
                
                )
                 



                    : <h1 className='starcrafttext'>Loading Warriors</h1>}
                {/* <h1>Protoss</h1>
        <h1>{typeof punits === 'object' && units[0] ? punits[0].name : 'false' }</h1>
        <h1>Terran</h1>
        <h1>{typeof tunits === 'object' && units[0] ? tunits[0].name : 'false' }</h1>
        <h1>Zerg</h1>
        <h1>{typeof zunits === 'object' && units[0] ? zunits[0].name : 'false' }</h1> 
        */}</div> </div>
    )
}

export default Protoss;