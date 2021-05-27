import axios from "axios";
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchGamesURL,
} from "../api";

export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesURL(), {
    params: {
      key: `${process.env.REACT_APP_GAME_API}`,
    },
  });
  const newGamesData = await axios.get(newGamesURL(), {
    params: {
      key: `${process.env.REACT_APP_GAME_API}`,
    },
  });
  const upcomingData = await axios.get(upcomingGamesURL(), {
    params: {
      key: `${process.env.REACT_APP_GAME_API}`,
    },
  });
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchGamesURL(game_name), {
    params: {
      key: `${process.env.REACT_APP_GAME_API}`,
    },
  });

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};
