import { CacheModuleOptions, CacheOptionsFactory } from '@nestjs/common';

export class CacheConfigService implements CacheOptionsFactory {
    createCacheOptions(): CacheModuleOptions {
        return {
            isGlobal: true,
            ttl: 60 * 60, // 1 hour
        };
    }
}
