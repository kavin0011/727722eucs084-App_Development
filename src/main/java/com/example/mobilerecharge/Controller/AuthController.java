// package com.example.mobilerecharge.Controller;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.security.authentication.AuthenticationManager;
// import org.springframework.security.authentication.BadCredentialsException;
// import
// org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.core.userdetails.UserDetailsService;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RestController;

// import com.example.mobilerecharge.Component.JwtUtil;

// @RestController
// public class AuthController {

// @Autowired
// private AuthenticationManager authenticationManager;

// @Autowired
// private JwtUtil jwtUtil;

// @Autowired
// private UserDetailsService userDetailsService;

// @PostMapping("/authenticate")
// public ResponseEntity<?> createAuthenticationToken(@RequestBody
// AuthenticationRequest authenticationRequest)
// throws Exception {
// try {
// authenticationManager.authenticate(
// new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(),
// authenticationRequest.getPassword()));
// } catch (BadCredentialsException e) {
// throw new Exception("Incorrect username or password", e);
// }

// final UserDetails userDetails =
// userDetailsService.loadUserByUsername(authenticationRequest.getUsername());

// final String jwt = jwtUtil.generateToken(userDetails.getUsername());
// final String refreshToken =
// jwtUtil.generateRefreshToken(userDetails.getUsername());

// return ResponseEntity.ok(new AuthenticationResponse(jwt, refreshToken));
// }
// }
