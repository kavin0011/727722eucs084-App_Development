// package com.example.mobilerecharge.Controller;

// import org.springframework.security.access.prepost.PreAuthorize;
// import
// org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import
// org.springframework.security.core.userdetails.UsernameNotFoundException;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;

// @RestController
// @RequestMapping("/products")
// public class Auth {
// @CrossOrigin(origins = "http://localhost:4000")
// @GetMapping("/allproducts")
// @PreAuthorize("hasAuthority('ROLE_ADMIN')")
// public List<Products> getAllTheProducts() {
// return service.getProducts();
// }

// @CrossOrigin(origins = "http://localhost:4000")
// @GetMapping("/product/{id}")
// @PreAuthorize("hasAuthority('ROLE_USER')")
// public Products getProductById(@PathVariable int id) {
// return service.getProduct(id);
// }

// @CrossOrigin(origins = "http://localhost:4000")
// @PostMapping("/authenticate")
// public String authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
// Authentication authentication = authenticationManager.authenticate(
// new UsernamePasswordAuthenticationToken(authRequest.getUsername(),
// authRequest.getPassword()));
// if (authentication.isAuthenticated()) {
// return jwtService.generateToken(authRequest.getUsername());
// } else {
// throw new UsernameNotFoundException("invalid user request !");
// }

// }

// }
