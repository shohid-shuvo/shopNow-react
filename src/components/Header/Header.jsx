import React from 'react';
import "./Header.scss";
import { Link } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <div className='header text-white'>
      <div className="container">
        <div className='header-sdl'>
            <div className="header-sdl-top fs-13 py-3 flex flex-wrap align-center justify-between">
                <div className="header-sdl-top-l w-full">
                    <ul className="flex top-links justify-center align-center">
                        <li className='mx-2'>
                            {/* demo link */}
                            <Link to="/seller">Seller Center</Link>
                        </li>
                        <li class="inline-block h-[16px] w-0.5 self-center bg-neutral-100 dark:bg-white/10"></li>
                        <li className='mx-2'>
                            <Link to="/download">Download</Link>
                        </li>
                        <li class="inline-block h-[15px] w-0.5 self-center bg-neutral-100 dark:bg-white/10"></li>
                        <li className="flex align-center ml-2">
                            <span className='fs-13'>
                                Follow Us
                            </span>
                        </li>
                        <ul className='social-links flex align-center'>
                            <li className="mx-2">
                                <a href="http://facebook.com/" className='fs-15'>
                                    <i className='fab fa-facebook'></i>
                                </a>
                            </li>
                            <li className="mx-2">
                                <a href="http://instagram.com/" className='fs-15'>
                                    <i className='fab fa-instagram'></i>
                                </a>
                            </li>
                        </ul>
                    </ul>
                </div>
                <div className="header-sdl-top-r flex justify-center w-full">
                    <ul className="top-links flex align-center">
                        <li>
                            <Link to="/" className='top-link-itm'>
                                <span className='top-link-itm-ico mx-2'>
                                    <i className='fa-solid fa-circle-question'></i>
                                </span>
                                <span className='top-link-itm-txt mr-2' >Support</span>
                            </Link>
                            
                        </li>
                        <li class="inline-block h-[15px] w-0.5 self-center bg-neutral-100 dark:bg-white/10"></li>
                        <li className='mx-2'>
                            <Link to='/'>
                                <span className='top-link-itm-txt ' >Register</span>
                            </Link>
                        </li>
                        <li class="inline-block h-[15px] w-0.5 self-center bg-neutral-100 dark:bg-white/10"></li>
                        <li className='ml-2'>
                            <Link to='/' className='disabled'>
                                <span className='top-link-itm-txt pointer-events-none opacity-50 cursor-not-allowed text-white-500' >Log in</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* navbar */}
            <div className="header-sdl-bottom">
                <Navbar />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
