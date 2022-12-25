const reducer = (state, action) => {
    switch (action.type) {
        case "getstory":
            return {
                ...state,
                data: action.payload.data,
                noofpage: action.payload.noofpage,
            };
    }
    return state;
}

export default reducer;