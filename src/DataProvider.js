import { useState, createContext,useEffect} from 'react';

const DataProvider = props =>{
    const[cart, setCart] = useState({items:{},vtotal:0,mtotal:0,stotal:0,size:0})
    // const[icons,setIcons]= useEffect({z_supply:'https://i.ibb.co/2tpj004/zerg-supply.jpg',
    //                                  t_supply:'https://i.ibb.co/SBN9mmY/terran-supply.jpg',
    //                                  p_supply:'https://i.ibb.co/Y3RfWkf/protoss-supply.jpg',
    //                                  minerals_img:'https://i.ibb.co/7zw0tvC/minerals-icon.jpg',
    //                                  vespene_img:'https://i.ibb.co/m48QM38/vespene-icon.jpg'})




  
    return (
        <DataContext.Provider value={{'cart':cart,'setCart':setCart}}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider
export let DataContext = createContext();