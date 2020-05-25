const axios = require("axios");
const Company = require("../models/Company");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
  async index(req, res) {
    const companies = await Company.find();

    return res.json(companies);
  },

  async store(req, res) {
    const { name, code, price, date, amount, sector } = req.body;

    let company = await Company.findOne({ name });

    const companiesArray = parseStringAsArray(sector);

    if (!company) {
      company = await Company.create({
        name,
        code,
        price,
        date,
        amount,
        sector,
      });
    }

    return res.json(company);
  },

  async delete(req, res) {
    await Company.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  },
};
