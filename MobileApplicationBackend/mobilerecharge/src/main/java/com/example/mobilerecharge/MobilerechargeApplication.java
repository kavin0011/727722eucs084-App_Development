package com.example.mobilerecharge;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
// @EnableJpaRepositories(basePackages =
// "com.example.mobilerecharge.Repository")
public class MobilerechargeApplication {

	public static void main(String[] args) {
		SpringApplication.run(MobilerechargeApplication.class, args);
	}

}
