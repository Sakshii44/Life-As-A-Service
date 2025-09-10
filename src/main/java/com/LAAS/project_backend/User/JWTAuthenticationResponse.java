package com.LAAS.project_backend.User;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class JWTAuthenticationResponse {
    private String accessToken;
    private String refreshToken;
}
