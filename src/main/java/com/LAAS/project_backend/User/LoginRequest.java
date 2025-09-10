package com.LAAS.project_backend.User;

import lombok.Data;

@Data
public class LoginRequest {
    private String email;
    private String password;
}
