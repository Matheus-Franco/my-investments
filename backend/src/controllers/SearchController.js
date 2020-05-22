const Company = require("../models/Company");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
  async index(req, res) {
    const { sector } = req.query;

    const companiesArray = parseStringAsArray(sector);

    const companies = await Company.find({
      sector: {
        $in: companiesArray,
      },
    });

    return res.json({ companies });
  },
};
