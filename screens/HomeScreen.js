import { FlatList, Image, StyleSheet, Text, View, Pressable, ScrollView, Button} from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Article from '../components/Article'
import ButtonCart from '../components/ButtonCart'
import ButtonSelect from '../components/ButtonSelect'
import Colors from '../styles/Colors'
import ModalComponent from '../components/Modal'
import { AddToCartAction } from '../redux/Actions/AddToCartAction'
import { actionFilterArticle } from '../redux/Actions/actionFilter'
import NoConnexion from '../components/noConnexion'
import store from '../redux/store'
import getArticle from '../redux/Actions/actionGetArticles'


const HomeScreen = () => {
    const [categorise,setCategorise] = useState([])
    const Articles = useSelector(state => state.Articles)
    console.log(categorise);
    const [visibleModalState,setVisibleModalState] = useState(false)
    const [dataModalState,setDataModalState] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actionFilterArticle(categorise))
        console.log('effectuer',categorise)
    },[categorise])
    const renderItem = ({item}) =>{
        const handelVisibleModal = () =>{
            setVisibleModalState(true)
            setDataModalState(item)
            // console.log(item);
        }
        // setViewLegend( (leg) => {[...leg,{name:A}]})
        return <Article 
                    data={item}
                    modalView={handelVisibleModal}
                    
                />
    }
    if(Articles.length === 0) {
        return <NoConnexion
                    title='Echec de la Connexion'
                    actionTitle='Resseyer'
                    action={()=>(dispatch(getArticle()))}
                >
            <Text>
                Verifier votre connexion
            </Text>
        </NoConnexion>
    }
  return (
        <View style={styles.homeCotenaire}>
            <Button
                title='CONSOLELOG TABLEAU FILTER'
                onPress={() => console.log(categorise)}
            />
            <ModalComponent 
                data={dataModalState}
                visibleModal={visibleModalState}
                setVisibleModal={()=> setVisibleModalState(!visibleModalState)}
            />
            <FlatList
                 style={styles.flatListe}
                 data={Articles}
                 renderItem={renderItem}
                 numColumns={2}
                 keyExtractor={(item, index) => index.toString()}
             />
             <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.selectsContenaire}
             >
                <ButtonSelect 
                    styleled={styles.selectContenaire} 
                    category={"men's clothing"} 
                    setCategorise={setCategorise}
                    categorise={categorise}
                    >
                    <Text style={styles.selectText}>H Vetements</Text>
                </ButtonSelect>
                <ButtonSelect 
                    styleled={styles.selectContenaire} 
                    category={"women's clothing"}
                    setCategorise={setCategorise}
                    categorise={categorise}
                    >
                    <Text style={styles.selectText}>F Vetements</Text>
                </ButtonSelect>
                <ButtonSelect 
                    styleled={styles.selectContenaire} 
                    category={"electronics"}
                    setCategorise={setCategorise}
                    categorise={categorise}
                    >
                    <Text  style={styles.selectText}>Numeriques</Text>
                </ButtonSelect>
                <ButtonSelect 
                    styleled={styles.selectContenaire} 
                    category={"jewelery"}
                    setCategorise={setCategorise}
                    categorise={categorise}
                    >
                    <Text style={styles.selectText}>Accessoirs</Text>
                </ButtonSelect>
                <ButtonSelect styleled={styles.selectContenaire}>
                    <Text style={styles.selectText}>Livres</Text>
                </ButtonSelect>
             </ScrollView>
        </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    homeCotenaire:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.black,
        
    },
    flatListe:{
        width:'100%',
        height:'100%',
        backgroundColor:Colors.dark,
        borderRadius:25,
        overflow:'hidden',
        // flexDirection:'row'
    },
    selectsContenaire:{
        height:70
    },
    selectContenaire:{
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:25,
        paddingVertical:12,
        // width:100,
        borderRadius:30,
        marginVertical:10,
        marginHorizontal:5,
    },
    selectText:{
        color:Colors.white,
        alignItems:'center',
        justifyContent:'center',
        // width:'100%',
        // height:'100%'
    }
})