import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "./Home.scss";

const mockResults = [
  {
    id: 1,
    name: "Vellora Hair & Beauty Lounge",
    location: "Sindhubhavan, Ahmedabad",
    rating: "9.1",
    offer: "Upto 30% OFF",
    image: "https://example.com/salon1.jpg",
  },
  {
    id: 2,
    name: "Hair & Bone Salon",
    location: "Shastrinagar, Ahmedabad",
    rating: "9.1",
    offer: "Upto 30% off on items",
    image: "https://example.com/salon2.jpg",
  },
  {
    id: 3,
    name: "Aarti Ghumra Makeup & Hair Studio",
    location: "Satellite, Ahmedabad",
    rating: "8.8",
    offer: "Hair spa & hair cut @999",
    image: "https://example.com/salon3.jpg",
  },
  {
    id: 4,
    name: "Habib's hair & beauty salon",
    location: "Bodakdev, Ahmedabad",
    rating: "8.5",
    offer: null,
    image: "https://example.com/salon4.jpg",
  },
  {
    id: 4,
    name: "Habib's hair & beauty salon",
    location: "Bodakdev, Ahmedabad",
    rating: "8.5",
    offer: null,
    image: "https://example.com/salon4.jpg",
  },
  {
    id: 4,
    name: "Habib's hair & beauty salon",
    location: "Bodakdev, Ahmedabad",
    rating: "8.5",
    offer: null,
    image: "https://example.com/salon4.jpg",
  },
  {
    id: 4,
    name: "Habib's hair & beauty salon",
    location: "Bodakdev, Ahmedabad",
    rating: "8.5",
    offer: null,
    image: "https://example.com/salon4.jpg",
  },
  {
    id: 4,
    name: "Habib's hair & beauty salon",
    location: "Bodakdev, Ahmedabad",
    rating: "8.5",
    offer: null,
    image: "https://example.com/salon4.jpg",
  },
  {
    id: 4,
    name: "Habib's hair & beauty salon",
    location: "Bodakdev, Ahmedabad",
    rating: "8.5",
    offer: null,
    image: "https://example.com/salon4.jpg",
  },
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setShowResults(e.target.value.length > 0);
  };

  const filteredResults = mockResults.filter((result) => {
    const search = searchTerm.toLowerCase();
    return (
      result.name.toLowerCase().includes(search) ||
      result.location.toLowerCase().includes(search) ||
      (result.offer && result.offer.toLowerCase().includes(search))
    );
  });

  return (
    <div className="home">
      <header className="hero-section">
        <div className="search-container">
          <Form className="search-form">
            <div className="search-input-container">
              <Form.Control
                type="text"
                placeholder="Search for salons, area and city"
                className="search-input"
                value={searchTerm}
                onChange={handleSearchChange}
                onFocus={() => setShowResults(searchTerm.length > 0)}
              />
              <Button variant="link" className="search-button">
                <i className="fas fa-search"></i>
              </Button>
              {showResults && (
                <div className="search-results">
                  {filteredResults.length > 0 ? (
                    filteredResults.map((result) => (
                      <div key={result.id} className="search-result-item">
                        <div className="salon-image">
                          <img src={result.image} alt={result.name} />
                        </div>
                        <div className="salon-info">
                          <h3>{result.name}</h3>
                          <p className="location">
                            <i className="fas fa-map-marker-alt"></i>{" "}
                            {result.location}
                          </p>
                          <div className="rating-offer">
                            <span className="rating">★ {result.rating}</span>
                            {result.offer && (
                              <span className="offer">{result.offer}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="no-results">
                      No salons found matching "{searchTerm}"
                    </div>
                  )}
                </div>
              )}
            </div>
          </Form>
        </div>
      </header>

      <Container className="mt-5">
        <Row></Row>
      </Container>
    </div>
  );
};

export default Home;
