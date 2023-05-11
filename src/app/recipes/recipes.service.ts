import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 1,
      title: 'VadaPav',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Vada_Pav-Indian_street_food.JPG/1920px-Vada_Pav-Indian_street_food.JPG',
      ingredients: ['Paav', 'Potato', 'Flour', 'Chutney'],
    },
    {
      id: 2,
      title: 'Shawarma',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Al-Naser_Restaurant.jpg/300px-Al-Naser_Restaurant.jpg',
      ingredients: [
        'Chicken Meat',
        'Shawarama Bread',
        'Potato Fries',
        'Chutney',
      ],
    },
  ];

  constructor() {}

  getAllRecipes() {
    return [...this.recipes]; //Deep copy
  }

  getRecipe(recipeId: number) {
    return {
      ...this.recipes.find((recipe) => {
        return recipeId === recipe.id;
      }),
    };
  }

  deleteRecipe(recipeId: number) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    })
  }
}
