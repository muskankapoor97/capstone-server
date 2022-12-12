/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("tenants").del();
  await knex("tenants").insert([
    {
      id: "2922c286-16cd-4d43-ab98-c79f698aeab0",
      first_name: "Param",
      last_name: "Aujila",
      unit_number: "210",
      rent: "$1400",
      contact_phone: "+1 (646) 123-1234",
      contact_email: "paujla@gmail.com",
    },
    {
      id: "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9",
      first_name: "Greame",
      last_name: "Lyon",
      unit_number: "211",
      rent: "$1400",
      contact_phone: "+1 (646) 123-1234",
      contact_email: "glyon@gmail.com",
    },
    {
      id: "90ac3319-70d1-4a51-b91d-ba6c2464408c",
      first_name: "Brad",
      last_name: "MacDonald",
      unit_number: "213",
      rent: "$1700",
      contact_phone: "+1 (646) 123-1234",
      contact_email: "bmcdonald@gmail.com",
    },
    {
      id: "bfc9bea7-66f1-44e9-879b-4d363a888eb4",
      first_name: "Gary",
      last_name: "Wong",
      unit_number: "214",
      rent: "$1700",
      contact_phone: "+1 (646) 123-1234",
      contact_email: "gwong@gmail.com",
    },
    {
      id: "89898957-04ba-4bd0-9f5c-a7aea7447963",
      first_name: "Sharon",
      last_name: "Ng",
      unit_number: "215",
      rent: "$1500",
      contact_phone: "+1 (646) 123-1234",
      contact_email: "sng@gmail.com",
    },
    {
      id: "ade0a47b-cee6-4693-b4cd-a7e6cb25f4b7",
      first_name: "Daniel",
      last_name: "Bachu",
      unit_number: "301",
      rent: "$1500",
      contact_phone: "+1 (646) 123-1234",
      contact_email: "dbachu@gmail.com",
    },
    {
      id: "bb1491eb-30e6-4728-a5fa-72f89feaf622",
      first_name: "Alana",
      last_name: "Thomas",
      unit_number: "315",
      rent: "$1700",
      contact_phone: "+1 (646) 123-1234",
      contact_email: "athomas@gmail.com",
    },
    {
      id: "150a36cf-f38e-4f59-8e31-39974207372d",
      first_name: "Vanessa",
      last_name: "Mendoza",
      unit_number: "401",
      rent: "$1400",
      contact_phone: "+1 (646) 123-1234",
      contact_email: "vmendoza@gmail.com",
    },
  ]);
};
