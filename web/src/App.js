import React, { useEffect, useState } from "react";
import api from "./services/api";

import "./global.css";
import "./App.css";
import "./Header.css";

import CompanyItem from "./components/CompanyItem";
import CompanyForm from "./components/CompanyForm";

function App() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function loadCompanies() {
      const response = await api.get("/companies");

      setCompanies(response.data);
    }

    loadCompanies();
  }, []);

  async function handleAddCompany(data) {
    const response = await api.post("/companies", data);

    setCompanies([...companies, response.data]);
  }

  return (
    <div id="app">
      <header></header>
      <aside>
        <CompanyForm onSubmit={handleAddCompany} />
      </aside>

      <main>
        <ul>
          {companies.map((company) => (
            <CompanyItem key={company._id} company={company} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
