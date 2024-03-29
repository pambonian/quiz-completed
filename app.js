function isEmpty(obj) {
    // null and undefined are "empty"
    if (obj == null) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0) return false;
    if (obj.length === 0) return true;

    // If it isn't an object at this point
    // it is empty, but it can't be anything *but* empty
    // Is it empty?  Depends on your application.
    if (typeof obj !== "object") return true;

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
};

let empty_object = {};
console.log(isEmpty(empty_object)); //true 
let not_empty_object = { foo: 'bar' };
console.log(isEmpty(not_empty_object)); // false

function successCallback(result) {
    console.log("Success " + result);
}

function failureCallback(error) {
    console.log("Failure " + error);
}

function checkString(foo) {
    return new Promise(function (resolve, reject) {
        if (foo == 'hello')
            resolve('Good!');
        else
            reject('Bad!');
    });
}

checkString('hello').then(successCallback, failureCallback);
checkString('hellod').then(successCallback, failureCallback);
