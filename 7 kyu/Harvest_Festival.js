// https://www.codewars.com/kata/606efc6a9409580033837dfb

// EXAMPLE INPUT
const seed = "@", water = 3, fert = 3, temp = 25; 
// result -> "---@@@---@@@---@@@"   

// ORIGINAL SOLUTION
function plant(seed, water, fert, temp){
    let stem = "-";
    if (temp < 20 || temp > 30) {
       return `${stem.repeat(water ** 2)}${seed}`
    }
    let flower = `${stem.repeat(water)}${seed.repeat(fert)}`
    return flower.repeat(water);
}

console.log(plant(seed, water, fert, temp));

// REFACTORED SOLUTION
function plant(seed, water, fert, temp){
    return temp < 20 || temp > 30 
    ? `${"-".repeat(water ** 2)}${seed}`
    : `${"-".repeat(water)}${seed.repeat(fert)}`.repeat(water);
}

// ONELINE REFACTOR - longer than my schlong
const plant = (seed, water, fert, temp) => temp < 20 || temp > 30 ? `${"-".repeat(water ** 2)}${seed}`: `${"-".repeat(water)}${seed.repeat(fert)}`.repeat(water);
