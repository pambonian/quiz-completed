import re

phonenumber = "516-111-2222"
regex = "\w{3}-\w{3}-\w{4}"

def isValidPhone():
    if re.search(regex, phonenumber):
        print("Valid phone number format")
        return True
    else:
        print("Invalid phone number format")

print(isValidPhone())

# with open(r'C:\Users\Patrick\Desktop\home\application_user\stats.json') as f:
#     config = json.load(f)
# for school in config['school_name']:
#     print("School Name:", school['name'])
# print (len(config))


# student_list = ['Alan', 'Alec', 'Adam', 'Charlie', 'Mac']
# print(student_list[3])

# numbers = [1, 2, 3, 4, 5, 6]
# q2_answer = [x+10 for x in numbers]
# print(q2_answer)

# def q3counter():
#     q3counter.counter += 1
# q3counter.counter = 0

# print(q3counter.counter)
# q3counter()
# print(q3counter.counter)


# def find_missing(incomplete_list):
#     return [x for x in range(incomplete_list[0], incomplete_list[-1]+1) 
#                                if x not in incomplete_list]
# incomplete_list = [1, 2, 4, 5, 6]
# print(find_missing(incomplete_list))


