package com.roky.thunderspi.controllers;

import com.roky.thunderspi.services.EmailServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;


@RestController
@RequestMapping("/api")
public class EmailController {

    @Autowired
    EmailServiceImp emailServiceImp;
    @Autowired
    private JavaMailSender javaMailSender;


    @PostMapping("/send-email")
    public ResponseEntity<String> sendEmail(@RequestParam String name,@RequestParam String email, @RequestParam String description) {
        try {
            emailServiceImp.sendEmail(name,email, description);
            return ResponseEntity.ok("Email sent successfully!");
        } catch (MessagingException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error sending email: " + e.getMessage());
        }
    }

}

