import { ApolloDriverConfig } from '@nestjs/apollo';
import { GqlOptionsFactory } from '@nestjs/graphql';

export class GqlConfigService implements GqlOptionsFactory {
    createGqlOptions(): ApolloDriverConfig {
        return {
            autoSchemaFile: 'schema.gql',
            installSubscriptionHandlers: true,
            subscriptions: {
                'subscriptions-transport-ws': {
                    onConnect: (headersRaw: Record<string, unknown>) => {
                        const headers = Object.keys(headersRaw).reduce(
                            (dest, key) => {
                                dest[key.toLowerCase()] = headersRaw[key];
                                return dest;
                            },
                            {},
                        );
                        return {
                            req: {
                                headers: headers,
                            },
                        };
                    },
                },
            },
        };
    }
}
