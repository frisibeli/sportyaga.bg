package com.university.controller;

import com.university.AuthenticateUserResponse;
import com.university.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class LoginController {
    private final LoginService loginService;

    @Autowired
    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @RequestMapping(produces = "application/json", method = RequestMethod.GET, value = "/authenticate/{user}/{password}")
    public ResponseEntity<AuthenticateUserResponse> authenticateUser(@PathVariable(value = "user") String user, @PathVariable(value = "password") String password) throws Exception {
        return new ResponseEntity<>(this.loginService.authenticateUser(user, password), HttpStatus.OK);
    }


}
