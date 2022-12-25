const reducer = (state, action) => {
    switch (action.type) {
        case "getstory":
            return {
                ...state,
                data: action.payload.data,
                noofpage: action.payload.noofpage,
            };
        case "postremove": {
            return {
                ...state,
                data: state.data.filter(element => {
                    return (element.objectID !== action.payload);
                })
            }
        }
        case "postsearch":{
            return{
                ...state,
                query:action.payload,
            }
        }
    }
    return state;
}

export default reducer;