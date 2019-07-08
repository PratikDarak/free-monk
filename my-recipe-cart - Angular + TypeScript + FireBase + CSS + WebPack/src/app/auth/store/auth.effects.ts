import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, mergeMap, tap } from 'rxjs/operators';
import { from } from 'rxjs';

import * as AuthActions from '../store/auth.actions';
import * as firebase from 'firebase';

@Injectable()
export class AuthEffects {
    @Effect()
    authSignup = this.actions$.pipe(
        ofType(AuthActions.TRY_SIGNUP),
        map((action: AuthActions.TrySignup) => {
            return action.payload;
        }),
        switchMap((authData: {username: string, password: string}) => {
            return from(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
        }),
        switchMap(() => {
            return from(firebase.auth().currentUser.getIdToken());
        }),
        mergeMap((token: string) => {
            this.router.navigate(['/']);
            return [
                {
                    type: AuthActions.SIGN_UP
                },
                {
                    type: AuthActions.SET_TOKEN,
                    payload: token
                }
            ];
        })
    );

    @Effect()
    authSignin = this.actions$.pipe(
        ofType(AuthActions.TRY_SIGNIN),
        map((action: AuthActions.TrySignIn) => {
            return action.payload;
        }),
        switchMap((authData: {username: string, password: string}) => {
            return from(firebase.auth().signInWithEmailAndPassword(authData.username, authData.password));
        }),
        switchMap(() => {
            return from(firebase.auth().currentUser.getIdToken());
        }),
        mergeMap((token: string) => {
            this.router.navigate(['/']);
            return [
                {
                    type: AuthActions.SIGN_IN
                },
                {
                    type: AuthActions.SET_TOKEN,
                    payload: token
                }
            ];
        })
    );

    @Effect({dispatch: false})
    authLogout = this.actions$.pipe(
        ofType(AuthActions.LOG_OUT),
        tap(() => {
            this.router.navigate(['/']);
            firebase.auth().signOut();
        })
    );

    constructor(private actions$: Actions, private router: Router) {}
}