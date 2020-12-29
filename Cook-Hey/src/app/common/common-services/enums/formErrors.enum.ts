export enum FormErrorsEnum {
  missingName = 'error: you have to enter a name.',
  missingMeasureUnit = 'error: you have to select a measure unit.',
  missingTitle = 'error: you have to enter a title.',
  missingCategory = 'error: you have to select a category.',
  missingAuthor = 'error: you have to enter an author name.',
  missingDuration = 'error: you have to enter a valid minutes number.',
  missingDifficulty = 'error: you have to select a difficulty level.',
  missingPersonNumber = 'error: you have to enter a number of person.',
}

export namespace FormErrors {
  export function values() {
    return Object.keys(FormErrors).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }
}
