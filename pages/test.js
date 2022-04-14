
import React, { useState,useEffect,useRef } from "react";
import Image from 'next/image'
///import Feature from "../components/Feature";
//import Learn from "../components/Learn";




export default function  test() {


    const countRef = useRef(0);
    const [name,setName] = useState('');
    const [stateObj, setStateObj] = useState({royalities:'false',lottery: 'false'});






    useEffect( () => {
        countRef.current = countRef.current + 1;
        //setCount( (prevCount) => prevCount + 1);
    })

   

    //const inputRef = useRef(null);

    /*
    useEffect(() => {
        inputRef.current.focus();
       
    });
    */

   /*
    const focusOnInput = () => {
        inputRef.current.focus();
    }
    */
    

    /*
    const Feature = ({onChange}) => {
        
        const onClick = ({onChange}) => console.log("Clicked!");

        return(
            <div>
                <div onClick={onClick}>Click me! {onChange} </div>
            </div>
  
           
        );
    }
    */
       


    return (
        <div className="flex">
                  <div>
                  {
                      (stateObj.royalities === 'false') &&  (
            <Image
             onMouseEnter={() => setStateObj({...stateObj,royalities: 'true'} )}
             src="/images/5_FUTURES/1_ROYALITIES/ROYALITIES_alt.png" width={240} height={180} alt="logo" />
              ) 
                  }


                  
                  {
                      (stateObj.royalities === 'true') &&  (
            <Image
             onMouseLeave={() => setStateObj({...stateObj,royalities: 'false'} )}
             src="/images/5_FUTURES/1_ROYALITIES/ROYALITIES_ust.png" width={240} height={180} alt="logo" />
              ) 
                  }

                  </div>

                  <div>

                  {
                      (stateObj.lottery === 'false') &&  (
            <Image
             onMouseEnter={() => setStateObj({...stateObj,lottery: 'true'} )}
             src="/images/5_FUTURES/3_LOTTERY/LOTTERY_alt.png" width={240} height={180} alt="logo" />
              ) 
                  }


                  
                  {
                      (stateObj.lottery === 'true') &&  (
            <Image
             onMouseLeave={() => setStateObj({...stateObj,lottery: 'false'} )}
             src="/images/5_FUTURES/3_LOTTERY/LOTTERY_ust.png" width={240} height={180} alt="logo" />
              ) 
                  }

                  </div>

             


             


                 
           
      
       


        </div>
   
    )
;    
}