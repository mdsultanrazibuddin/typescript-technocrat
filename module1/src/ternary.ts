{

// ternary operator || optional chaining || nullish coalescing


const age =18

if (age >= 18) {
    console.log('adult');
    
}
else{
    console.log('not adult');
    
}


const isAdult = age >= 18? 'adult' : 'not adult'

// nullish coalescing operator
const isAuthenticated = null
const result = isAuthenticated ?? 'guest'

console.log({result});



























}