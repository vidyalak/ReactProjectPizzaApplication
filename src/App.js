import React, { useState } from "react";
import ProductList from "./components/ProductList";
import IPhoneList from "./components/IPhoneList";
import LaptopList from "./components/LaptopList";
import ProfileResumeCard from "./components/ProfileResumeCard";
import StateStepForm from "./components/StateStepForm";
import StateCounterApp from "./components/StateCounterApp";
import TravelList from "./components/TravelList";
import FlashCard from "./components/FlashCard";
import CounterProgress from "./components/CounterProgress";
import Pagination from "./components/Pagination";
import EatSplit from "./components/split/EatSplit";
import StarRating from "./components/starRating/StarRating";


function App() {
  const [page, setPage] = useState(1); // Default Page 1

  return (
    <div className="App">
      {/* ---------------- PAGINATION COMPONENT ---------------- */}
      <Pagination page={page} setPage={setPage} totalPages={3} />
      {/* ---------------- PAGE 1 CONTENT ---------------- */}
      {page === 1 && (
        <>
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

          <h1>FlashCard Example</h1>
          <FlashCard />

          <h1>Counter with Progress Bar</h1>
          <CounterProgress />
        </>
      )} : {page === 2 && (
        <>
        <EatSplit />
        <h1>Five Star Rating</h1>
        <StarRating/>
              </>
      )}

      
    </div>
  );
}

export default App;
