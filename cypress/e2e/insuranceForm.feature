Feature: Vehicle insurance quote and request form.

   Vehicle insurance quote and request form.
   
   @prepareData
   Scenario: User fills out insurance claim form
     Given user accesses the insurance claim form
     And fill the form in the 'Enter Vehicle Data' tab and press next
     And fill the form in the 'Enter Insurant Data' tab and press next
     And fill the form in the 'Enter Product Data' tab and press next
     And 'Select Price Option' and press next
     And fill the form in the 'Send Quote' tab
     When pressing the Submit button
     Then check the message 'Sending e-mail success!'