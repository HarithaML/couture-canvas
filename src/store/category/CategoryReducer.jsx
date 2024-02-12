import CATEGORY_ACTION_TYPES from "../category/CategoryActionTypes";


export const CATEGORY_INITIAL_STATE = {
    categoriesMap: {},
    currentCategory: '',
};

export const CategoryReducer = (state = CATEGORY_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case CATEGORY_ACTION_TYPES.SET_CATEGORY_MAP:
            return { ...state, categoriesMap: payload };
        case CATEGORY_ACTION_TYPES.SET_CURRENT_CATEGORY:
            return { ...state, currentCategory: payload };
        default:
            return state;
    }
};