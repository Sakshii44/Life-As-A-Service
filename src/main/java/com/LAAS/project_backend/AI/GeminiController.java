package com.LAAS.project_backend.AI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/gemini")
public class GeminiController {

    private final GeminiService geminiService;

    public GeminiController(GeminiService geminiService) {
        this.geminiService = geminiService;
    }

    // Accept POST requests
    @PostMapping("/generate")
    public ResponseEntity<Map<String, String>> generate(@RequestBody Map<String, String> request) {
        String prompt = request.get("prompt");
        String reply = geminiService.generateText(prompt);

        Map<String, String> response = new HashMap<>();
        response.put("reply", reply);

        return ResponseEntity.ok(response);
    }
}
