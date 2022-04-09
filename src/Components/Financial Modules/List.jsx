import React from 'react';

import {FaEdit } from 'react-icons/fa'
import {MdDelete} from 'react-icons/md';
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import EmptyValues from './EmptyValues';

function List({data,editItem, deleteItem}) {
  console.log(data.length);
  let counter=1;

 
  return ( 
  
      data.length ===0 ?     <EmptyValues/> :     <section class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">DataTable with minimal features & hover style</h3>
            </div>
          
            <div class="card-body">
              <table id="example2" class="table table-bordered table-hover">
                <thead>
              
                <tr>
                  <th>ID</th>
                  <th>Amount</th>
                  <th>Action</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
                </thead>
                <tbody>
           {     data.map((item)=>{
                   const {id,action,amount}=item;
                   const numberAmount=Number(amount);
                   return <tr key={id}>
                       <td>{id}</td>
                <td>${numberAmount}</td>
                <td>{action}</td>
                <td> <FaEdit size={19+'px'} onClick={()=>editItem(id)}/></td>
                <td><MdDelete size={19+'px'} onClick={()=>deleteItem(id)}/></td>
                   </tr>
                 })
               }
             
                </tbody>
              <tfoot>
                </tfoot>
              </table>
            </div>
           </div>
          </div>
          </div>
          </div>
  </section>
    
  )
    {

   /*
     data.length ===0 ? 
     <EmptyValues/> :   <Container fluid>
     <Row>
       <Col md="12">
         <Card className="strpied-tabled-with-hover">
        
           <Card.Body className="table-full-width table-responsive px-0">
             <Table className="table-hover table-striped">
               <thead>
                 <tr>
                   <th className="border-0">ID</th>
                   <th className="border-0">Amount </th>
                   <th className="border-0">Action</th>
                   <th className="border-0">Edit</th>
                   <th className="border-0">Delete</th>
                 </tr>
               </thead>
               <tbody>
               {
                 data.map((item)=>{
                   const {id,action,amount}=item;
                   const numberAmount=Number(amount);
                   return <tr key={id}>
                       <td>1</td>
                <td>${numberAmount}</td>
                <td>{action}</td>
                <td> <FaEdit size={19+'px'} onClick={()=>editItem(id)}/></td>
                <td><MdDelete size={19+'px'} onClick={()=>deleteItem(id)}/></td>
                   </tr>
                 })
               }


               </tbody>
                
         
               
              
             </Table>
           </Card.Body>
         </Card>
       </Col>
       <Col md="12">
       
       </Col>
     </Row>
   </Container>
}
     
      {
      /** 
       *  <div className="" >
      <h3>{numberAmount}</h3>
      <p>
        {action}
      </p>
      <button onClick={()=>editItem(id)}>Edit</button>
      <button onClick={()=>deleteItem(id)}>Delete</button>

    </div>
      */
    }
 
   
  
}

export default List