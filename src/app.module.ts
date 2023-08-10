import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModules } from './common/modules/core.module';
import { RecipesModule } from './common/recipes-gql/recipes.module';

@Module({
    imports: [CoreModules, RecipesModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
