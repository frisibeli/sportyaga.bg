package com.university.service;

import static com.sun.xml.internal.messaging.saaj.packaging.mime.util.ASCIIUtility.getBytes;

import java.security.Key;
import java.security.spec.KeySpec;

import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.PBEKeySpec;
import javax.crypto.spec.SecretKeySpec;

import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.university.LoginWebServiceClient;

@Service
public class LoginService {
    private static String IV = "IV_VALUE_16_BYTE";
    private static String PASSWORD = "PASSWORD_VALUE";
    private static String SALT = "SALT_VALUE";
    private final LoginWebServiceClient loginWebServiceClient;

    @Autowired
    public LoginService(LoginWebServiceClient loginWebServiceClient) {
        this.loginWebServiceClient = loginWebServiceClient;

    }

    // public AuthenticateUserResponse authenticateUser(String username, String password) throws
    // Exception {
    //// AuthenticateUserResponse authenticateUserResponse =
    // this.loginWebServiceClient.authenticateUser(username, password);
    // AuthenticateUserResponse authenticateUserResponse = new AuthenticateUserResponse();
    // String aesEncodedToken;
    // try {
    // aesEncodedToken = decodeAndDecrypt(authenticateUserResponse.getAuthenticateUserResult());
    // } catch (Exception e) {
    // aesEncodedToken = "uauthorized";
    // }
    // if (username.equals("ivan") && password.equals("password")) {
    // aesEncodedToken = "authorized";
    // }
    // authenticateUserResponse.setAuthenticateUserResult(aesEncodedToken);
    // return authenticateUserResponse;
    // }
    public String authenticateUser(String username, String password) {
        if (username.equals("ivan") && password.equals("password")) {
            return "authorized";
        } else {
            return "unauthorized";
        }
    }

    public String decodeAndDecrypt(String encrypted) throws Exception {
        byte[] decodedValue = Base64.decodeBase64(getBytes(encrypted));
        Cipher c = getCipher(Cipher.DECRYPT_MODE);
        byte[] decValue = c.doFinal(decodedValue);
        return new String(decValue);
    }

    private Cipher getCipher(int mode) throws Exception {
        Cipher c = Cipher.getInstance("AES/CBC/PKCS5Padding");
        byte[] iv = getBytes(IV);
        c.init(mode, generateKey(), new IvParameterSpec(iv));
        return c;
    }

    private Key generateKey() throws Exception {
        SecretKeyFactory factory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1");
        char[] password = PASSWORD.toCharArray();
        byte[] salt = getBytes(SALT);

        KeySpec spec = new PBEKeySpec(password, salt, 65536, 128);
        SecretKey tmp = factory.generateSecret(spec);
        byte[] encoded = tmp.getEncoded();
        return new SecretKeySpec(encoded, "AES");
    }
}
