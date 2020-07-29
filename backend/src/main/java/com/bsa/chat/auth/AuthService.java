package com.bsa.chat.auth;

import com.bsa.chat.auth.dto.AuthUserDTO;
import com.bsa.chat.auth.dto.UserLoginDTO;
import com.bsa.chat.auth.dto.UserRegisterDto;
import com.bsa.chat.auth.model.AuthUser;
import com.bsa.chat.user.User;
import com.bsa.chat.user.UserService;
import com.bsa.chat.user.dto.UserDetailsDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired
    private PasswordEncoder bCryptPasswordEncoder;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private TokenService tokenService;
    @Autowired
    private UserService userDetailsService;

    public AuthUserDTO register(UserRegisterDto userDto) throws Exception {
        User user = userDto.toEntity();
        var loginDTO = new UserLoginDTO(user.getUsername(), user.getPassword());
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        userDetailsService.save(user);
        return login(loginDTO);
    }

    public AuthUserDTO login(UserLoginDTO user) throws Exception {
        Authentication auth;
        try {
            auth = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
        }
        catch (BadCredentialsException e) {
            throw new Exception("Incorrect username or password", e);
        }

        var currentUser = (AuthUser)auth.getPrincipal();
        final var userDto = userDetailsService.getUserById(currentUser.getId());
        var userDetails = new UserDetailsDto(userDto.getId(), userDto.getUsername());
        final String jwt = tokenService.generateToken(currentUser);
        return new AuthUserDTO(jwt, userDetails);
    }
}
