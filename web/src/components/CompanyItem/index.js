import React from "react";
import "./styles.css";

function CompanyItem({ company }) {
  return (
    <li className="comp-info">
      <div className="first-column">
        <div>{company.name}</div>
        <div>{company.code}</div>
        <div>{company.sector}</div>
      </div>

      <div className="second-column">
        <div>{company.date}</div>
        <div>{company.amount}</div>
        <div>{company.price}</div>
      </div>
    </li>
  );
}

export default CompanyItem;
