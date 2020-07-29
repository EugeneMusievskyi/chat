package com.bsa.chat.message.dto;

import com.bsa.chat.message.Message;
import lombok.Builder;
import lombok.Getter;

import java.util.Date;
import java.util.UUID;

@Getter
@Builder
public class MessageDto {
    private final UUID id;
    private final UUID userId;
    private final String avatar;
    private final String user;
    private final String text;
    private final Date createdAt;
    private final Date editedAt;


    public static MessageDto fromEntity(Message message) {
        if (message == null) {
            return null;
        }

        return MessageDto.builder()
                .id(message.getId())
                .userId(message.getUser().getId())
                .avatar(message.getUser().getAvatarLink())
                .user(message.getUser().getUsername())
                .text(message.getText())
                .createdAt(message.getCreatedAt())
                .editedAt(message.getEditedAt())
                .build();
    }
}
