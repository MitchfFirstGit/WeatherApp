import {
    SET_DARK_MODE
} from "../actions/constants";

export default (state = false, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_DARK_MODE:
            return payload.mode
        default:
            return state
    }
};
