package com.example.mobilerecharge.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

// import com.example.mobilerecharge.Model.User;
// import com.example.mobilerecharge.Model.User;
import com.example.mobilerecharge.Model.Userinfo;

// import com.example.onlinepayment_backend.model.UserInfo;

// import com.sample.entity.UserInfo;

import java.util.List;
import java.util.Optional;

public interface UserinfoRepository extends JpaRepository<Userinfo, Integer> {
    Optional<Userinfo> findByName(String name);

    // Optional<Userinfo> findByName(String name);
    Optional<Userinfo> findByPhone(String phone);

    Optional<Userinfo> findByEmail(String email);

    // Userinfo findByEmail(String email);

    List<Userinfo> findAll();

}
