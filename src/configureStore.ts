import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { pingReducerStore } from './ping';
import { pingEpic } from './ping';

const rootEpic = combineEpics(
    pingEpic
);

const rootReducer = combineReducers({
    ...pingReducerStore
});

const epicMiddleware = createEpicMiddleware(rootEpic);

export default function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(
        epicMiddleware
      )
    )
  );
  return store;
}