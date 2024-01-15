import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../styles/Colors'
import ButtonCustom from './ButtonCustom'

const Article = ({data,modalView}) => {
    // console.log(data.image,'nzita');
  return (
    <TouchableOpacity style={styles.articleCotenaire} onPress={modalView}>
        <View style={styles.imageCotenaire}>
            <Image
                style={styles.imageArticle}
                source={{uri:data.image}}
            />
        </View>
        <Text style={styles.titleArticle}>{data.title}</Text>
        <View style={styles.priceButtonContenaire}>
            <Text style={styles.priceArticle}>${data.price}</Text>
            <ButtonCustom>
                <FontAwesome name="cart-plus" size={24} color={Colors.white} />
                {/* <Text>Ajouter</Text> */}
            </ButtonCustom>
        </View> 
    </TouchableOpacity>
  )
}

export default Article

const styles = StyleSheet.create({
    articleCotenaire:{
        margin:8,
        padding:8,
        width:165,
        height:165,
        // borderWidth:1,
        // borderColor:Colors.white,
        borderRadius:10,
        backgroundColor:Colors.blue
    },
    imageCotenaire:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'70%',
        overflow:'hidden',
        borderTopRightRadius:10,
        borderTopLeftRadius:10

    },
    imageArticle:{
        width:'100%',
        height:'100%'
    },
    titleArticle:{
        fontWeight:'bold',
        fontSize:10,
        color:Colors.dark,
        flex:1
    },
    priceArticle:{
        fontWeight:'bold',
        color:Colors.white
    },
    priceButtonContenaire:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    }
})