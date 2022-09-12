import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="footer-secsion1">
        
        <div className="footer-secsion1-div1">
  
          <span>
            Top companies choose
            <a href="#">Udemy Business</a>
            to build in-demand career skills.
          </span>
        </div>
  
        <div>
          <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" />
          <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" />
          <img src="https://s.udemycdn.com/partner-logos/v4/box-light.svg" />
          <img src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" />
          <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" />
        </div>
        
      </div>
      <hr className="footer-line" />
      <div className="footer-secsion2">
        <ul>
          <li><a href="#">Udemy Business</a></li>
          <li><a href="#">Teach on Udemy</a></li>
          <li><a href="#">Get the app</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Contact us</a></li>
        </ul>
        <ul>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Help and Support</a></li>
          <li><a href="#">Affiliate</a></li>
          <li><a href="#">Investors</a></li>
        </ul>
        <ul>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Privacy policy</a></li>
          <li><a href="#">Cookie settings</a></li>
          <li><a href="#">Sitemap</a></li>
          <li><a href="#">Accessibility statement</a></li>
        </ul>
        <button>
          <i className="fa-solid fa-globe"></i>
          <span>English</span>
        </button>
      </div>
  
      <div className="footer-secsion3">
          <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" />
          <span>© 2022 Udemy, Inc.</span>
      </div>
  
    </footer>
  )
}

export default Footer