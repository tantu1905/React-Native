import React,{useState} from "react";
import { TouchableOpacity, StyleSheet, Text,SafeAreaView,View ,Pressable} from "react-native";
import Functions2,{initialState, upFunc} from "./Functions2";
import { StatusBar } from "react-native";

const MyButtons = (props) => {
    return(
        <Pressable style={[styles.buttons, props.style]} onPress={props.onPress}>
            <Text style={styles.buttoncontainertext}>{props.title}</Text>
        </Pressable>
    )
}





class App extends React.Component {

    state=initialState;


    testTap = (type,value) => {
        this.setState(state=>Functions2(type,value,state));
    }
    upFunc = key =>
    {
      if (upperString==="0"){
        setUpperString(`${key}`)
      }
      else {
        setUpperString(`${upperString}${key}`)
      }
    }
    render(){

        return(
            
            <SafeAreaView style={styles.wrapper}>
    
    <View style={styles.container}>
            <Text style={styles.uppertext}>{this.state.secondNumber}{this.state.operator}{this.state.firstNumber}</Text>
            <Text style={styles.text}>
             {(this.state.firstNumber)}
            </Text>
          </View>

          <View style={styles.buttoncontainer}>
          <MyButtons title="AC" onPress={()=>this.testTap("AC","AC")}/>
          <MyButtons title="%" style={{marginStart:16}} onPress={()=>{this.testTap("%","%");} }/>
          <MyButtons title="√2" style={{marginStart:16}} onPress={()=>this.testTap("√","√")}/>
          <MyButtons title="/" style={{marginStart:16}} onPress={()=>this.testTap("other","/")}/>

            </View>
    
          <View style={styles.buttoncontainer}>
            <MyButtons title="1" onPress={()=>{this.testTap("num",1)}}/>
            <MyButtons title="2" style={{marginStart:16}} onPress={()=>{this.testTap("num",2)}}/>
            <MyButtons title="3" style={{marginStart:16}} onPress={()=>this.testTap("num",3)}/>
            <MyButtons title="X" style={{marginStart:16}} onPress={()=>this.testTap("other","*")}/>

          </View>
          <View style={styles.buttoncontainer}>
            <MyButtons title="4" onPress={()=>{this.testTap("num",4)}}/>
            <MyButtons title="5" style={{marginStart:16}} onPress={()=>{this.testTap("num",5)}}/>
            <MyButtons title="6" style={{marginStart:16}} onPress={()=>this.testTap("num",6)}/>
            <MyButtons title="+" style={{marginStart:16}} onPress={()=>this.testTap("other","+")}/>
          </View>
          <View style={styles.buttoncontainer}>
            <MyButtons title="7" onPress={()=>{this.testTap("num",7)}}/>
            <MyButtons title="8" style={{marginStart:16}} onPress={()=>{this.testTap("num",8)}}/>
            <MyButtons title="9" style={{marginStart:16}} onPress={()=>this.testTap("num",7)}/>
            <MyButtons title="-" style={{marginStart:16}} onPress={()=>this.testTap("other","-")}/>
          </View>
          <View style={styles.buttoncontainer}>
            <MyButtons title="0" style={{width:196}}onPress={()=>{this.testTap("num",0)}}/>
            <MyButtons title="," style={{marginStart:16}} onPress={()=>this.testTap("num",".")}/>

            <MyButtons title="=" style={{marginStart:16}} onPress={()=>this.testTap("equal","=")}/>

          </View>
            </SafeAreaView>
        );
    }
    

}


const styles=StyleSheet.create({
    wrapper: {
      flex: 1,
      //marginTop: 20,
      //flex oranlama için kullanılabilir 0 ile 1 arası
      backgroundColor:"black",
    },
    container:{
      //margin:20,
      flex: 0.42,
      //justifyContent:"flex-start",
      alignItems:"flex-end",
  
      backgroundColor:"black",
      //flex-end sağa ltr sola
      
    },
    text:{
      fontSize:70,
      color:"red",
      marginTop:120,
      marginEnd:10,
      //setDirection:"ltr",
      //margintop üstten margin bottom alttan boşluk bırakır
    },
      buttoncontainer:{
          flex:0.1,
          marginLeft:10,
          marginTop:40,
          flexDirection:"row",
        },
        buttons:{
          borderRadius:45,
          height:90,
          width:90,
          backgroundColor:"#fcb514",
          alignItems:"center",
          justifyContent:"center",
          shadowRadius:4.5,
          shadowColor:"white",
          shadowOpacity:0.7,
          shadowOffset: {width:1,height:1},
        },
        buttoncontainertext:{
          color:"black",
          fontSize:30,
        },
        uppertext:{
          fontSize:40,
          color:"white",
          marginTop:30,
          marginEnd:10,
          opacity:0.5,
          //setDirection:"ltr",
          //margintop üstten margin bottom alttan boşluk bırakır
        }
  });
export default App