import callWebApi from "../helpers/webApiHelper";

export const getAllUsers = async () => {
    const response = await callWebApi({
        endpoint: '/api/user/all',
        type: 'GET'
    });

    return response.json();
};

export const getUserById = async (id) => {
    const response = await callWebApi({
        endpoint: `/${id}`,
        type: 'GET'
    });

    return response.json();
};

export const createUser = async (request) => {
    const response = await callWebApi({
        endpoint: '/api/user',
        type: 'POST',
        request
    });

    return response.json();
};
