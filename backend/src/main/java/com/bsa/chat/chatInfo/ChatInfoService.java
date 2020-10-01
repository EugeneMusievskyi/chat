package com.bsa.chat.chatInfo;

import com.bsa.chat.chatInfo.dto.ChatInfoDto;
import com.bsa.chat.message.MessageRepository;
import com.bsa.chat.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChatInfoService {
    private MessageRepository messageRepository;
    private UserRepository userRepository;

    @Autowired
    public ChatInfoService(MessageRepository messageRepository, UserRepository userRepository) {
        this.messageRepository = messageRepository;
        this.userRepository = userRepository;
    }

    public ChatInfoDto getChatInfo() {
        return new ChatInfoDto(userRepository.countAllBy(), messageRepository.countAllBy());
    }
}
