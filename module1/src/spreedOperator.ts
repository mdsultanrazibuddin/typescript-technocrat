

// spread operator---> Array


const nam1 : string[] = ['kabil', 'ajaira', 'bajaira']
const nam2 : string[] = ['mim', 'dim','chim']

nam1.push(...nam2)


//   object
const mentor1 ={
    react: 'fahim',
    redux: 'fahu',
    native: 'raj'
}


const mentor2 ={
    prisma:'rahim',
    database: 'rasel',
    cloud:'asif'
}

const mentorList ={
    ...mentor1,
    ...mentor2
}


// rest operator

const greetingFriend =(...friends: string[]) =>{
    friends.forEach((friend: string) => console.log(`hi ${friend}`)
    )
    
}

greetingFriend('razib', 'hanif', 'rashed', 'tarek', 'kasem')