import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
// import { saveState } from './localStorage/localStorage';
const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

// store.subscribe(() => {
//     saveState(store.getState().favoriteCitiesList);
// });

export default store;