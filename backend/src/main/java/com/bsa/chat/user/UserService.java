package com.bsa.chat.user;

import com.bsa.chat.user.dto.UserCreationDto;
import com.bsa.chat.user.dto.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<UserDto> getUsers() {
        return userRepository.findAll()
                .stream()
                .map(UserDto::fromEntity)
                .collect(Collectors.toList());
    }

    public UserDto getUser(UUID id) {
        return userRepository
                .findById(id)
                .map(UserDto::fromEntity)
                .orElse(null);
    }

    public UserDto save(UserCreationDto userCreationDto) {
        var user = userCreationDto.toEntity();
        var savedUser = userRepository.save(user);

        return UserDto.fromEntity(savedUser);
    }

    public UserDto update(UserDto userDto) {
        var user = userDto.toEntity();
        var updatedUser = userRepository.save(user);
        return UserDto.fromEntity(updatedUser);
    }

    public void delete(UUID id) {
        userRepository.deleteById(id);
    }
}
