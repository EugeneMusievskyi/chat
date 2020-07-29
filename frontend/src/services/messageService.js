import callWebApi from "./webApiHelper";

export const getAllMessages = async () => {
    const response = await callWebApi({
        endpoint: '/',
        type: 'GET'
    });

    return response.json();
};

export const getMessage = async (id) => {
    const response = await callWebApi({
        endpoint: `/message/${id}`,
        type: 'GET'
    });

    return response.json();
};

export const saveMessage = async request => {
    const response = await callWebApi({
        endpoint: '/',
        type: 'POST',
        request
    });

    return response.json();
};

export const updateMessage = async request => {
    await callWebApi({
        endpoint: '/edit',
        type: 'PUT',
        request
    });
};

export const deleteMessage = async id => {
    await callWebApi({
        endpoint: `/${id}`,
        type: 'DELETE'
    })
};
