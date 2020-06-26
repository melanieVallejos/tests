// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


    const stringA = 'june';
    const stringB = 'pencil'; 
    const stringC = 'Hello!';

    const test3 = (string) => 
        string.split('').reverse().join('');
    ;

   
console.log(test3(stringA));
console.log(test3(stringB));
console.log(test3(stringC));


// module.exports = test3;


