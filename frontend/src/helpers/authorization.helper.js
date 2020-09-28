export const setToken = token => localStorage.setItem("CHAT_TOKEN", token);

export const getToken = () => localStorage.getItem("CHAT_TOKEN");

export const useAuth = () => !!localStorage.getItem("CHAT_TOKEN");
