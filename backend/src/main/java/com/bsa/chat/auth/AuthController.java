package com.bsa.chat.auth;

import com.bsa.chat.auth.dto.AuthResponseDto;
import com.bsa.chat.auth.dto.AuthUserDTO;
import com.bsa.chat.auth.dto.UserLoginDTO;
import com.bsa.chat.auth.dto.UserRegisterDto;
import com.bsa.chat.auth.exceptions.AuthException;
import com.bsa.chat.chatInfo.ChatInfoService;
import com.bsa.chat.notification.NotificationService;
import com.bsa.chat.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private AuthService authService;
    private ChatInfoService chatInfoService;
    private NotificationService notificationService;

    @Autowired
    public AuthController(AuthService authService, ChatInfoService chatInfoService, NotificationService notificationService) {
        this.authService = authService;
        this.chatInfoService = chatInfoService;
        this.notificationService = notificationService;
    }

    @PostMapping("/register")
    public AuthResponseDto signUp(@RequestBody UserRegisterDto user) throws AuthException {
        var response = new AuthResponseDto(authService.register(user));
        notificationService.sendMessageToAllUsers("info", chatInfoService.getChatInfo());
        return response;
    }

    @PostMapping("/login")
    public AuthResponseDto login(@RequestBody UserLoginDTO user) throws AuthException {
        return new AuthResponseDto(authService.login(user));
    }
}
