// destructuring: 1- array, 2- object


// object
{
const users ={

    id:55,
    name:{
        firstName: 'razib',
        middleName: 'uddin',
        lastName: 'sultan'
    },
    contactNo: '0123456789',
    adress:'india'
}

const{
    contactNo,
    name:{lastName},
} = users


//  array

const friends =['razib', 'rashed', ' mina', 'hasem']

const [,,bestFriend, ...rest] = friends




}

