export enum FormErrorsEnum {
  missingName = 'error: you have to enter a name.',
  missingMeasureUnit = 'error: you have to select a measure unit.'
}

export namespace FormErrors {
  export function values() {
    return Object.keys(FormErrors).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }
}
