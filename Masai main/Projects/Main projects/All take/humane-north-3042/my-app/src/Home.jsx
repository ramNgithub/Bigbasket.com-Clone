import React from 'react'
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
import "./Home.css" 

const Home = ({handleClick}) => {
  return (
    <div className="home">
      <Header/>
      <MultiButtons/>
      <SmartBucket handleClick={handleClick}/>
      <BankOffers/>
      <BestSeller handleClick={handleClick}/>
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
  )
}

export default Home