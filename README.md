# odin_login_page
This is a form project from the Odin Project course website.


# Plan of Attack:

I need to create and style a form.

##### Page Layout
    - Background image on left hand side of the page
        - Should contain a logo with imported text. Background for logo should be transparent.
    - Form on the right hand side of the page.
        - Text on top.
        - 6 input fields.
            - 2 names
            - 2 passwords
            - 1 email
            - 1 phone number
            - Focused elements should be blue with box shadow.
            - Invalid fields should have a red background.
            - Javascript should be used to validate the password fields.
        - Submit button
            - Create custom validation. This will be used to accomidate the passwords not matching.
            - Also change the error message, because why not.
            - setCustomValidity must be empty to if true
            - I can use the Validity state to check if input is valid if I want to customize the message. 
            - That's because changing the error message changes the validity state. I'll need to use other criteria to manipulate whether the form is valid.
            - I can use regex test to check the input instead of relying on pattern.
        - Already log in field
    - Try to keep a theme.

##### Resources:

[Project Page](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-sign-up-form)

[SVG Repo](https://www.svgrepo.com/svg/366230/keyboard-shortcut)

[Input Patterns](https://www.w3schools.com/tags/att_input_pattern.asp)

[Validate email with JS](https://ui.dev/validate-email-address-javascript)

[setCustomValidity](https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity)

[HTML Input Validation with JavaScript](https://www.aleksandrhovhannisyan.com/blog/html-input-validation-without-a-form/#option-2-custom-error-messaging)