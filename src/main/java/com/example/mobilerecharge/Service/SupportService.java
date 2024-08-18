package com.example.mobilerecharge.Service;

import java.util.List;

import org.hibernate.grammars.ordering.OrderingParser.DirectionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.mail.MailProperties;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.example.mobilerecharge.Model.Support;
import com.example.mobilerecharge.Repository.SupportRepository;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class SupportService {

    @Autowired
    private SupportRepository supportRepository;

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private MailProperties mailProperties;

    public Support postquery(String firstname, String lastname, String email, String number, String query) {
        Support support = new Support();
        support.setFirstname(firstname);
        support.setLastname(lastname);
        support.setEmail(email);
        support.setNumber(number);
        support.setQuery(query);
        supportRepository.save(support);
        return support;
    }

    public void queryemail(String to) throws MessagingException {
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);
        String Subject = "Thanks For Submiting your issue.";
        helper.setSubject(Subject);
        helper.setFrom(mailProperties.getUsername());
        String body = "hi \n Your Query will be resolved quickly by our suport team ! \n Keep in touch for latest updates.";
        helper.setText(body);
        helper.setTo(to);
        // FileSystemResource file = new FileSystemResource(new File(filePath));
        // helper.addAttachment(file.getFilename(), file);

        mailSender.send(mimeMessage);

        // System.out.print("Mail sent !");
    }

    public List<Support> getallquery() {
        // return supportRepository.findAll(PageRequest.of(0, 0,
        // Sort.by(Direction.DESC,id))).getContent();
        // return supportRepository.findAll(PageRequest.of(0, 0, Sort.by(Direction.DESC,
        // id))).getContent();
        return supportRepository.findAll();
    }
}
