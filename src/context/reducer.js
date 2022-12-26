const reducer = (state, action) => {
    switch (action.type) {
        case "setloading": {
            return {
                ...state,
                isLoading: true,
            }
        }
        case "getstory":
            return {
                ...state,
                data: action.payload.data,
                noofpages: action.payload.noofpage,
                isLoading: false,
            }
        case "postremove": {
            return {
                ...state,
                data: state.data.filter(element => {
                    return (element.objectID !== action.payload);
                }),
            }
        }
        case "postsearch": {
            return {
                ...state,
                query: action.payload,
            }
        }
        case "prevpage": {
            let pagenum = state.page - 1;
            if (pagenum <= 0) {
                pagenum = 0;
            }
            return {
                ...state,
                page: pagenum,
            }
        }
        case "nextpage": {
            let pagenum = state.page + 1;
            if (pagenum >= state.noofpage) {
                pagenum = 0;
            }
            return {
                ...state,
                page: pagenum,
            }

        }
    }
    return state;
}

export default reducer;