import { AiOutlineLeft, AiOutlineUser, AiOutlineDown} from 'react-icons/ai';
import {BsBank, BsCalendarEvent, BsFillCreditCard2FrontFill, BsFillGearFill, BsNewspaper, BsTrash} from 'react-icons/bs';
import {GoDashboard, GoGraph } from 'react-icons/go';
import { MdDashboard, MdSearch } from 'react-icons/md';



export const navData=[
  
    {

        id:1,
        icon:<GoDashboard size={19+'px'}/> ,
        name:' Dashboard ',
        leftArrow:<AiOutlineLeft/>,
        downArrow:<AiOutlineDown />,
        
        
        path:'/',
        
            SubMenuName:'Dumping the Sillage',
            SubMenuicon:<BsTrash size={19+'px'}/>,
            active:true,
        
submenuPath:""


    },
    {
        id:2,
        icon:<BsFillGearFill size={19+'px'}/> ,
        name:' Operations ',
        leftArrow:<AiOutlineLeft/>,
        downArrow:<AiOutlineDown />,
        
        
        path:'/operations',
        
            SubMenuName:'Dumping the Sillage',
            SubMenuicon:<BsTrash size={19+'px'}/>,
            active:false
        
            },
    {
id:3,
icon:<BsFillCreditCard2FrontFill size={19+'px'}/> ,
downArrow:<AiOutlineDown />,
leftArrow:<AiOutlineLeft/>,
name:' Investments ',
path:'/investments',

SubMenuName:'Look for Potential Farm Ventures',
SubMenuicon:<MdSearch size={19+'px'}/>
,
    active:false
    },
    {
id:4,
icon:<GoGraph size={19+'px'}/> ,
downArrow:<AiOutlineDown />,
leftArrow:<AiOutlineLeft/>,
name:' Finance ',
path:'/',


SubMenuName:'Look For Loan',
SubMenuicon  :<BsBank size={19+'px'}/>
,
    active:false

    },
    {
id:5,
icon:<BsNewspaper size={19+'px'}/> ,
downArrow:<AiOutlineDown />,
leftArrow:<AiOutlineLeft/>,
name:' Financial Statements ',
path:'/financial-statements',


SubMenuName:'Consolidated Income Statement',
SubMenuicon:<BsCalendarEvent/>
,
    active:false

    },
    {
id:6,
icon:<AiOutlineUser size={19+'px'}/> ,
downArrow:null,
leftArrow:null,
name:' Tawonga Jongwe ',
path:'/userprofile',
SubMenuName:null,
SubMenuicon:null,
active:false
    },
]