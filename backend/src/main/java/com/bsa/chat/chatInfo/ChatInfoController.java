package com.bsa.chat.chatInfo;

import com.bsa.chat.chatInfo.dto.ChatInfoDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/chatInfo")
public class ChatInfoController {
    @Autowired
    private ChatInfoService chatInfoService;

    @GetMapping
    public ChatInfoDto getInfo() {
        return chatInfoService.getChatInfo();
    }
}
