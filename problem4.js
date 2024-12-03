const isValidBracketSequence = (string) => {
    if (string == undefined || string == '')
        return false;

    const stack = [];
    const bracketPairsPattern = {
        ')': '(',
        '}': '{',
        ']': '[',
    };

    for (const char of string) {
        // check if current char is equal to openning bracket
        if (['(', '{', '['].includes(char)) {
            // then push to stack
            stack.push(char);
        } else if ([')', '}', ']'].includes(char)) { // check if current char is equal to closing bracket
            // check if stack is empty then return false
            if (stack.length === 0) {
                return false;
            } else if (stack.pop() !== bracketPairsPattern[char]) { // if stack is not empty, if opening bracket not correct, return false
                return false;
            }
        }
    }
    // finnaly, if stack is empty, all closing brackets has found their opening one, return true
    if (stack.length == 0)
        return true;
    // is invalid as length > 0
    return false;
}

console.log('\n"()[]{}"  ==>  '  + isValidBracketSequence("()[]{}"))

console.log('\n"([{}])"  ==>  '  + isValidBracketSequence("([{}])"))

console.log('\n"("  ==>  '  + isValidBracketSequence("("))

console.log('\n"[(])"  ==>  '  + isValidBracketSequence("[(])"))

console.log('\n"{[}]"  ==>  '  + isValidBracketSequence("{[}]"));

console.log('\n")"  ==>  '  + isValidBracketSequence("("))

console.log('\n""  ==>  '  + isValidBracketSequence());

console.log('\nno input data  ==>  '  + isValidBracketSequence(""));
