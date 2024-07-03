import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Card from "./components/cards/card";
import CustomPopup from "./components/popup/popup";

function App() {
  const [htmlArray, setHtmlArray] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [receivedValue, setReceivedValue] = useState("");

  const handleSendValue = (value) => {
    setReceivedValue(value);
    console.log(receivedValue);
  };

  const handleButtonClick = () => {
    const newCardData = `<div className="card">
        <div className="card-header">
          <img
            className="card-image"
            src="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.png"
            alt="Company Logo"
          />
          <div className="card-title-section">
            <h3 className="card-title">Front End Developer</h3>
            <span className="card-subtitle">Amazon</span>
          </div>
        </div>
        <div className="card-body">
          <div className="card-info">
            <p className="card-text">
              <span className="card-text-bold">Location:</span> IT, Chennai
            </p>
            <p className="card-text">
              <span className="card-text-bold">Work Schedule:</span> in office
              (9.00 am - 5.00 pm IST)
            </p>
            <p className="card-text">
              <span className="card-text-bold">Experience:</span> 1-2 years
            </p>
          </div>
          <div className="card-info">
            <p className="card-text">
              <span className="card-text-bold">Salary:</span> INR (₹)
              200000-3000000/Month
            </p>
            <p className="card-text">
              <span className="card-text-bold">Employees:</span> 100 employees
            </p>
          </div>
        </div>
        <div className="card-footer">
          <a href="#" className="card-link">
            Apply Now
          </a>
        </div>
      </div>`;
    // setHtmlArray([...htmlArray, newCardData]);
    togglePopup();
  };
  const togglePopup = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar onClick={handleButtonClick} />
      <Card cardData={htmlArray} value={receivedValue} />
      <CustomPopup
        isOpen={isOpen}
        togglePopup={togglePopup}
        onSendValue={handleSendValue}
      />
    </>
  );
}

export default App;

