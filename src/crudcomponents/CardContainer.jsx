import React from "react";
import "./styles.css";

const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button>Read More...</button>
      </div>
    </div>
  );
};

const CardContainer = () => {
  const cards = [
    { image: "https://th.bing.com/th/id/OIP.G37tgeQqSNt7v2oPfj9ltQHaE7?w=247&h=180&c=7&r=0&o=5&pid=1.7", title: "Write title Here", description: "You can Add Description Here..." },
    { image: "https://th.bing.com/th/id/OIP.FEqv7YYMNjXtrVYqo7HHzAHaE7?w=277&h=185&c=7&r=0&o=5&pid=1.7", title: "Write title Here", description: "You can Add Description Here..." },
    { image: "https://th.bing.com/th/id/OIP.Tj_O8dodYgJr0pGJaqSBYgHaE8?w=275&h=185&c=7&r=0&o=5&pid=1.7", title: "Write title Here", description: "You can Add Description Here..." },
    { image: "https://th.bing.com/th/id/OIP.wg4R0mAD1_DQAII9hCM-8AHaDk?w=284&h=168&c=7&r=0&o=5&pid=1.7", title: "Write title Here", description: "You can Add Description Here..." }
  ];

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardContainer;
