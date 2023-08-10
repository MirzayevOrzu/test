import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
    MongooseModuleOptions,
    MongooseOptionsFactory,
} from '@nestjs/mongoose';
import { DatabaseConfigI } from '.';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
    constructor(private configService: ConfigService) {}

    createMongooseOptions(): MongooseModuleOptions {
        const dbConfig = this.configService.get<DatabaseConfigI>('database');
        return {
            user: dbConfig.user,
            pass: dbConfig.password,
            dbName: dbConfig.name,
            uri: `mongodb://${dbConfig.host}:${27017}`,
        };
    }
}
