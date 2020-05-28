const { Router } = require("express");

const CompanyController = require("./controllers/CompanyController");
const SearchController = require("./controllers/SearchController");

const routes = Router();

routes.post("/companies", CompanyController.store);
routes.get("/companies", CompanyController.index);

routes.delete("/companies/:id", CompanyController.delete);
routes.put("/companies/:id", CompanyController.update);

routes.get("/searchCompanies", SearchController.index);

module.exports = routes;
