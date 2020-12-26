export enum MeasureUnitEnum {
  gramme = 'gramme',
  centilitre = 'centilitre',
  piece = 'pièce'
}
export namespace MeasureUnits {

  export function values() {
    return Object.keys(MeasureUnitEnum).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }
}
