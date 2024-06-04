import React from 'react'
import '../Pages/PizzaDetailed.css'
import Navbar from "../Components/Navbar";
import MiddlePageMiddlePhoto from "../assets/MiddlePageMiddlePhoto.jpg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AddIcon from '@mui/icons-material/Add';
import Pizza1 from "../assets/Pizza1.jpg";
import Pizza2 from "../assets/Pizza2.jpg";
import { Link } from 'react-router-dom';


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
              <div className="input-container inputArif">
                <SearchIcon style={{ color: '#61656F' }} className="search-icon inputYusuf" />
                <input style={{ color: '#61656F', backgroundColor: '#B4BCCF' }} type="text" placeholder="Search" />
              </div>
            </div>
          </div>

          <div className="MiddlePageAllPizzaCardsDetailed">
            <div className='PizzaDetailedCard'>
              <div className="card mb-3 cardArif" style={{ maxWidth: 540, padding: '8px', border: 'none' }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={Pizza1} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 style={{ fontWeight: 'bold' }} className="card-title">Special Arif Pizza</h5>
                      <div className='PizzaDetailedDescPizzaAll'>
                        <div className='PizzaDetailedDescPizzaAllMallzemos'>
                          <p style={{ color: '#61656F' }} className="card-text">
                            8 inch
                          </p>
                          <p style={{ color: '#61656F' }} className="card-text">
                            Extra cheese
                          </p>
                          <p style={{ color: '#61656F' }} className="card-text">
                            Thin crust
                          </p>
                        </div>
                        <p style={{ color: '#01C550' }} className="card-text">
                          12 TL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='PizzaDetailedUnderPizzaCard'>
              <div className='AllMalzemeAddPizzaDetailed'>
                <div style={{ marginBottom: '10px', paddingLeft: '15px' }} className='MalzemeAddPizzaDetailed'><p>Malzeme1</p>
                  <button style={{ marginRight: '15px', backgroundColor: 'white', padding: '3px', borderRadius: '10px' }}><AddIcon /></button>
                </div>
                <div style={{ marginBottom: '10px', paddingLeft: '15px' }} className='MalzemeAddPizzaDetailed'><p>Malzeme2</p>
                  <button style={{ marginRight: '15px', backgroundColor: 'white', padding: '3px', borderRadius: '10px' }}><AddIcon /></button></div>
                <div style={{ marginBottom: '10px', paddingLeft: '15px' }} className='MalzemeAddPizzaDetailed'><p>Malzeme3</p>
                  <button style={{ marginRight: '15px', backgroundColor: 'white', padding: '3px', borderRadius: '10px' }}><AddIcon /></button></div>
                <div style={{ marginBottom: '10px', paddingLeft: '15px' }} className='MalzemeAddPizzaDetailed'><p>Malzeme4</p>
                  <button style={{ marginRight: '15px', backgroundColor: 'white', padding: '3px', borderRadius: '10px' }}><AddIcon /></button></div>
                <div style={{ marginBottom: '10px', paddingLeft: '15px' }} className='MalzemeAddPizzaDetailed'><p>Malzeme5</p>
                  <button style={{ marginRight: '15px', backgroundColor: 'white', padding: '3px', borderRadius: '10px' }}><AddIcon /></button></div>
              </div>
              <div className='AddMalzemeRight'>
                + Added ingredients
              </div>
            </div>
            <div className='BottomAddButton'>
              <button style={{ fontWeight: 'bold' }}>add</button>
            </div>
          </div>



        </div>


        <div className="RightSideMainPage">
          <div className="RightSideTitle">
            <p>Muberra Yerinde</p>

            <button>
              <Link to="/Notification"> <NotificationsNoneIcon /> </Link>
            </button>

          </div>
          <div className="RightSideOrderMenuTitle">
            <div>
              <p style={{ fontWeight: "bold", fontSize: "20px" }}>Order Menu</p>
            </div>
            <a href="">See All</a>
          </div>

          {/* Kartlar (sepet) */}
          <div style={{ width: '100%' }} className="RightSideOrderDetailed">
            <div className="card mb-3 kart1" style={{ maxWidth: 540, padding: '8px' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={Pizza1}
                    className="img-fluid rounded-start imagePizzaMainPage"
                    alt="..."

                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Special Arif Pizza</h5>
                    <div className="RightSideBarPizzaorderdetailedDescAndQuant">
                      <div className="RightSideBarPizzaorderdetailedZZ">
                        <p style={{ color: '#61656F' }} className="card-text">
                          8 inch
                        </p>

                        <div className="RightSideBarPizzaorderdetailedPriceNN">
                          <p style={{ color: '#01C550' }}>12 TL</p>
                        </div>
                      </div>
                      <div className="QuantityOrderPageDetailed">
                        <div><button style={{ padding: '2px 8px', borderRadius: '20px' }}>-</button></div>
                        <div><p style={{ marginLeft: '0.4rem', fontWeight: 'bold' }}>01</p></div>
                        <div><button style={{ marginLeft: '0.4rem', fontWeight: 'bold', padding: '2px 8px', borderRadius: '20px' }}>+</button></div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-3 kart1" style={{ maxWidth: 540, padding: '8px' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={Pizza2}
                    className="img-fluid rounded-start imagePizzaMainPage"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Special Arslan Pizza</h5>
                    <div className="RightSideBarPizzaorderdetailedDescAndQuant">
                      <div className="RightSideBarPizzaorderdetailedZZ">
                        <p style={{ color: '#61656F' }} className="card-text">
                          8 inch
                        </p>

                        <div className="RightSideBarPizzaorderdetailedPriceNN">
                          <p style={{ color: '#01C550' }}>12 TL</p>
                        </div>
                      </div>
                      <div className="QuantityOrderPageDetailed">
                        <div><button style={{ padding: '2px 8px', borderRadius: '20px' }}>-</button></div>
                        <div><p style={{ marginLeft: '0.4rem', fontWeight: 'bold' }}>01</p></div>
                        <div><button style={{ marginLeft: '0.4rem', fontWeight: 'bold', padding: '2px 8px', borderRadius: '20px' }}>+</button></div>
                      </div>

                    </div>
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
              <p style={{ fontWeight: 'bold' }}>Burhaniye St. No:15/2 IST</p>
            </div>
            <div className="RightSideTotalPrice">
              <h1 style={{ fontWeight: 'bold' }}>Total Price</h1>
              <p style={{ fontWeight: 'bold', color: '#01C550', fontSize: '20px' }}>52.00TL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PizzaDetailed