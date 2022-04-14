import React, { useState } from "react";
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";

export default function Flex_Example() {

  const [isShownRoyalities, setIsShownRoyalities] = useState(false);
  const [isShownInvestment, setIsShownInvestment] = useState(false);
  const [isShownLottery, setIsShownLottery] = useState(false);
  const [isShownMetaverse, setIsShownMetaverse] = useState(false);
  const [isShownCommunity, setIsShownCommunity] = useState(false);
  const [isShownNfClub, setIsShownNftClub] = useState(false);


  // FUTURES - ROYALITIES
  const FuturesRoyalitiesAlt = React.forwardRef(({ onClick, href }, ref) => {
    return (
      <div className="text-right">
         <a href={href} onClick={onClick} ref={ref}>
        <Image src="/images/5_FUTURES/1_ROYALITIES/ROYALITIES_alt.png" width={240} height={180} alt="logo" />
      </a>
      </div>
     
    );
  });
  
  const FuturesRoyalitiesUst = React.forwardRef(({ onClick, href }, ref) => {
    return (
      <div>
  <div className="text-right">
      <a href={href} onClick={onClick} ref={ref}>
          <Image src="/images/5_FUTURES/1_ROYALITIES/ROYALITIES_ust.png"  width={240} height={180}  alt="logo" />
        </a>
        </div>

        <div className="">
        <p className="absolute  text-black font-candara font-bold text-base top-10 right-1 ">% of secondary sales <br/> royalty revenue <br /> will go to the (Fishing) NFT holders</p>
        </div>

      </div>

    
     
    
    );
  });


      // FUTURES - INVESTMENT
      const FuturesInvestmentAlt = React.forwardRef(({ onClick, href }, ref) => {
        return (
          <div className="text-center">
          <a href={href} onClick={onClick} ref={ref}>
            <Image src="/images/5_FUTURES/2_INVESTMENT/INVESTMENT_alt.png" width={240} height={180} alt="logo" />
          </a>
          </div>
        );
      });
      
      const FuturesInvestmentUst = React.forwardRef(({ onClick, href }, ref) => {
        return (
      <div>
  <div className="text-center">
      <a href={href} onClick={onClick} ref={ref}>
          <Image src="/images/5_FUTURES/2_INVESTMENT/INVESTMENT_ust.png"  width={240} height={180}  alt="logo" />
        </a>
        </div>

        <div className="">
        <p className="absolute  text-black font-candara font-bold text-base top-10 ml-12  text-center  px-20">% of secondary sales <br/> royalty revenue <br /> will go to the (Fishing) NFT holders</p>
        </div>

      </div>

        );
      });

  
 // FUTURES - Lottery
  const FuturesLotteryAlt = React.forwardRef(({ onClick, href }, ref) => {
    return (
      <div className="text-left">
      <a href={href} onClick={onClick} ref={ref}>
        <Image src="/images/5_FUTURES/3_LOTTERY/LOTTERY_alt.png" width={240} height={180} alt="logo" />
      </a>
      </div>
    );
  });
  
  const FuturesLotteryUst = React.forwardRef(({ onClick, href }, ref) => {
    return (
   
   <div>
  <div className="text-left">
      <a href={href} onClick={onClick} ref={ref}>
          <Image src="/images/5_FUTURES/3_LOTTERY/LOTTERY_ust.png"  width={240} height={180}  alt="logo" />
        </a>
        </div>

        <div>
        <p className="absolute  text-black font-candara font-bold text-base top-10 left-0 text-center">% of secondary sales <br/> royalty revenue <br /> will go to the (Fishing) NFT holders</p>
        </div>

      </div>




    );
  });


       // FUTURES - Metaverse
       const FuturesMetaverseAlt = React.forwardRef(({ onClick, href }, ref) => {
        return (
          <div className="text-right">
          <a href={href} onClick={onClick} ref={ref}>
            <Image src="/images/5_FUTURES/4_METAVERSE/METAVERSE_alt.png" width={240} height={180} alt="logo" />
          </a>
          </div>
        );
      });
      
      const FuturesMetaverseUst = React.forwardRef(({ onClick, href }, ref) => {
        return (
          <div className="text-right">
        <a href={href} onClick={onClick} ref={ref}>
            <Image src="/images/5_FUTURES/4_METAVERSE/METAVERSE_ust.png"  width={240} height={180}  alt="logo" />
          </a>
          <div className="">
        <p className="absolute  text-black font-candara font-bold text-base top-12 right-10 ">% of secondary sales <br/> royalty revenue <br /> will go to the (Fishing) NFT holders</p>
        </div>
          </div>
        );
      });


                 // FUTURES - Community
                 const FuturesCommunityAlt = React.forwardRef(({ onClick, href }, ref) => {
                    return (
                      <div className="text-center">
                      <a href={href} onClick={onClick} ref={ref}>
                        <Image src="/images/5_FUTURES/5_COMMUNITY_DAO/COMMUNITY_alt.png" width={240} height={180} alt="logo" />
                      </a>
                      </div>
                    );
                  });
                  
                  const FuturesCommunityUst = React.forwardRef(({ onClick, href }, ref) => {
                    return (
                      <div>
                      <div className="text-center">
                          <a href={href} onClick={onClick} ref={ref}>
                              <Image src="/images/5_FUTURES/5_COMMUNITY_DAO/COMMUNITY_ust.png"  width={240} height={180}  alt="logo" />
                            </a>
                            </div>
                    
                            <div className="">
                            <p className="absolute  text-black font-candara font-bold text-base top-10 ml-12  text-center  px-20">% of secondary sales <br/> royalty revenue <br /> will go to the (Fishing) NFT holders</p>
                            </div>
                    
                          </div>
                    );
                  });

        
                 // FUTURES - NFCLUB
                 const FuturesNfClubAlt = React.forwardRef(({ onClick, href }, ref) => {
                    return (
                      <div className="text-left">
                      <a href={href} onClick={onClick} ref={ref}>
                        <Image src="/images/5_FUTURES/6_NFCLUB/NFCLUB_alt.png" width={240} height={180} alt="logo" />
                      </a>
                      </div>
                    );
                  });
                  
                  const FuturesNfClubUst = React.forwardRef(({ onClick, href }, ref) => {
                    return (
                      <div className="text-left">
                    <a href={href} onClick={onClick} ref={ref}>
                        <Image src="/images/5_FUTURES/6_NFCLUB/NFCLUB_ust.png"  width={240} height={180}  alt="logo" />
                      </a>
                      <div>
        <p className="absolute  text-black font-candara font-bold text-base top-10 left-0 text-center">% of secondary sales <br/> royalty revenue <br /> will go to the (Fishing) NFT holders</p>
        </div>

                      </div>
                    );
                  });



  return (

   

      <div className="container bg-UST_BG debug-screens mx-auto   bg-cover ">

  
         {/*  Up lines  */}
        <div className="flex flex-wrap justify-between">
          <div className="m-2">
            {" "}
            <Image
              src="/images/3_MENU_FULL/up_line.png"
              width={180}
              height={2}
            />{" "}
          </div>
          <div className="m-2 mr-2">
            {" "}
            <Image
              src="/images/3_MENU_FULL/up_line.png"
              width={152}
              height={2}
            />
          </div>
        </div>

      {/*  NFClub and Connect Wallet  */}
        <div className="flex flex-wrap">
          <div className="flex-grow ml-3">
            {" "}
            <Image
              src="/images/3_MENU_FULL/NFCLUB.png"
              width={100}
              height={30}
            />{" "}
          </div>
          <div className="flex-grow-0 mr-2">
            {" "}
            <Image
              src="/images/3_MENU_FULL/CONNECT_WALLET.png"
              width={150}
              height={30}
            />{" "}
          </div>
        </div>

    {/*  Down Lines  */}
        <div className="flex items-stretch">
          <div className="flex-grow ml-12 px-20 -py-3 -mt-4">
            {" "}
            <Image
              src="/images/3_MENU_FULL/down_line.png"
              width={58}
              height={1}
            />{" "}
          </div>
          <div className="flex-grow-0 mr-12  px-12  -mt-3">
            {" "}
            <Image
              src="/images/3_MENU_FULL/down_line.png"
              width={60}
              height={1}
            />{" "}
          </div>
        </div>

    {/*  Nav Menu  */}
        <div className="flex justify-between">
          <div className="flex-grow"></div>
          <div className="flex-grow">
            <div className="flex">
              <div className="flex-grow">
                {" "}
                <Image
                  src="/images/3_MENU_FULL/HOME_unclick.png"
                  width={90}
                  height={35}
                />{" "}
              </div>

              <div className="flex-grow">
                {" "}
                <Image
                  src="/images/3_MENU_FULL/MINT_unclick.png"
                  width={90}
                  height={35}
                />{" "}
              </div>

              <div className="flex-grow">
                {" "}
                <Image
                  src="/images/3_MENU_FULL/MARKET_unclick.png"
                  width={90}
                  height={35}
                />{" "}
              </div>

              <div className="flex-grow -mt-12">
                {" "}
                <Image
                  src="/images/3_MENU_FULL/LOGO.png"
                  width={200}
                  height={100}
                />{" "}
              </div>

              <div className="flex-grow">
                {" "}
                <Image
                  src="/images/3_MENU_FULL/WALLET_unclick.png"
                  width={90}
                  height={35}
                />{" "}
              </div>

              <div className="flex-grow">
                {" "}
                <Image
                  src="/images/3_MENU_FULL/FISHING_unclick.png"
                  width={90}
                  height={35}
                />{" "}
              </div>

              <div className="flex-grow">
                {" "}
                <Image
                  src="/images/3_MENU_FULL/LEADERBOARD_unclick.png"
                  width={120}
                  height={35}
                />{" "}
              </div>
            </div>
          </div>
          <div className="flex-grow"></div>
        </div>




    {/*  Video Panel  */}
 
 <div id="video_panel" className='flex flex-wrap  text-center '>
    <div className='flex-grow'></div>
    <div className='flex-grow'></div>
    <div className='flex-grow py-20 my-0 mr-15'>
                <Image
                  src="/images/4_VIDEO_PANEL/VIDEO_PANEL.png"
                  width={700}
                  height={300}
                />
    </div>
    </div>


   

  
    {/* FEATURES TITLE  */}
    <div className='flex flex-col text-center py-20 mt-20'>
    <div> <Image className=""
                  src="/images/5_FUTURES/FUTURES_BASLIK.png"
                  width={1000}
                  height={40}
                /></div>

      {/* FEATURES ROYALTIES  */}
      <div  className="grid  grid-cols-3 mt-10 border-2">
      

        <div  class="relative  cursor-pointer"
        onMouseEnter={() => setIsShownRoyalities(true)}
        onMouseLeave={() => setIsShownRoyalities(false)}>   {isShownRoyalities && (
      
            <FuturesRoyalitiesUst/>
     
        )}
        {!isShownRoyalities && (
      
            <FuturesRoyalitiesAlt />
    
        )}</div>  


     
    
     
        {/* FEATURES INVESTMENT  */}
<div  class="relative  cursor-pointer"
        onMouseEnter={() => setIsShownInvestment(true)}
        onMouseLeave={() => setIsShownInvestment(false)}>   {isShownInvestment && (
      
            <FuturesInvestmentUst/>
     
        )}
        {!isShownInvestment && (
      
            <FuturesInvestmentAlt />
    
        )}</div>  
     
      


    {/* FEATURES LOTTERY  */}
        <div  class="relative  cursor-pointer"
        onMouseEnter={() => setIsShownLottery(true)}
        onMouseLeave={() => setIsShownLottery(false)}>   {isShownLottery && (
      
            <FuturesLotteryUst/>
     
        )}
        {!isShownLottery && (
      
            <FuturesLotteryAlt />
    
        )}</div>  
   

           {/* FEATURES METAVERSE  */}

        <div  class="relative  cursor-pointer"
        onMouseEnter={() => setIsShownMetaverse(true)}
        onMouseLeave={() => setIsShownMetaverse(false)}>   {isShownMetaverse && (
      
            <FuturesMetaverseUst/>
     
        )}
        {!isShownMetaverse && (
      
            <FuturesMetaverseAlt />
    
        )}</div>  

      
         {/* FEATURES COMMUNITY  */}

        <div  class="relative  cursor-pointer"
        onMouseEnter={() => setIsShownCommunity(true)}
        onMouseLeave={() => setIsShownCommunity(false)}>   {isShownCommunity && (
      
            <FuturesCommunityUst/>
     
        )}
        {!isShownCommunity && (
      
            <FuturesCommunityAlt />
    
        )}</div>  

      
        <div className="">
        <div  class="relative  cursor-pointer"
        onMouseEnter={() => setIsShownNftClub(true)}
        onMouseLeave={() => setIsShownNftClub(false)}>   {isShownNfClub && (
      
            <FuturesNfClubUst/>
     
        )}
        {!isShownNfClub && (
      
            <FuturesNfClubAlt />
    
        )}</div>  
        </div>
     
      </div>
               
    </div>

    


    {/* FEATURES TITLE 
    
    
sadsadsa

    
    
     */}

  


    
    <div className='text-center w-full'>
    <Image className=""
                  src="/images/6_TRI_TOKEN ECO/TRI-TOKEN_BASLIK.png"
                  width={1000}
                  height={40}
                />
    </div>


    <div  className="grid  grid-cols-1 mt-4 grid-rows-3 gap-4 column">
      

   
      
      <div className="flex border-2    justify-center">

        <div className="border-2 border-green-700 py-2">       
            <Image className=""
                  src="/images/6_TRI_TOKEN ECO/logos/captain.png"
                  width={120}
                  height={90}
                />
       </div>
       <div className="content border-2 border-green-700">
                        <h3 className=" text-white text-sm px-1 py-1">SHIP</h3>
                        <p className=" text-white text-sm px-1">Sail on cool wat ers with expandable ship that crew will catch $fish.Grab the ship by the ship's rudder.Ship is to Captain what a rocket means to Elon Musk </p>
       </div>
       <div className="content border-2 border-green-700">
                        <h3 className=" text-white">SHIP</h3>
                        <p className=" text-white">Sail on cool wat </p>
       </div>
      </div>  

      <div className="flex border-2    justify-center">

        <div className="border-2 border-green-700 py-2">       
            <Image className=""
                  src="/images/6_TRI_TOKEN ECO/logos/captain.png"
                  width={120}
                  height={90}
                />
       </div>
       <div className="content border-2 border-green-700">
                        <h3 className=" text-white text-sm px-1">SHIP</h3>
                        <p className=" text-white text-sm px-1">Sail on cool wat ers with expandable ship that crew will catch $fish.Grab the ship by the ship's rudder.Ship is to Captain what a rocket means to Elon Musk </p>
       </div>
       <div className="content border-2 border-green-700">
                        <h3 className=" text-white">SHIP</h3>
                        <p className=" text-white">Sail on cool wat </p>
       </div>
      </div>        
      
      
      <div className="flex border-2    justify-center">


        <div className="border-2 border-green-700 py-2">       
            <Image className=""
                  src="/images/6_TRI_TOKEN ECO/logos/captain.png"
                  width={120}
                  height={90}
                />
       </div>
       <div className="content border-2 border-green-700">
                        <h3 className=" text-white text-sm px-1 py-1">SHIP</h3>
                        <p className=" text-white text-sm px-1">Sail on cool wat ers with expandable ship that crew will catch $fish.Grab the ship by the ship's rudder.Ship is to Captain what a rocket means to Elon Musk </p>
       </div>
       <div className="content border-2 border-green-700">
                        <h3 className=" text-white">SHIP</h3>
                        <p className=" text-white">Sail on cool wat </p>
       </div>
      </div>  


      <div className="flex border-2    justify-center">


<div className="border-2 border-green-700 py-2">       
    <Image className=""
          src="/images/6_TRI_TOKEN ECO/logos/captain.png"
          width={120}
          height={90}
        />
</div>
<div className="content border-2 border-green-700">
                <h3 className=" text-white text-sm px-1 py-1">SHIP</h3>
                <p className=" text-white text-sm px-1">Sail on cool wat ers with expandable ship that crew will catch $fish.Grab the ship by the ship's rudder.Ship is to Captain what a rocket means to Elon Musk </p>
</div>
<div className="content border-2 border-green-700">
                <h3 className=" text-white">SHIP</h3>
                <p className=" text-white">Sail on cool wat </p>
</div>
</div>  

<div className="flex border-2    justify-center">


<div className="border-2 border-green-700 py-2">       
    <Image className=""
          src="/images/6_TRI_TOKEN ECO/logos/captain.png"
          width={120}
          height={90}
        />
</div>
<div className="content border-2 border-green-700">
                <h3 className=" text-white text-sm px-1 py-1">SHIP</h3>
                <p className=" text-white text-sm px-1">Sail on cool wat ers with expandable ship that crew will catch $fish.Grab the ship by the ship's rudder.Ship is to Captain what a rocket means to Elon Musk </p>
</div>
<div className="content border-2 border-green-700">
                <h3 className=" text-white">SHIP</h3>
                <p className=" text-white">Sail on cool wat </p>
</div>
</div>  


<div className="flex border-2    justify-center">


<div className="border-2 border-green-700 py-2">       
    <Image className=""
          src="/images/6_TRI_TOKEN ECO/logos/captain.png"
          width={120}
          height={90}
        />
</div>
<div className="content border-2 border-green-700">
                <h3 className=" text-white text-sm px-1 py-1">SHIP</h3>
                <p className=" text-white text-sm px-1">Sail on cool wat ers with expandable ship that crew will catch $fish.Grab the ship by the ship's rudder.Ship is to Captain what a rocket means to Elon Musk </p>
</div>
<div className="content border-2 border-green-700">
                <h3 className=" text-white">SHIP</h3>
                <p className=" text-white">Sail on cool wat </p>
</div>
</div>  


      


    </div>


    
             


        


        
        



      
          </div>
          
      
   


      
      






    



    
  );
}
