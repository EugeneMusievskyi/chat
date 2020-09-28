package com.bsa.chat.message;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.UUID;

@Data
@AllArgsConstructor
public class MessageDeleteDto {
    private UUID id;
}
