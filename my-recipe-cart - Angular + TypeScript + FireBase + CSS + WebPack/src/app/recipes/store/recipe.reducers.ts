import * as RecipeActions from './recipe.actions';
import * as fromApp from '../../store/app.reducers';

import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';

export interface FeatureState extends fromApp.AppState {
    recipes: State
}

export interface State {
    recipes: Recipe[]
}

export const initialState = {
    recipes: [
        new Recipe(
            "Mumbai Vada Pav",
            "Very tasty and mouth watering Mumbai Vada Pav!",
            "https://upload.wikimedia.org/wikipedia/commons/4/4e/Vada_Pav-Indian_street_food.JPG",
            [
                new Ingredient('Vada', 1),
                new Ingredient('Pav', 1),
                new Ingredient('Chillies', 4)
            ]
        ),
        new Recipe(
            "Kolhapuri Misal",
            "The Original Misal!",
            "https://img-global.cpcdn.com/001_recipes/3b8bfe596107fe6b/751x532cq70/kolhapuri-misal-pav-recipe-recipe-main-photo.jpg",
            [
                new Ingredient('Misal', 1),
                new Ingredient('Bread', 2),
                new Ingredient('Namkeen', 1),
                new Ingredient('Masala Chaas', 2)
            ]
        )
        ]
};

export function RecipeReducer(state = initialState, action: RecipeActions.actions) {
    switch(action.type) {
        case RecipeActions.SET_RECIPES:
            return {
                ...state,
                recipes: [...action.payload]
            }

        case RecipeActions.ADD_RECIPE:
            return {
                ...state,
                recipes: [...state.recipes, action.payload]
            }

        case RecipeActions.UPDATE_RECIPE:
            const recipes = state.recipes;
            recipes[action.payload.index] = action.payload.newRecipe;
            return {
                ...state,
                recipes: recipes
            }

        case RecipeActions.DELETE_RECIPE:
            const oldRecipes = state.recipes;
            oldRecipes.splice(action.payload, 1);
            return {
                ...state,
                recipes: oldRecipes
            }

        default:
            return state;
    }
}