import React from "react";
import ProductList from "./components/ProductList";
import IPhoneList from "./components/IPhoneList";
import LaptopList from "./components/LaptopList";

function App() {
  return (
    <div className="App">
      <h1>Hello React!</h1>
      <ProductList />
      <IPhoneList/>
      <LaptopList/>
    </div>
  );
}

export default App;
