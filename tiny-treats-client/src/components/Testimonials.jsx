import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image1 from "../assets/pexels-tarzine-jackson-773371.jpg";
import image2 from "../assets/pexels-andrea-piacquadio-774909.jpg";
import image3 from "../assets/pexels-marcus-aurelius-6787391.jpg";
import image4 from "../assets/pexels-christina-morillo-1181686.jpg";
import image5 from "../assets/pexels-pixabay-220453 (1).jpg";
import image6 from "../assets/pexels-rdne-stock-project-5637731.jpg";
import image7 from "../assets/Aykut-Kav.png";

const TestimonialBox = ({ image, text, name }) => (
  <Col md={4} className="mb-4">
    <div className="testimonial-box">
      <img src={image} alt="Customer" className="img-fluid" border-radius= "10px" />
      <p className="mt-3">{name}</p>
      <p className="mt-3" dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  </Col>
);

const Testimonials = () => {
  const testimonials = [
    {
      image: image1,
      name: "Tarzine Jackson",
      text: "Tiny Treats took my gift game to a whole new level! The '<a href='http://localhost:5173/eco-friendly'>Eco-Friendly</a>' category blew my mind - I found a present so green, it practically photosynthesized happiness.",
    },
    {
      image: image2,
      name: "Andrea Piacquadio",
      text: "Forget cliché gifts! Tiny Treats' '<a href='http://localhost:5173/kitchen'>Kitchen</a>' category turned my Valentine's Day into a cooking extravaganza. I gifted a quirky kitchen gadget that turned our date night into a culinary adventure.",
    },
    {
      image: image3,
      name: "Marcus Aurelius",
      text: "My birthday hit a new level of awesome with Tiny Treats! The '<a href='http://localhost:5173/photography'>Photography</a>' category transported me to a world of visual wonders. I got a camera accessory that made me feel like a photo magician.",
    },
    {
      image: image4,
      name: "Christina Morillo",
      text: "Tiny Treats sprinkled magic on my Christmas! The '<a href='http://localhost:5173/mystical'>Mystical</a>' category had enchanting decor that turned my home into a fairyland.",
    },
    {
      image: image5,
      name: "Pixabay",
      text: "Valentine's Day went from ordinary to extraordinary! Tiny Treats' '<a href='http://localhost:5173/gadgets'>Gadgets</a>' category had a gadget so cool, Cupid would be jealous.",
    },
    {
      image: image6,
      name: "RDNE Stock Project",
      text: "Tiny Treats made my birthday the talk of the town! The '<a href='http://localhost:5173/fashion'>Fashion</a>' category had an accessory that made me feel like a style icon.",
    },
    {
      image: image7,
      name: "Aykut Kav",
      text: "Tiny Treats made my birthday the ultimate experience! The '<a href='http://localhost:5173/jewelry'>Jewelry</a>' category had bling that outshone the stars.",
    },
  ];

  return (
    <Container className="my-5">
      <Row>
        {testimonials.map((testimonial, index) => (
          <TestimonialBox key={index} {...testimonial} />
        ))}
      </Row>
    </Container>
  );
};

export default Testimonials;
