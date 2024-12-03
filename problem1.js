
const validateEmail = (email) => {

    // check if email is empty or undefined : return false
    if (email == undefined || email == '') {
        console.log('email is empty or undefined');
        return false;
    }

    // check if email is contains spaces : return false
    if (email.includes(' ')) {
        console.log('email is contains empty spaces');
        return false;
    }

    // check if email length < 256 : return false
    if (email.length > 256) {
        console.log('email length > 256');
        return false
    }

    // need to split email bt '@' for further testings
    const emailParts = email.split('@');

    // check if email contains less or more than on "@" character
    if (emailParts.length != 2) {
        console.log('email does not contains only one "@" character');
        return false;
    }

    // check if "@" character is not the last or the first
    if (email[0] == '@' || email[email.length - 1] == '@') {
        console.log('"@" character is either first or last character of email');
        return false;
    }

    // check if email contains at least one chacater '.' after '@' character
    if (!emailParts[1].includes('.')) {
        console.log('email contains at least one chacater "." after "@" character');
        return false;
    }

    // check if email contains  '..' 
    if (email.includes('..')) {
        console.log('email contains ".." characters');
        return false;
    }

    // check if last suffix length is < 2 
    const emailPartSuff = emailParts[1].split('.')
    if (emailPartSuff[emailPartSuff.length - 1].length < 2) {
        console.log('last suffix length is < 2');
        return false;
    }

    // '.' character should not immediately preceeded or followed by the '@' character
    if (emailParts[0][emailParts.length - 1] == '.' || emailParts[1][0] == '.') {
        console.log('"."character should not immediately preceeded or followed by the "@" character');
        return false
    }

    // check if contains special characters  : return false
    let specialCharacterFound = false;
    let j = 0;
    while (j < email.length && !specialCharacterFound) {
        const charCode = email.charCodeAt(j);
        if (
            !(charCode >= 48 && charCode <= 57) && // Digits (0-9)
            !(charCode >= 65 && charCode <= 90) && // Uppercase letters (A-Z)
            !(charCode >= 97 && charCode <= 122) &&  // Lowercase letters (a-z)
            charCode != 64 &&     //  '@' ascii code
            charCode != 46        //  '@' ascii code
        ) {
            specialCharacterFound = true;
        }

        j++;
    }
    if (specialCharacterFound) {
        console.log('email contains special character');
        return false;
    }
    return true;

}

// Test cases
console.log("'john.doe@gmail.com'" + '  : ' + validateEmail("john.doe@gmail.com") + '\n\n');
console.log("''" + '  : ' + validateEmail("") + '\n\n');
console.log("'john.doe@gmail%.com'" + '  : ' + validateEmail("john.doe@gmail%.com") + '\n\n');
console.log("'john.doe@gmail .com'" + '  : ' + validateEmail("john.doe@gmail .com") + '\n\n');
console.log("'john@doe@gmail.com'" + '  : ' + validateEmail("john@doe@gmail.com") + '\n\n');
console.log("'john@gmail.c'" + '  : ' + validateEmail("john@gmail.c") + '\n\n');
console.log("'john@.com'" + '  : ' + validateEmail("john@.com") + '\n\n');