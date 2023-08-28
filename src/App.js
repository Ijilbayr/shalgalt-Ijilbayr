import React, { useState } from "react";
import "./App.css";
import LoginForm from "./components/login";
// import SwipeableTextMobileStepper from "./components/imageSlider";

function AccordionItem({ title, neg, hoyor }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        {title}
        <span className={`accordion-icon ${isOpen ? "open" : ""}`}></span>
      </div>
      {isOpen && <div className="accordion-content">{neg}</div>}
      {isOpen && <div className="accordion-content">{hoyor}</div>}
    </div>
  );
}
const Items = [
  { id: 1, name: "Bilguun" },
  { id: 2, name: "Ijilbayr" },
  { id: 3, name: "Ermuun" },
];

const images = [
  "https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1683009427500-71296178737f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1693040517341-6e1565f8ef42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
  };
  return (
    <div className="image-slider">
      <button className="slider-btn" onClick={prevSlide}>
        Previous
      </button>
      <img
        className="slider-image"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
      />
      <button className="slider-btn" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
}

function Modal({ children, isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

function App() {
  const [items, setItems] = useState(Items);
  const [searchText, setSearchText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchText(value);
    filterItems(value);
  };

  const filterItems = (searchQuery) => {
    const filteredItems = Items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setItems(filteredItems);
  };

  return (
    <div className="app">
      <div className="das1">
        <h1>Dasgal1</h1>
        <input
          type="text"
          placeholder="Search by name"
          value={searchText}
          onChange={handleSearchChange}
        />
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
      <div className="das2">
        <h1>Dasgal2</h1>
        <div className="accordion-container">
          <AccordionItem title="Accordion 1" neg="hello" hoyor="good" />
          <AccordionItem title="Accordion 2" neg="nogoo" hoyor="undaa" />
        </div>
      </div>
      <das3 className="das3">
        <h1>Dasgal3</h1>
        <div className="app-container">
          <ImageSlider />
        </div>
      </das3>
      <div className="app-container">
        <h1>Dasgal4</h1>
        <LoginForm />
      </div>
      <div className="app-container">
        <h1>Dasgal5</h1>
        <button onClick={handleOpenModal}>Open Modal</button>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <h2>Modal</h2>
          <p>Model Is coming up here.</p>
        </Modal>
      </div>
    </div>
  );
}

export default App;
