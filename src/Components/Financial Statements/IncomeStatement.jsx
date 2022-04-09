import React from 'react'

function IncomeStatement() {
  return (
    <>
       <header style={{'display':'grid','justifyContent':'center','marginTop':'2em','color':'red'}}>
        <h4>  CONSOLIDATED INCOME STATEMENT</h4>
    </header>
    <div className="year-finance-statement">
            2021
          
        </div>

        <div className="desc-numbers">
           <div className="headers">
               <p>
                  Farm Revenues
               </p>
           </div>
       </div>
       <div className="ul-container">
           <div className="desc">
               <p>
               Crops and Feed
               </p>
               <div className='left'>
                 <p>
              Cash Receipts
                     </p>  
                     <p>
                         Inventory Adjustments
                     </p>
                   
               </div>
               <p>
             Market Livestock and poultry
               </p>
               <div className='left'>
                 <p>
              Cash Receipts
                     </p>  
                     <p>
                         Inventory Adjustments
                     </p>
                   
               </div>
               <p>
              Cash Sales of other Livestock Products
               </p>
               <p>
                   Changes in Values due to raised breeding stock
               </p>
               <p>gain/loss culled breeding stock sales </p>
               <p>government program repayments  </p>
               <p>other farm income  </p>
               <p>change in accounts recievables </p>
          

           </div>
           <ul className="numbers">
    <li>20000</li>
    <li>20000</li>
    <li>20000</li>
    <li>20000</li>
    <li>20000</li>
    <li>20000</li>
    <li>20000</li>
    <li>20000</li>
    <li>20000</li>
    <li>20000</li>
    <li>20000</li>
    <li>20000</li>
    <li>20000</li>
 
</ul>

       </div>
       <div className="total-headers" >
    <ul className='total-title' >
<h5>Gross Revenue</h5>
    </ul>
    <ul class='totals'>
        <li>20000</li>
    </ul>
</div>
       <div className="ul-container">
           <div className="desc">
               <p>
           Less  purchase of market livestock
               </p>
       
               <p>
               Less  purchase of feed/grain 
               </p>
            
          

           </div>
           <ul className="numbers">
    <li>20000</li>
    <li>20000</li>

 
</ul>

       </div>
       <div className="total-headers" >
    <ul className='total-title' >
<h5>Value of farm production</h5>
    </ul>
    <ul class='totals'>
        <li>20000</li>
    </ul>
</div>
<div className="totals-part">
<div className="total-headers" style={{'marginTop':'2em'}}>
    <ul className='total-title' >
<h5>farm expenses</h5>
    </ul>
    <ul class='totals'>
        
    </ul>
</div>


</div>



              <div className="ul-container">
           <div className="desc">
               <p>
               Farm Operating Expenses
               </p>
       
               <p>
               Cash Operating Expenses
               </p>
            
          <p>
          Non cash adjustments to Expenses
          </p>

           </div>
           <ul className="numbers">
    <li>20000</li>
    <li>20000</li>
    <li>20000</li>

 
</ul>

       </div>
      <div className="three-columns">

          <div className="description-left">
             
        <div className="left">
            <p>
            changes in accounts payable
            </p>
            <p>
            changes in prepaid expenses
            </p>
            <p>
            changes in unused supplies 
            </p>
            <p>
            Changes in cash in growing crops
            </p>
            <p>
            Changes in other accrued operating expenses
            </p>
            <p>
                depreciation
            </p>
        </div>
             

          </div>
          <div className="description-center">
              <p>
                  plus
              </p>
              <p>
                  minus
              </p>
              <p>
                  minus
              </p>
              <p>
                plus
              </p>
<p>
plus
              </p              >
<p>
plus
              </p              >
          </div>
         
              <ul className='numbers'>
              <li>
              200
                  </li>    
              <li>
              200
                  </li>    
              <li>
              200
                  </li>    
              <li>
              200
                  </li>    
              <li>
              200
                  </li>    
              <li>
              200
                  </li>    
              <li>
              200
                  </li>    
              </ul>
      
      </div>
      <div className="total-headers" >
    <ul className='total-title' >
<h5>Total Farm Operating Expenses</h5>
    </ul>
    <ul class='totals'>
        <li>20000</li>
    </ul>
</div>
<div className="ul-container">
           <div className="desc">
               <p>
               Interest expenses on farm loans
               </p>
       
               <p>
               cash interest paid
               </p>
            
          <p>
          cash in accrued interest
          </p>

           </div>
           <ul className="numbers">
    <li>20000</li>
    <li>20000</li>
    <li>20000</li>

 
</ul>

       </div>
       <div className="totals-part">
<div className="total-headers" style={{'marginTop':'2em'}}>
    <ul className='total-title' >
<h5>Total Interest Expense </h5>
    </ul>
    <ul class='totals'>
        <li>20000</li>
    </ul>
</div>
<div className="total-headers">
    <ul className='total-title'>
<h5>Total Farm expenses</h5>
    </ul>
    <ul class='totals'>
        <li>20000</li>
    </ul>
</div>
<div className="total-headers">
    <ul className='total-title'>
<h5>gains/losses of farm capital assets</h5>
    </ul>
    <ul class='totals'>
        <li>20000</li>
    </ul>
</div>
<div className="total-headers">
    <ul className='total-title'>
<h5>Net Farm Income before taxes</h5>
    </ul>
    <ul class='totals'>
        <li>20000</li>
    </ul>
</div>

</div>
<div className="ul-container">
           <div className="desc">
               <p>
              Non farm adjustments
               </p>
               <div className="left">
                   <p>
                       wages
                   </p>

               <p>
                interest  and dividend income
               </p>
               <p>
                   other non farm income of non farm assets
               </p>
               <p>
                   gains/losses on asales of non farm assets
               </p>
               
               
               </div>
       <p>
           Total non farm income
       </p>
          
            
      
           </div>
           <ul className="numbers">
    <li>20000</li>
    <li>20000</li>
    <li>20000</li>
    <li>20000</li>
    <li>20000</li>

 
</ul>

       </div>
       <div className="total-headers" >
    <ul className='total-title' >
<h5>Income before taxes and extra ordinary items</h5>
    </ul>
    <ul class='totals'>
        <li>20000</li>
    </ul>
</div>
<div className="ul-container">
<div className="desc">
               <p>
          income taxes
               </p>
               <div className="left">
                   <p>
                     cash income tax expense
                                        </p>

               <p>
                change in income tax accruals
               </p>
               <p>
              change in current positions of deffered taxes             </p>
              
               
               
               </div>
  
            
      
           </div>
           <ul className="numbers">
    <li>20000</li>
    <li>20000</li>
    <li>20000</li>
    <li>20000</li>
    <li>20000</li>

 
</ul>

</div>
<div className="totals-part">
<div className="total-headers" style={{'marginTop':'2em'}}>
    <ul className='total-title' >
<h5>Total Income Tax  Expense</h5>
    </ul>
    <ul class='totals'>
        <li>20000</li>
    </ul>
</div>
<div className="total-headers">
    <ul className='total-title'>
<h5>Income before extra ordinary items</h5>
    </ul>
    <ul class='totals'>
        <li>20000</li>
    </ul>
</div>
<div className="total-headers">
    <ul className='total-title'>
<h5>extra ordinary items(after tax)</h5>
    </ul>
    <ul class='totals'>
        <li>20000</li>
    </ul>
</div>
<div className="total-headers">
    <ul className='total-title'>
<h5>Net Income</h5>
    </ul>
    <ul class='totals'>
        <li>20000</li>
    </ul>
</div>

</div>
    </>
  )
}

export default IncomeStatement