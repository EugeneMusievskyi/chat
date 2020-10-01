import callWebApi from "../helpers/webApiHelper";

export const getChatInfo = async () => {
    const response = await callWebApi({
        endpoint: "/api/chatInfo",
        type: "GET"
    });

    return response.json();
};
