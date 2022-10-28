import React from "react";
import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/native";

//This is setting props to the top of the app

const FocusedStatusBar=(props)=>{ //the porps are going to contain the bg color for status bar
    const isFocused= useIsFocused(); // gives us the information on our curently focused status bar
    
    // if is focused is true we can retun Status bar, else (if we are not focused ) we return nul
    return isFocused?<StatusBar animated={true} {...props}/>:null;

    

}

export default FocusedStatusBar;