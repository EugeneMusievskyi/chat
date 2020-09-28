package com.bsa.chat.notification;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

@Service
public class NotificationService {
    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    public <T> void sendMessageToAllUsers(String topic, T payload) {
        simpMessagingTemplate.convertAndSend("/topic/" + topic, payload);
    }
}
