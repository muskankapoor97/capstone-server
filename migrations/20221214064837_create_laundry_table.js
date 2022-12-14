/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
    return knex.schema.createTable("laundry", (table) => {
      table.string("id").primary();
      table.string("name").notNullable();
      table.string("type").notNullable();
      table.string("status").notNullable();
      table.timestamps(true, true);
    });
  };
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
   exports.down = function (knex) {
    return knex.schema.dropTable("laundry");
  };