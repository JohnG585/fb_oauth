exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments()
    table.text('name').notNullable().defaultTo('')
    table.text('email').notNullable().defaultTo('')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('users')
}
