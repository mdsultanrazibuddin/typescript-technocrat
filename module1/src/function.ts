// learning Function
//  normal function
// arrow function


{

function add(num1:number, num2:number): number {
    return num1+ num2
}


const addArrow = (num1:number, num2:number): number => num1 +num2

// object --> function m---> method


const poorUser = {
    name: 'razib',
    balance: 55,
    addbalance (balance: number) : number{
        return this.balance+balance
    } 

    
}

const arr: number[] = [1,4,5]
const newArray = arr.map(elem =>elem +elem)

}