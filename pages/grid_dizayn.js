import Image from "next/image";
import Link from "next/link";
import Script from 'next/script'
import Head from 'next/head'
import Feature from '../components/Feature'

// get our fontawesome imports
import { faHome, faBars, faLightBulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function grid_dizayn() {


 

  return (
       <>
<Head>
  <title>sdsd</title>
  <script src="document.js" />
</Head>



    <div className="container bg-blue-400 bg-cover mx-auto">


   <div className="nfclublogo">
        <Link  href="/">
          <Image 
              src="/img/logos/nfclub.png"
             width={120}
             height={40}
          />
        </Link>
        
        
   </div>


    
    
      <div className="nav_left ">
        <div className="flex justify-around mt-10">
          <div id="home">
            <Link href="/">
              <a className="text-white ">Home</a>
            </Link>
          </div>
          <div id="mint" className="">
            <Link href="/">
              <a className="text-white ">Mint</a>
            </Link>
          </div>
          <div id="market">
            <Link href="/">
              <a className="text-white ">Market</a>
            </Link>
          </div>
        </div>
      </div>

      
   <div className="logo text-center py-2" >
            <Image src={"/img/menu/logo.png"} width={180} height={80} />
          </div>

      <div className="nav_right  ">
      <div className="flex justify-around mt-10">
      <div id="wallet">
            <Link href="/">
              <a className="text-white ">Wallet</a>
            </Link>
          </div>
          <div id="fishing">
            <Link href="/">
              <a className="text-white ">Fishing</a>
            </Link>
          </div>
          <div id="leaderboard">
            <Link href="/">
              <a className="text-white ">Leaderboard</a>
            </Link>
          </div>
          </div>
      </div>




      <div className="wallet mr-5">
        <div id="wallet">
          <img src="/img/menu/connect_wallet.png" />
        </div>
      </div>
      <div className="ship "></div>
      <div className="video mt-20 " >
        <div id="video_panel" className="">
          <div className="text-right">
          <Image 
          src={"/img/video/video_panel.png"}
          width={600}
          height={320}
        />
          </div>
          <div className="flex justify-center">
          <p  className="font-candara text-xl">Welcome to the captains wonderland!</p>
          </div>
        </div>
      </div>
      <div className="day_and_dark   mt-20 mr-5  h-1/2">
        <div className="flex flex-col h-100">
        <span>🌙</span>
        <span>☀️</span>
        </div>
   
      </div>
      <div className="video_alt text-center text-white font-candara text-xl py-5">
        <span>
          it's sunny when you set Foot on the Quay, the seagulls are flying
          around, and the sea is Flat as pancake. <br />
          The crew is excited about the new journey and waits For the captain's
          orders of hard to starboard!
        </span>
      </div>
      <div className="social_media border-2 border-black">
       <div className="flex justify-center mr-5">
       <img src="/img/social_media/discord.png" width={60} height={30} />
        <img src="/img/social_media/twitter.png" width={60} height={30} />
       </div>
    
      </div>

      <div className="slider border-2 border-black w-full flex flex-col text-center">
        <div>
          <p className="font-candara text-white text-4xl">10.000 ALGORITHMICALLY GENERATED UNIQE NFT</p>
       
        </div>
        <div>
        <Image 
            src={"/img/slider/slider.png"}
            width={1000}
            height={120}
          />
        </div>
      </div>


      <div className="features"> <Image className=""
                  src="/images/5_FUTURES/FUTURES_BASLIK.png"
                  width={1000}
                  height={40}
                /></div>


<div className="f_royalties">
           <Feature 
        imagePathAlt={'/images/5_FUTURES/1_ROYALITIES/ROYALITIES_alt.png'}  
        imagePathUst={'/images/5_FUTURES/1_ROYALITIES/ROYALITIES_ust.png'} 
        imageText={'Secondary sales royalty revenue will share with NFT holders.'} 
        textPosition={'mt-20'}

        />
           </div>

           <div className="f_investment">
           <Feature 
        imagePathAlt={'/images/5_FUTURES/2_INVESTMENT/INVESTMENT_alt.png'}  
        imagePathUst={'/images/5_FUTURES/2_INVESTMENT/INVESTMENT_ust.png'} 
        imageText={'15% of revenue from mint sales, 1.5% of the transaction fees, and 1.5% of the secondary sales revenue go to the investment fund pool. 5% of revenue from mint sales, 0.5 of the transaction fees and  %0.5 of the secondary sales revenue go to the donation fund pool. Selected projects will invest in from the fund. Earnings will share with NFT holders. '}
        textPosition={'mt-4'}
         />
           </div>


           <div className="f_lottery">
           <Feature 
        imagePathAlt={'/images/5_FUTURES/3_LOTTERY/LOTTERY_alt.png'}  
        imagePathUst={'/images/5_FUTURES/3_LOTTERY/LOTTERY_ust.png'} 
        imageText={'%1 of transaction fees goes into the prize pool. 1% royalty fee of the secondary sales goes into the prize pool. The lucky winners will get prizes every two weeks.'} 
        textPosition={'mt-12'}
        />
           </div>

           <div className="f_metaverse">
           <Feature 
        imagePathAlt={'/images/5_FUTURES/4_METAVERSE/METAVERSE_alt.png'}  
        imagePathUst={'/images/5_FUTURES/4_METAVERSE/METAVERSE_ust.png'} 
        imageText={'It is the next phase of the fishing game. The fish processed in the factories to be established on the lands purchased here will be a new income source for the players. It will add value to the fishing game ecosystem.'} 
        textPosition={'mt-12'}
        />
           </div>

           <div className="f_community_dao"> 
           <Feature 
        imagePathAlt={'/images/5_FUTURES/5_COMMUNITY_DAO/COMMUNITY_alt.png'}  
        imagePathUst={'/images/5_FUTURES/5_COMMUNITY_DAO/COMMUNITY_ust.png'} 
        imageText={'70% of the investment fund allocated to the community wallet 70% of the donation fund allocated to the community wallet.Ability for holders to vote for the projects they like the most.'} 
        textPosition={'mt-12'}  
        />
           </div>


           <div className="f_nfclub">
           <Feature 
        imagePathAlt={'/images/5_FUTURES/6_NFCLUB/NFCLUB_alt.png'}  
        imagePathUst={'/images/5_FUTURES/6_NFCLUB/NFCLUB_ust.png'} 
        imageText={'NFClub is a community-based investment, charity club. NFClub has already planned 4 game projects, 1 hyrid game project, and more. The adventure is starting with Fishing which is one of NFClub projects.'}
        textPosition={'mt-12'}
         />
           </div>




        </div>


      
   
        




      <div className="tri_token   border-2 border-black w-full flex flex-col text-center">
        <div>
          <p className="font-candara text-white text-4xl">TRI-TOKEN ECOSYSTEM</p>
        </div>
        <div>
        <Image 
            src={"/img/tri_token/tri_token.png"}
            width={1000}
            height={420}
          />
        </div>
  
      </div>


      <div className="roadmap  border-2 border-black w-full flex flex-col text-center">
        
        <div>
          <p className="font-candara text-white text-4xl">Roadmap</p>
        </div>
        <div>
        <Image 
            src={"/img/roadmap/roadmap_ust.png"}
            width={1000}
            height={420}
          />
        </div>
      </div>
      <div className="roadmap_alt border-2 border-black w-full flex flex-col text-center">
      <div>
        <Image 
            src={"/img/roadmap/roadmap_alt.png"}
            width={1000}
            height={420}
          />
        </div>
 
      </div>


      <div className="nfclub border-2 border-black w-full flex flex-col text-center">
  
  <div>
    <p className="font-candara text-white text-4xl">NFCLUB</p>
  </div>
  <div id="nfclub" className="flex justify-center">

  <div>
  <Image 
      src={"/img/nfclub/nfclub_left.png"}
      width={500}
      height={420}
    />
  </div>

  <div>
  <Image 
      src={"/img/nfclub/nfclub_right.png"}
      width={500}
      height={420}
    />
  </div>

  </div>
</div>

      <div className="footer border-2 border-black w-full flex flex-col text-center">

        <div>
          <p className="font-candara text-white text-4xl">Footer</p>
        </div>
        
        <div>
        <Image 
            src={"/img/footer/footer.png"}
            width={500}
            height={420}
          />
        </div>

    
      </div>

       <div className="imgbox" id="imgbox1">
       Box 1 <br/>
       <img src="/img/menu/mint.png" alt="Italy" />
       <button onClick="removeElement()">Remove</button>

       </div>
 
    </>
  );
}
