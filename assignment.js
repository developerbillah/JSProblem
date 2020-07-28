
//Feet To Mile Converter
function feetToMile(feet){
	var mile = feet / 5280;
	return mile;
}

var result = feetToMile(1);
console.log(result);

//Wood Calculator 
function woodCalculator(chair, table, bed){
    var wood = chair*1 + table*3 + bed*5;
    return wood;
}

var totalWood = woodCalculator(1,2,1);
console.log(totalWood);

//Bricks Calculator
function brickCalculator(buildingHeight){
    var bricks;
    if(buildingHeight >= 1 && buildingHeight <= 10){
        bricks = 15*1000;
    }else if(buildingHeight >=11 && buildingHeight <=20){
        bricks = 12*1000;
    }else if(buildingHeight >=21){
        bricks = 10*1000;
    }

    return bricks;
}

var totalBricks = brickCalculator(11);
console.log(totalBricks);