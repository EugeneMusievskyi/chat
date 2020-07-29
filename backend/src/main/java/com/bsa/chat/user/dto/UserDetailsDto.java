package com.bsa.chat.user.dto;

import com.bsa.chat.user.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.util.UUID;

@Data
@AllArgsConstructor
@Builder
public class UserDetailsDto {
    private UUID id;
    private String username;

    public static UserDetailsDto fromEntity(User user) {
        if (user == null)
            return null;

        return UserDetailsDto.builder()
                .id(user.getId())
                .username(user.getUsername())
                .build();
    }
}
