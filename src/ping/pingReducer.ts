import { PING, PONG } from './pingActionTypes';

export const pingStoreKey = 'ping';

export interface Ping {
    isPinging: boolean;
}

const pingReducer = (state = { isPinging: false }, action) => {
    switch (action.type) {
        case PING:
            return { ...state, isPinging: true };

        case PONG:
            return { ...state, isPinging: false };

        default:
            return state;
    }
};

export const pingReducerStore = {
    [pingStoreKey]: pingReducer
};
