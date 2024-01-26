import React from "react";
import "./CustomerItem.css";
const CustomerItem = () => {
  return (
    <li className="customer-item">
      <img className="customer-avatar" src="https://i.pravatar.cc/300" />
      <span className="customer-name">Zafer Önalan</span>
    </li>
  );
};

export default CustomerItem;
