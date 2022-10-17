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

export function createBuilding(data) {
  return apiFetch("/buildings", { body: data }).then((data) => {
    return data;
  });
}

export function updateBuilding(data, id) {
  return apiFetch("/buildings/" + id, { method: "PATCH", body: data }).then(
    (data) => {
      return data;
    }
  );
}

export function deleteProperty(id) {
  return apiFetch("/buildings/" + id, { method: "DELETE" }).then((data) => {
    return data;
  });
}
