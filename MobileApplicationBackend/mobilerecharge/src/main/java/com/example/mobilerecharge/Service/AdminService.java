package com.example.mobilerecharge.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mobilerecharge.Model.Admin;
import com.example.mobilerecharge.Model.Email;
import com.example.mobilerecharge.Repository.AdminRepository;

@Service
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;

    public Admin saveadmin(Admin admin) {
        adminRepository.save(admin);
        return admin;
    }

    public Admin getbyemail(String email) {
        Admin admin = adminRepository.findByEmail(email);
        return admin;
    }
}
