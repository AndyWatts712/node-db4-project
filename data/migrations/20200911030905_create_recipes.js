
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments()
      tbl.string('name').notNullable()
      tbl.string('steps')
  })
  .createTable('ingredients', tbl => {
      tbl.increments()
      tbl.string('name').notNullable().index()
  })
  .createTable('recipes_ingredients', tbl => {
      tbl.increments()
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipes.id')
        .onUpdate('CASCADE')
      tbl.integer('ingredients_id')
        .unsigned()
        .notNullable()
        .references('ingredients.id')
        .onUpdate('CASCADE')
      tbl.float('qty')
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
