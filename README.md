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
emptyObj = {}

function isObjectEmpty(obj){
    if (Object.keys(obj).length == 0){
        return true
    }else{
        return false
    }
}
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
import json

fh = open('/home/application_user/stats.json')
config = json.load(fh)

print(config["school_name"])
```

8.	What is the difference between "var" and "let" in javascript? 

```
Scope is the main difference between the two. 

The 'var' keyword has been part of JavaScript since it was first introduced. A variable declared using 'var' is globally scoped and remains defined/available anywhere within a JavaScript program. Such 'var' variables can also be re-declared/updated in the same global scope. 

The 'let' keyword was added to JavaScript in 2015(ES6). With variables declared using 'let', such variables are limited to the block or expression where it is used. A 'let' is only read/written if it has been declared; by calling an undeclared 'let' variable, the result is an 'undefined' value by default. A 'let' variable can be updated after it's been declared, but it cannot be re-declared while operating in the same scope. While it is possible to declare a 'let' globally, a 'let' variable does not create properties of the window object - 'let' variables cannot be accessed globally.
```

9.  Write out the Postgres command to restore a database backup to a database with the following information, assume the password will exist in a .pgpass file, be sure to send stderr and stdout to a logile named test_restore.log:
```
Host: test_database.rds.aws.com
Port: 5432
User: test_role
Database: test_database
Backup location: /backups/test_database_backup_03_2022.sql
```
Answer:
```

```

10.	Write a jQuery event handler that will fire when a form with ID #foo is submitted and prevents the form from submitting.

```
$( "#foo" ).submit(function( event ) {
    event.preventDefault();
})
```

11.	What is the difference between JOIN and INNER JOIN in SQL? 

```
JOIN and INNER JOIN are functionally equivalent with SQL, since INNER JOIN is used by default if JOIN is used alone. If join type is not specified, then INNER is implicit.
```

12.	Write a javascript function checkString(foo) which takes a parameter `foo`. The function should return a Promise that resolves if `foo` is equal to "hello", otherwise the Promise should reject. Below this function, write code that invokes checkString() and outputs (in the console) "Good!" upon Promise success or "Bad!" upon Promise failure. Do not use jQuery.

```
function checkString(foo){
    const myPromise = new Promise((resolve, reject) => {
        if(foo == 'hello'){
            resolve('Good!')
        }else{
            reject('Bad!')
        }
    })
    return myPromise
}

checkString('hellos')
    .then(res => {
        console.log(res);
    }).catch(error => {
        console.log(error);
    })
```

13.	Write a Python function isValidPhone() that returns a boolean and uses regex to determine if a string is in the phone number format ###-###-#### (e.g. 727-999-0001).

```
import re

def isValidPhone(phonenumber):
    regex = "^\d{3}-\d{3}-\d{4}$"
    if re.search(regex, phonenumber):
        print("Valid phone number format")
        return True
    else:
        print("Invalid phone number format")
        return False

print(isValidPhone('772-766-0454'))
```

14.	Why would the following query fail? Assume all table names, column references, and implied data types are correct. 

Query:
```
SELECT MAX(r.facility) AS max, ra.amount, rl.quantity, rl.item_number FROM request r JOIN request_line rl ON rl.request_id = r.id GROUP BY r.contact, ra.amount, rl.item_number;
```
Answer:

```
We are attempting to access ra.amount with GROUP BY, but we did not specify the ra.amount with the JOIN in the example, therefore we wouldn't have access to it when attempting GROUP BY.
```

15. Write an Ansible YAML script to install the package tesseract and symbolically link the binary to the path /usr/local/bin/tesseract, do this for a RHEL or Centos system, assume it will run locally.

```
---
-   name: Tesseract Install
    hosts: all
    become: true
    tasks:
        - shell: npm i tesseract.js # https://www.npmjs.com/package/tesseract.js
          package: Tesseract
          state: latest
        - name: Add Tesseract Bin to Path
          lineinfile: 
            dest: /usr/local/bin/tesseract
            regexp: '^test -s'
            line: '[[ -s "$HOME/.tesseract/scripts/tesseract" ]] && source "$HOME/.tesseract/scripts/tesseract"'
        - name: Reload Path
          shell: source /usr/local/bin/tesseract
          args:
            executable: /bin/tesseract

```


# Additional coding

Part 1. Create a Django model to store customer, first name, middle, last name and email address.
```
from django.db import models

class Customer(models.Model):
    firstName = models.Charfield(max_length=100)
    middleName = models.Charfield(max_length=100)
    lastName = models.Charfield(max_length=100)
    email = models.Charfield(max_length=100)


```

Part 2. Write a form in HTML and Django with text boxes for first, middle and last name, as well as a checkbox input labeled "Enroll" include a Submit Button.
```
def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save();
    else:
        form = UserCreationForm()
    return render(request, 'users/register.html', {'form;: form})
```

```
{% extends "quiz-answer/base.html" %}
{% load crispy_forms_tags %}
{% block content %}
    <div class="content-section">
        <form method="POST">
            {% csrf_token %}
            <fieldset class="form-group">
                <legend class="border-bottom mb-4>Enroll</legend>
                {{ form }}
            </fieldset>
            <div class="checkbox">
                <input id="check1" type="checkbox" class="styled" checked>
                <label for="check1">
                    Enroll
                </label>
            </div>
            <div class="form-group">
                <button class="btn btn-outline-info" type="submit">Submit</button>
            </div>
        </form>
    </div>
{% endblock content %}
```

Part 3. Write the Django view that would process someone enolling or unenolling based on the checkbox.
```

```
Part 4 (Bonus). Describe how this page could be modified to detect if previously set values in the inputs had changed. 
```
any(x in myforminstance.changed_data for x in ['firstName', 'middleName', 'lastName', 'email'])
```

