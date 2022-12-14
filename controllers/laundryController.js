const knex = require("knex")(require("../knexfile"));

exports.index = (_req, res) => {
  knex("laundry")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving Laundry info: ${err}`)
    );
};

exports.laundryById = async (req, res) => {
  try {
    const { id } = req.params;
    const laundryData = await knex("laundry").where("id", id);
    res.status(200).json({ laundryData });
  } catch (err) {
    res.status(400).send(`Error retrieving data: ${err}`);
  }
};

exports.updateLaundry = (req, res) => {
  const obj = {
    id: req.body.id,
    name:req.body.name,
    type:req.body.type,
    status:req.body.status,
  };
  knex("laundry")
    .update(obj)
    .where({ id: req.params.id })
    .then((_data) => {
      knex("laundry")
        .where({ id: req.params.id })
        .then((data) => {
          res.status(200).json(data[0]);
        });
    })
    .catch((err) =>
      res.status(400).send(`Error Booking Laundry ${req.params.id} ${err}`)
    );
};