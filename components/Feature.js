
import React, { useState } from "react";
import Image from 'next/image'



const Feature = ({ imagePathAlt, imagePathUst, imageText, textPosition }) => {


    const [IsShow, setIsShow] = useState(false);

    return(
        <>
        <div  class="relative  cursor-pointer">  

        {
            !IsShow &&  
           (
            <Image  
                   onMouseEnter={() => setIsShow(true) }
                   src={imagePathAlt} width={420} height={250} alt="logo" />
           ) 
        }

        {
            IsShow  &&  
           (
             <div className="">


               <div className={`z-10 absolute text-center ${textPosition}`}>

               <span className="">
               <p
                   onMouseEnter={() => setIsShow(true) }
                   onMouseLeave={() => setIsShow(false) }
                   className="text-justify border-2">{imageText}</p>
               </span>
           
               </div>

               <div>
               <Image className="z-0 relative"
                         onMouseLeave={() => setIsShow(false) }
                         src={imagePathUst} width={420} height={250} alt="logo" />
               </div>
            
                
  

             </div>
           ) 
        }

        </div>  
        </>
    );
}
   


export default Feature;


