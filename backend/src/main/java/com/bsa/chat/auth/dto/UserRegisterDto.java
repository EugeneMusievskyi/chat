package com.bsa.chat.auth.dto;

import com.bsa.chat.user.User;
import lombok.Data;

@Data
public class UserRegisterDto {
    private String email;
    private String password;
    private String username;

    public User toEntity() {
        return User.builder()
                .username(username)
                .password(password)
                .build();
    }
}
