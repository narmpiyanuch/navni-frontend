const ACCESS_TOKEN = "ACCESS_TOKEN";
const GOOGLE_TOKEN = "oauth2_ss::http://localhost:5173::1::DEFAULT::_ss_";

export const addAccessToken = (token) =>
  localStorage.setItem(ACCESS_TOKEN, token);
export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);
export const removeAccessToken = () =>
  localStorage.removeItem(ACCESS_TOKEN, GOOGLE_TOKEN);
