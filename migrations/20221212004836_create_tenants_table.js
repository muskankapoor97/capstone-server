/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
    return knex.schema.createTable("tenants", (table) => {
      table.uuid("id").primary();
      table.string("first_name").notNullable();
      table.string("last_name").notNullable();
      table.string("unit_number").notNullable();
      table.string("rent").notNullable();
      table.string("contact_phone").notNullable();
      table.string("contact_email").notNullable();
      table.timestamps(true, true);
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable("tenants");
  };