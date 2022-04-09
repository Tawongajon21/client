import React from 'react'
import { Link } from 'react-router-dom'

function FinancialTable() {
  return (
    <table id="example2" class="table table-bordered table-hover">
    <thead>
    <tr>
      <th>Financial Statement Type</th>
      <th>Year Published</th>
      <th>
       
        View
       
       </th>
      <th>Download</th>
     
    </tr>
    </thead>
    <tbody>
      
    
  
 
 
   
    
    </tbody>
    <tfoot>
    <tr>
      <th>Statement of Financial Position</th>
      <th>2017</th>
      <th>
      <Link to='/statementofcashflow'>
        View
        </Link>
      </th>
      <th>Click Here to Download</th>
    
    </tr>
    <tr>
      <th>Statement of Cashflows </th>
      <th>2019</th>
      <th>  <Link to='/balancesheet'>
        View
        </Link></th>
      <th>Click Here to Download</th>
    
    </tr>
    <tr>
      <th>Consolidated Income Statement</th>
      <th>2017</th>
      <th>View Here</th>
      <th>Click Here to Download</th>
    
    </tr>
    </tfoot>
    </table>
  )
}

export default FinancialTable