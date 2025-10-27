import { Controller, Get } from '@nestjs/common';

@Controller('concepts-manual')
export class ConceptsManualController {
  @Get()
  getConceptsManual(): string {
    return "This is the 'Concepts Manual' endpoint";
  }
}
