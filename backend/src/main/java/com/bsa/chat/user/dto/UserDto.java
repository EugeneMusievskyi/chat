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
    private String name;
    private String password;
    private String avatarLink;
    private final Date createdAt;
    private final Date editedAt;

    public static UserDto fromEntity(User user) {
        if (user == null)
            return null;

        return UserDto.builder()
                .id(user.getId())
                .name(user.getUsername())
                .avatarLink(user.getAvatarLink())
                .createdAt(user.getCreatedAt())
                .editedAt(user.getEditedAt())
                .build();
    }

    public User toEntity() {
        var user = User.builder()
                .id(id)
                .username(name)
                .password(password)
                .avatarLink(avatarLink)
                .createAt(createdAt)
                .editedAt(editedAt)
                .build();

        return user;
    }
}
