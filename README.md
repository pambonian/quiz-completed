# quiz-completed

1.	In Python, how would print just the 4th name in the list? 
student_list = ['Alan', 'Alec', 'Adam', 'Charlie', 'Mac']

2.	Write a foreach loop in Python for list numbers that will modify each entry by adding 10 to the value. 
numbers = [1, 2, 3, 4, 5, 6]  

3.	Write a Python function Counter() that keeps track of the number of times it is called. This function should not take any parameters and return the number of times that it has been called.

4.  Using Python how would you find the missing number in this list? 
incomplete_list = [1, 2, 4, 5, 6]

5.	Write a javascript function isEmpty() that will return true if an object is empty and false if it is not (excluding default prototype properties). Assume you do not have access to Lodash or other libraries. Example: let empty_object = {}; console.log(isEmpty(empty_object)); // true let not_empty_object = { foo : 'bar' }; console.log(isEmpty(not_empty_object)); // false 

6.	Write the skeleton HTML for a table that has a header, body, and footer with three columns and one row. 

7.	Write a Python function that will load a json file located in the directory /home/application_user/stats.json, once loaded access the data located in 'school_name'

8.	What is the difference between "var" and "let" in javascript? 

9.  Write out the Postgres command to restore a database backup to a database with the following information, assume the password will exist in a .pgpass file, be sure to send stderr and stdout to a logile named test_restore.log:

Host: test_database.rds.aws.com
Port: 5432
User: test_role
Database: test_database
Backup location: /backups/test_database_backup_03_2022.sql

10.	Write a jQuery event handler that will fire when a form with ID #foo is submitted and prevents the form from submitting. 

11.	What is the difference between JOIN and INNER JOIN in SQL? 

12.	Write a javascript function checkString(foo) which takes a parameter `foo`. The function should return a Promise that resolves if `foo` is equal to "hello", otherwise the Promise should reject. Below this function, write code that invokes checkString() and outputs (in the console) "Good!" upon Promise success or "Bad!" upon Promise failure. Do not use jQuery. 

13.	Write a Python function isValidPhone() that returns a boolean and uses regex to determine if a string is in the phone number format ###-###-#### (e.g. 727-999-0001).

14.	Why would the following query fail? Assume all table names, column references, and implied data types are correct. SELECT MAX(r.facility) AS max, ra.amount, rl.quantity, rl.item_number FROM request r JOIN request_line rl ON rl.request_id = r.id GROUP BY r.contact, ra.amount, rl.item_number; 

15. Write an Ansible YAML script to install the package tesseract and symbolically link the binary to the path /usr/local/bin/tesseract, do this for a RHEL or Centos system, assume it will run locally.


# Additional coding

Part 1. Create a Django model to store customer, first name, middle, last name and email address.

Part 2. Write a form in HTML and Django with text boxes for first, middle and last name, as well as a checkbox input labeled "Enroll" include a Submit Button.

Part 3. Write the Django view that would process someone enolling or unenolling based on the checkbox.

Part 4 (Bonus). Describe how this page could be modified to detect if previously set values in the inputs had changed. 

