package com.bsa.chat.auth;

import com.bsa.chat.auth.dto.AuthResponseDto;
import com.bsa.chat.auth.dto.AuthUserDTO;
import com.bsa.chat.auth.dto.UserLoginDTO;
import com.bsa.chat.auth.dto.UserRegisterDto;
import com.bsa.chat.auth.exceptions.AuthException;
import com.bsa.chat.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public AuthResponseDto signUp(@RequestBody UserRegisterDto user) throws AuthException {
            return new AuthResponseDto(authService.register(user));
    }

    @PostMapping("/login")
    public AuthResponseDto login(@RequestBody UserLoginDTO user) throws AuthException {
        return new AuthResponseDto(authService.login(user));
    }
}
