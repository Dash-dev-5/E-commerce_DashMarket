import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Colors from '../styles/Colors';


const ButtonCustom = ({children,handelClik,styleled}) => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity 
      onPress={handelClik} 
      style={{...styles.buttonContenaire,...styleled}}
      >
        {children}
    </TouchableOpacity>
  )
}

export default ButtonCustom

const styles = StyleSheet.create({
  buttonContenaire:{
    // backgroundColor: Colors.white,
    // padding:10,
    // borderRadius:23
  }
})