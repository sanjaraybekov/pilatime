import axios from "axios";
import { dispatch } from "../store/index";
import { logoutUser } from "../actions/user";

export const getMainUrl = () => {
  return `http://146.120.18.92:8080`;
};

async function mainCaller(path, method = "GET", data = null, headers = {}) {
  const options = {
    url: `${getMainUrl()}/${path}`,
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
      ...headers,
    },
    method,
    withCredentials: false,
  };
  if (data) {
    options.data = data;
  }

  const res = await axios(options).catch((err) => {
    if (err.response.status === 402) {
    } else if (err.response.status === 401) {
      // dispatch(logoutUser());
      // window.location.replace("/");
    }
    throw err;
  });
  return res.data;
}

export async function pilaAuthUser(password, username) {
  const { data } = await axios
    .post(
      getMainUrl() + "/api/authenticate",
      {
        username: username,
        password: password,
      },
      {
        headers: {
          "content-type": "application/json",
        },
      }
    )
    .catch((err) => {
      console.log(err);
    });

  return data.data;
}

export default mainCaller;
