import { View, SafeAreaView, FlatList, Text } from "react-native";
//FlatList to list, SafeAreaView (div) to make sure everthing fits on the screen
import { useState } from "react";
import{ COLORS, NFTData} from '../constants'
import { FocusedStatusBar, HomeHeader, NFTCard } from "../components";



//zIndex is what determines if a component comes up or back other

const Home=()=>{

    const [nftData, setNftData]= useState(NFTData);

    const handleSearch=(value)=>{
        if(!value.length) return setNftData(NFTData); // if value.length setNftData to original NFTData

        //than
        //filter() its a function like a map whitch treats each item in it 
        //Checking if name form item to lowercase includes value
        const filteredData= NFTData.filter((item)=> item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
        //check if at less exist one element from inclusion
        if(filteredData.length){
            setNftData(filteredData);
        }else{
            setNftData(NFTData);  
        }
    }

    return(
        <SafeAreaView style={{flex:1}}>
            <FocusedStatusBar background={COLORS.primary}/>
            <View style={{flex:1}}>
                <View style={{zIndex:0}}>
                    <FlatList
                        data={nftData}
                        renderItem={({item})=><NFTCard data={item}/>}
                        keyExtractor={(item)=>item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader onSearch={handleSearch}/>}
                        
                    />

                </View>
                <View style={
                    {
                        position: 'absolute',
                        top:0,
                        bottom:0,
                        right:0,
                        left:0,
                        zIndex:-1
                    }}>
                        <View style={{height:300, backgroundColor:COLORS.primary}}/>
                        <View style={{ flex: 1, backgroundColor: COLORS.white}}/>

                </View>
            </View>

        </SafeAreaView>
    );
}

export default Home;