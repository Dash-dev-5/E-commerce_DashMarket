import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Colors from '../styles/Colors';


const ButtontLogo = ({children,navig,styleled}) => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity 
      onPress={()=> navigation.navigate(`${navig}`)} 
      style={{...styles.buttonContenaire,...styleled}}
      >
        {children}
    </TouchableOpacity>
  )
}

export default ButtontLogo

const styles = StyleSheet.create({
  buttonContenaire:{
    // backgroundColor: Colors.white,
    padding:10,
    // borderRadius:23
  }
})