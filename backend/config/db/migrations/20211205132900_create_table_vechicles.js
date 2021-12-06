
exports.up = function(knex) {
    return knex.schema.createTable('vehicles', table => {
        table.increments("id").primary()
        table.string('license_plate').notNull().unique()
        table.string('brand').notNull()
        table.string('model').notNull()
        table.string('version').notNull()
        table.integer('year').notNull()

    })  
};

exports.down = function(knex) {
    return knex.schema.dropTable('vehicles');  
};
