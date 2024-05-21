import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Confirmation from "./Pages/Confirmation";
import Validation from "./Pages/Validation";
import Form from "./Components/Form";
import CheckoutPage from "./Pages/CheckoutPage";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Form/>} />
          <Route path="/Confirmation" element={<Confirmation />} />
          <Route path="/Validation" element={<Validation />} />
          <Route path="/Checkout" element={<CheckoutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
