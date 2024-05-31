import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Confirmation from "./Pages/Confirmation";
import Validation from "./Pages/Validation";
import Form from "./Components/Form";
import CheckoutPage from "./Pages/CheckoutPage";
import MainPage from "./Pages/MainPage"
import SettingsPage from "./Pages/SettingsPage";
import LoginPage from "./Pages/LoginPage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import ResetPasswordPage from "./Pages/ResetPasswordPage";
import RegisterPage from "./Pages/RegisterPage";
import PizzaDetailed from "./Pages/PizzaDetailed";
import NotificationPage from "./Pages/NotificationPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<LoginPage />} />
          <Route path="/Home" element={<MainPage/>} />
          <Route path="/Confirmation" element={<Confirmation />} />
          <Route path="/Validation" element={<Validation />} />
          <Route path="/Checkout" element={<CheckoutPage />} />
          <Route path="/Payment" element={<Form />} />
          <Route path="/Settings" element={<SettingsPage />} />
          <Route path="/" element={<Form/>} />
          <Route path="/Forgot-Password" element={<ForgotPasswordPage />} />
          <Route path="/Reset-Password" element={<ResetPasswordPage />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/PizzaDetailed" element={<PizzaDetailed />} />
          <Route path="/Notification" element={<NotificationPage />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
