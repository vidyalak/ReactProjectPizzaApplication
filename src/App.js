import React from "react";
import ProductList from "./components/ProductList";
import IPhoneList from "./components/IPhoneList";
import LaptopList from "./components/LaptopList";
import ProfileResumeCard from "./components/ProfileResumeCard";

function App() {
  return (
    <div className="App">
      <h1>Rendering a List</h1>
      <ProductList />
      <h1>Conditional Rendering with &&</h1>
      <IPhoneList/>
      <h1>Conditional Rendering with Ternary Operators</h1>
      <LaptopList/>
      <h1>Resume Rendering</h1>
      <ProfileResumeCard/>
    </div>
  );
}

export default App;
