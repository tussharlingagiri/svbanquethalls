import React, { useState } from "react";
import { FaUtensils, FaGlassCheers, FaHome, FaCar, FaWheelchair, FaStar } from "react-icons/fa";
import "./Services.css";

const Services = () => {
  const [activeModal, setActiveModal] = useState(null);

  const handleOpenModal = (service) => setActiveModal(service);
  const handleCloseModal = () => setActiveModal(null);

  const services = [
    {
      id: "food",
      title: "Food",
      description: "Flexible food options tailored to your event.",
      icon: <FaUtensils />,
      details: [
        "Vendor Flexibility: Bring your own vendors for catering.",
        "Kitchen Access: Fully equipped kitchens available for meal preparation.",
        "In-House Catering: Delightful menu crafted by professional chefs.",
        "Enjoy complete freedom and convenience for all your culinary needs!",
      ],
    },
    {
      id: "events",
      title: "Events",
      description: "Freedom to celebrate your way.",
      icon: <FaGlassCheers />,
      details: [
        "Decorator Options: Bring your own or choose from our in-house decorators.",
        "Photography Flexibility: Choose your photographer or use our in-house services.",
        "No Restrictions: Plan and celebrate any event with ease.",
        "Your event, your way—complete freedom to make it unforgettable!",
      ],
    },
    {
      id: "halls",
      title: "Our Venues",
      description: "Elegant spaces to elevate every celebration.",
      icon: <FaHome />,
      details: [
        "2 A/C Halls: Elegant and comfortable with premium sound systems.",
        "1 Non-A/C Hall: Spacious and versatile with charming decor.",
        "Terrace Space: Perfect for evening gatherings with ambient lighting.",
        "Thoughtfully designed spaces for every occasion!",
      ],
    },
    {
      id: "parking",
      title: "Parking",
      description: "Effortless parking facilities for all events.",
      icon: <FaCar />,
      details: [
        "Valet Parking: Available upon request for ease and convenience.",
        "Cellar Parking: Limited parking space for select vehicles.",
        "Street Parking: Ample parking space for guests.",
        "Convenient parking options for every event!",
      ],
    },
    {
      id: "accessibility",
      title: "Accessibility",
      description: "Inclusive spaces for all attendees.",
      icon: <FaWheelchair />,
      details: [
        "Elevator Access: Convenient elevators for all guests.",
        "Wheelchair-Friendly: Fully accessible spaces for wheelchairs.",
        "Thoughtful Steps Design: Easy navigation for everyone.",
        "Designed for comfort and convenience for all attendees!",
      ],
    },
    {
      id: "amenities",
      title: "Amenities",
      description: "Ensuring a seamless and comfortable experience.",
      icon: <FaStar />,
      details: [
        "Power Backup: Uninterrupted electricity to keep your events running smoothly.",
        "Clean Washrooms: Well-maintained facilities for guests.",
        "Dressing Rooms: Dedicated spaces for preparation and convenience.",
      ],
    },
  ];

  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        {services.map((service) => (
          <div className="service-item" key={service.id}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="cta-button" onClick={() => handleOpenModal(service)}>
              Learn More
            </button>
          </div>
        ))}
      </div>

      {activeModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{activeModal.title}</h3>
            <p>{activeModal.details.pop()}</p>
            <ul>
              {activeModal.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            <button className="cta-button close-button" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
