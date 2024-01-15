import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonCustom from './ButtonCustom'

const NoConnexion = ({children,title,actionTitle,action}) => {
  return (
    <View style={styles.noConnexionContenaire}>
        <View style={styles.headerContenaire}>
            <Text style={styles.titleNoConexion}>{title}</Text>
        </View>
        <View style={styles.bodyContenaire}>
            {children}
        </View>
        <View style={styles.footerContenaire}>
            <ButtonCustom 
                handelClik={action}
            >
                <Text>
                    {actionTitle}
                </Text>
            </ButtonCustom>
        </View>
    </View>
  )
}

export default NoConnexion

const styles = StyleSheet.create({})