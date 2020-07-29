package com.bsa.chat.message;

import com.bsa.chat.message.dto.MessageCreationDto;
import com.bsa.chat.message.dto.MessageDto;
import com.bsa.chat.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class MessageService {
    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private UserRepository userRepository;

    public List<MessageDto> getMessages() {
        return messageRepository.findAll()
                .stream()
                .map(MessageDto::fromEntity)
                .collect(Collectors.toList());
    }

    public MessageDto create(MessageCreationDto messageCreationDto) {
        /*var user = userRepository
                .findById(messageCreationDto.getUserId())
                .orElse(null);*/

        var message = Message.builder()
                .text(messageCreationDto.getText())
                .user(null)
                .build();


        var savedMessage = messageRepository.save(message);
        return MessageDto.fromEntity(savedMessage);
    }

    public void update(MessageDto messageDto) {
         messageRepository.updateMessage(messageDto.getId(), messageDto.getText());
    }

    public void delete(UUID id) {
        messageRepository.deleteById(id);
    }

    public MessageDto getById(UUID id) {
        var message = messageRepository
                .findById(id)
                .orElse(null);

        return MessageDto.fromEntity(message);
    }
}
