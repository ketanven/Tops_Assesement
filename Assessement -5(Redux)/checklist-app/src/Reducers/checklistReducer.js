
import { CHECK_ITEM, UNCHECK_ITEM } from "../actions/types";




const initialState = {
    checkedItems: {},
};

const checklistReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_ITEM:
            return {
                ...state,
                checkedItems: {
                    ...state.checkedItems,
                    [action.payload]: true,
                },
            };
        case UNCHECK_ITEM:
            const { [action.payload]: deletedItem, ...remainingItems } = state.checkedItems;
            return {
                ...state,
                checkedItems: remainingItems,
            };
        default:
            return state;
    }
};

export default checklistReducer;
