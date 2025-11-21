import React, { useEffect } from "react";
import "../styles/Home.scss";
import TableComp from "../components/TableComp";
import Leads from "./Leads";

const Home = () => {
  const fetchCities = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/cities"); // ✅ correct route

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      console.log("Cities:", data);
    } catch (err) {
      console.error("Error fetching cities:", err);
    }
  };

  useEffect(() => {
    fetchCities();
  }, []);

  return (
    <div className="home">
      <header className="hero-section">
        {/* <div className="search-container">
          <Form className="search-form">
            <div className="search-input-container">
              <Form.Control
                type="text"
                placeholder="Search for salons, area and city"
                className="search-input"
                // value={searchTerm}
                // onChange={handleSearchChange}
                // onFocus={() => setShowResults(searchTerm.length > 0)}
              />
              <Button variant="link" className="search-button">
                <i className="fas fa-search"></i>
              </Button>
            </div>
          </Form>
        </div> */}
        <div>
          <Leads />
        </div>
      </header>
    </div>
  );
};

export default Home;
