export enum DifficultyEnum {
  easy = 'Easy',
  middle = 'Middle',
  hard = 'Hard'
}

export namespace Difficulty {
  export function values() {
    return Object.keys(DifficultyEnum).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }
}
