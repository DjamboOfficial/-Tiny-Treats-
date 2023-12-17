import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

const CatalogueNavbar = () => {
  const categories = [
    "Electronics",
    "Gadgets",
    "Home & Living",
    "Decor",
    "Arts & Crafts",
    "Gifts",
    "Wellness",
    "Fashion",
    "Jewelry",
    "Photography",
    "Eco-Friendly",
    "Accessories",
    "Romantic",
    "Kitchen",
    "Organization",
    "Mystical",
  ];

  const containerRef = useRef(null);
  const [startIndex, setStartIndex] = useState(0);


  const handleScroll = (direction) => {
    const scrollAmount = 1; // Show 1 category at a time
    const newStartIndex =
      direction === "right"
        ? startIndex + scrollAmount
        : direction === "left"
        ? startIndex - scrollAmount
        : startIndex;

    // Ensure that the new index stays within bounds
    const maxStartIndex = categories.length - 5;
    const clampedStartIndex = Math.min(
      maxStartIndex,
      Math.max(0, newStartIndex)
    );

  setStartIndex(clampedStartIndex);
};

  return (
    <div>
      <nav className="navbar" style={{ marginLeft: "2%" }}>
        <Button
          variant="secondary"
          className="arrow-button"
          onClick={() => handleScroll("left")}


        >
          {"<"}
        </Button>

        <div
          className="category-container"
          ref={containerRef}
          style={{ marginLeft: `${-530 + startIndex * 50}px` }}
        >
          <Container fluid style={{ width: "5%" }}>
            <div className="d-flex flex-nowrap">
              {categories
                .slice(startIndex, startIndex + 5)
                .map((category, index) => (
                  <Button key={index} variant="secondary" className="mx-1">
                    <Link
                      to={`/${category.toLowerCase()}`}
                      className="text-white text-decoration-none"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {category}
                    </Link>
                  </Button>
                ))}
            </div>
          </Container>
        </div>
        <Button
          variant="secondary"
          className="arrow-button"
          onClick={() => handleScroll("right")}
          disabled={startIndex === categories.length - 5}
        >
          {">"}
        </Button>
      </nav>
    </div>
  );
};

export default CatalogueNavbar;
