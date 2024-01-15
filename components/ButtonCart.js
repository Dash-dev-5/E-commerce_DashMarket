import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Colors from '../styles/Colors';
import { useSelector } from 'react-redux';

const ButtonCart = ({children,navig,styleled}) => {
    const navigation = useNavigation()
  const cart = useSelector(s=>s.Cart)
  const count = cart.length
  return (
    <TouchableOpacity 
      onPress={()=> navigation.navigate(`${navig}`)} 
      style={{...styles.buttonContenaire,...styleled}}
      >
        <View style={styles.countConntenaire}>
          <Text style={styles.count}>{count}</Text>
        </View>
        {children}
    </TouchableOpacity>
  )
}

export default ButtonCart

const styles = StyleSheet.create({
  buttonContenaire:{
    position:'relative',
    // backgroundColor: Colors.white,
    padding:10,
    // borderRadius:23
  },
  countConntenaire:{
    // padding:6,
    position:'absolute',
    top:-10,
    right:-8,
    color:'white',
    backgroundColor:Colors.blue,
    borderRadius:50,
    width:25,
    height:25,
    justifyContent:'center',
    alignItems:'center'
  },
  count:{
    color:Colors.white,
    fontWeight:'bold'
  }
})