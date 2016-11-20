# README FILE

## SUMMARY

This folder contains a working example of sending email through SendGrid using the SendGrid NodeJS Library.

## Requirements

This example requires the "example.js" file be present along with NodeJS installed.  You'll also need to install the SendGrid NodeJS Library. You can do so by running the following command:

    npm install sendgrid
    
Finally, you'll want to make the following changes to your example.js file:

- Fill in the `sg_username` variable with your SendGrid username.
- Fill in the `sg_password` variable with your SendGrid password.
- Fill in the `from_address` variable with your email address.
- Fill in the `to_address` variable with your recipient's email address.
- Fill in the `subject` variable with your subject line.
- Fill in the `text_body` variable with your plain text content.
- Fill in the `html_body` variable with your HTML content.