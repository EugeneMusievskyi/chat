package com.bsa.chat.user;

import lombok.Builder;
import lombok.Getter;

import java.util.Date;
import java.util.UUID;

@Getter
@Builder
public class UserDto {
    private UUID id;
    private String name;
    private String avatarLink;
    private final Date createdAt;
    private final Date updatedAt;

    public static UserDto fromEntity(User user) {
        if (user == null)
            return null;

        return UserDto.builder()
                .id(user.getId())
                .name(user.getName())
                .avatarLink(user.getAvatarLink())
                .createdAt(user.getCreatedAt())
                .updatedAt(user.getUpdatedAt())
                .build();
    }
}
