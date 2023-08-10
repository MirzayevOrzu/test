import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { KnexModuleOptions, KnexModuleOptionsFactory } from 'nestjs-knex';
import * as path from 'path';
import { cwd } from 'process';
import { DatabaseConfigI, NodeEnv } from '.';

@Injectable()
export class KnexConfigService implements KnexModuleOptionsFactory {
    constructor(private configService: ConfigService) {}

    createKnexModuleOptions(): KnexModuleOptions {
        const env = this.configService.get<NodeEnv>('env');
        const dbConfig = this.configService.get<DatabaseConfigI>('database');

        switch (env) {
            case NodeEnv.TEST:
                return {
                    config: {
                        client: 'sqlite3',
                        connection: {
                            filename: path.join(cwd(), 'test-db.sqlite'),
                        },
                        useNullAsDefault: true,
                    },
                };

            default:
                return {
                    config: {
                        client: dbConfig.type,
                        useNullAsDefault: true,
                        connection: {
                            host: dbConfig.host,
                            user: dbConfig.user,
                            password: dbConfig.password,
                            database: dbConfig.name,
                            port: dbConfig.port,
                        },
                    },
                };
        }
    }
}
