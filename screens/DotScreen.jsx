import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function DotScreen() {
    return (
        <ScrollView>
            <View style={styles.header}>
                <Image source={require('../assets/images/logo-dot-putih.png')} style={styles.logoDot} />
                <Text style={styles.headerText}>Evolution Sport Group</Text>
            </View>

            <View style={styles.banner}>
                <Text style={styles.bannerText}>VISUAL PROGRAM DESIGNER</Text>
                <Text style={styles.bannerHeader}>D.O.T</Text>
                <Text style={styles.bannerText}>I'm a Indonesian based platform training program designer who landed in training programming design for athletes.</Text>
            </View>

            <View style={styles.section2}>
                <View style={styles.section_2}>
                    <Image source={require('../assets/images/MyLatestWork.jpg')}
                        style={styles.section_2_Image} 
                    />

                    <View style={styles.section_2_Group}>
                        <Text style={styles.section_2_Header}>My Latest Work</Text>
                        <Text style={styles.section_2_Text}>Day Of Tranning | TrainningProgram | 2024</Text>
                        
                        <TouchableOpacity style={styles.signIn} onPress={() => alert("ini untuk view ke login")}>
                            <View style={styles.section_login}>
                                <Text style={styles.section_2_View}>View</Text>
                                <AntDesign name="right" size={24} color="white" />
                            </View>
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </View>

            <View>
                <Image source={require('../assets/images/ShopNow.jpg')} 
                    style={styles.section_3_Image}
                />

                <View style={styles.promo}>
                    <Text style={styles.promoText}>25% Off</Text>
                    <TouchableOpacity style={styles.promoButton} onPress={() => alert('Button Pressed')}>
                        <Text style={styles.buttonText}>Shop Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    logoDot : {
        height: 50,
        width : 50,
        color: '#ffffff'
    },
    header  : {
        height: 75,
        width: '100%',
        backgroundColor: '#0D0929',
        paddingHorizontal: 25,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 1,
        color: '#ffffff',
    },
    headerText: {
        fontSize: 20,
        fontWeight: '700',
        color: '#ffffff',
        padding: 25,
    },
    banner : {
        padding: 25,
        backgroundColor: '#205870',
        paddingBottom: 100,
    },
    bannerText : {
        color: '#ffffff',
        fontWeight: '300',
        fontSize: 16,
    },
    bannerHeader: {
        color: '#ffffff',
        fontSize: 50,
        fontWeight: '700',
        fontStyle: 'italic',
        marginVertical: 10,
    },
    section2: {
        backgroundColor: '#205870',  
    },
    section_2: {
        display: 'flex',
        flexDirection: 'row',
        padding: 25,
    },
    section_2_Image: {
        width: 130,
        height: 120,
        borderRadius: 15,
    },
    section_2_Group: {
        marginHorizontal: 25,
    },
    section_2_Header:  {
        marginBottom: 5,
        fontWeight: '600',
        fontSize: 20,
        color: '#ffffff',
    },
    section_2_Text: {
        fontWeight: '300',
        fontSize: 20,
        color: '#ffffff',
        width: 200,
    },
    section_login: {
        display: "flex",
        flexDirection:  "row",
        justifyContent: "center",
        alignItems: "center",
        color: '#ffffff',
        marginTop: 25,
        width: 75,
    },
    section_2_View: {
        fontWeight: '300',
        fontSize: 20,
        color: '#ffffff',
        marginBottom: 5,
        marginRight: 10,
    },

    section_3_Image: {
        width: 450,
        height: 250
    },
    promo: {
        backgroundColor: '#A5C9DE',
        height: 200,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    promoText: {
        fontSize: 50,
        color: "#ffffff",
        fontWeight: 'bold',
    },
    promoButton: {
        width: 200,
        marginTop: 15,
        backgroundColor: '#CAFF00',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: '#000000', // Mengatur warna teks menjadi hitam
        fontSize: 16,
        textAlign: 'center',
    },
});