import React, { useState } from "react";
import "../styles/StateStepForm.css"; // Import the CSS file

function StateStepForm() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="step-container">
      <h2>Step {step}</h2>

      {/* Step Content */}
      {step === 1 && <p>This is Step 1 content.</p>}
      {step === 2 && <p>This is Step 2 content.</p>}
      {step === 3 && <p>This is Step 3 content.</p>}

      {/* Step Indicator */}
      <div className="steps">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className={`circle ${step === num ? "active" : ""}`}
          >
            {num}
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="buttons">
        <button
          onClick={handlePrevious}
          disabled={step === 1}
          className={`btn ${step === 1 ? "disabled" : ""}`}
        >
          Previous
        </button>

        <button
          onClick={handleNext}
          disabled={step === 3}
          className={`btn ${step === 3 ? "disabled" : ""}`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default StateStepForm;
