import React from "react";
import "./clients.css";
import { clients } from "../clients/client";
function Clients() {
  return (
    <div className="clientsContainer">
      <div>
        <h1 className="clientTitle">Our Clients</h1>
        <p className="clientSousTitle">
          We pride ourselves in being trusted and having the opportunity to work
          with leading companies in their respective fields.
        </p>
        <div className="containClientLogo">
          {clients.map((client, index) => {
            return (
              <div className="containlogo" key={index}>
                <img src={client.image} alt="client description" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Clients;
