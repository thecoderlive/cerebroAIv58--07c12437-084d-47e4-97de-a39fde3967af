import React, { useState } from 'react'
import { Image, StyleSheet, FlatList, View, Text } from 'react-native'



function Chats({ item, navigation }){



function chatsItem({ item }){
return (
<View style={styles.chats_item}>
<Image
    style={styles.user_image}
    source={{uri: item.user_image}}
    />
<View style={{flexDirection: 'row'}}>
<Text style={styles.user_name} numberOfLines={1}>{item.user_name}</Text>
<Text style={styles.last_message} numberOfLines={1}>{item.last_message}</Text>
<Text style={styles.time_stamp} numberOfLines={1}>{item.time_stamp}</Text>
</View>
</View>
)}

return (
<FlatList
    style={styles.chats}
    data={item}
    renderItem={chatsItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
)}

export default Chats;

const styles = StyleSheet.create({
    "user_image": {
        "width": "100vw",
        "height": "100vw",
        "marginTop": 5
    },
    "user_name": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "fontWeight": "400",
        "paddingHorizontal": 2,
        "marginHorizontal": 10,
        "marginTop": 5
    },
    "last_message": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "fontWeight": "400",
        "paddingHorizontal": 2,
        "marginHorizontal": 10,
        "marginTop": 5
    },
    "time_stamp": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "fontWeight": "400",
        "paddingHorizontal": 2,
        "marginHorizontal": 10,
        "marginTop": 5
    }
});