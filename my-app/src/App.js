import Navbar from './Navbar/Navbar';
import './App.css';
import Header from './Header/Header';
import SmartBucket from "./SmartBucket/SmartBucket";
import BankOffers from './BankOffers/BankOffers';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Header/>
      <SmartBucket/>
      <BankOffers/>
    </div>
  );
}

export default App;
