import React from 'react';
import {
    View,
    SafeAreaView,
    Text,
    useColorScheme,
    StyleSheet,
} from 'react-native';



function AppPro():JSX.Element{
    const isDark = useColorScheme() === 'dark';//default value is set to dark
    return(
        <SafeAreaView style={styles.safearea}>
            <View style={styles.container}>
                <Text style={isDark ? styles.whiteText : styles.blackText}>Hello world</Text>
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    safearea:{
        flex:1,
    },
    container:{
        flex:1,
        alignItems:'center',// from left to right 
        justifyContent:'center',//from top to bottom
    },
    whiteText:{
        color:'#FFFFFF',
    },
    blackText:{
        color:'#000000',
    },
})


export default AppPro;

