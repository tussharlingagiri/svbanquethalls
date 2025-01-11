import React, { useState, useEffect } from "react";
import { GiMeal } from "react-icons/gi"; // Using GiMeal icon for hot dish
import "./Services.css";

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  // Effect to disable/enable scrolling when modal opens/closes
  useEffect(() => {
    if (activeService) {
      // Disable body scroll when modal is active
      document.body.style.overflow = "hidden";
    } else {
      // Enable body scroll when modal is closed
      document.body.style.overflow = "auto";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeService]);

  const services = [
    {
      id: "food",
      title: "Food",
      description: "Customizable Event Catering",
      image: "/svbanquethalls/food.png",
      details: [
        "Vendor Flexibility: Bring your own vendors for catering.",
        "Kitchen Access: Fully equipped kitchens available for meal preparation.",
        "In-House Catering: Delightful menu crafted by professional chefs.",
      ],
    },
    {
      id: "events",
      title: "Events",
      description: "Freedom to celebrate your way.",
      image: "path-to-events-image.jpg",
      details: [
        "Decorator Options: Bring your own or choose from our in-house decorators.",
        "Photography Flexibility: Choose your photographer or use our in-house services.",
        "No Restrictions: Plan and celebrate any event with ease.",
      ],
    },
    {
      id: "venues",
      title: "Our Venues",
      description: "Elegant spaces to elevate every celebration.",
      image: "path-to-venues-image.jpg",
      details: [
        "2 A/C Halls: Elegant and comfortable with premium sound systems.",
        "1 Non-A/C Hall: Spacious and versatile with charming decor.",
        "Terrace Space: Perfect for evening gatherings with ambient lighting.",
      ],
    },
    {
      id: "parking",
      title: "Parking",
      description: "Effortless parking facilities for all events.",
      image: "path-to-parking-image.jpg",
      details: [
        "Valet Parking: Available upon request for ease and convenience.",
        "Cellar Parking: Limited parking space for select vehicles.",
        "Street Parking: Ample parking space for guests.",
      ],
    },
    {
      id: "accessibility",
      title: "Accessibility",
      description: "Inclusive spaces for all attendees.",
      image: "path-to-accessibility-image.jpg",
      details: [
        "Elevator Access: Convenient elevators for all guests.",
        "Wheelchair-Friendly: Fully accessible spaces for wheelchairs.",
        "Thoughtful Steps Design: Easy navigation for everyone.",
      ],
    },
    {
      id: "amenities",
      title: "Amenities",
      description: "Ensuring a seamless and comfortable experience.",
      image: "path-to-amenities-image.jpg",
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
          <div
            key={service.id}
            className="service-card"
            onClick={() => setActiveService(service)}
          >
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <div className="service-content">
              {service.id === "food" && (
                <GiMeal className="service-icon" /> // Hot dish icon for Food service
              )}
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button
                className="button learn-now-button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveService(service);
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {activeService && (
        <div className="modal-overlay" onClick={() => setActiveService(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={activeService.image}
              alt={activeService.title}
              className="modal-image"
            />
            <h3>{activeService.title}</h3>
            <p>{activeService.description}</p>
            <ul>
              {activeService.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            <button
              className="button close-button"
              onClick={() => setActiveService(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
