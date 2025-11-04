import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceptsAutoService {
  getConceptsAuto(): string {
    return "This is the 'Concepts Auto' endpoint";
  }
}
