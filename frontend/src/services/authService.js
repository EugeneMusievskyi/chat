import callWebApi from "../helpers/webApiHelper";

export const login = async request => {
    const response = await callWebApi({
        endpoint: '/api/auth/login',
        type: 'POST',
        request
    });
    return response.json();
};

export const createUser = async (request) => {
    const response = await callWebApi({
        endpoint: '/api/auth/register',
        type: 'POST',
        request
    });

    return response.json();
};

export const getCurrentUser = async () => {
    const response = await callWebApi({
        endpoint: '/api/user',
        type: 'GET'
    });
    return response.json();
};
