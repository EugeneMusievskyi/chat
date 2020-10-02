export const setToken = token => {
    localStorage.setItem("CHAT_TOKEN", token);
    window.location.reload();
};

export const getToken = () => localStorage.getItem("CHAT_TOKEN");

export const useAuth = () => !!localStorage.getItem("CHAT_TOKEN");

export const logout = () => {
    localStorage.removeItem("CHAT_TOKEN");
    window.location.reload();
};
