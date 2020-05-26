import React, { useState } from "react";
import "./styles.css";

import api from "../../services/api";

function CompanyItem({ company }) {
  async function handleDelete(id) {
    try {
      await api.delete(`companies/${id}`);
    } catch (err) {
      alert("Erro ao deletar, tente novamente.");
    }
  }

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
        <div>
          <button onClick={() => handleDelete(company._id)}>DEL</button>
        </div>
      </div>
    </li>
  );
}

export default CompanyItem;
