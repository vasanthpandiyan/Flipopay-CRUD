import { useState } from "react";
import "./popup.css";

function CustomPopup({ isOpen, togglePopup, onSendValue }) {
  return (
    <div className="popup">
      {isOpen && (
        <div className="card">
          <div class="card-header">
            <span>Create a job</span>
            {
              <span> Step 1</span>
            }
          </div>
          <div class="card-body">
            <div class="input-container">
              <label class="input-label" for="job-title">
                Job title*
              </label>
              <input
                type="text"
                class="input-field"
                id="job-title"
                placeholder="ex. UX UI Designer"
                value={jobTitle}
                onChange={handleChange}
              />
            </div>
            <div class="input-container">
              <label class="input-label" for="company-name">
                Company name*
              </label>
              <input
                type="text"
                class="input-field"
                id="company-name"
                placeholder="ex. Google"
              />
            </div>
            <div class="input-container">
              <label class="input-label" for="industry">
                Industry*
              </label>
              <input
                type="text"
                class="input-field"
                id="industry"
                placeholder="ex. Information Technology"
              />
            </div>
            <div class="input-container">
              <label class="input-label" for="location">
                Location*
              </label>
              <input
                type="text"
                class="input-field"
                id="location"
                placeholder="ex. Chennai"
              />
            </div>
            <div class="input-container">
              <label class="input-label" for="remote-type">
                Remote type*
              </label>
              <input
                type="text"
                class="input-field"
                id="remote-type"
                placeholder="ex. In-office"
              />
            </div>
          </div>
          <div class="button-container">
            <button className="button" onClick={togglePopup}>
              Close
            </button>
            <button className="button button-secondary">Back</button>
            <button
              className="button button-primary"
              onClick={onSendValue(jobTitle)}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomPopup;
