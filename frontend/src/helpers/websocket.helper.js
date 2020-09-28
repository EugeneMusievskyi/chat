import {env} from "../env";
import {getToken} from "./authorization.helper";
import * as StompJs from "@stomp/stompjs";
import {useCallback, useEffect, useState} from "react";

const client = new StompJs.Client({
    brokerURL: env.brokerURL,
    connectHeaders: {
        auth: getToken()
    },
     debug: function (str) {
        console.log(str);
    },
    reconnectDelay: 5000,
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000
});

client.activate();

const pendingTopics = new Map();

export const useStomp = (topic, callback) => {
    const [isConnected, setConnected] = useState(client.connected);
    client.onConnect = () => {
        setConnected(true);
        pendingTopics.delete(topic);
        for (const [topic, onMessage] of pendingTopics) {
            client.subscribe(`/topic/${topic}`, onMessage);
        }
        pendingTopics.clear();
    };

    const onMessage = useCallback((message) => {
        const body = JSON.parse(message.body);
        callback(body);
    }, [callback]);

    useEffect(() => {
        if (isConnected) {
            const s = client.subscribe(`/topic/${topic}`, onMessage);
            return () => !client.active && s.unsubscribe();
        } else {
            pendingTopics.set(topic, onMessage);
        }
    }, [isConnected, onMessage, topic]);
};

export const isWsConnected = () => client.connected;
