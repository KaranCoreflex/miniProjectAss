import { View, Text,StyleSheet,Button,Alert, TextInput } from 'react-native'
import React,{useState} from 'react'

const FirstComponent = () => {
  const [name, setName] = useState("")
  const clickMe =()=>{
    Alert.alert("Button is pressed")
  }
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Hello World!!</Text>
      <TextInput placeholder='Enter your name' value={name} onChangeText={text=>setName(text)}/>
      <Button style={styles.button} title="Click Me" onPress={clickMe}/>
      <Text>You Entered name as : {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    view:{
      flex:1,
      backgroundColor:'azur'
    },
    text:{
      fontSize:30,
      fontFamily:'Times New Roman',
      fontWeight:'bold'
    },
    button:{
      width:100,
      height:100
    },
})

export default FirstComponent