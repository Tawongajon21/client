import React from 'react'
import FinancialTable from './FinancialTable'

function FinancialStatements() {
  return (
    <div class="card-body">
         <div class="card-header" style={{display:"grid",justifyContent:'center'}}>
                <h3 class="card-title">Access Financial Statements</h3>
              </div>
   <FinancialTable/>
      </div>
  )
}

export default FinancialStatements