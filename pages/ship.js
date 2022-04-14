import React, { useState } from "react";
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import MiddlePart from '../components/Middle'
import Link from "next/link";





export default function Ship() {

 
    const [isShownRoyalities, setIsShownRoyalities] = useState(false);
    const [isShownInvestment, setIsShownInvestment] = useState(false);
    const [isShownLottery, setIsShownLottery] = useState(false);
    const [isShownMetaverse, setIsShownMetaverse] = useState(false);
    const [isShownCommunity, setIsShownCommunity] = useState(false);
    const [isShownNfClub, setIsShownNftClub] = useState(false);





  // FUTURES - ROYALITIES
    const FuturesRoyalitiesAlt = React.forwardRef(({ onClick, href }, ref) => {
        return (
          <a href={href} onClick={onClick} ref={ref}>
            <Image src="/images/5_FUTURES/1_ROYALITIES/ROYALITIES_alt.png" width={400} height={250} alt="logo" />
          </a>
        );
      });
      
      const FuturesRoyalitiesUst = React.forwardRef(({ onClick, href }, ref) => {
        return (
          <div>
        <a href={href} onClick={onClick} ref={ref}>
            <Image src="/images/5_FUTURES/1_ROYALITIES/ROYALITIES_ust.png"  width={400} height={250}  alt="logo" />
          </a>
          <div className="absolute top-0 left-0 px-14 py-16 ml-10">
            <p className="leading-normal text-black font-candara font-bold text-center">% of secondary sales <br/> royalty revenue <br /> will go to the (Fishing) NFT holders</p>
          </div>
          </div>
        );
      });


          // FUTURES - INVESTMENT
          const FuturesInvestmentAlt = React.forwardRef(({ onClick, href }, ref) => {
            return (
              <a href={href} onClick={onClick} ref={ref}>
                <Image src="/images/5_FUTURES/2_INVESTMENT/INVESTMENT_alt.png" width={400} height={250} alt="logo" />
              </a>
            );
          });
          
          const FuturesInvestmentUst = React.forwardRef(({ onClick, href }, ref) => {
            return (
              <div>
            <a href={href} onClick={onClick} ref={ref}>
                <Image src="/images/5_FUTURES/2_INVESTMENT/INVESTMENT_ust.png"  width={400} height={250}  alt="logo" />
              </a>
              <div className="absolute top-0 left-0 px-14 py-12">
                <p className="leading-normal text-black font-candara font-bold">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
              </div>
              </div>
            );
          });

      
     // FUTURES - Lottery
      const FuturesLotteryAlt = React.forwardRef(({ onClick, href }, ref) => {
        return (
          <a href={href} onClick={onClick} ref={ref}>
            <Image src="/images/5_FUTURES/3_LOTTERY/LOTTERY_alt.png" width={400} height={250} alt="logo" />
          </a>
        );
      });
      
      const FuturesLotteryUst = React.forwardRef(({ onClick, href }, ref) => {
        return (
          <div>
        <a href={href} onClick={onClick} ref={ref}>
            <Image src="/images/5_FUTURES/3_LOTTERY/LOTTERY_ust.png"  width={400} height={250}  alt="logo" />
          </a>
          <div className="absolute top-0 left-0 px-14 py-12">
            <p className="leading-normal text-black font-candara font-bold">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
          </div>
          </div>
        );
      });


           // FUTURES - Metaverse
           const FuturesMetaverseAlt = React.forwardRef(({ onClick, href }, ref) => {
            return (
              <a href={href} onClick={onClick} ref={ref}>
                <Image src="/images/5_FUTURES/4_METAVERSE/METAVERSE_alt.png" width={400} height={250} alt="logo" />
              </a>
            );
          });
          
          const FuturesMetaverseUst = React.forwardRef(({ onClick, href }, ref) => {
            return (
              <div>
            <a href={href} onClick={onClick} ref={ref}>
                <Image src="/images/5_FUTURES/4_METAVERSE/METAVERSE_ust.png"  width={400} height={250}  alt="logo" />
              </a>
              <div className="absolute top-0 left-0 px-14 py-12">
                <p className="leading-normal text-black font-candara font-bold">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
              </div>
              </div>
            );
          });


                     // FUTURES - Community
                     const FuturesCommunityAlt = React.forwardRef(({ onClick, href }, ref) => {
                        return (
                          <a href={href} onClick={onClick} ref={ref}>
                            <Image src="/images/5_FUTURES/5_COMMUNITY_DAO/COMMUNITY_alt.png" width={400} height={250} alt="logo" />
                          </a>
                        );
                      });
                      
                      const FuturesCommunityUst = React.forwardRef(({ onClick, href }, ref) => {
                        return (
                          <div>
                        <a href={href} onClick={onClick} ref={ref}>
                            <Image src="/images/5_FUTURES/5_COMMUNITY_DAO/COMMUNITY_ust.png"  width={400} height={250}  alt="logo" />
                          </a>
                          <div className="absolute top-0 left-0 px-14 py-12">
                            <p className="leading-normal text-black font-candara font-bold">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
                          </div>
                          </div>
                        );
                      });

            
                     // FUTURES - NFCLUB
                     const FuturesNfClubAlt = React.forwardRef(({ onClick, href }, ref) => {
                        return (
                          <a href={href} onClick={onClick} ref={ref}>
                            <Image src="/images/5_FUTURES/6_NFCLUB/NFCLUB_alt.png" width={400} height={250} alt="logo" />
                          </a>
                        );
                      });
                      
                      const FuturesNfClubUst = React.forwardRef(({ onClick, href }, ref) => {
                        return (
                          <div>
                        <a href={href} onClick={onClick} ref={ref}>
                            <Image src="/images/5_FUTURES/6_NFCLUB/NFCLUB_ust.png"  width={400} height={250}  alt="logo" />
                          </a>
                          <div className="absolute top-0 left-0 px-14 py-12">
                            <p className="leading-normal text-black font-candara font-bold">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
                          </div>
                          </div>
                        );
                      });


  return (

<div className="container bg-UST_BG debug-screens bg-cover flex flex-wrap items-center justify-between mx-auto">

<section id="header">

  
 <div className="container flex flex-wrap items-center justify-between mx-auto" id="header">    
    <a href="https://flowbite.com" className="flex items-center">
      <img src="/images/3_MENU_FULL/NFCLUB.png" className="mr-3 h-6 sm:h-9 border-2" alt="NFTCLUB Logo" />
    </a>

    <button type="button" className="text-white font-medium rounded-lg text-sm px-5 py-0 text-center border-2">
     <img src="/images/3_MENU_FULL/CONNECT_WALLET.png" className="mr-0 h-0 sm:h-9" alt="NFTCLUB Logo" />
     </button>
    
     </div>



     <nav className='px-0 py-0'>
    <div className="flex flex-wrap items-center justify-between mx-auto px-5">
    <ul className="flex flex-col mt-0 md:flex-row md:space-x-2  md:text-sm md:font-medium px-30">
      <li>
        <a href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-10" aria-current="page">
        <img src="/images/3_MENU_FULL/HOME_click.png" className="mr-3 h-6 sm:h-9" alt="HOME" />
        </a>
      </li>
      <li>
        <a href="#" className="block py-2 pr-4 pl-3 md:border-0 md:p-10 ">
        <img src="/images/3_MENU_FULL/MINT_click.png" className="mr-3 h-6 sm:h-9" alt="HOME" />
        </a>
      </li>
      <li>
      <a href="#" className="block py-2 pr-4 pl-3 md:border-0 md:p-10 ">
        <img src="/images/3_MENU_FULL/MARKET_click.png" className="mr-3 h-6 sm:h-9" alt="HOME" />
        </a>
      </li>
      <li>
      <a href="#" className="block py-2 pr-4 pl-3 md:border-0 md:p-0 ">
        <img src="/images/3_MENU_FULL/LOGO.png" 
         className="mr-3 h-6 sm:h-9 2xl:h-20 xl:h-20 lg:h:30" alt="HOME" />
        </a>
      </li>
      <li>
      <a href="#" className="block py-2 pr-4 pl-3 md:border-0 md:p-10 ">
        <img src="/images/3_MENU_FULL/WALLET_click.png" className="mr-3 h-6 sm:h-9" alt="HOME" />
        </a>
      </li>
      <li>
      <a href="#" className="block py-2 pr-4 pl-3 md:border-0 md:p-10 ">
        <img src="/images/3_MENU_FULL/FISHING_click.png" className="mr-3 h-6 sm:h-9" alt="HOME" />
        </a>
      </li>
      <li>
      <a href="#" className="block py-2 pr-4 pl-3 md:border-0 md:p-10 ">
        <img src="/images/3_MENU_FULL/LEADERBOARD_click.png" className="mr-3 h-6 sm:h-9" alt="HOME" />
        </a>
      </li>
    </ul>
    </div>
    </nav>

    <div id="video_panel" className='flex flex-wrap items-center justify-between mx-auto'>
    <div className=''></div>
    <div className=''>
    <img src="/images/4_VIDEO_PANEL/VIDEO_PANEL.png" className="h-80 w-85 mr-20 py-12" alt="HOME" />
    </div>
    </div>

   

</section>

<section id="features">


<div className="container flex flex-wrap items-center justify-between mx-auto  border-black h-40" id="header">    
</div>
<div className="container flex flex-wrap items-center justify-between mx-auto border-black" id="header">  
<div><img src="/images/5_FUTURES/FUTURES_BASLIK.png" className="md:px-20" alt="HOME" /></div>  
</div>

<div className="container flex flex-wrap items-center justify-between mx-auto border-black" id="header">  



<div  class="relative  cursor-pointer ml-2"
        onMouseEnter={() => setIsShownRoyalities(true)}
        onMouseLeave={() => setIsShownRoyalities(false)}>   {isShownRoyalities && (
      
            <FuturesRoyalitiesUst/>
     
        )}
        {!isShownRoyalities && (
      
            <FuturesRoyalitiesAlt />
    
        )}</div>  

<div  class="relative  cursor-pointer ml-2"
        onMouseEnter={() => setIsShownInvestment(true)}
        onMouseLeave={() => setIsShownInvestment(false)}>   {isShownInvestment && (
      
            <FuturesInvestmentUst/>
     
        )}
        {!isShownInvestment && (
      
            <FuturesInvestmentAlt />
    
        )}</div>  




<div  class="relative  cursor-pointer ml-2"
        onMouseEnter={() => setIsShownLottery(true)}
        onMouseLeave={() => setIsShownLottery(false)}>   {isShownLottery && (
      
            <FuturesLotteryUst/>
     
        )}
        {!isShownLottery && (
      
            <FuturesLotteryAlt />
    
        )}</div>  
</div>


<div className="container flex flex-wrap items-center justify-between mx-auto border-black" id="header">  

<div  class="relative  cursor-pointer ml-2"
        onMouseEnter={() => setIsShownMetaverse(true)}
        onMouseLeave={() => setIsShownMetaverse(false)}>   {isShownMetaverse && (
      
            <FuturesMetaverseUst/>
     
        )}
        {!isShownMetaverse && (
      
            <FuturesMetaverseAlt />
    
        )}</div>  


        <div  class="relative  cursor-pointer ml-2"
        onMouseEnter={() => setIsShownCommunity(true)}
        onMouseLeave={() => setIsShownCommunity(false)}>   {isShownCommunity && (
      
            <FuturesCommunityUst/>
     
        )}
        {!isShownCommunity && (
      
            <FuturesCommunityAlt />
    
        )}</div>  


        <div  class="relative  cursor-pointer ml-2"
        onMouseEnter={() => setIsShownNftClub(true)}
        onMouseLeave={() => setIsShownNftClub(false)}>   {isShownNfClub && (
      
            <FuturesNfClubUst/>
     
        )}
        {!isShownNfClub && (
      
            <FuturesNfClubAlt />
    
        )}</div>  

</div>




</section>

<section id="tri-token-ecosystem">



<div className="container flex flex-wrap items-center justify-between mx-auto  border-black h-40" id="header">    
</div>
<div className="container flex flex-wrap items-center justify-between mx-auto border-black" id="header">  
<div><img src="/images/6_TRI_TOKEN ECO/TRI-TOKEN_BASLIK.png" className="md:px-20" alt="HOME" /></div>  
</div>

<div id="main" class="flex justify-evenly space-x-2 ml-12 mr-12 border-2"> 
        <div class="rounded  w-20 h-20 border-2">
        <img src="/images/6_TRI_TOKEN ECO/logos/captain.png" className="h-120" alt="HOME" />
        </div> 
        <div class="rounded  flex-grow h-14 py-5 px-2 border-2">
        <p className="text-white font-candara border-2">CAPTAIN</p>
        <span className="text-white font-Candara border-2">Sail on cool wat ers with expandable ship that crew will catch $fish <br/>
Grab the ship by the ship's rudder. <br />
Ship is to Captain what a rocket means to Elon Musk!</span>
    
        </div> 
        
        <div class="rounded w-24 h-12 mr-12"></div>
    </div>

    <div id="main" class="flex justify-evenly space-x-2 ml-12 mr-12 py-10"> 
        <div class="rounded  w-20 h-12 "><img src="/images/6_TRI_TOKEN ECO/logos/fish.png" className="h-100 w-20 ml-5 py-5" alt="HOME" /></div> 
        <div class="rounded  flex-grow h-14 py-5 px-2">
        
        <img src="/images/6_TRI_TOKEN ECO/2_$fISH/$fISH.png" className="h-4 w-25" alt="HOME" />
        <img src="/images/6_TRI_TOKEN ECO/2_$fISH/Sand in the desert, $fish in the sea... Start your adventur.png" className="h-12" alt="HOME" />
        </div> 
        <div class="rounded   w-80 h-12 mr-40">

        <img src="/images/6_TRI_TOKEN ECO/TRI-TOKEN_UCGEN.png" className="h-100 w-80 mr-60" alt="HOME" />
        </div>
    </div>

    <div id="main" class="flex justify-evenly space-x-2 ml-12 mr-12 "> 
        <div class="rounded  w-20 h-12 "><img src="/images/6_TRI_TOKEN ECO/logos/ship.png" className="h-100 w-20 ml-5 py-5" alt="HOME" /></div> 
        <div class="rounded  flex-grow h-14 py-5 px-2">
        
        <img src="/images/6_TRI_TOKEN ECO/3_$YARD/$YARD_.png" className="h-4 w-25" alt="HOME" />
        <img src="/images/6_TRI_TOKEN ECO/3_$YARD/$yard is needed to tow the Ship to the Dock and increase the S.png" className="h-8" alt="HOME" />
        </div> 
        <div class="rounded   w-24 h-12 mr-12"></div>
    </div>

    <div id="main" class="flex justify-evenly space-x-2 ml-12 mr-12 py-10"> 
        <div class="rounded  w-20 h-12 "><img src="/images/6_TRI_TOKEN ECO/logos/catch.png" className="h-100 w-20 ml-5 py-5" alt="HOME" /></div> 
        <div class="rounded  flex-grow h-14 py-5 px-2">
        
        <img src="/images/6_TRI_TOKEN ECO/4_Catch/Catch.png" className="h-4 w-25" alt="HOME" />
        <img src="/images/6_TRI_TOKEN ECO/4_Catch/The crew who is excited will sail to the sea and will catch $f.png" className="h-8" alt="HOME" />
        </div> 
        <div class="rounded w-24 h-12 mr-12"></div>
    </div>

    <div id="main" class="flex justify-evenly space-x-2 ml-12 mr-12"> 
        <div class="rounded  w-20 h-12 "><img src="/images/6_TRI_TOKEN ECO/logos/freeze.png" className="h-100 w-20 ml-5 py-5" alt="HOME" /></div> 
        <div class="rounded  flex-grow h-14 py-5 px-2">
        
        <img src="/images/6_TRI_TOKEN ECO/5_Freeze/Freeze.png" className="h-4 w-25" alt="HOME" />
        <img src="/images/6_TRI_TOKEN ECO/5_Freeze/Freeze_Desc.png" className="h-12" alt="HOME" />
        </div> 
        <div class="rounded   w-24 h-12 mr-12"></div>
    </div>

    
    <div id="main" class="flex justify-evenly space-x-2 ml-12 mr-12 py-10"> 
        <div class="rounded  w-20 h-12 "><img src="/images/6_TRI_TOKEN ECO/logos/capacity.png" className="h-100 w-20 ml-5 py-5" alt="HOME" /></div> 
        <div class="rounded  flex-grow h-14 py-5 px-2">
        
        <img src="/images/6_TRI_TOKEN ECO/6_Capacity/Capacity.png" className="h-4 w-25" alt="HOME" />
        <img src="/images/6_TRI_TOKEN ECO/6_Capacity/From the fishing boat to become ruler of the sea… $yard perman.png" className="h-12" alt="HOME" />
        </div> 
        <div class="rounded   w-24 h-12 mr-12"></div>
    </div>
</section>

<section id="roadmap">

<div className="container flex flex-wrap items-center justify-between mx-auto  border-black h-40" id="header">    
</div>
<div className="container flex flex-wrap items-center justify-between mx-auto border-black" id="header">  
<div><img src="/images/7_ROADMAP/ROADMAP_BASLIK.png" className="md:px-20" alt="HOME" /></div>  
<div className='py-5'><img src="/images/7_ROADMAP/ROADMAP_DUZEN.png" className="md:px-20" alt="HOME" /></div>  


<div className="grid grid-cols-4 gap-x-4 items-stretch m-auto">
<div className="">
<img src="/images/7_ROADMAP/Q1_2022.png" className="ml-15" alt="HOME" />
  </div>
  <div className="">
<img src="/images/7_ROADMAP/Q2_2022.png" className="" alt="HOME" />
  </div>
  <div className="">
<img src="/images/7_ROADMAP/Q3_2022.png" className="" alt="HOME" />
  </div>
  <div className="">
<img src="/images/7_ROADMAP/Q4_2022.png" className="" alt="HOME" />
  </div>


</div>
</div>


  

</section>



  </div>



 

  );
 


}
