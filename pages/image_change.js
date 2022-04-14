import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const MyLogo = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <Image src="/images/5_FUTURES/3_LOTTERY/LOTTERY_alt.png" width={400} height={250} alt="logo" />
    </a>
  );
});

const MyLogoAlt = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <div>
  <a href={href} onClick={onClick} ref={ref}>
      <Image src="/images/5_FUTURES/3_LOTTERY/LOTTERY_ust.png"  width={400} height={250}  alt="logo" />
    </a>
    <div class="absolute top-0 left-0 px-14 py-12">
	  <p class="leading-normal text-black font-candara font-bold">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
	</div>
    </div>
  


  );
});

export default function Nav() {
const [isShown, setIsShown] = useState(false);

  return (
    <div>
    <nav className="flex items-center justify-between flex-wrap  px-6 py-6">
    
      </nav>
  
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
  <div class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
     {isShown && (
          <Link href="/">
            <MyLogoAlt />
          </Link>
        )}
        {!isShown && (
          <Link href="/">
            <MyLogo />
          </Link>
        )}



  </div>

  <div class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
	<img class="object-cover w-full h-48" src="https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80" alt="Flower and sky"/>

	<div class="absolute top-0 left-0 px-6 py-4">
	  <h4 class="mb-3 text-xl font-semibold tracking-tight text-white">This is the title</h4>
	  <p class="leading-normal text-gray-100">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
	</div>
  </div>

  <div class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
	<img class="object-cover w-full h-48" src="https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80" alt="Flower and sky"/>

	<div class="absolute top-0 left-0 px-6 py-4">
	  <h4 class="mb-3 text-xl font-semibold tracking-tight text-white">This is the title</h4>
	  <p class="leading-normal text-gray-100">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
	</div>
  </div>

  <div class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
	<img class="object-cover w-full h-48" src="https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80" alt="Flower and sky"/>

	<div class="absolute top-0 left-0 px-6 py-4">
	  <h4 class="mb-3 text-xl font-semibold tracking-tight text-white">This is the title</h4>
	  <p class="leading-normal text-gray-100">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
	</div>
  </div>
</div>

    </div>


    
  );
}