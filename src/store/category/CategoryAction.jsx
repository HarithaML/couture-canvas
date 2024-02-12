import CATEGORY_ACTION_TYPES from "../category/CategoryActionTypes";
import { createAction } from '../../utils/Reducer';


export const setCategoriesMap = (categoriesMap) =>
    createAction(CATEGORY_ACTION_TYPES.SET_CATEGORY_MAP, categoriesMap);

export const setCurrentCategory = (category) =>
    createAction(CATEGORY_ACTION_TYPES.SET_CURRENT_CATEGORY, category);