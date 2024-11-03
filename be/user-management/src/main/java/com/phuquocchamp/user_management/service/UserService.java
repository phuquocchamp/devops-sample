package com.phuquocchamp.user_management.service;

import com.phuquocchamp.user_management.model.User;
import com.phuquocchamp.user_management.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public User createUser(User user){
        return userRepository.save(user);
    }

    public List<User> fetchUsers(){
        return userRepository.findAll();
    }

}
