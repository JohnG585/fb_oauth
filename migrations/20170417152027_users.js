exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments()
    // stuff here
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('users')
}
