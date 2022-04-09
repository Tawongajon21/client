
import React, { useContext,useState } from 'react'
import List from './List';
import Message from './Message'

function OwnerCapital() {
   

   const [amount,setAmount]= useState(0);
   const [action,setAction]= useState('');
 
   const [isEditing,setIsEditing]= useState(false)
   const [actions]= useState([
     {label:'Withdrawal',value:"withdrawal"},
     {label:'Deposit',value:"deposit"}
   ]);
   const [editID,setEditId]= useState(null)
const [status,setStatus]= useState({show:false,msg:'',type:''})

const [data,setData]=useState([]);



const deleteItem=(id)=>{
  setStatus({show:true,msg:'You have succesfully removed an item',type:'danger'})
 setData( data.filter((item)=>item.id!==id));
}


const handleSubmit=(e)=>{
    e.preventDefault();
  if (amount === 0  ) {
    console.log('cant add zero ');;
    setStatus({show:true,msg:'You cannot either withdraw or deposit zero dollars please  try again',type:'danger'})
  }
  else if(amount && action && isEditing){
setData(data.map((item)=>{
  if (item.id===editID) {
    setStatus({show:true,msg:'You have succesfully edited',type:'success'})
    return  {...item,amount:amount,action:action};
    
  }

  return item
  
 
})

)
setAmount('');
setEditId(null);
setIsEditing(false)
  }
  else{
    const newInfo={id:Math.random().toString(),amount:amount,action:action};
    console.log(newInfo)
    setData([...data,newInfo]);
    setAmount(0);
    setStatus({show:true,msg:`You have succesfully made a  ${action} of $${amount}`,type:'success'})
  }
       


 
}


const editItem=(id)=>{
const specificItem=data.find((item)=>item.id===id);
console.log(specificItem)
setIsEditing(true);
setEditId(id);
setAmount(specificItem.amount);
setAction(specificItem.action);
}
  return (
    <>
    <div className="class" style={{display:'grid',justifyContent:'center'}}>
    <form className="form-capital" onSubmit={handleSubmit}>
<header className='header-form'>
  <h3>
    Add Your Capital Here 
  </h3>
</header>
  

   <div className="form-fields">
   <input type='number' placeholder='amount e.g 500' name='amount'  onChange={(e)=>setAmount(e.target.value)} value={amount} />
    <select className='form-control' id="select-action" onChange={(e)=>setAction(e.currentTarget.value)} >
  {
    actions.map((item)=>{
      const {label,value}= item;
      return <option key={value} value={value}>
{label}
      </option>
    })
  }
  </select>
 
   </div>
  <div className="submit-btn">
    <button className='add-btn'>Add</button>
  </div>
 
 
</form>
<div className="alert-container">
  {
    status.show && <Message data= {data}status ={status}/> 
  }
     
   </div>
</div>
 
   
    <div className="tables">
      <List data={data}  editItem={editItem}      deleteItem={deleteItem}
    />
{
  /*
  data.map((item)=>{
    const {id,action,amount}=item;
    const numberAmount=Number(amount)
   return <List key={id} numberAmount={numberAmount}
   id={id}
    action={action} editItem={editItem} 
    deleteItem={deleteItem}
    />
   
  })
  */
}

    </div>
    </>
  )
}

export default OwnerCapital