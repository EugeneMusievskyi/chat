package com.bsa.chat.auth.dto;

import com.bsa.chat.user.dto.UserDetailsDto;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AuthUserDTO {
    private String token;
    private UserDetailsDto user;
}
