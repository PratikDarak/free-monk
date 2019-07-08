import * as AuthActions from './auth.actions';

export interface State {
    token: string;
    isAuthenticated: boolean;
}

const initialState: State = {
    token: null,
    isAuthenticated: false
};

export function authReducer(state = initialState, action: AuthActions.actions) {
    switch(action.type) {
        case AuthActions.SIGN_UP:
        case AuthActions.SIGN_IN:
            return {
                ...state,
                isAuthenticated: true
            }
    
        case AuthActions.LOG_OUT:
            return {
                ...state,
                token: null,
                isAuthenticated: false
            }

        case AuthActions.SET_TOKEN:
            return {
                ...state,
                token: action.payload
            }

        default:
            return state;
    }
}