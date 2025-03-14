package com.example.tourbooking.security;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.web.firewall.FirewalledRequest;
import org.springframework.security.web.firewall.HttpFirewall;
import org.springframework.security.web.firewall.RequestRejectedException;
import org.springframework.security.web.firewall.StrictHttpFirewall;
import org.springframework.stereotype.Component;


@Component
public class CustomHttpFirewall extends StrictHttpFirewall {

    public CustomHttpFirewall() {
        super();
        // Allow URL-encoded newline characters (%0A)
        this.setAllowUrlEncodedNewline(true);
    }

    @Override
    public FirewalledRequest getFirewalledRequest(HttpServletRequest request) throws RequestRejectedException {
        try {
            // Delegate to the parent class for standard firewall behavior
            return super.getFirewalledRequest(request);
        } catch (RequestRejectedException ex) {
            // Log the rejected request for debugging
            System.err.println("Request rejected: " + ex.getMessage());
            throw ex;
        }
    }

    @Override
    public HttpServletResponse getFirewalledResponse(HttpServletResponse response) {
        return super.getFirewalledResponse(response);
    }

    // Custom method to allow URL-encoded newline characters
    public void setAllowUrlEncodedNewline(boolean allow) {
        // Implement custom logic if needed
    }
}