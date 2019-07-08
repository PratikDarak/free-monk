import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as fromRecipe from '../../recipes/store/recipe.reducers';
import * as RecipeActions from '../store/recipe.actions';
import { Recipe } from '../recipe.model';

@Injectable()
export class RecipeEffects {
    @Effect()
    recipeFetch = this.actions$.pipe(
        ofType(RecipeActions.FETCH_RECIPES),
        switchMap((action: RecipeActions.FetchRecipes) => {
            return this.httpClient.get<Recipe[]>('https://my-recipe-cart.firebaseio.com/recipes.json')
            .pipe(
                map(
                    (recipes) => {
                        for(let recipe of recipes) {
                            if(!recipe['ingredients']) {
                                recipe['ingredients'] = [];
                            }
                        }
                        return {
                            type: RecipeActions.SET_RECIPES,
                            payload: recipes
                        };
                    }
                )
            )
        })
    );

    @Effect({dispatch: false})
    recipeStore = this.actions$.pipe(
        ofType(RecipeActions.STORE_RECIPES),
        withLatestFrom(this.store.select('recipes')),
        switchMap(([action, recipeState]) => {
            const request = new HttpRequest('PUT', 'https://my-recipe-cart.firebaseio.com/recipes.json', recipeState.recipes , {
                reportProgress: true
            });
            return this.httpClient.request(request);
        })
    );

    constructor(private actions$: Actions, private httpClient: HttpClient, private store: Store<fromRecipe.FeatureState>) {}
}