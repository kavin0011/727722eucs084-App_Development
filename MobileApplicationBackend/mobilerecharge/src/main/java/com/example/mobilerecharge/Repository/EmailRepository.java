package com.example.mobilerecharge.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.mobilerecharge.Model.Email;

@Repository
public interface EmailRepository extends JpaRepository<Email, Integer> {

}
