function toCamelCase(str){
    let capFlag = false
    let newStr = str[0]

    for(let i = 1; i < str.length; i++){
        if(str[i] === '-' || str[i] === '_'){
            capFlag = true
            continue
        }
        if(capFlag){
            newStr += str[i].toUpperCase()
            capFlag = false
        }else{
            newStr += str[i]
        }
        
        }
    return newStr
    }


console.log(toCamelCase('this-is-a_test'))