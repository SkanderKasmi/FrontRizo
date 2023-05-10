package com.roky.thunderspi.services;

import com.roky.thunderspi.entities.Email;

import javax.mail.MessagingException;
import java.util.List;

public interface EmailService {
    Email addEmail(Email email);

    Email UpdateEmail(Email email);

    List<Email> getEmail();

    void deleteEmail(long id);

    Email getEmailById(long id);

    void sendEmail(String name, String email, String description) throws MessagingException;
}
