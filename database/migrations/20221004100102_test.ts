import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('example', (table) => {
        table.increments('id');
        table.string('name');
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('example');
}
