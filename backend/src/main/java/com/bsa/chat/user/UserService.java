package com.bsa.chat.user;

import com.bsa.chat.auth.model.AuthUser;
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

    private String[] defaultAvatars = {
            "https://i.imgur.com/Sw9s6NQ.jpg",
            "https://i.imgur.com/4KzOrvb.jpg",
            "https://i.imgur.com/zbjmZ59.jpg",
            "https://i.imgur.com/dwGap5V.jpg",
            "https://i.imgur.com/nFQGBc1.jpg",
            "https://i.imgur.com/wg5lf5M.jpg"
    };

    public UserDto getUserById(UUID id) {
        return userRepository
                .findById(id)
                .map(UserDto::fromEntity)
                .orElse(null);
    }

    public UserDto save(User user) {
        user.setAvatarLink(getRandomAvatar());
        var savedUser = userRepository.save(user);
        return UserDto.fromEntity(savedUser);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByUsername(username)
                .map(user -> new AuthUser(user.getId(), user.getUsername(), user.getPassword()))
                .orElseThrow(() -> new UsernameNotFoundException(username));
    }

    private String getRandomAvatar() {
        return defaultAvatars[(int) (Math.random() * defaultAvatars.length)];
    }
}
