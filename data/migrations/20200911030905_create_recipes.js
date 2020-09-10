
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments()
      tbl.string('name').notNullable().index()
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
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
      tbl.integer('ingredients_id')
        .unsigned()
        .notNullable()
        .references('ingredients.id')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes_ingredients')
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
};
