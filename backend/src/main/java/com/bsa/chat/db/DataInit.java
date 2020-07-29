package com.bsa.chat.db;

import com.bsa.chat.user.User;
import com.bsa.chat.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataInit {

    @Autowired
    private PasswordEncoder bCryptPasswordEncoder;
    @Autowired
    private UserRepository userRepository;

    @EventListener
    public void init(ContextRefreshedEvent event) {
        User user = User.builder()
                .username("admin")
                .password(bCryptPasswordEncoder.encode("admin"))
                .build();
        userRepository.save(user);
    }
}
