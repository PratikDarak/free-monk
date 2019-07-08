import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { switchMap, take } from 'rxjs/operators';

import * as fromApp from '../store/app.reducers';
import * as fromAuth from '../auth/store/auth.reducers';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private store: Store<fromApp.AppState>) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Intercepted!', req);
        return this.store.select('auth').pipe(
            take(1), // We execute this only once as selecting the 'auth' from store generates an ongoing subscription which is triggered everytime the state it changed.
            switchMap((authState: fromAuth.State) => {
                const copiedReq = req.clone({params: new HttpParams().set('auth', authState.token)});
                return next.handle(copiedReq);        
            })
        )
    }
}