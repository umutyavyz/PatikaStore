import { Image, StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    card:{
        height:Dimensions.get('screen').height /3,
        width:Dimensions.get('screen').width /2.2,
        backgroundColor:'#F1EFEF',
        padding:10,
        marginRight:5,
        marginTop:8,
        borderRadius:8,
        shadowColor:'#000',
        shadowOpacity:0.03,
        shadowRadius:5,
        elevation:3,
    },
    image:{
        height:Dimensions.get('screen').height /5.7,
        width:Dimensions.get('screen').width /2.5,
        borderRadius:0,
        marginBottom:10,
        resizeMode:'contain',
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:5,
    },
    price:{
        fontSize:15,
        color:'#00b300',
        marginBottom:5,
        fontWeight:'bold',
    },
    stock:{
        fontWeight:'bold',
        fontSize:14,
        color:'red',
    },
    row:{
        justifyContent:'space-between',
    },
    lastItem: {
        flex: 1,  // Son öğeyi esneterek sağa kaydır
        alignSelf: "stretch",
      },
      hiddenCard: {
        backgroundColor: "transparent",
        flex: 1,
      },      
});