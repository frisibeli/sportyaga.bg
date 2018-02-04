package com.university;

import org.springframework.oxm.jaxb.Jaxb2Marshaller;
import org.springframework.ws.client.core.WebServiceTemplate;
import org.springframework.ws.client.core.support.WebServiceGatewaySupport;
import org.springframework.ws.soap.client.core.SoapActionCallback;

public class LoginWebServiceClient  extends WebServiceGatewaySupport {

    private final WebServiceTemplate webServiceTemplate;

    private WebServiceTemplate initializeWebService() {
        WebServiceTemplate webServiceTemplate = getWebServiceTemplate();
        webServiceTemplate.setDefaultUri("http://localhost:5088/LoginWebService.asmx");
        Jaxb2Marshaller jaxb2Marshaller = new Jaxb2Marshaller();
        jaxb2Marshaller.setContextPath("com.university");
        webServiceTemplate.setMarshaller(jaxb2Marshaller);
        webServiceTemplate.setUnmarshaller(jaxb2Marshaller);
        return webServiceTemplate;
    }
    public LoginWebServiceClient() {
        this.webServiceTemplate = initializeWebService();
    }

    public AuthenticateUserResponse authenticateUser(String username, String password) {
        AuthenticateUser request = new AuthenticateUser();
        request.setPassword(password);
        request.setUserName(username);
        AuthenticateUserResponse authenticateUserResponse = (AuthenticateUserResponse) this.webServiceTemplate.marshalSendAndReceive("http://localhost:5088/LoginWebService.asmx", request, new SoapActionCallback("http://localhost:5088/AuthenticateUser"));
        return authenticateUserResponse;
    }

}
