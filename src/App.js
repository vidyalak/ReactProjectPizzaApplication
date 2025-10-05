import React from "react";
import ProductList from "./components/ProductList";
import IPhoneList from "./components/IPhoneList";
import LaptopList from "./components/LaptopList";
import ProfileResumeCard from "./components/ProfileResumeCard";
import StateStepForm from "./components/StateStepForm";
import StateCounterApp from "./components/StateCounterApp";
import TravelList from "./components/TravelList";

function App() {
  return (
    <div className="App">
      <h1>Rendering a List</h1>
      <ProductList />
      <h1>Conditional Rendering with &&</h1>
      <IPhoneList />
      <h1>Conditional Rendering with Ternary Operators</h1>
      <LaptopList />
      <h1>Resume Rendering</h1>
      <ProfileResumeCard />
      <h1>State Management in Multi-Step Forms</h1>
      <StateStepForm />
      <h1>State Counter App</h1>
      <StateCounterApp />
      <h1>Travel Checklist</h1>
      <TravelList />
    </div>
  );
}

export default App;
