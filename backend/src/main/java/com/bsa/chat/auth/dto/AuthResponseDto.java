package com.bsa.chat.auth.dto;

import lombok.Data;

@Data
public class AuthResponseDto {
    private AuthUserDTO data;
    private String error;

    public AuthResponseDto(AuthUserDTO data) {
        this.data = data;
    }

    public AuthResponseDto(String error) {
        this.error = error;
    }
}
