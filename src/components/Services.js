import React, { useState } from "react";
import { GiMeal } from "react-icons/gi"; // Icon for Food
import "./Services.css";

const Services = () => {
  const [activeService, setActiveService] = useState(null);

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
    // Add more services as needed
  ];

  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        {services.map((service) => (
          <div
            key={service.id}
            className={`service-card ${
              activeService === service.id ? "active" : ""
            }`}
            onClick={() =>
              setActiveService(activeService === service.id ? null : service.id)
            }
          >
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <div className="service-content">
              {service.id === "food" && (
                <GiMeal className="service-icon" /> // Icon for Food
              )}
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
            {activeService === service.id && (
              <div className="service-details">
                <ul>
                  {service.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
