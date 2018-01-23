//package com.university;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.oxm.jaxb.Jaxb2Marshaller;
//
//@Configuration
//public class WebServiceConfiguration {
//    @Bean
//    public Jaxb2Marshaller marshaller() {
//        Jaxb2Marshaller marshaller = new Jaxb2Marshaller();
//        // this package must match the package in the <generatePackage> specified in
//        // pom.xml
//        marshaller.setContextPath("loginWs.wsdl");
//        return marshaller;
//    }
//
//    @Bean
//    public LoginWebServiceClient quoteClient(Jaxb2Marshaller marshaller) {
//        LoginWebServiceClient client = new LoginWebServiceClient();
//        client.setDefaultUri("http://localhost:5088/LoginWebService.asmx");
//        client.setMarshaller(marshaller);
//        client.setUnmarshaller(marshaller);
//        return client;
//    }
//}
