import React from 'react';

const Navbar = () => {
    return (
        <div>
             <div class="navbar bg-base-100 shadow-sm">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1 items-center">
      <li><a>Home</a></li>
      <li><a>FAQ</a> </li>
      <li><a>Changlog</a> </li>
      <li><a>Blog</a> </li>
      <li><a>Download</a> </li>
      <li><a>Contact</a> </li>
      <button class="btn btn-primary"><span className='text-2xl'>+</span>New Ticket</button>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;