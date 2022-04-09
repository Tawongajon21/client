import logo from './logo.svg';
import './App.css';
import {Routes,Route,Router} from 'react-router-dom';



import Navbar from './Navbar/Navbar';
import Homepage from './Components/Homepage';
import Operations from './Components/Operations';
import Investments from './Components/Investments';
import Userprofile from './Components/Userprofile';
import { UserProvider } from './Context/UserContext';
import OwnerCapital from './Components/Financial Modules/OwnerCapital';
import FinancialStatements from './Components/FinancialStatements';
import StatementofCashflow from './Components/Financial Statements/StatementofCashflow';
import BalanceSheet from './Components/Financial Statements/BalanceSheet';
import IncomeStatement from './Components/Financial Statements/IncomeStatement';




function App() {

  return (

 <div class="wrapper">
     <Navbar/>
 <Routes>

<Route  path='/' element={<Homepage/>}/>
<Route path='/operations' element={<Operations/>}/>
<Route path='/investments' element={<Investments/>}/>
<Route path='/userprofile' element={<Userprofile/>}/>
<Route path='/ownercapital' element={<OwnerCapital/>}/>
<Route path='/financial-statements' element={<FinancialStatements/>}/>
<Route path='/statementofcashflow' element={<StatementofCashflow/>}/>
<Route path='/balancesheet' element={<BalanceSheet/>}/>
<Route path='/incomestatement' element={<IncomeStatement/>}/>
  </Routes>

</div>

  );
}

export default App;
