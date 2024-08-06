package com.example.mobilerecharge.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mobilerecharge.Model.User;
import com.example.mobilerecharge.Repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User postregisterdetails(String email, String name, String number, String password) {
        User userinfo = new User();
        userinfo.setEmail(email);
        // String name = user.getEmail();
        // String z = name.replaceAll("@.*", "").replaceAll("[^a-zA-Z]+", " ").trim();
        userinfo.setName(name);
        userinfo.setNumber(number);
        userinfo.setPassword(password);
        userRepository.save(userinfo);

        return userinfo;
    }

    public User getuserinfo(String email) {
        User userinfo = userRepository.findByEmail(email);
        return userinfo;
    }
}
