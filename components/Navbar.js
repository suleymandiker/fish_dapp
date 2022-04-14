import Link from "next/link";


const  NavBar = () => {
    return (
<nav className="flex">
  <div className="container flex flex-wrap mx-auto items-center justify-between">
    <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start border-2">
      <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#pablo">
      <img src="./images/logo.jpg"/>    
      </a>
 
    </div>
    <div className="lg:flex flex-grow items-center border-2" id="example-navbar-warning">
      <ul className="flex flex-col lg:flex-row list-none ml-80">
          <li className="nav-item">
          <a className="px-3 py-2 flex items-center text-lg leading-snug text-gray-500 hover:opacity-75" href="#pablo">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="px-3 py-2 flex items-center text-lg leading-snug text-gray-500 hover:opacity-75" href="#pablo">
              Mint
            </a>
          </li>
          <li className="nav-item">
          <a className="px-3 py-2 flex items-center text-lg leading-snug text-gray-500 hover:opacity-75" href="#pablo">
              Chikn
            </a>
          </li>
          <li className="nav-item">
          <a className="px-3 py-2 flex items-center text-lg leading-snug text-gray-500 hover:opacity-75" href="#pablo">
              FarmLand
            </a>
          </li>
          <li className="nav-item">
          <a className="px-3 py-2 flex items-center text-lg leading-snug text-gray-500 hover:opacity-75" href="#pablo">
              Market
            </a>
          </li>
          <li className="nav-item">
          <button className="px-3 py-2 bg-red-400 rounded-md text-white ml-40" href="#pablo">
              Connect Wallet
            </button>
          </li>
      </ul>
    </div>
  </div>
</nav>
    );
}


export default NavBar