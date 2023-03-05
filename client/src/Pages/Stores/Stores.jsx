import React from "react";
import "./StoresPage.css";

function StoresPage() {
  return (
    <div>
      <header>
        <h1>Our Stores</h1>
      </header>

      <section id="stores">
        <div className="store">
          <img src="/img/soon.jpg" alt="Store 1" />
          <h3>Store 1</h3>
          <p>Address: 123 Main St.</p>
          <p>Opening Soon...</p>
        </div>
        <div className="store">
          <img src="/img/soon.jpg" alt="Store 2" />
          <h3>Store 2</h3>
          <p>Address: 456 Elm St.</p>
          <p>Opening Soon...</p>
        </div>
        <div className="store">
          <img src="/img/soon.jpg" alt="Store 3" />
          <h3>Store 3</h3>
          <p>Address: 789 Oak St.</p>
          <p>Opening Soon...</p>
        </div>
      </section>
    </div>
  );
}

export default StoresPage;