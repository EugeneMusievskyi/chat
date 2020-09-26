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
    private final String body;
    private final Date createdAt;
    private final Date editedAt;


    public static MessageDto fromEntity(Message message) {
        if (message == null) {
            return null;
        }

        var messageDtoBuilder = MessageDto.builder()
                .id(message.getId())
                .body(message.getBody())
                .createdAt(message.getCreatedAt())
                .editedAt(message.getEditedAt());

        if (message.getUser() != null) {
            messageDtoBuilder
                    .userId(message.getUser().getId())
                    .avatar(message.getUser().getAvatarLink())
                    .user(message.getUser().getUsername());
        }

        return messageDtoBuilder.build();
    }
}
