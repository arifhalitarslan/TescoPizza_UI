import Navbar from '../Components/Navbar'
import './MainPage.css'
import MiddlePageMiddlePhoto from '../assets/MiddlePageMiddlePhoto.jpg'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Pizza1 from '../assets/Pizza1.jpg'
import Pizza2 from '../assets/Pizza1.jpg'
import Pizza3 from '../assets/Pizza1.jpg'
import Pizza4 from '../assets/Pizza1.jpg'
import Pizza5 from '../assets/Pizza1.jpg'
import Pizza6 from '../assets/Pizza1.jpg'


function MainPage() {
  return (
    <div  style={{border:'1px solid black'}} className='AllMainPage'>

      <div className='NavbarMainPage'><Navbar/></div>
      
      <div className='RightAndMiddleMainPage'>
        <div className='MiddleMainPage'>
          <div className='MiddleMainPageTitleAndSearch'>
            <div className='MiddleMainPageTitle'>
             <p style={{color:'#B4BCCF'}}>Hello Muberra</p> 
             <p style={{fontWeight:'bold'}}>Welcome Back</p>
            </div>
            <div className='MiddlePageSearch'>
              <div className="input-container">
               <SearchIcon className="search-icon" />
               <input type="text" placeholder='Search'/>
              </div>
            </div>
          </div>
          <div className='MiddlePhoto'>
            <img  src={MiddlePageMiddlePhoto} alt="" />
            <button>Order Now</button>
            </div>
            <div className='MiddlePageAllPizzaCards'>

              {/* Kartlar */}
              <div className="container">
  <div className="row mb-3">
    <div className="col-md-6">
      <div className="card h-100">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="card h-100">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="row mb-3">
    <div className="col-md-6">
      <div className="card h-100">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="card h-100">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="row mb-3">
    <div className="col-md-6">
      <div className="card h-100">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="card h-100">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


            </div>
        </div>
        <div className='RightSideMainPage'>
          <div className='RightSideTitle'>
            <p>Muberra Yerinde</p>
            <button><NotificationsNoneIcon/></button>
          </div>
          <div className='RightSideOrderMenuTitle'>
            <div><p style={{fontWeight:'bold',fontSize:'20px'}}>Order Menu</p>
            </div><a href="">See All</a>
          </div>
      
      {/* Kartlar (sepet) */}
          <div>
          <div className="card mb-3" style={{ maxWidth: 540 }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src= {Pizza1} className="img-fluid rounded-start" alt="..." />
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

<div className="card mb-3" style={{ maxWidth: 540 }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src= {Pizza1} className="img-fluid rounded-start" alt="..." />
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
          <div><button>Chckout</button></div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
