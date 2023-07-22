import React, { useState } from "react";
export const initialState={
    initialValue:"0",
    operator:null,
    currentValue:null
};



export const typeFunc =(type,value)=>{
    if (type==="num"){
        numFunc(value);
    }
    else if (type==="other"){
        otherFunc(value);
    }

}

export const numFunc = (value,state) => {
    if (state.initialValue==="0"){
      return{ initialValue:`${value}`}
    }
    else{
        return {initialValue:`${state.initialValue}${value}`}
    }
    
}




export const otherFunc = state => {

    const {initialValue,operator,currentValue} = state;

    const first = parseFloat(initialValue);
    const second = parseFloat(currentValue);
    const reset = {
        operator:null,
        currentValue:null
    };

    switch (operator){
        case "AC":
            return{initialValue:"0"};
        case "+":
            return{
                initialValue: first + second,
                ...reset
            }
        case "-":
            return{
                initialValue: `${first - second}`,
                ...reset
            }
        case "*":
            return{
                initialValue: `${first * second}`,
                ...reset
            }
        case "/":
            return{
                initialValue: `${first / second}`,
                ...reset
            }
        case "%":
            return{
                initialValue: `${first % second}`,
                ...reset
            }
        return state;
    }
        
    
}


export const getValue=()=>{
    return initialValue;
}



const Functions = (type,value,state) => {
    if (type==="num"){
        return numFunc(value,state);
    }
    else if (type==="equal"){
        return otherFunc(state);
    }
    else if (type==="other"){
        return{
            currentValue:state.initialValue,
            operator:value,
            initialValue:"0",
        };
    }
    else return state;
    
}


export default Functions