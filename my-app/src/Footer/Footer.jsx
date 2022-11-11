import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div>
        <div id="footMain">
        <p>
        ________________________________________________________________________________________________________________________________________________________________________________________________________________________________
        </p>
        
        <div id="footer">
            <div>
                <h4 className="smollWord">ABOUT BIGBASKET</h4>
                <p className="smollWord">PRESS ROOM</p>
                <p className="smollWord">COMPANY INFO</p>
                <p className="smollWord">EXECUTIVE TEAM</p>
                <p className="smollWord">CAREERS</p>
                <p className="smollWord">BB RECYCLING PROGRAM</p>
                <p className="smollWord">BLOG</p>
            </div>
            <div>
                <h4 className="smollWord">HELP</h4>
                <p className="smollWord">PRODUCT & HELP CENTER</p>
                <p className="smollWord">SHIPPING</p>
                <p className="smollWord">SATISFACTION GUARANTEE</p>
                <p className="smollWord">PROMOTIONAL TERMS & CONDITIONS</p>
                <p className="smollWord">BB FAQS</p>
                <p className="smollWord">KLARNA</p>
                <p className="smollWord">SITE MAP</p>
            </div>
            <div>
                <p>Let’s Get Social</p>
                <div>
                    <img onclick="facebook()" className="socialIcon" src="https://cdn-icons-png.flaticon.com/128/3128/3128208.png" alt="Not-Found"/>
                    <img onclick="twiter()" className="socialIcon" src="https://cdn-icons-png.flaticon.com/128/3128/3128212.png" alt="Not-Found"/>
                    <img onclick="instagram()" className="socialIcon" src="https://cdn-icons-png.flaticon.com/128/25/25425.png" alt="Not-Found"/>
                    <img onclick="youtube()" className="socialIcon" src="https://cdn-icons-png.flaticon.com/128/1384/1384028.png" alt="Not-Found"/>
                    <img onclick="pinarest()" className="socialIcon" src="https://cdn-icons-png.flaticon.com/128/2594/2594917.png" alt="Not-Found"/>
                </div>
            </div>
        </div>
        <p>
        ________________________________________________________________________________________________________________________________________________________________________________________________________________________________
        </p>
        <p id="lastTuch" >© 2022 BigBasket Privacy Policy |
        Terms & Conditions |
        Accessibility |
        California Supply Chains Act |
        DSA Code Of Ethics |
        Disclaimer |
        Preference Center</p>
    </div>

    </div>
  )
}

export default Footer