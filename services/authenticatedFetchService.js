export const authorisedFetchGet = (url, token) => {
  return fetch(url, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: token,
    }),
    credentials: "same-origin",
  }).then((res) => res.json());
};
