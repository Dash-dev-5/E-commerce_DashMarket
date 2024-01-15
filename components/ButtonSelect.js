import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Colors from '../styles/Colors';
import { useDispatch } from 'react-redux';
import { actionFilterArticle } from '../redux/Actions/actionFilter';


const ButtonSelect = ({children,styleled,category,categorise,setCategorise}) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [colorButton,setColorButton] = useState(Colors.dark)
    const handelClik =()=>{
        if (colorButton===Colors.dark){
            setColorButton(Colors.blue)
            setCategorise([...categorise,category])
        }else{
            setColorButton(Colors.dark)
            const categoryFilter = categorise.filter(cat=> cat !== category)
            setCategorise([...categoryFilter])
        }
        console.log(categorise);
        // useEffect( 
        //     ()=>{
        //         console.log(categorise);
        //         dispatch(actionFilterArticle(categorise))
        //     },[categorise,dispatch]
        // )
    }
  return (
    <TouchableOpacity 
      onPress={handelClik} 
      style={{...styles.buttonContenaire,...styleled,...{backgroundColor:colorButton,}}}
      >
        {children}
    </TouchableOpacity>
  )
}

export default ButtonSelect

const styles = StyleSheet.create({
  buttonContenaire:{
    

    // backgroundColor: Colors.white,
    padding:10,
    // borderRadius:23
  }
})