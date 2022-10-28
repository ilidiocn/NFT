import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { COLORS, SIZES, FONTS, SHADOWS } from "../constants";
//TouchableOpacity means something we can touch (we are not clicking, we are toching, its not botton, its TouchableOpacity)

export const CircleButton =({imgUrl, handlePress, ...props})=>{
    return(
        <TouchableOpacity
            style={{
                height:40,
                width:40,
                backgroundColor:COLORS.white,
                position:'absolute',
                borderRadius:SIZES.extraLarge, 
                alignItems:'center',
                justifyContent:'center',
                ... SHADOWS.light,
                ... props
            }}
            onPress={handlePress}
            >
                <Image
                    source={imgUrl}
                    resizeMode='contain'
                    style={{width:24, height:24}}
                />

        </TouchableOpacity>
    )
}

export const RectButton =({minWidth, fontSize, handlerPress, ...props})=>{
    return(
        <TouchableOpacity
            style={{
                backgroundColor:COLORS.primary,
                borderRadius:SIZES.extraLarge, 
                minWidth: minWidth,
                fontSize: fontSize,
                padding: SIZES.small,
                ... props
            }}
            onPress={handlerPress}
            >
                <Text style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: fontSize,
                    color: COLORS.white,
                    textAlign: 'center'

                }}>Place a bird</Text>

        </TouchableOpacity>
    )
}
