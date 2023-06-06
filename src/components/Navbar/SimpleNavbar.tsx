import React from 'react';
import Link from 'next/link';
import { Nav, Navbar, NavItem } from "react-bootstrap";

import classes from "./Navbar.module.scss";
import { combineClasses } from "../../utils/utils";
import { AiOutlineMenu } from "react-icons/ai";
import { iNavbar } from "../../shared/interfaces";



const SimpleNavbar = ({ toggleSideMenu, openSidebar = false}: iNavbar) => {

  return (
    
    <div className={combineClasses(classes.navbar__container, 'container flex items-center justify-between', "px-2")}>
      <div className="flex items-center">
        <div
          className={combineClasses(classes.mobileBurgerToggle, "mr-5", openSidebar ? classes.mobileBurgerToggle__close : ' ')}
          onClick={() => toggleSideMenu()}>
          <AiOutlineMenu className="dark:text-white text-black text-2xl" />
        </div>
        
        <Nav className="flex justify-end w-full">
          <Link href="/Auth/Register">
            <NavItem className="mx-5 cursor-pointer">Register</NavItem>
          </Link>
          <Link href="/Auth/Login">
            <NavItem className="mx-5 cursor-pointer">Login</NavItem>
          </Link>
        </Nav>
      </div>
    </div>

  );
};

export default SimpleNavbar;
