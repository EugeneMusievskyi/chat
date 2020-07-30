package com.bsa.chat.user.dto;

import com.bsa.chat.user.User;
import lombok.Builder;
import lombok.Getter;

import java.util.Date;
import java.util.UUID;

@Getter
@Builder
public class UserDto {
    private UUID id;
    private String username;
    private String avatarLink;
    private final Date createdAt;
    private final Date editedAt;

    public static UserDto fromEntity(User user) {
        if (user == null)
            return null;

        return UserDto.builder()
                .id(user.getId())
                .username(user.getUsername())
                .avatarLink(user.getAvatarLink())
                .createdAt(user.getCreatedAt())
                .editedAt(user.getEditedAt())
                .build();
    }

    public User toEntity() {
        return User.builder()
                .id(id)
                .username(username)
                .avatarLink(avatarLink)
                .createAt(createdAt)
                .editedAt(editedAt)
                .build();
    }
}
