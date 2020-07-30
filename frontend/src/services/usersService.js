import callWebApi from "./webApiHelper";

export const getAllUsers = async () => {
    const response = await callWebApi({
        endpoint: '/user/all',
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

export const addUser = async (request) => {
    const response = await callWebApi({
        endpoint: '/user',
        type: 'POST',
        request
    })
};

export const editUser = async (request) => {
    const response = await callWebApi({
        endpoint: '/user/edit',
        type: 'POST',
        request
    });
};

export const deleteUser = async (id) => {
    await callWebApi({
        endpoint: `/${id}`,
        type: 'DELETE'
    })
};
