import React from 'react';

const Navbar = () => {
    return (
        <div>
             <div class="navbar bg-base-100 shadow-sm">
                <div className="w-11/12 flex mx-auto items-center">
  <div class="flex-1"> 
    <a class="btn btn-ghost text-xl">CS-Ticket System</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1 items-center">
      <li><a>Home</a></li>
      <li><a>FAQ</a> </li>
      <li><a>Changlog</a> </li>
      <li><a>Blog</a> </li>
      <li><a>Download</a> </li>
      <li><a>Contact</a> </li>
      <button class="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white items-center"><span className='text-2xl'>+</span>New Ticket</button>
    </ul>
  </div>
</div>
</div>
        </div>
    );
};

export default Navbar;