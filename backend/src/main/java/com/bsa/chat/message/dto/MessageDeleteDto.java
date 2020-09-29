package com.bsa.chat.message.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.UUID;

@Data
@AllArgsConstructor
public class MessageDeleteDto {
    private UUID id;
}
