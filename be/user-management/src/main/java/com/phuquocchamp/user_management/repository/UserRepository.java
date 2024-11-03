package com.phuquocchamp.user_management.repository;

import com.phuquocchamp.user_management.model.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User, Long>{
    
}
