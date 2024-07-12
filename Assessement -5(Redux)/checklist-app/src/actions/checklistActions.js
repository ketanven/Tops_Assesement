// actions/checklistActions.js

import { CHECK_ITEM, UNCHECK_ITEM } from "./types";


export const checkItem = (itemName) => ({
    type: CHECK_ITEM,
    payload: itemName,
});

export const uncheckItem = (itemName) => ({
    type: UNCHECK_ITEM,
    payload: itemName,
});
