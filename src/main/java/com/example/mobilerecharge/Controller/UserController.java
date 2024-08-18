package com.example.mobilerecharge.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.example.mobilerecharge.Model.User;
import com.example.mobilerecharge.Model.Userinfo;
// import com.example.mobilerecharge.Model.Userinfo;
import com.example.mobilerecharge.Service.JwtService;
import com.example.mobilerecharge.Service.UserService;
import com.example.mobilerecharge.dto.AuthRequest;

import io.jsonwebtoken.Claims;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.GetMapping;

@CrossOrigin("http://localhost:3000")
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/postregisterdetails")
    public String Createuser(@RequestBody Userinfo user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userService.postregisterdetails(user.getEmail(), user.getName(), user.getPhone(), user.getPassword(),
                user.getRoles());
        return "Registration Successful";
    }

    @GetMapping("/getuserinfo")
    public Userinfo getMethodName(@RequestParam String email) {
        return userService.getuserinfo(email);
    }

    @PostMapping("/authenticate")
    public ResponseEntity<String> authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
            if (authentication.isAuthenticated()) {
                String token = jwtService.generateToken(authRequest.getUsername());
                return ResponseEntity.ok(token);
            } else {
                throw new UsernameNotFoundException("Invalid user request!");
            }
        } catch (Exception e) {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }

    // @GetMapping("/getsecuritydetails")
    // public String getSecurityDetails(@RequestHeader("Authorization") String
    // token,
    // @RequestParam String param) {
    // // Remove "Bearer " prefix from the token
    // if (token.startsWith("Bearer ")) {
    // token = token.substring(7);
    // }

    // // Extract all claims from the token
    // Claims claims;
    // try {
    // claims = jwtService.extractAllClaims(token);
    // } catch (Exception e) {
    // return "Invalid token";
    // }

    // // Retrieve specific claim value
    // String claimValue = claims.get(param, String.class);

    // // Return the claim value (for demonstration purposes)
    // return claimValue != null ? claimValue : "Claim not found";
    // }

}
