import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
    await knex('example').del();
    await knex('example').insert([{ name: 'Usmon' }, { name: 'Alisher' }]);
}
