package com.LAAS.project_backend.User;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthenticationManager authManager;
    private final UserRepository userRepo;
    private final PasswordEncoder passwordEncoder;
    private final JWTTokenProvider tokenProvider;

    public AuthController(AuthenticationManager authManager,
                          UserRepository userRepo,
                          PasswordEncoder passwordEncoder,
                          JWTTokenProvider tokenProvider) {
        this.authManager = authManager;
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
        this.tokenProvider = tokenProvider;
    }

    @PostMapping("/signup")
    public ResponseEntity<SignUpResponse> register(@Valid @RequestBody SignUpRequest req) {
        if (!req.getPassword().equals(req.getConfirmPassword())) {
            return ResponseEntity.badRequest()
                    .body(new SignUpResponse("Passwords do not match!", null));
        }

        if (userRepo.existsByEmail(req.getEmail())) {
            return ResponseEntity.badRequest()
                    .body(new SignUpResponse("Email already used!", null));
        }

        User user = User.builder()
                .firstName(req.getFirstName())
                .lastName(req.getLastName())
                .mobileNumber(req.getMobileNumber())
                .email(req.getEmail())
                .password(passwordEncoder.encode(req.getPassword()))
                .build();
        User savedUser = userRepo.save(user);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(new SignUpResponse("User registered successfully", savedUser.getId()));
    }

    @PostMapping("/login")
    public ResponseEntity<JWTAuthenticationResponse> login(@Valid @RequestBody LoginRequest req) {
        Authentication auth = authManager.authenticate(
                new UsernamePasswordAuthenticationToken(req.getEmail(), req.getPassword())
        );

        SecurityContextHolder.getContext().setAuthentication(auth);

        User user = userRepo.findByEmail(req.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        String token = tokenProvider.generateToken(user);
        String refreshToken = tokenProvider.generateRefreshToken(user);

        return ResponseEntity.ok(JWTAuthenticationResponse.builder()
                .accessToken(token)
                .refreshToken(refreshToken)
                .userId(user.getId())
                .build());
    }


    public record SignUpResponse(String message, Long userId) {}
    public record JWTAuthenticationResponse(String accessToken, String refreshToken, Long userId) {
        public static JWTAuthenticationResponseBuilder builder() {
            return new JWTAuthenticationResponseBuilder();
        }

        public static class JWTAuthenticationResponseBuilder {
            private String accessToken;
            private String refreshToken;
            private Long userId;

            public JWTAuthenticationResponseBuilder accessToken(String accessToken) {
                this.accessToken = accessToken;
                return this;
            }

            public JWTAuthenticationResponseBuilder refreshToken(String refreshToken) {
                this.refreshToken = refreshToken;
                return this;
            }

            public JWTAuthenticationResponseBuilder userId(Long userId) {
                this.userId = userId;
                return this;
            }

            public JWTAuthenticationResponse build() {
                return new JWTAuthenticationResponse(accessToken, refreshToken, userId);
            }
        }
    }

}