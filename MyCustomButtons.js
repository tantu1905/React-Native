import React from "react";
import { StyleSheet, Text,TouchableOpacity ,View} from "react-native";
import { useState } from "react";
import Functions,{initialState} from "./Functions";



const MyCustomButton=(props)=>{
    return(<TouchableOpacity style={[styles.buttons,props.style]} onPress={props.onPress}>
        <Text style={styles.buttoncontainertext}>{props.title}</Text> 
      </TouchableOpacity>) 
  }


const MyCustomButtons=()=>{
  //const [count,setCount] = useState("0");
    state = initialState;

    handleTap = (type,value) => {
        state => Functions(type,value);
    }
    

    const yazdir= key =>{
        switch(key){
            case 0:
              if (count==="0"){
                setCount("0");
                break;
              }
                setCount(count+"0");
                break;
            case 1:
                if (count==="0"){
                  setCount("1");
                  break;
                }
                else{
                  setCount(count+"1");
                  break;
                }
            case 2:
              if (count==="0"){
                setCount("2");
                break;
              }
              else{
                setCount(count+"2");
                break;
              }
            case "AC":
              setCount("0");
              break;
            case 3:
              if (count==="0"){
                setCount("3");
                break;
              }
              else{
                setCount(count+"3");
                break;
              }
            case 4:
              if (count==="0"){
                setCount("4");
                break;
              }
              else{
                setCount(count+"4");
                break;
              }
            case 5:
              if (count==="0"){
                setCount("5");
                break;
              }
              else{
                setCount(count+"5");
                break;
              }
            case 6:
              if (count==="0"){
                setCount("6");
                break;
              }
              else{
                setCount(count+"6");
                break;
              }
            case 7:
              if (count==="0"){
                setCount("7");
                break;
              }
              else{
                setCount(count+"7");
                break;
              }
            case 8:
              if (count==="0"){
                setCount("8");
                break;
              }
              else{
                setCount(count+"8");
                break;
              }
            case 9:
              if (count==="0"){
                setCount("9");
                break;
              }
              else{
                setCount(count+"9");
                break;
              }
              

        }
    }
    return(
      <>

      <View style={styles.container}>
        <Text style={styles.text}>
         {count}
        </Text>
      </View>

      <View style={styles.buttoncontainer}>
        <MyCustomButton title="1" onPress={()=>{yazdir(1)}}/>
        <MyCustomButton title="2" style={{marginStart:16}} onPress={()=>{yazdir(2)}}/>
        <MyCustomButton title="3" style={{marginStart:16}} onPress={()=>yazdir(3)}/>
        <MyCustomButton title="AC" style={{marginStart:16}} onPress={()=>yazdir("AC")}/>
      </View>
      <View style={styles.buttoncontainer}>
        <MyCustomButton title="4" onPress={()=>{yazdir(4)}}/>
        <MyCustomButton title="5" style={{marginStart:16}} onPress={()=>{yazdir(5)}}/>
        <MyCustomButton title="6" style={{marginStart:16}} onPress={()=>yazdir(6)}/>
        <MyCustomButton title="+" style={{marginStart:16}} onPress={()=>yazdir("+")}/>
      </View>
      <View style={styles.buttoncontainer}>
        <MyCustomButton title="7" onPress={()=>{yazdir(7)}}/>
        <MyCustomButton title="8" style={{marginStart:16}} onPress={()=>{yazdir(8)}}/>
        <MyCustomButton title="9" style={{marginStart:16}} onPress={()=>yazdir(9)}/>
        <MyCustomButton title="-" style={{marginStart:16}} onPress={()=>yazdir("-")}/>
      </View>
      <View style={styles.buttoncontainer}>
        <MyCustomButton title="0" onPress={()=>{yazdir(0)}}/>
      </View>

      </>

    );
}

const styles=StyleSheet.create({
  wrapper: {
    flex: 1,
    //marginTop: 20,
    //flex oranlama için kullanılabilir 0 ile 1 arası
    //backgroundColor:"gray",
  },
  container:{
    //margin:20,
    flex: 0.3,
    //justifyContent:"flex-start",
    alignItems:"flex-end",

    backgroundColor:"#fcb514",
    //flex-end sağa ltr sola
    
  },
  text:{
    fontSize:70,
    color:"red",
    marginTop:100,
    marginEnd:10,
    //setDirection:"ltr",
    //margintop üstten margin bottom alttan boşluk bırakır
  },
    buttoncontainer:{
        flex:0.1,
        marginLeft:30,
        marginTop:20,
        flexDirection:"row",
      },
      buttons:{
        borderRadius:40,
        height:80,
        width:80,
        backgroundColor:"red",
        alignItems:"center",
        justifyContent:"center",
      },
      buttoncontainertext:{
        color:"white",
        fontSize:30,
      }
});
  

export default MyCustomButtons;