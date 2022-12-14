const knex = require("knex")(require("../knexfile"));

exports.index = (_req, res) => {
  knex("tenants")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving Tenants: ${err}`)
    );
};

exports.tenantsById = async (req, res) => {
  try {
    const { id } = req.params;
    const tenantsData = await knex("tenants").where("id", id);
    res.status(200).json({ tenantsData });
  } catch (err) {
    res.status(400).send(`Error retrieving data: ${err}`);
  }
};