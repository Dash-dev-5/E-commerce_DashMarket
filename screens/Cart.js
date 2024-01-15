import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ButtonCustom from '../components/ButtonCustom'
import { AntDesign } from '@expo/vector-icons';
import Colors from '../styles/Colors'
import { actionDeletCart } from '../redux/Actions/actionDeletCart' 


const Cart = () => {
  const dispatch = useDispatch()
  const ArticlesOnCart = useSelector(state => state.Cart)
  // console.log(ArticlesOnCart);
  const hadelDelet = (id) => {
    // console.log(id);
    dispatch( actionDeletCart(id) )
  }
  return (
    <ScrollView style={styles.cartContenaire}>
      {
        ArticlesOnCart.map(
          (item) => (
            <View key={item.id} style={styles.articleCartCotenaire}>
                <View style={styles.imageCotenaire}>
                    <Image
                        style={styles.imageArticle}
                        source={{uri:item.image}}
                    />
                </View>
                <View style={styles.description}>
                      <Text style={styles.titleArticle}>{item.title}</Text>
                      <Text style={styles.priceArticle}>${item.price}</Text>
                </View>
                  <ButtonCustom styleled={styles.buttonCustom}  handelClik={()=>hadelDelet(item.id)} >
                     <AntDesign name="delete" size={24} color={Colors.black} />
                          {/* <Text>Ajouter</Text> */}
                  </ButtonCustom>
            </View>
          )
        )
      }
    </ScrollView>
  )
}

export default Cart

const styles = StyleSheet.create({
  cartContenaire:{
    backgroundColor:Colors.black
  },
  imageArticle:{
    width:50,
    height:50,
    borderRadius:12,
    marginRight:10
  },
  articleCartCotenaire:{
    flexDirection:'row',
    padding:10,
    backgroundColor:Colors.dark,
    marginVertical:5,
    borderRadius:12,
    alignItems:'center'

  },
  description:{
    flex:1
    // width:'75%'
  },
  titleArticle:{
    color : Colors.blue,
    fontWeight:'bold'
  },
  priceArticle:{
    fontWeight:'bold',
    color:Colors.white
  },
   buttonCustom:{
    // width:'10%',
    backgroundColor:Colors.white,
    padding:10,
  borderRadius:24
  }
})