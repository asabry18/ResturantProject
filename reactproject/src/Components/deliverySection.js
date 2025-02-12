import React from "react";

const DeliverySection = () => {
  return (
    <section className="deliverySection">
      <div className="deliveryInfoPhoto">
        <img src="/info-img-photos/infoSection.png" alt="Info Section" />
      </div>
      <div className="deliveryInfo">
        <h1>Fastest Food Delivery in City</h1>
        <p>
          Our visual designer lets you quickly and of drag a down your way to
          custom apps for both keep desktop.
        </p>
        <div className="deliveryOptions">
          <div className="option">
            <img src="/info-img-photos/icon (1).png" alt="photoIcon" />
            <p>Delivery within 30 minutes</p>
          </div>
          <div className="option">
            <img src="/info-img-photos/icon (2).png" alt="photoIcon" />
            <p>Best Offer & Prices</p>
          </div>
          <div className="option">
            <img src="/info-img-photos/icon.png" alt="photoIcon" />
            <p>Online Services Available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
