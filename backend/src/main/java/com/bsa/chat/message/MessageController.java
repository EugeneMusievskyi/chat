package com.bsa.chat.message;

import com.bsa.chat.message.dto.MessageCreationDto;
import com.bsa.chat.message.dto.MessageDto;
import com.bsa.chat.message.dto.MessageUpdateDto;
import com.bsa.chat.message.exceptions.MessageNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

import static com.bsa.chat.auth.TokenService.getUserId;

@RestController
@RequestMapping("/api/messages")
public class MessageController {
    @Autowired
    private MessageService messageService;

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
        return messageService.create(message);
    }

    @PutMapping("/edit")
    public MessageDto update(@RequestBody MessageUpdateDto messageDto) throws MessageNotFoundException {
        return messageService.update(messageDto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") UUID id) {
        messageService.delete(id);
    }
}
