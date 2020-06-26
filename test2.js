// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


    const stringA = 'abcabdabrbadabhabrabdabrabw';
    const stringB = 'a1b1c1d1e1f1g1h1i1'; 
    const stringC = 'testestest ble ble 33';

    const test2 = (string) => {
        var stringInCh = string.split('');
        var counter = {};
        var max = -1;
        var result = 
        stringInCh.forEach(el=> {
            if (counter[el] === undefined) {counter[el] = 1} else {counter[el] += 1}
        }        
        );

        for (var key in counter) {
            if(counter[key] > max){
                max = counter[key]
                result = key
            }
        }
        return result;
    };
   
console.log(test2(stringA));
console.log(test2(stringB));
console.log(test2(stringC));


// module.exports = test2;


