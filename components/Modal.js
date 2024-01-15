import { StyleSheet, Text, View, Pressable,Modal, Image } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import Colors from '../styles/Colors';
import { useDispatch,useSelector } from 'react-redux';
import { AddToCartAction } from '../redux/Actions/AddToCartAction';
import { useState } from 'react';

const ModalComponent = ({statutClose,data,visibleModal,setVisibleModal}) => {
    const dispatch = useDispatch()
    const emptyCart = useSelector(state=>state.Cart)
const handelAddToCart = () => {
    const filted = emptyCart.filter(filt=>filt.id===data.id)
    if ((filted.length  === 0)){
        dispatch(AddToCartAction(data))
        alert('Ajouter dans le panier')
    } else{
        alert('Article deja dans le panier')

    }
    setVisibleModal()
}

// const [modalVisible,setModalVisible] = useState(true):
  return (
    <Modal
        style={styles.modalContenaire}
        animationType="fade"
        transparent={true}
        // modalVisible
        visible={visibleModal}
        onRequestClose={() => {
          Alert.alert(statutClose);
          setVisibleModal;
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.imageContenaire}>
                <Image
                    style={styles.imageArticle}
                    source={{uri:data.image}}
                />
            </View>
            <Text style={styles.modalText}>{data.title}</Text>
            <Text style={styles.modalTextDescription}>Desription: {data.description}</Text>
            <View style={styles.priceStock}>
                {/* <Text style={styles.modalTextCount}>Stock:  {data.rating.count}</Text> */}
                <Text style={styles.modalTextPrice}>Prix:  {data.price}$</Text>
            </View>
            <View  style={styles.buttonContenaire}>
                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={setVisibleModal}>
                <Text style={styles.textStyle}>Annuler</Text>
                </Pressable>
                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={handelAddToCart}>
                <Text style={styles.textStyle}>Ajouter au panier</Text>
                </Pressable>
                
            </View>
          </View>
        </View>
      </Modal>
  )
}

export default ModalComponent

const styles = StyleSheet.create({
    modalContenaire:{
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: Colors.greyTransparent,
      },
      modalView: {
        margin: 20,
        backgroundColor: Colors.dark,
        borderRadius: 20,
        padding: 25,
        // alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      imageContenaire:{
        alignItems:'center',
        marginBottom:12
      },
      modalText:{
        fontWeight:'bold',
        color:Colors.blue
      },
      modalTextDescription:{
        marginBottom:12,
        textAlign:'justify',
        color:Colors.white
      },
      priceStock:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10

      },
      modalTextCount:{
          color:Colors.white
        
      },
      modalTextPrice:{
        fontWeight:'bold',
        color:Colors.blue
      },
      imageArticle:{
        width:200,
        height:200
      },
      buttonContenaire:{
        flexDirection:'row',
        justifyContent:'space-between'
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
})