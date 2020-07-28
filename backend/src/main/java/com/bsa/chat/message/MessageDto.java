package com.bsa.chat.message;

import com.bsa.chat.user.UserDto;
import lombok.Builder;
import lombok.Getter;

import java.util.Date;
import java.util.UUID;

@Getter
@Builder
public class MessageDto {
    private final UUID id;
    private final UserDto userDto;
    private final String text;
    private final Date createdAt;
    private final Date updatedAt;


    public static MessageDto fromEntity(Message message) {
        if (message == null) {
            return null;
        }

        return MessageDto.builder()
                .id(message.getId())
                .userDto(UserDto.fromEntity(message.getUser()))
                .text(message.getText())
                .createdAt(message.getCreatedAt())
                .updatedAt(message.getUpdatedAt())
                .build();
    }
}
