package com.bsa.chat.user.dto;

import lombok.Getter;

import java.util.UUID;

@Getter
public class UserUpdateDto {
    private UUID id;
    private String name;
    private String password;
    private String avatarLink;
}
