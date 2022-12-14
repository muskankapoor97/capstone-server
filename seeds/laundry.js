/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('laundry').del()
  await knex('laundry').insert([
    {
      id: "W1",
     name: "washer",
     type:"green",
     status:"Available",
    },
    {
      id: "W2",
     name: "washer",
     type:"green",
     status:"Available",
    },
    {
      id: "W3",
     name: "washer",
     type:"red",
     status:"Running",
    },
    {
      id: "W4",
     name: "washer",
     type:"green",
     status:"Available",
    },
    {
      id: "W5",
     name: "washer",
     type:"red",
     status:"Running",
    },
    {
      id: "W6",
     name: "washer",
     type:"green",
     status:"Available",
    },
    
    {
      id: "D1",
     name: "dryer",
     type:"red",
     status:"Running",
    },
    {
      id: "D2",
     name: "dryer",
     type:"red",
     status:"Running",
    },
    {
      id: "D3",
     name: "dryer",
     type:"green",
     status:"Available",
    },
    {
      id: "D4",
     name: "dryer",
     type:"green",
     status:"Available",
    },
    {
      id: "D5",
     name: "dryer",
     type:"green",
     status:"Available",
    },
    {
      id: "D6",
     name: "dryer",
     type:"red",
     status:"Running",
    },
    
  ]);
};
