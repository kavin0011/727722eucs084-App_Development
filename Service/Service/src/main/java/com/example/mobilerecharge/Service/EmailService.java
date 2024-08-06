package com.example.mobilerecharge.Service;

import java.io.File;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.mail.MailProperties;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.example.mobilerecharge.Model.Email;
import com.example.mobilerecharge.Repository.EmailRepository;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailService {

    @Autowired
    private EmailRepository emailRepository;

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private MailProperties mailProperties;

    public void subscribemail(String to) throws MessagingException {
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);
        String Subject = "Subscribed to PulseTopup";
        helper.setSubject(Subject);
        helper.setFrom(mailProperties.getUsername());
        String body = "Hey,\n" + //
                "\n" + //
                "We're excited to share the latest updates and enhancements to PulseTopup! Our team has been working hard to improve your recharge experience. Stay tuned for exciting new features, improved performance, and exclusive offers. Your feedback is invaluable to us, so please don't hesitate to share your thoughts. We appreciate your continued support!";
        helper.setText(body);
        helper.setTo(to);
        // FileSystemResource file = new FileSystemResource(new File(filePath));
        // helper.addAttachment(file.getFilename(), file);

        mailSender.send(mimeMessage);

        System.out.print("Mail sent !");
    }

    public Email saveEmail(String to) {
        Email email = new Email();
        email.setEmail(to);
        emailRepository.save(email);
        return email;
    }
}
