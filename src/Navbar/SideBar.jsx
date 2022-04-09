import React from 'react';
import { AiOutlineArrowDown, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { BsBox, BsCashCoin, BsGearWideConnected, BsNewspaper } from 'react-icons/bs';
import { MdGridOff, MdGridView, MdSearch } from 'react-icons/md';
import SidebarNavItem from './SidebarNavItem';
import { navData } from './navbarData';
import { GoDashboard } from 'react-icons/go';

import {BsBank, BsCalendarEvent, BsFillCreditCard2FrontFill, BsFillGearFill,  BsTrash} from 'react-icons/bs';
import { GoGraph } from 'react-icons/go';
import { MdDashboard} from 'react-icons/md';


function SideBar() {
  return (
    <aside class="main-sidebar sidebar-dark-primary elevation-4" style={{height:100+"vh"}}>
   
    <a href="index3.html" class="brand-link">
      <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style={{opacity:" .8"}}/>
      <span class="brand-text font-weight-light">Cue Tech</span>
    </a>


    <div class="sidebar">
     
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image"/>
        </div>
        <div class="info">
          <a href="#" class="d-block">Alexander Pierce</a>
        </div>
      </div>

 
      <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"/>
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <MdSearch size={19+`px`}/>
            </button>
          </div>
        </div>
      </div>

  
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <SidebarNavItem 
       
        icon={<GoDashboard/>}
        name="Dashboard"
        leftArrow={<AiOutlineLeft/>}
        downArrow = {<AiOutlineArrowDown/>}
        path="/"
        subMenuName={null}
        active={true}
        subMenuIcon={null}
        />
        <SidebarNavItem 
       
        icon={<BsFillGearFill/>}
        name="Operations"
        leftArrow={<AiOutlineLeft/>}
        downArrow = {<AiOutlineArrowDown/>}
        path="/operations"
        subMenuName='Dumping the Sillage'
        active={false}
        subMenuIcon={<BsTrash size={19+'px'}/>}
        />
        <SidebarNavItem 
       
        icon={<BsFillCreditCard2FrontFill size={19+'px'}/>}
        name="Investments"
        leftArrow={<AiOutlineLeft/>}
        downArrow = {<AiOutlineArrowDown/>}
        path={null}
        subMenuName='Look for Potential Farm Ventures'
        active={false}
        subMenuIcon={<MdSearch size={19+'px'}/>}
        />
        <SidebarNavItem 
       
        icon={<GoGraph size={19+'px'}/>}
        name="Finance"
        leftArrow={<AiOutlineLeft/>}
        downArrow = {<AiOutlineArrowDown/>}
        path={null}
        active={false}
        subMenuName='Owner Capital'
        
        subMenuPath={'/ownercapital'}
        subMenuIcon={<BsBank size={19+'px'}/>}
        subMenuNameOne='Loan'
        
        subMenuPathOne={'/loan'}
        subMenuIconOne={<BsBank size={19+'px'}/>}
        subMenuNameTwo='Inheritance'
        
        subMenuPathTwo={'/inheritance'}
        subMenuIconTwo={<BsBank size={19+'px'}/>}
        />
        <SidebarNavItem 
       
        icon={<BsNewspaper size={19+'px'}/>}
        name="Financial Statements"
        leftArrow={<AiOutlineLeft/>}
        downArrow = {<AiOutlineArrowDown/>}
        path='/financial-statements'
        subMenuPath={'/financial-statements'}
        subMenuName='Consolidated income Statement'
        active={false}
        subMenuIcon={<BsCalendarEvent/>}
        />
     
     
    
  

       {
         /** 
            <li class="nav-item">
            <a href="#" class="nav-link">
            <BsBox size={19+`px`}/>
              <p style={{marginLeft:1+'em'}}>
                Financial Statements 
                <span class="right badge badge-danger">New</span>
              </p>
            </a>
          </li> 
          
         */
       }
        
        </ul>
      </nav>
   
    </div>
   
  </aside>

  )
}

export default SideBar