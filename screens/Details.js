
import React from "react";

import { Text, View, SafeAreaView, Image, StatusBar, FlatList } from "react-native"

import { COLORS, FONTS, SIZES, SHADOWS, assets } from "../constants"

import {CircleButton, RectButton, SubInfo, FocusedStatusBar, DetailsDes, DetailsBid} from '../components'



const DetailsHeader=({data, navigation})=>(
  <View style={ {width: '100%', height:373}}>
    <Image
     source={data.image} 
     resizeMode='cover'
     style={{width:'100%', height:'100%'}}
    />
    <CircleButton
      imgUrl={assets.left}
      handlePress={()=>navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight+10}
    />
    <CircleButton
      imgUrl={assets.heart}
      right={15}
      top={StatusBar.currentHeight+10}
    />

  </View>
)

const Details = ({route, navigation}) => {
  //As we using the Details as a component insede the Stack.Screen,  we get the route and navigation by default, all that info (route, navigation) is passed 
  const {data}=route.params;  //restores the data from Stack

  //zIndex sets the component up/front or back/down to others
  return (
    <SafeAreaView style={{flex:1}}>
      <FocusedStatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        transLucent={true}
      />
      <View style={{
        width:'100%',
        position:'absolute',
        bottom:0,
        paddingVertical:SIZES.font,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        zIndex:1
      }}>
        <RectButton 
          minWidth={170} 
          fontSize={SIZES.large}
          {... SHADOWS}
        />
      </View>
      <FlatList
        data={data.bids}
        renderItem={({item})=><DetailsBid bid={item} />}
        keyExtractor={(item)=>item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: SIZES.extraLarge * 3}}
        ListHeaderComponent={()=>(
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation}/>
            <SubInfo/>
            <View style={{padding:SIZES.font}}>
              <DetailsDes data={data}/>
            </View>
          </React.Fragment>
        )}
      />

    </SafeAreaView>
  )
}

export default Details