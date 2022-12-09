import Navbar from './Navbar/Navbar';
import './App.css';
import Header from './Header/Header';
import SmartBucket from "./SmartBucket/SmartBucket";
import BankOffers from './BankOffers/BankOffers';
import MultiButtons from './MultiButtons/MultiButtons';
import BestSeller from './BestSeller/BestSeller';
import TopOffers from './TopOffers/TopOffers';
import FruitsNvegiT from './Fruits&VegiT/FruitsNvegiT';
import DailyStaples from './DailyStaples/DailyStaples';
import Beverages from './Beverages/Beverages';
import SnackStore from './SnackStore/SnackStore';
import CleanNhouseHold from './CleanNhouseHold/CleanNhouseHold';
import BeautyNhygiene from './BeautyNhygiene/BeautyNhygiene';
import HomeNkitchen from './HomeNkitchen/HomeNkitchen';
import BottomAdvertise from './BottomAdvertise/BottomAdvertise';
import Footer from './Footer/Footer';
import { useState } from 'react';


function App() {
  
  const [cart,setCart]=useState([])
  const handelclick=(item)=>{
    setCart([...cart,item])
   }

  
 
  return (
    <div className="App">
      
      <Navbar/>
      <Header/>
      <MultiButtons/>
      <SmartBucket/>
      <BankOffers/>
      <BestSeller handelclick={handelclick}/>
      <TopOffers/>
      <FruitsNvegiT/>
      <DailyStaples/>
      <Beverages/>
      <SnackStore/>
      <CleanNhouseHold/>
      <BeautyNhygiene/>
      <HomeNkitchen/>
      <BottomAdvertise/>
      <Footer/>
    </div>
  );
}

export default App;
