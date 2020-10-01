package com.bsa.chat.user;

import com.bsa.chat.user.dto.UserCreationDto;
import com.bsa.chat.user.dto.UserDetailsDto;
import com.bsa.chat.user.dto.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

import static com.bsa.chat.auth.TokenService.getUserId;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/all")
    public List<UserDto> getUsers() {
        return userService.getUsers();
    }

    @GetMapping("/{id}")
    public UserDetailsDto getUser(@PathVariable("id") UUID id) {
        var userDto = userService.getUserById(id);
        return new UserDetailsDto(userDto.getId(), userDto.getUsername());
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public UserDetailsDto getUser() {
        var userDto = userService.getUserById(getUserId());
        return new UserDetailsDto(userDto.getId(), userDto.getUsername());
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
