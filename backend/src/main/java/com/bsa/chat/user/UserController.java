package com.bsa.chat.user;

import com.bsa.chat.user.dto.UserCreationDto;
import com.bsa.chat.user.dto.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping
    public List<UserDto> getUsers() {
        return userService.getUsers();
    }

    @GetMapping("/{id}")
    public UserDto getUser(@PathVariable("id") UUID id) {
        return userService.getUser(id);
    }

    @PostMapping
    public UserDto createUser(@RequestBody UserCreationDto userCreationDto) {
        return userService.save(userCreationDto);
    }

    @PostMapping("/edit")
    public UserDto updateUser(UserDto userDto) {
        return userService.update(userDto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable UUID id) {
        userService.delete(id);
    }
}
