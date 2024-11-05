const accountId=14421;
let accountEmail='anmolsrivastavami4@gmail.com';
var accountPassword='001122';
accountCity='Noida';

// accoundId=14422; not allowed
accountEmail='xyz@gmail.com';
accountPassword='12345';
accountCity='Kanpur'


/*
prefer not to use var because of block scope
*/

let accountState;

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
