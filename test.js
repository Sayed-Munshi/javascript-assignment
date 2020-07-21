// 1 mail Caluculator

function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile(16840);
console.log("you have", result, "mile")

// 2 Wood Caluculator chair table bad

function woodCalculator(chair, table, bad){
    var chaircount = chair * 1;
    var tablecount = table * 3;
    var badcount = bad *5;
    var totalcout = chaircount + tablecount + badcount;
    return totalcout;
}
var result=woodCalculator(5, 2, 3);
console.log("you need ",result, "QBK feet Wood for all");


// 4 tiny Friend Name Serch
function tinyFriend(arr) {
    let smallName = Infinity;
    let test = "";

    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'string' && arr[i].length < smallName) {
                test = arr[i];
                smallName = arr[i].length;
            }
        }
    }

    return test;
}

var result = tinyFriend(['disha','sayed Munshi', 'waz', 'nasir', 'ai']);
console.log(result); 


// 3 brickCalculator Calculate bricks
function brickCalculator(floor){
    if(floor > 0 && floor <= 10){
        return brick = 15 * 1000 * floor
    }
    else if(floor > 10 && floor <= 20){
        let newFloor = floor - 10
        return brick = (12 * 1000 * newFloor) + (15 * 1000 * 10)
    }
    else if(floor > 20){
        let newFloor = floor - 10
        newFloor = newFloor - 20
        return brick = (10 * 1000 * newFloor) + (12 * 1000 * 20) + (15 * 1000 * 10)
    }
    else{
        return brick = 0
    }
}

const brickCalculatorInput = 22
let brick = 0

brickCalculator(brickCalculatorInput)

console.log('For ' + brickCalculatorInput + ' Floor we need ' + brick + ' amount of brick')