package com.example.mobilerecharge.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.mobilerecharge.Model.Support;
import com.example.mobilerecharge.Service.SupportService;

import jakarta.mail.MessagingException;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
@CrossOrigin("http://localhost:3000/")
public class SupportControler {

    @Autowired
    private SupportService supportService;

    @PostMapping("/postquery")
    public Support postquery(@RequestBody Support support) throws MessagingException {
        supportService.postquery(support.getFirstname(), support.getLastname(), support.getEmail(), support.getNumber(),
                support.getQuery());
        supportService.queryemail(support.getEmail());
        return support;
    }
}
