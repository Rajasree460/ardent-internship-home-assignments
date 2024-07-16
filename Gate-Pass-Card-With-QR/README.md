# Gate-Pass-Card-With-QR
I have made an employee card ,that contains some basic details. There is a QR at the below of the card. Scan the QR &amp; if you are scanning it at 10 AM or between 12 Am-10 Am,you can see the message 'Welcome to work!" within an alert box. By any chance if you are late by 1 or more minutes then you can see the message "Sorry, you are late!" .<br>
Details<br>
Employee Card Description<br>
This employee card is designed to display essential details about an employee along with a QR code that provides real-time feedback based on the time of scanning.<br>

Components of the Employee Card:<br>
Avatar Section:<br>

Displays the employee's photo within a circular avatar.<br>
The avatar is enhanced with a background color to make it stand out.<br>
Employee Information:<br>

Name: The full name of the employee.<br>
Title: The employee's current designation or role.<br>
ID: A unique identifier for the employee.<br>
QR Code Section:<br>

Positioned at the bottom of the card.<br>
The QR code encodes a message that changes based on the current time.<br>
Functionalities:<br>
Time-Based Messages:<br>

Welcome Message: If the QR code is scanned at exactly 10 AM or between 12 AM to 10 AM, the message "Welcome to work!" is displayed within an alert box.<br>
Late Message: If the QR code is scanned even one minute past 10 AM, the message "Sorry, you are late!" is displayed within an alert box.<br>
Real-Time Feedback:<br>

The QR code functionality leverages the moment-timezone library to accurately determine the time in the specified timezone (Asia/Kolkata).<br>
Upon scanning the QR code, the system checks the current time and displays the appropriate alert message based on the conditions mentioned above.<br>
