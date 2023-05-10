package com.roky.thunderspi.services;


import com.roky.thunderspi.entities.Email;
import com.roky.thunderspi.repositories.EmailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.List;

@Service
public class EmailServiceImp implements EmailService {

    @Autowired
    JavaMailSender javaMailSender;
    @Autowired
    private JavaMailSender mailSender;


    /*
    public String sendEmailwithAttachment() {
        try {
            MimeMessage message = javaMailSender.createMimeMessage();

            MimeMessageHelper messageHelper =
                    new MimeMessageHelper(message, true);

            messageHelper.setFrom("siiheb64@gmail.com");
            messageHelper.setTo("siiheb64@gmail.com");
            messageHelper.setSubject("Test ");
            messageHelper.setText("test ");

            File file = new File("");

            messageHelper.addAttachment(file.getName(), file);

            javaMailSender.send(message);

            return "Mail sent successfully";

        } catch (Exception e) {
            return "Mail sent failed";
        }
    }
*/
  @Autowired
  public EmailRepository  emailRepository;


    @Override
    public Email addEmail(Email email) {
        return emailRepository.save(email);
    }

    @Override
    public Email UpdateEmail(Email email) {
        return emailRepository.save(email);
    }

    @Override
    public List<Email> getEmail() {
        return (List<Email>) emailRepository.findAll();
    }

    @Override
    public void deleteEmail(long id) {
        emailRepository.deleteById(id);

    }

    @Override
    public Email getEmailById(long id) {
        return emailRepository.findById(id).orElse(null);
    }

    @Override
   public void sendEmail(String name, String email, String description) throws MessagingException {
      // String email = "mohamediheb.lahzami@esprit.tn";
       MimeMessage message = javaMailSender.createMimeMessage();
       MimeMessageHelper helper = new MimeMessageHelper(message);
       helper.setTo(email);
       helper.setSubject("New Message from " + name);
       helper.setText(description);

       javaMailSender.send(message);
   }
}
