import { Controller, Get } from '@nestjs/common';

@Controller('concepts-auto')
export class ConceptsAutoController {
  @Get()
  getConceptsAuto(): string {
    return "This is the 'Concepts Auto' endpoint";
  }
}
