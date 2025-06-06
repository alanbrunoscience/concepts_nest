import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConceptsManualModule } from '../concepts-manual/concepts-manual.module';
import { ConceptsAutoModule } from '../concepts-auto/concepts-auto.module';

@Module({
  imports: [ConceptsManualModule, ConceptsAutoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
