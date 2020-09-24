import { createRoutine } from 'redux-saga-routines';

export const registerRoutine = createRoutine("SIGN_UP");
export const loadUserRoutine = createRoutine("USER:LOAD");
export const loginRoutine = createRoutine("USER:SET");
export const loadCurrentUserRoutine = createRoutine('USER:LOAD_CURRENT');
