import callWebApi from "../helpers/webApiHelper";

export const getAllMessages = async () => {
    const response = await callWebApi({
        endpoint: '/api/messages',
        type: 'GET'
    });

    return response.json();
};

export const getMessage = async (id) => {
    const response = await callWebApi({
        endpoint: `api/messages/${id}`,
        type: 'GET'
    });

    return response.json();
};

export const saveMessage = async request => {
    const response = await callWebApi({
        endpoint: 'api/messages',
        type: 'POST',
        request
    });

    return response.json();
};

export const updateMessage = async request => {
    await callWebApi({
        endpoint: 'api/messages/edit',
        type: 'PUT',
        request
    });
};

export const deleteMessage = async id => {
    await callWebApi({
        endpoint: `/api/messages/${id}`,
        type: 'DELETE'
    })
};
