export const setToken = token => localStorage.setItem("CHAT_TOKEN", token);

export const useAuth = () => !!localStorage.getItem("CHAT_TOKEN");
