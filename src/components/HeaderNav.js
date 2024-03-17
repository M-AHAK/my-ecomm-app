import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
const HeaderNav =({category,setCategory})=>{

   const [navWidth, setNavWidth] = useState(0);
   const [search,setSearch] =useState(null)
   const [selectedCountry, setSelectedCountry] = useState('English');
  const [showMenu, setShowMenu] = useState(false);
  const dropdownRef = useRef(null);

  const handleCountryClick = () => {
    setShowMenu(!showMenu);
  };

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setShowMenu(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

   const openNav = () => {
     setNavWidth(250);
   };
 
   const closeNav = () => {
     setNavWidth(0);
   };
    
    return(

<>
<div class="container">
            <div class="header_section_top">
               <div class="row">
                  <div class="col-sm-12">
                     <div class="custom_menu">
                        <ul>
                           <li><a href="#">Best Sellers</a></li>
                           <li><a href="#">Gift Ideas</a></li>
                           <li><a href="#">New Releases</a></li>
                           <li><a href="#">Today's Deals</a></li>
                           <li><a href="#">Customer Service</a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div class="logo_section">
            <div class="container">
               <div class="row">
                  <div class="col-sm-12">
                     <div class="logo"><a href="index.html"><img src="/assets/images/logo.png"/></a></div>
                  </div>
               </div>
            </div>
         </div>

         <div class="header_section">
            <div class="container">
               <div class="containt_main">
                  <div id="mySidenav" class="sidenav" style={{ width: `${navWidth}px` }}>
                     <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>×</a>
                     <a href="index.html">Home</a>
                     <a href="fashion.html">Fashion</a>
                     <a href="electronic.html">Electronic</a>
                     <a href="jewellery.html">Jewellery</a>
                  </div>
                  <span class="toggle_icon" onClick={openNav}><img src="/assets/images/toggle-icon.png"/></span>
                  <div class="dropdown">
                     <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{(category==null)?"Select Category" :category}
                     </button>
                     <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" x-placement="bottom-start" style={{position:" absolute", transform: "translate3d(0px, 38px, 0px)", top: "0px", left: "0px", willChange: "transform"}}>
                         <a class="dropdown-item" href="#" onClick={()=>{setCategory(null)}}>All Category</a>
                        <a class="dropdown-item" href="#" onClick={()=>{setCategory("Fashion")}}>Fashion</a>
                        <a class="dropdown-item" href="#" onClick={()=>{setCategory("Electronic")}}>Electronic</a>
                        <a class="dropdown-item" href="#" onClick={()=>{setCategory("Jewellery")}}>Jewellery</a>
                     </div>
                  </div>
                  <div class="main">
                    
                     <div class="input-group">
                        <input type="text" class="form-control" onChange={(e)=>{setSearch(e.target.value)}} placeholder="Search this blog"/>
                        <div class="input-group-append">
                           <button class="btn btn-secondary" type="button" style={{backgroundColor: "#f26522",borderColor:"#f26522 "}}
                           onClick={()=>{
                              if(search){
                                 setCategory(search)
                              }
                              else{
                                 setCategory(null)
                              }
                           }}
                           >
                           <i class="fa fa-search"></i>
                           </button>
                        </div>
                     </div>
                  </div>
                  <div class="header_box">
                  <div className="lang_box" ref={dropdownRef}>
      <div className="nav-link" aria-expanded="true" onClick={handleCountryClick}>
        <img src="/assets/images/flag-uk.png" alt="flag" className="mr-2" title="United Kingdom" /> {selectedCountry} <i className="fa fa-angle-down ml-2" aria-hidden="true"></i>
      </div>
      {showMenu && (
        <div className="dropdown-menu">
          <a href="#" className="dropdown-item" onClick={() => handleSelectCountry('English')}>
            <img src="/assets/images/flag-uk.png" className="mr-2" alt="flag" />
            English
          </a>
          <a href="#" className="dropdown-item" onClick={() => handleSelectCountry('French')}>
            <img src="/assets/images/flag-france.png" className="mr-2" alt="flag" />
            French
          </a>
         
        </div>
      )}
    </div>
                     <div class="login_menu">
                        <ul>
                           <li><a href="#">
                              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                              <span class="padding_10">Cart</span></a>
                           </li>
                           <li><a href="#">
                              <i class="fa fa-user" aria-hidden="true"></i>
                              <span class="padding_10">Cart</span></a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>



</>

    )
}
export default HeaderNav;
