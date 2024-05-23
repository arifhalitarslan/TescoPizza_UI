import React from 'react'
import '../Pages/PizzaDetailed.css'
import Navbar from "../Components/Navbar";
import MiddlePageMiddlePhoto from "../assets/MiddlePageMiddlePhoto.jpg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AddIcon from '@mui/icons-material/Add';
import Pizza1 from "../assets/Pizza1.jpg";
import Pizza2 from "../assets/Pizza2.jpg";
import Pizza3 from "../assets/Pizza3.jpg";
import Pizza4 from "../assets/Pizza4.jpg";
import Pizza5 from "../assets/Pizza5.jpg";
import Pizza6 from "../assets/Pizza6.jpg";

function PizzaDetailed() {
  return (
    <div style={{ border: "1px solid black" }} className="AllMainPage">
    <div className="NavbarMainPage">
      <Navbar />
    </div>

    <div className="RightAndMiddleMainPage">



      <div className="MiddleMainPage">
        <div className="MiddleMainPageTitleAndSearch">
          <div className="MiddleMainPageTitle">
            <p style={{ color: "#B4BCCF" }}>Hello Muberra</p>
            <p style={{ fontWeight: "bold" }}>Welcome Back</p>
          </div>
          <div className="MiddlePageSearch">
            <div className="input-container">
              <SearchIcon style={{color:'#61656F'}} className="search-icon" />
              <input style={{color:'#61656F',backgroundColor:'#B4BCCF'}} type="text" placeholder="Search" />
            </div>
          </div>
        </div>
       
        <div className="MiddlePageAllPizzaCards">  
         <div className='PizzaDetailedCard'>
         <div className="card mb-3" style={{ maxWidth: 540 ,padding:'8px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={Pizza4} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p className="card-text">
          <small className="text-body-secondary">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</div>
</div>

<div className='PizzaDetailedUnderPizzaCard'>
<div className='AllMalzemeAddPizzaDetailed'>
<div style={{marginBottom:'10px',paddingLeft:'15px'}} className='MalzemeAddPizzaDetailed'><p>Malzeme1</p>
<button style={{marginRight:'15px',backgroundColor:'white',padding:'3px',borderRadius:'10px'}}><AddIcon/></button>
</div>
<div style={{marginBottom:'10px',paddingLeft:'15px'}} className='MalzemeAddPizzaDetailed'><p>Malzeme2</p>
<button style={{marginRight:'15px',backgroundColor:'white',padding:'3px',borderRadius:'10px'}}><AddIcon/></button></div>
<div style={{marginBottom:'10px',paddingLeft:'15px'}} className='MalzemeAddPizzaDetailed'><p>Malzeme3</p>
<button style={{marginRight:'15px',backgroundColor:'white',padding:'3px',borderRadius:'10px'}}><AddIcon/></button></div>
<div style={{marginBottom:'10px',paddingLeft:'15px'}} className='MalzemeAddPizzaDetailed'><p>Malzeme4</p>
<button style={{marginRight:'15px',backgroundColor:'white',padding:'3px',borderRadius:'10px'}}><AddIcon/></button></div>
<div style={{marginBottom:'10px',paddingLeft:'15px'}} className='MalzemeAddPizzaDetailed'><p>Malzeme5</p>
<button style={{marginRight:'15px',backgroundColor:'white',padding:'3px',borderRadius:'10px'}}><AddIcon/></button></div>
</div>
<div className='AddMalzemeRight'>
    arif halit arslan
</div>
</div>
<div className='BottomAddButton'>
    <button style={{fontWeight:'bold'}}>add</button>
    </div>
        </div>

 

      </div>

      
      <div className="RightSideMainPage">
        <div className="RightSideTitle">
          <p>Muberra Yerinde</p>
          <button>
            <NotificationsNoneIcon />
          </button>
        </div>
        <div className="RightSideOrderMenuTitle">
          <div>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>Order Menu</p>
          </div>
          <a href="">See All</a>
        </div>

        {/* Kartlar (sepet) */}
        <div className="RightSideOrderDetailed">
          <div  className="card mb-3" style={{ maxWidth: 540,padding:'8px'}}>
            <div className="row g-0">
            <div className="col-md-4">
                <img
                  src={Pizza1}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3" style={{ maxWidth: 540 ,padding:'8px'}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={Pizza1}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="CheckOutButton">
          <button>Checkout</button>
        </div>
        <div className="RightSideAddressAndPrice">
          <div className="RightSideAddress">
           <p style={{fontWeight:'bold'}}>Burhaniye St. No:15/2 IST</p> 
          </div>
          <div className="RightSideTotalPrice">
            <h1 style={{fontWeight:'bold'}}>Total Price</h1>
            <p style={{fontWeight:'bold',color:'#01C550',fontSize:'20px'}}>52.00TL</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PizzaDetailed