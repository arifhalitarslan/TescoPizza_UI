import Navbar from "../Components/Navbar";
import { useNavigate, Link } from "react-router-dom";
import "./MainPage.css";
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

function MainPage() {

  const navigate = useNavigate();

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
                <SearchIcon style={{ color: '#61656F' }} className="search-icon searchYusuf" />
                <input style={{ color: '#61656F', backgroundColor: '#B4BCCF' }} type="text" placeholder="Search" />
              </div>
            </div>
          </div>
          <div className="MiddlePhoto">
            <img src={MiddlePageMiddlePhoto} alt="" />
            <button>Order Now</button>
          </div>

          <div className="MiddlePageAllPizzaCards">


            {/* Kartlar */}
            <div className="container">
              <div className="row mb-3 " style={{ borderRadius: '20px', paddingTop: '10px' }}>
                <div className="col-md-6 " style={{ maxheight: '300px' }}>
                  <div className="card h-100 cardYusuf " style={{ padding: '8px', flexDirection: 'row' }}>
                    <img style={{ width: '100px' }} src={Pizza1} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title titlePizzaHomePageNN">Pizza With Peperoni</h5>
                      <div className="UnderCardDescriptionAndButton">
                        <div className="UnderCardDescriptionPriceAndDesc">
                          <p className="card-text" style={{ fontSize: '16px', color: '#B4BCCF' }}>
                            14-20 Minutes
                          </p>
                          <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#01C550' }}>12 TL</p>
                        </div>
                        <div className="UnderCardDescriptionButton">
                          <button onClick={() => { navigate("/pizzaDetailed") }}><AddIcon /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6" style={{ maxheight: '300px' }}>
                  <div className="card h-100 cardYusuf" style={{ padding: '8px', flexDirection: 'row' }}>
                    <img style={{ width: '100px' }} src={Pizza2} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title titlePizzaHomePageNN">Pizza With Cheese</h5>
                      <div className="UnderCardDescriptionAndButton">
                        <div className="UnderCardDescriptionPriceAndDesc">
                          <p className="card-text" style={{ fontSize: '16px', color: '#B4BCCF' }}>
                            14-20 Minutes
                          </p>
                          <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#01C550' }}>12 TL</p>
                        </div>
                        <div className="UnderCardDescriptionButton">
                          <button onClick={() => { navigate("/pizzaDetailed") }}><AddIcon /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6" style={{ maxheight: '300px' }}>
                  <div className="card h-100 cardYusuf" style={{ padding: '8px', flexDirection: 'row' }}>
                    <img style={{ width: '100px' }} src={Pizza3} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title titlePizzaHomePageNN">Greek Pizza</h5>
                      <div className="UnderCardDescriptionAndButton">
                        <div className="UnderCardDescriptionPriceAndDesc">
                          <p className="card-text" style={{ fontSize: '16px', color: '#B4BCCF' }}>
                            14-20 Minutes
                          </p>
                          <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#01C550' }}>12 TL</p>
                        </div>
                        <div className="UnderCardDescriptionButton">
                          <button onClick={() => { navigate("/pizzaDetailed") }}><AddIcon /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6" style={{ maxheight: '300px' }}>
                  <div className="card h-100 cardYusuf" style={{ padding: '8px', flexDirection: 'row' }}>
                    <img style={{ width: '100px' }} src={Pizza4} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title titlePizzaHomePageNN">Detroit Pizza</h5>
                      <div className="UnderCardDescriptionAndButton">
                        <div className="UnderCardDescriptionPriceAndDesc">
                          <p className="card-text" style={{ fontSize: '16px', color: '#B4BCCF' }}>
                            14-20 Minutes
                          </p>
                          <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#01C550' }}>12 TL</p>
                        </div>
                        <div className="UnderCardDescriptionButton">
                          <button onClick={() => { navigate("/pizzaDetailed") }}><AddIcon /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6" style={{ maxheight: '300px' }}>
                  <div className="card h-100 cardYusuf" style={{ padding: '8px', flexDirection: 'row' }}>
                    <img style={{ width: '100px' }} src={Pizza5} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title titlePizzaHomePageNN">Special Arif Pizza</h5>
                      <div className="UnderCardDescriptionAndButton">
                        <div className="UnderCardDescriptionPriceAndDesc">
                          <p className="card-text" style={{ fontSize: '16px', color: '#B4BCCF' }}>
                            14-20 Minutes
                          </p>
                          <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#01C550' }}>12 TL</p>
                        </div>
                        <div className="UnderCardDescriptionButton">
                          <button onClick={() => { navigate("/pizzaDetailed") }}><AddIcon /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6" style={{ maxheight: '300px' }}>
                  <div className="card h-100 cardYusuf" style={{ padding: '8px', flexDirection: 'row' }}>
                    <img style={{ width: '100px' }} src={Pizza6} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title titlePizzaHomePageNN">Special Arslan Pizza</h5>
                      <div className="UnderCardDescriptionAndButton">
                        <div className="UnderCardDescriptionPriceAndDesc">
                          <p className="card-text" style={{ fontSize: '16px', color: '#B4BCCF' }}>
                            14-20 Minutes
                          </p>
                          <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#01C550' }}>12 TL</p>
                        </div>
                        <div className="UnderCardDescriptionButton">
                          <button onClick={() => { navigate("/pizzaDetailed") }}><AddIcon /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
            <button onClick={() => { navigate("/Checkout") }}>Checkout</button>
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
  );
}

export default MainPage;
