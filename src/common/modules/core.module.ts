import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { KnexModule } from 'nestjs-knex';
import configuration from '../config';
import { CacheConfigService } from '../config/cache.config';
import { GqlConfigService } from '../config/graphql.config';
import { KnexConfigService } from '../config/knex.config';
import { MongooseConfigService } from '../config/mongose.config';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration],
        }),
        CacheModule.registerAsync({
            useClass: CacheConfigService,
        }),
        MongooseModule.forRootAsync({
            useClass: MongooseConfigService,
        }),
        GraphQLModule.forRootAsync<ApolloDriverConfig>({
            driver: ApolloDriver,
            useClass: GqlConfigService,
        }),
        KnexModule.forRootAsync({
            useClass: KnexConfigService,
        }),
    ],
})
export class CoreModules {}
