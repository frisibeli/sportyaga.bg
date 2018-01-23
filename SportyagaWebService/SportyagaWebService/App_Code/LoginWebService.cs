using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;
using System.Web.Services;

/// <summary>
/// Summary description for LoginWebService
/// </summary>
[WebService(Namespace = "http://localhost:5088/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
// [System.Web.Script.Services.ScriptService]
public class LoginWebService : System.Web.Services.WebService
{
    private static string IV = "IV_VALUE_16_BYTE";
    private static string PASSWORD = "PASSWORD_VALUE";
    private static string SALT = "SALT_VALUE";

    public LoginWebService()
    {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }

    [WebMethod]
    public string AuthenticateUser(string userName, string password)
    {
        string token = "unauthorized";
        Console.WriteLine(userName);
        Console.WriteLine(password);
        if (userName.Equals("ivan") && password.Equals("password"))
        {
            token = EncryptAndEncode(userName + ";" + password);
        }
        return token;
    }

   
    public static string EncryptAndEncode(string raw)
    {
        using (var csp = new AesCryptoServiceProvider())
        {
            ICryptoTransform e = GetCryptoTransform(csp, true);
            byte[] inputBuffer = Encoding.UTF8.GetBytes(raw);
            byte[] output = e.TransformFinalBlock(inputBuffer, 0, inputBuffer.Length);
            string encrypted = Convert.ToBase64String(output);
            return encrypted;
        }
    }

    private static ICryptoTransform GetCryptoTransform(AesCryptoServiceProvider csp, bool encrypting)
    {
        csp.Mode = CipherMode.CBC;
        csp.Padding = PaddingMode.PKCS7;
        var spec = new Rfc2898DeriveBytes(Encoding.UTF8.GetBytes(PASSWORD), Encoding.UTF8.GetBytes(SALT), 65536);
        byte[] key = spec.GetBytes(16);


        csp.IV = Encoding.UTF8.GetBytes(IV);
        csp.Key = key;
        if (encrypting)
        {
            return csp.CreateEncryptor();
        }
        return csp.CreateDecryptor();
    }
}
