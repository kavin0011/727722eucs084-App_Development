package com.example.mobilerecharge.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.mobilerecharge.Model.Email;
import com.example.mobilerecharge.Service.EmailService;

import jakarta.mail.MessagingException;

@RestController
@CrossOrigin("http://localhost:3000/")
public class EmailController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/subscribemail")
    public Email postMethodName(@RequestBody Email email)
            throws MessagingException {
        String to = email.getEmail();
        emailService.subscribemail(to);
        emailService.saveEmail(to);
        return email;
    }
}
