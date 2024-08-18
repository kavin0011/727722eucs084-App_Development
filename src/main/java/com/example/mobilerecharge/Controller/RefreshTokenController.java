// package com.example.mobilerecharge.Controller;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RestController;

// import com.example.mobilerecharge.Component.JwtUtil;

// @RestController
// public class RefreshTokenController {

// @Autowired
// private JwtUtil jwtUtil;

// @PostMapping("/refresh-token")
// public ResponseEntity<?> refreshToken(@RequestBody TokenRefreshRequest
// request) {
// String refreshToken = request.getRefreshToken();

// if (jwtUtil.isTokenExpired(refreshToken)) {
// return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Refresh token is
// expired");
// }

// String username = jwtUtil.extractUsername(refreshToken);
// String newAccessToken = jwtUtil.generateToken(username);
// String newRefreshToken = jwtUtil.generateRefreshToken(username);

// return ResponseEntity.ok(new TokenRefreshResponse(newAccessToken,
// newRefreshToken));
// }
// }
