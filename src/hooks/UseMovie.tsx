import { useReducer, useEffect } from "react";
import axios from "axios";

interface State {
    data: Movie | null;
    error: string | null;
    loading: boolean;
}

interface Movie {
    id: string;
    Title: string;
    Description: string;
    Duration: string;
    Genre: string;
    thumbnailUrl: string;
    videoUrl: string;
    
}

const initialState: State = {
    data: null,
    error: null,
    loading: false
};

enum ActionType {
    LOADING,
    SUCCESS,
    FAILED
}

type Action =
    | { type: ActionType.LOADING }
    | { type: ActionType.SUCCESS; payload: Movie }
    | { type: ActionType.FAILED; payload: string };

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case ActionType.LOADING:
            return { ...state, loading: true, error: null };
        case ActionType.SUCCESS:
            return { ...state, loading: false, data: action.payload, error: null };
        case ActionType.FAILED:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

const UseMovie = (id:string) => {
    const [{data, loading, error}, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetchMovie();
      }, []);
      
      const fetchMovie = async () => {
    dispatch({ type: ActionType.LOADING });
    try {
        const response = await axios.get(`http://localhost:3000/Movie/${id}`);
        dispatch({ type: ActionType.SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: ActionType.FAILED, payload:"something went wrong" });
    }
};

 
    return {data, loading, error}
};

export default UseMovie;
