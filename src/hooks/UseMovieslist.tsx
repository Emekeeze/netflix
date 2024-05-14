import { useReducer, useEffect, useState } from "react";
import axios from "axios";

interface State {
  data: Movie[] | null;
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
  loading: true,
};

enum ActionType {
  LOADING,
  SUCCESS,
  FAILED,
}

type Action =
  | { type: ActionType.LOADING }
  | { type: ActionType.SUCCESS; payload: Movie[] }
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

const UseMoviesList = (offset: number) => {
  const [{ data, loading, error }, dispatch] = useReducer(reducer, initialState);
  const [count, setCount] = useState<number | null>(null); // Moved count inside the hook

  useEffect(() => {
    fetchMoviesLists();
  }, [offset]); // Include offset in the dependency array

  const fetchMoviesLists = async () => {
    if (data && count && data.length >= count) return;
    dispatch({ type: ActionType.LOADING });
    try {
      const response = await axios.get(`http://localhost:3000/Movie/List?offset=${offset}`); // Corrected URL
      const moviesData = data ? [...data, ...response.data.Movie] : response.data.Movie;
      setCount(response.data.count);
      dispatch({ type: ActionType.SUCCESS, payload: moviesData });
    } catch (error) {
      dispatch({ type: ActionType.FAILED, payload: "Something went wrong" });
    }
  };

  return { data, loading, error };
};

export default UseMoviesList;
