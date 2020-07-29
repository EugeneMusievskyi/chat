package com.bsa.chat.auth;

import com.bsa.chat.auth.dto.AuthUserDTO;
import com.bsa.chat.auth.dto.UserLoginDTO;
import com.bsa.chat.auth.dto.UserRegisterDto;
import com.bsa.chat.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {
    @Autowired
    private AuthService authService;
    @Autowired
    private UserService userDetailsService;

    @PostMapping("/register")
    public AuthUserDTO signUp(@RequestBody UserRegisterDto user) throws Exception {
        return authService.register(user);
    }

    @PostMapping("/login")
    public AuthUserDTO login(@RequestBody UserLoginDTO user) throws Exception {
        return authService.login(user);
    }
}