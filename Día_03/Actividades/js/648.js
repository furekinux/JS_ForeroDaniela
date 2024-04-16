/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */

var replaceWords = function(dictionary, sentence) {
    newdict = sentence.split(" "); //newdict = ["the","cat", "was", "rat","by","the","bat"]
    
    for(animal in dictionary){ //bat
        let tamanio = dictionary[animal].length
        for(word in newdict){ //rattled

            let compareme = newdict[word].slice(0,tamanio);//"cat" tle

            if(dictionary[animal]==compareme){//cat==cat tle
                newdict.splice(word,1,dictionary[animal]);
                
            }
        }

    }
    sumthedict=""
//sumthedict = "the cat was rat by the bat"
    sumthedict= newdict.join(' ');

    return(sumthedict)
};
