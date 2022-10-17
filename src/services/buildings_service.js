import apiFetch from "./api_fetch";

export function getBuildings() {
  return apiFetch("/buildings").then((data) => {
    return data;
  });
}

export function showBuilding(id) {
  return apiFetch("/buildings/" + id).then((data) => {
    return data;
  });
}
