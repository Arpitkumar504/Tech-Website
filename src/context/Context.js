import React, { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios';
import reducer from './reducer.js'

const Appcontext = createContext();
const api = "http://hn.algolia.com/api/v1/search?query=react";
const intialstate = {
    data: [],
    isLoading: true,
    query: "react",
    page: 0,
    noofpages: 0,
};


const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, intialstate);

    const getdata = async (url) => {
        try {
            const datas = await axios.get(url);
            dispatch({
                type: "getstory",
                payload: {
                    data: datas.data.hits,
                    noofpage: datas.data.nbPages,
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    const removepost = (postid) => {
        dispatch({
            type: "postremove",
            payload: postid
        })
    }

    const searchpost = (searchdata) => {
        dispatch({
            type: "postsearch",
            payload: searchdata,
        })
    }

    const prev = () => {
        dispatch({
            type: "prevpage",
        })
    }

    const next = () => {
        dispatch({
            type: "nextpage",
        })
    }

    useEffect(() => {
        getdata(`${api}&query=${state.query}&page=${state.page}`);
    }, [state.query, state.page])
    return (
        <Appcontext.Provider value={{ ...state, removepost, searchpost, prev, next }}>
            {children}
        </Appcontext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(Appcontext);
}

export { AppProvider, Appcontext, useGlobalContext };