exports.up = function (knex) {
  return knex.schema.createTable('words', table => {
    table.increments('id')
    table.string('word')
    table.string('pronounciation')
    table.string('definition')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('words')
}
