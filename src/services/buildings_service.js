import { BASE_URI } from "../config";
import apiFetch from "./api_fetch";
const fetch = require("node-fetch");

export function getBuildings() {
  // return fetch(BASE_URI + "/buildings")
  //   .then((data) => data)
  //   .catch((err) => console.error(err));

  // return fetch(BASE_URI + "/buildings", {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // })
  //   .then((data) => data)
  //   .catch((err) => console.error(err));

  return apiFetch("/buildings").then((data) => {
    return data;
  });
}
