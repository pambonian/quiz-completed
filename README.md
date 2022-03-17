# quiz-completed

1.	In Python, how would print just the 4th name in the list? 
student_list = ['Alan', 'Alec', 'Adam', 'Charlie', 'Mac']
```
print(student_list[3])
```
2.	Write a foreach loop in Python for list numbers that will modify each entry by adding 10 to the value. 
numbers = [1, 2, 3, 4, 5, 6]
```
q2_answer = [x+10 for x in numbers]
```
3.	Write a Python function Counter() that keeps track of the number of times it is called. This function should not take any parameters and return the number of times that it has been called.
```
def q3counter():
    q3counter.counter += 1
q3counter.counter = 0
```
4.  Using Python how would you find the missing number in this list? 
incomplete_list = [1, 2, 4, 5, 6]
```
def find_missing(incomplete_list):
    return [x for x in range(incomplete_list[0], incomplete_list[-1]+1) 
                               if x not in incomplete_list]
incomplete_list = [1, 2, 4, 5, 6]
print(find_missing(incomplete_list))
```
5.	Write a javascript function isEmpty() that will return true if an object is empty and false if it is not (excluding default prototype properties). Assume you do not have access to Lodash or other libraries. Example: let empty_object = {}; console.log(isEmpty(empty_object)); // true let not_empty_object = { foo : 'bar' }; console.log(isEmpty(not_empty_object)); // false 

```
function isEmpty(obj) {
        if (obj == null) return true;
        if (obj.length > 0)    return false;
        if (obj.length === 0)  return true;
        if (typeof obj !== "object") return true;
        for (var key in obj) {
            if (hasOwnProperty.call(obj, key)) return false;
        }
        return true;
};

let empty_object = {}; 
console.log(isEmpty(empty_object)); //true 
let not_empty_object = { foo : 'bar' }; 
console.log(isEmpty(not_empty_object)); // false
```

6.	Write the skeleton HTML for a table that has a header, body, and footer with three columns and one row. 

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Question 6</title>
</head>

<body>
    <table>
        <thead>
            <tr>
                <th colspan="3">Table Header</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Column One</td>
                <td>Column Two</td>
                <td>Column Three</td>
            </tr>
        </tbody>
        <tfoot>
            <th colspan="3">Table Footer</th>
        </tfoot>
    </table>
</body>

</html>
```
Table CSS:
```
table,
td {
    border: 2px solid black;
    padding: 3px;
}

thead,
tfoot {
    background-color: black;
    color: white;
}
```
7.	Write a Python function that will load a json file located in the directory /home/application_user/stats.json, once loaded access the data located in 'school_name'

```
with open(r'C:\Users\Patrick\Desktop\home\application_user\stats.json') as f:
    config = json.load(f)
for school in config['school_name']:
    print("School Name:", school['name'])
```

8.	What is the difference between "var" and "let" in javascript? 

```
Scope is the main difference between the two. 

The 'var' keyword has been part of JavaScript since it was first introduced. A variable declared using 'var' is globally scoped and remains defined/available anywhere within a JavaScript program. Such 'var' variables can also be re-declared/updated in the same global scope. 

The 'let' keyword was added to JavaScript in 2015(ES6). With variables declared using 'let', such variables are limited to the block or expression where it is used. A 'let' is only read/written if it has been declared; by calling an undeclared 'let' variable, the result is an 'undefined' value by default. A 'let' variable can be updated after it's been declared, but it cannot be re-declared while operating in the same scope. While it is possible to declare a 'let' globally, a 'let' variable does not create properties of the window object - 'let' variables cannot be accessed globally.
```

9.  Write out the Postgres command to restore a database backup to a database with the following information, assume the password will exist in a .pgpass file, be sure to send stderr and stdout to a logile named test_restore.log:

Host: test_database.rds.aws.com
Port: 5432
User: test_role
Database: test_database
Backup location: /backups/test_database_backup_03_2022.sql

10.	Write a jQuery event handler that will fire when a form with ID #foo is submitted and prevents the form from submitting. 

```
<!-- answer here -->
```

11.	What is the difference between JOIN and INNER JOIN in SQL? 

```
<!-- answer here -->
```

12.	Write a javascript function checkString(foo) which takes a parameter `foo`. The function should return a Promise that resolves if `foo` is equal to "hello", otherwise the Promise should reject. Below this function, write code that invokes checkString() and outputs (in the console) "Good!" upon Promise success or "Bad!" upon Promise failure. Do not use jQuery.

```
<!-- answer here -->
```

13.	Write a Python function isValidPhone() that returns a boolean and uses regex to determine if a string is in the phone number format ###-###-#### (e.g. 727-999-0001).

```
<!-- answer here -->
```

14.	Why would the following query fail? Assume all table names, column references, and implied data types are correct. SELECT MAX(r.facility) AS max, ra.amount, rl.quantity, rl.item_number FROM request r JOIN request_line rl ON rl.request_id = r.id GROUP BY r.contact, ra.amount, rl.item_number;

```
<!-- answer here -->
```

15. Write an Ansible YAML script to install the package tesseract and symbolically link the binary to the path /usr/local/bin/tesseract, do this for a RHEL or Centos system, assume it will run locally.

```
<!-- answer here -->
```


# Additional coding

Part 1. Create a Django model to store customer, first name, middle, last name and email address.

Part 2. Write a form in HTML and Django with text boxes for first, middle and last name, as well as a checkbox input labeled "Enroll" include a Submit Button.

Part 3. Write the Django view that would process someone enolling or unenolling based on the checkbox.

Part 4 (Bonus). Describe how this page could be modified to detect if previously set values in the inputs had changed. 

