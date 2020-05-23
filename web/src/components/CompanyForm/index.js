import React, { useState } from "react";
import "./styles.css";

function CompanyForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [sector, setSector] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({
      name,
      code,
      price,
      date,
      amount,
      sector,
    });

    setName("");
    setCode("");
    setPrice("");
    setDate("");
    setAmount("");
    setSector("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputRow">
        <div className="input-block">
          <label htmlFor="name">Nome da Empresa</label>
          <input
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="code">Código</label>
          <input
            name="code"
            id="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="price">R$</label>
          <input
            name="price"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>

      <div className="inputRow">
        <div className="input-block">
          <label htmlFor="date">Data de Aquisição</label>
          <input
            name="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="amount">Quantidade</label>
          <input
            name="amount"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="sector">Setor</label>
          <input
            name="sector"
            id="sector"
            value={sector}
            onChange={(e) => setSector(e.target.value)}
          />
        </div>
      </div>
      <div className="div-button">
        <button type="submit">SAVE</button>
      </div>
    </form>
  );
}

export default CompanyForm;
