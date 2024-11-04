package com.phuquocchamp.user_management.controller;

import com.phuquocchamp.user_management.model.User;
import com.phuquocchamp.user_management.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("/api/users")
//@CrossOrigin(origins = "http://localhost:5173")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping()
    public User createUser(@RequestBody User user){
        return userService.createUser(user);
    }

    @GetMapping
    public List<User> getUsers() {
        return userService.fetchUsers();
    }
}
