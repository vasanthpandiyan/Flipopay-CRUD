import "./popup.css";

function CustomPopup({ isOpen,togglePopup }) {
  return (
    <div className="popup-container">
      {isOpen && (
        <div className="popup">
          <p>This is the popup content!</p>
          <button onClick={togglePopup}>Close</button>
        </div>
      )}
    </div>
  );
}

export default CustomPopup;
