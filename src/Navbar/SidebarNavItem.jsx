import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';


function SidebarNavItem({icon,name,leftArrow,downArrow,path,subMenuName,subMenuIcon,active,item,subMenuPath,  
  subMenuPathOne
  ,
    subMenuIconOne,
    subMenuNameTwo,
    
    subMenuPathTwo,
    subMenuIconTwo}) {

console.log(subMenuName)
 const [show,setShow]= useState(false)
    return (
        
    <li class="nav-item" >
            <a to={path}  className={active ? 'nav-link active' : `nav-link` }>
           <span>
               {icon}
           </span>
              <p style={{marginLeft:0.5+'em'}}>
              {name}
               
              </p>
              <span style={{float:'right'}} onClick={()=>setShow(!show)}>

          {
              show ? downArrow :  leftArrow
          }
          
           

            </span>
            </a>
       {
show ?     <ul className='submenu-ul'>
<li >
  <Link   to={subMenuPath|| '/'}  className='submenu-Link' >
 <span >
 {subMenuIcon} 
   </span>  
    <p className='sub-menu-name'>{subMenuName}</p>

  </Link>
</li>

</ul>  : null
       }     
          
          </li>
  )
}

export default SidebarNavItem

{
  /*
  { <ul class="nav nav-treeview">
  <li class="nav-item">
    <a href="#" class="nav-link active">
      < subMenuIcon/>
      <p style={{marginLeft:1+'em'}}>Hello</p>
  
    </a>
  </li>
  
  </ul> } 
  */
}