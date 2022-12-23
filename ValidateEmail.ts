let reg = new RegExp('^[A-Za-z0-9_]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$')

let email = ['abc@gmail.com', '@abc@gmail.com', 'abc@gmail.', 'abc@.', 'asd@.gmail.com', '#abc@gmail.com', 'ab_c@gmail.com']

for (let i of email) {
    if (reg.test(i)) {
        console.log(i + ' is valid');
    } else {
        console.log(i + ' is invalid');
    }
    
}


