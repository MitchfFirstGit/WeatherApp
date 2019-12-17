import {
    SET_MENU_VISIBILITY
} from "../actions/constants";

export default (state = false, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_MENU_VISIBILITY:
            return payload.value
        default:
            return state
    }
};
