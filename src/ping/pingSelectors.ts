import { Ping, pingStoreKey } from './pingReducer';

type AppState = {
    [pingStoreKey]: Ping;
};

export function getIsPinging(state: AppState) {
    return state[pingStoreKey].isPinging;
}
