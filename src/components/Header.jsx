import React from "react";
const Header = () => {
  return (
    <div className="site-header flex bg-red-200 h-15 items-center text-blue-500 justify-between font-bold rounded-sm">
      <div className=" flex pl-10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
        <h2 className="pl-3">MyStore Products </h2>
      </div> 
      <div className="flex pr-20 "><nav>
        <span className="pr-6"><a href="/">Home</a></span>
        <span className="pr-6"><a href="/products">Products</a></span>
        <span className="pr-6"><a href="/contact">Contact</a></span>
      </nav>
      </div>
          </div>
  );
};


export default Header;
