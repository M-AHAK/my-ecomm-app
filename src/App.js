import React, { useState } from "react";
import Head from "./components/Head";
import HeaderNav from "./components/HeaderNav";
import Banner from "./components/Banner";
import Fashion from "./components/Fashion";
import Electronic from "./components/electronic";
import Jewellery from "./components/Jwellery";
import Footer from "./components/Footer";
import Foot from "./components/Foot";

function App() {
  const [category,setCategory] = useState(null)
  return (
    <>
    <Head/>
     <div class="banner_bg_main">
<HeaderNav category={category} setCategory={setCategory}/>
<Banner/>
     </div>
{
  (category=="Fashion" ||category==null)?<Fashion/>:null
}
{
  (category=="Electronic" ||category==null)?<Electronic/>:null
}
{
  (category=="Jewellery" ||category==null)?<Jewellery/>:null
}


<Footer/>
<Foot/>


    
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
