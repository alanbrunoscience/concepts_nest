import { Module } from '@nestjs/common';
import { ConceptsAutoModule } from '../concepts-auto/concepts-auto.module';
import { ConceptsManualModule } from '../concepts-manual/concepts-manual.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConceptsManualModule, ConceptsAutoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
