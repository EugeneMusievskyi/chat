package com.bsa.chat.message.dto;

import lombok.Data;

import java.util.UUID;

@Data
public class MessageUpdateDto {
    private UUID id;
    private String body;
}
