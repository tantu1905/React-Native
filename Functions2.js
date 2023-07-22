import React from "react";

export const initialState={ 
    firstNumber:"0",
    operator:null,
    secondNumber:null,
};

export const writeFunc=(value,state)=>{
    if (state.firstNumber==="0"){
        return{firstNumber:`${value}`}
    }
    else{
        return{
            firstNumber:`${state.firstNumber}${value}`
        };
    }
}






export const equalFunc=state=>{
    const{firstNumber,operator,secondNumber}=state;
    const first=parseFloat(firstNumber);
    const second = parseFloat(secondNumber);
    const reset ={
        operator:null,
        secondNumber:null,
    }

    switch (operator){
        case "+":
            return{
                firstNumber:first+second,
                ...reset
            }
        case "-":
            return{
                firstNumber:first-second,
                ...reset
            } 

        case "*":
            return{
                firstNumber:first*second,
                ...reset
            }
        case "/":
            return{
                firstNumber:first/second,
                ...reset
            }
        return state;
    }
}


const Functions2 = (type,value,state)=>{

        if (type==="num"){
            return writeFunc(value,state);
            
        }
        else if (type==="equal"){
            return equalFunc(state);
        }
        else if (type==="other"){
            return{
                secondNumber:state.firstNumber,
                operator:value,
                firstNumber:"0",
            };
        }
        else if (type==="AC"){
            return {firstNumber:`0`}
        }

        else if (type==="%"){
            return{
                firstNumber:state.firstNumber*0.01,
                ///...reset
            }
        }
        else if (type==="√"){
            return{
                firstNumber:Math.sqrt(state.firstNumber),
            }
        }
        else if (type==="^"){
            return {
                firstNumber:Math.pow(state.firstNumber,value),
            }
        }
        else return state;

    
}


export default Functions2