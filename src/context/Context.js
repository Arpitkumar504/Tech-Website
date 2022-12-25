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
    nbpages: 0,
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
                    noofpage: datas.nbPages,
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

    useEffect(() => {
        getdata(`${api}&query=${state.query}`);
    }, [state.query])
    return (
        <Appcontext.Provider value={{ ...state, removepost, searchpost }}>
            {children}
        </Appcontext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(Appcontext);
}

export { AppProvider, Appcontext, useGlobalContext };