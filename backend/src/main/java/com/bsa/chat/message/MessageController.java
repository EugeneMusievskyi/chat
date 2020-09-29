package com.bsa.chat.message;

import com.bsa.chat.message.dto.MessageCreationDto;
import com.bsa.chat.message.dto.MessageDeleteDto;
import com.bsa.chat.message.dto.MessageDto;
import com.bsa.chat.message.dto.MessageUpdateDto;
import com.bsa.chat.message.exceptions.MessageNotFoundException;
import com.bsa.chat.notification.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

import static com.bsa.chat.auth.TokenService.getUserId;

@RestController
@RequestMapping("/api/messages")
public class MessageController {
    private MessageService messageService;
    private NotificationService notificationService;

    @Autowired
    public MessageController(MessageService messageService, NotificationService notificationService) {
        this.messageService = messageService;
        this.notificationService = notificationService;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<MessageDto> getMessages() {
        return messageService.getMessages();
    }

    @GetMapping("/{id}")
    public MessageDto getMessage(@PathVariable("id") UUID id) {
        return messageService.getById(id);
    }

    @PostMapping
    public MessageDto post(@RequestBody MessageCreationDto message) {
        message.setUserId(getUserId());
        var newMessage = messageService.create(message);
        notificationService.sendMessageToAllUsers("addMessage", newMessage);
        return newMessage;
    }

    @PutMapping("/edit")
    public MessageDto update(@RequestBody MessageUpdateDto messageDto) throws MessageNotFoundException {
        var updateMessage = messageService.update(messageDto);
        notificationService.sendMessageToAllUsers("updateMessage", updateMessage);
        return updateMessage;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") UUID id) {
        messageService.delete(id);
        notificationService.sendMessageToAllUsers("deleteMessage", new MessageDeleteDto(id));
    }
}
