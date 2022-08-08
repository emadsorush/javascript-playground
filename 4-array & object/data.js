const user = {
    name: 'emad',
    lname: 'soroush',
    age: 28,
    printage: function () {
        console.log(user);
    }
}
user.printage();
user.username = 'EMS';
user.age = 30;
user.printage();
delete user.username;
user.printage();
console.log(Object.keys(user));

const user2 = { email: 'example@gmail.com' }
const tempuser = Object.assign({
    username: 'admin'
}, user, user2)
console.log(user2);

//////for in , for of

for (let keys in user)
    console.log(keys + " : " + user[keys])

const array = [20, 390, 2, 200]
for (const item in array)
    console.log(item)
for (const item of array)
    console.log(item)