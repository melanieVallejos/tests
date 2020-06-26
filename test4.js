// --- Directions

//Alice is a kindergarten teacher. She wants to give some candies to the children in her class.  
//All the children sit in a line and each of them has a rating score according to his or her performance in the class. 
//Alice wants to give at least 1 candy to each child. If two children sit next to each other, then the one with the higher rating
// must get more candies. 
//Alice wants to minimize the total number of candies she must buy.
//For example, assume her students' ratings are [4, 6, 4, 5, 6, 2]. She gives the students candy in the following minimal amounts:
// [1, 2, 1, 2, 3, 1]. 
//She must buy a minimum of 10 candies

    const ratings = [4, 6, 4, 5, 6, 2];

    
    const test4 = (ratings) => {
        const startingAmounts =[1,1,1,1,1,1]
    var cand = 1;
    var max = ratings[0];
    var maxIndex = 0;
        const le = ratings.length;
        for (var i = 0; i < le; i ++) {
            if (ratings[i] > max) {
                maxIndex = i;
                max = ratings[i];
            }
        }
        while (cand <= 10){
            for (var i = 0; i < le; i ++) {
                
                if(ratings[i] > ratings[i+1] && ratings[i] < ratings[maxIndex]){
                    startingAmounts[maxIndex]++;

                } else if(ratings[i] > ratings[i+1] ){
                    startingAmounts[i]++;
                    
                }
                cand ++;
          }
          
        }
      
    
        return startingAmounts;
    };

   
console.log(test4(ratings));


// module.exports = test4;


