import React from 'react';
import { firebaseInit } from '../firebase';


export const SIGN_UP = "SIGN_UP";

export function signUp(email, password) {
    return async (dispatch) => {
        try {
            const getLogin = await firebaseInit.auth().createUserWithEmailAndPassword(email, password);
            dispatch({
                type: SIGN_UP,
                payload: getLogin,
            })
        } catch (error) {
            console.log(error);
        }
    }
}