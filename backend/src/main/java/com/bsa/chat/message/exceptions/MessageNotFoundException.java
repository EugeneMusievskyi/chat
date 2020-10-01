package com.bsa.chat.message.exceptions;

public class MessageNotFoundException extends Exception {
    public MessageNotFoundException() {
    }

    public MessageNotFoundException(String message) {
        super(message);
    }
}
