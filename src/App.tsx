import React, { useState } from "react";
import {SafeAreaView,View,Text,TextInput,StyleSheet,FlatList} from "react-native";
import CustomTextInput from './components/CustomTextInput';
import ProductList from './components/ProductList';
import data from './components/ProductList/Data';

function App(){
  const [text, setText] = useState<string>('');
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.storeTitle}>PATIKASTORE</Text>
      <CustomTextInput placeholder='Ara...' value={text} onChangeText={setText}/>
      <View style={styles.container}>
        <ProductList data={data}></ProductList>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    margin:5,
    marginTop:0,
  },
  storeTitle:{
    fontSize:28,
    paddingLeft:10,
    backgroundColor:'white',
    color:'purple',
    fontWeight:'bold',
  },
})

export default App;