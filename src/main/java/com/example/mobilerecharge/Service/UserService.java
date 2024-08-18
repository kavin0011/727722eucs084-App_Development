package com.example.mobilerecharge.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mobilerecharge.Model.User;
import com.example.mobilerecharge.Model.Userinfo;
// import com.example.mobilerecharge.Model.Userinfo;
import com.example.mobilerecharge.Repository.UserRepository;
// import com.example.mobilerecharge.Repository.UserinfoRepository;
import com.example.mobilerecharge.Repository.UserinfoRepository;

@Service
public class UserService {

    @Autowired
    private UserinfoRepository userinfoRepository;

    public Userinfo postregisterdetails(String email, String name, String number, String password, String roles) {
        Userinfo userinfo = new Userinfo();
        userinfo.setEmail(email);
        // String name = user.getEmail();
        // String z = name.replaceAll("@.*", "").replaceAll("[^a-zA-Z]+", " ").trim();
        userinfo.setRoles(roles);
        userinfo.setName(name);
        userinfo.setPhone(number);
        userinfo.setPassword(password);
        userinfoRepository.save(userinfo);

        return userinfo;
    }

    public Userinfo getuserinfo(String email) {
        Userinfo userinfo = userinfoRepository.findByEmail(email).orElse(null);
        return userinfo;
    }
}
