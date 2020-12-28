export enum RecipesCategoriesEnum {
  miseEnBouche = 'Mise en bouche',
  entree = 'Entrée',
  plat = 'Plat',
  dessert = 'Dessert'
}

export namespace RecipesCategories {

  export function values() {
    return Object.keys(RecipesCategoriesEnum).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }
}
