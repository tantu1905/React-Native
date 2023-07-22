import React ,{useState,Fragment} from "react";
import{Text,SafeAreaView,View,StyleSheet,TouchableOpacity, StatusBar} from "react-native";
import MyCustomButtons from "./MyCustomButtons";
import Buttons from "./Buttons";


const MyCustomButton=(props)=>{
  return(<TouchableOpacity style={[styles.buttons,props.style]} onPress={props.onPress}>
      <Text style={styles.buttoncontainertext}>{props.title}</Text> 
    </TouchableOpacity>) 
}

const App=()=>{

  return(
      <Fragment>
        <SafeAreaView style={{backgroundColor:"black"}}/>
  <SafeAreaView style={styles.wrapper}>
    <StatusBar barStyle={"light-content"}/>
      <Buttons/>

  </SafeAreaView>
  <SafeAreaView style={{backgroundColor:"black"}}/>
      </Fragment>
  )

}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    //marginTop: 20,
    //flex oranlama için kullanılabilir 0 ile 1 arası
    //backgroundColor:"gray",
  },
});


export default App;

/*
      <MyCustomButton title="0" onPress={()=>{yazdir(0)}}/>
      <MyCustomButton title="1" style={{marginStart:16}} onPress={()=>{yazdir(1)}}/>
      <MyCustomButton title="2" style={{marginStart:16}} onPress={()=>yazdir(2)}/>
      react.component ve class kullan
      
      */ 


