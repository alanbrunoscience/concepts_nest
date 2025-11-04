import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceptsManualService {
  getConceptsManual(): string {
    return "This is the 'Concepts Manual' endpoint";
  }
}
