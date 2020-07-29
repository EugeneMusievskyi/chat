package com.bsa.chat.message;

import com.bsa.chat.message.dto.MessageCreationDto;
import com.bsa.chat.message.dto.MessageDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/")
public class MessageController {
    @Autowired
    private MessageService messageService;

    @GetMapping
    public List<MessageDto> getMessages() {
        return messageService.getMessages();
    }

    @GetMapping("/message/{id}")
    public MessageDto getMessage(@PathVariable("id") UUID id) {
        return messageService.getById(id);
    }

    @PostMapping
    public MessageDto post(@RequestBody MessageCreationDto message) {
        // set user id
        return messageService.create(message);
    }

    @PostMapping("/edit")
    public void update(@RequestBody MessageDto messageDto) {
        messageService.update(messageDto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") UUID id) {
        messageService.delete(id);
    }
}
