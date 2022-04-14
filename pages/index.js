import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import MiddlePart from '../components/Middle'

export default function Home() {
  return (
  <div>
       <body className="bg-mainColor debug-screens">
          <div className="container min-h-screen px-6 py-8 bg-gray-100 mx-auto">

      <section id="header">
           <div className="text-center">
      <h1 className="font-headline">Tom Gonzales home training I'll get you in shape! </h1>
      <h2>Muscle building • Functional training • Nutritional advice</h2>
         </div>
           </section>

           <section className="mt-8 grid grid-cols-2 gap-4 md:gap-10" id="image_services">
           <div className="ml-auto" id="image">
             <img src="./images/tom.jpg" alt="Tom Gonzales Online Training"/>   
            </div>

            <div id = "services">
      <h3>I offer you:</h3>
      <ul className="list-disc ml-6">
        <li>Lessons via Skype and you can record all sessions and watch them again later. </li>
        <li>Holistic full body training</li>
        <li>Training without equipment</li>
        <li>Pain reduction</li>
        <li>Tailored nutrition plans</li>
      </ul>
      </div>

</section>



      <h3 className="mt-10 hidden md:block">My qualifications:</h3>
        <ul className="list-disc ml-6 hidden md:block">
          <li className='leading-5'>Certified fitness trainer</li>
          <li className='leading-5'>Certified nutritionist</li>
          <li className='leading-5'>5 years of experience in 1: 1 training</li>
        </ul>


           <section className="mt-8" id = "price_payment">
           <div className="lg:w-8/12 mx-auto">
      <h2>Prices and payment</h2>
      <p>My most important goal is that you get ahead with your goals.</p>
      <p>In a free opening session we will discuss what you want to achieve and how much you can or want to spend. Then we are guaranteed to find a solution that suits you.</p>
    </div>
           </section>

<section className="mt-8 mb-10" id="contract">
<div className="grid grid-cols-2 gap-4 md:w-8/12 md:mx-auto">
      <div id = "email">
        <p>Your message:</p>
        <a className='bg-gray-300 flex items-center  px-4 py-2  w-max 
        rounded shadow-sm focus:ring-2 focus:ring-yellow-400 hover:bg-gray-400 hover:shadow-none transition' href="mailto:markusgonzales@gmail.com">
        <svg className='h-4 mr-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-at-sign"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
        <span>
        Send an Email
        </span></a>
      </div>
      <div id = "whatsApp_telefon">
        <p>WhatsApp:</p>
        1 222 555 44 33
      </div>
    </div>
</section>
 



 








          </div>
       </body>
  </div>

  );
 


}
