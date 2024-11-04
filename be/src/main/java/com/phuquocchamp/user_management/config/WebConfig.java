package com.phuquocchamp.user_management.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // Cho phép tất cả các URL trong ứng dụng
                        .allowedOrigins("http://localhost:5173") // URL của frontend
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Các phương thức được phép
                        .allowedHeaders("*") // Cho phép tất cả headers
                        .allowCredentials(true); // Cho phép gửi thông tin đăng nhập
            }
        };
    }
}