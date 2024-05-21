import Navbar from '../Components/Navbar'
import './MainPage.css'

function MainPage() {
  return (
    <div  style={{border:'1px solid black'}} className='AllMainPage'>

      <div className='NavbarMainPage'><Navbar/></div>
      
      <div className='RightAndMiddleMainPage'>
        <div className='MiddleMainPage'>Ortabar</div>
        <div className='RightSideMainPage'>Sağbar</div>
      </div>
    </div>
  )
}

export default MainPage
