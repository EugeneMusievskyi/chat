package com.bsa.chat.user;

import com.bsa.chat.auth.model.AuthUser;
import com.bsa.chat.user.dto.UserCreationDto;
import com.bsa.chat.user.dto.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    public List<UserDto> getUsers() {
        return userRepository.findAll()
                .stream()
                .map(UserDto::fromEntity)
                .collect(Collectors.toList());
    }

    public UserDto getUserById(UUID id) {
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

    public UserDto save(User user) {
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

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByUsername(username)
                .map(user -> new AuthUser(user.getId(), user.getUsername(), user.getPassword()))
                .orElseThrow(() -> new UsernameNotFoundException(username));
    }
}
