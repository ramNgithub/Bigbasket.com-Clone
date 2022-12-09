
import "./Header.css"
import React from 'react';


const Header = () => {
   

    var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 2){
        counter = 1;
      }
    }, 5000);
  return (
    

    <div className="slider">
      <div className="slides">
        
        <input type="radio" name="radio-btn" id="radio1"/>
        <input type="radio" name="radio-btn" id="radio2"/>
        
       
        <div className="slide first">
          <img src="https://www.bigbasket.com/media/uploads/banner_images/2211651-bbpl-staples_460_Bangalore.jpg" alt="Not-Found"/>
        </div>
        <div className="slide">
          <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_Dry_FishBanner_1600x460_070922.jpg" alt="Not-Found"/>
        </div>
        
        
        <div className="navigation-auto">
          <div className="auto-btn1"></div>
          <div className="auto-btn2"></div>
          
        </div>
        
      </div>
      
      <div className="navigation-manual">
        <label for="radio1" class="manual-btn"></label>
        <label for="radio2" class="manual-btn"></label>
        
      </div>
    
    </div>
  );

  
}

export default Header