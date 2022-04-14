import Image from 'next/image'


// get our fontawesome imports
import { faHome,faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Grid_Example() {

    return(
        
        <div className="outer-grid">
            <header>
            
                <div className="left-header">
                     <h2 className="logo">
                     <Image 
                  src="/images/2_MENU_kucuk/LOGO_kucuk.png"
                  width={80}
                  height={40}
                />
                     </h2>
                </div>
     

                <div className="right-header">
                <FontAwesomeIcon icon={faBars} className="bbg" />
             
                </div>
            </header>
        </div>
    );

}