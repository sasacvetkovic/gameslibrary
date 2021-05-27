import axios from "axios";
import { gameDetailsURL, gameScreenshotURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });

  const detailData = await axios.get(gameDetailsURL(id), {
    params: {
      key: "c93163afc4e0467bb88766ebc71130d7",
    },
  });

  const screenshotData = await axios.get(gameScreenshotURL(id), {
    params: {
      key: "c93163afc4e0467bb88766ebc71130d7",
    },
  });

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenshotData.data,
    },
  });
};
