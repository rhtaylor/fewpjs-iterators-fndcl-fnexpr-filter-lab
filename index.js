// Code your solution here

function findMatching(arg1, arg2){
      let x =  arg1.filter( val => val.toLowerCase() === arg2.toLowerCase() )
        return x
}

function fuzzyMatch(arg1, arg2){   
    let regEx = `^${arg2}`; 
    
       let x = arg1.filter( val => val.match( regEx , val ) ); 
       console.log(x)
    return x
} 

function matchName(arg1, arg2){
    let response = arg1.filter(element => element.name === arg2) 
    return response    
    
}