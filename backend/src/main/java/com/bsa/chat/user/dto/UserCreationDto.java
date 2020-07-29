package com.bsa.chat.user.dto;

import com.bsa.chat.user.User;
import lombok.Getter;

@Getter
public class UserCreationDto {
    private String username;
    private String password;
    private String avatarLink;

    public User toEntity() {
        return User.builder()
                .username(username)
                .password(password)
                .avatarLink(avatarLink)
                .build();
    }
}
