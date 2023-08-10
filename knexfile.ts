import type { Knex } from 'knex';
import * as dotenv from 'dotenv';

dotenv.config();

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
    development: {
        client: process.env.DB_TYPE,
        connection: {
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            port: parseInt(process.env.DB_PORT, 10),
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: 'database/migrations',
        },
        seeds: {
            directory: 'database/seeds',
        },
    },

    test: {
        client: 'sqlite3',
        connection: {
            filename: './test-db.sqlite',
        },
        useNullAsDefault: true,
        migrations: {
            tableName: 'knex_migrations',
            directory: 'database/migrations',
        },
        seeds: {
            directory: 'database/seeds',
        },
    },

    staging: {
        client: 'postgresql',
        connection: {
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            port: parseInt(process.env.DB_PORT, 10),
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
        seeds: {
            directory: 'database/seeds',
        },
    },

    production: {
        client: 'postgresql',
        connection: {
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            port: parseInt(process.env.DB_PORT, 10),
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: 'database/migrations',
        },
        seeds: {
            directory: 'database/seeds',
        },
    },
};

module.exports = config;
