import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const SimpleCalculator = () => {
    const [firstValue, setFirstValue] = useState('')
    const [secondValue, setSecondValue] = useState('')
    const [operator, setOperator] = useState('')
    const [answer, setAnswer] = useState('')

    const operators = ['+', '-', '*', '/', '=']

    const calculateValue = (a, sign, b) => {
        if (sign === "+") {
            return parseInt(a) + parseInt(b)
        }
        if (sign === "-") {
            return parseInt(a) - parseInt(b)
        }
        if (sign === "/") {
            return parseInt(a) / parseInt(b)
        }

        return parseInt(a) * parseInt(b)

    }
    const handlePress = (e, key) => {
        
        e.persist()
        if (key === "=") {
            let answer = calculateValue(firstValue, operator, secondValue)
            setAnswer(`${answer}`)
            return
        }
        setOperator(key);
    }
    const handleClear = () => {
        setFirstValue('');
        setSecondValue('');
        setOperator('');
        setAnswer('');
    }
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>


                <Text style={styles.headTitle}>Simple Calculator</Text>
                <View style={styles.textWrapper}>
                    <TextInput style={styles.txtInput} value={firstValue} onChangeText={text => setFirstValue(text)} />
                    <Text style={styles.operator}>{operator}</Text>
                    <TextInput style={styles.txtInput} value={secondValue} onChangeText={text => setSecondValue(text)} />
                    <Text style={styles.operator}>=</Text>
                    <TextInput style={styles.txtInput} value={answer} />
                </View>
                <View style={styles.buttonWrapper}>
                    {operators.map((o, i) => (
                        <Button onPress={(e) => handlePress(e, o)} style={styles.button} key={i} title={o} />
                    ))}
                    <Button title='Clear' onPress={handleClear} />
                </View>
            </View>
        </View>
    )
}

export default SimpleCalculator

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent:'center',
        alignItems:'center' 
    },
    wrapper:{
        borderWidth:4,
        borderColor:'violet',
        borderRadius:10,
        backgroundColor:'white',
        // justifyContent:'center',
        padding:20,
        alignItems:'center' ,
        width:400,
        height:400
    },
    headTitle:{
        fontSize:30,
        fontWeight:'500',
        marginBottom:20
    },
    txtInput: {
        height: 70,
        width:50,
        borderWidth: 2,
        marginBottom:20,
        borderRadius:5
        // border:'2px solid black'
    },
    textWrapper: {
        flexDirection: 'row',
        gap: 20,
        backgroundColor: 'white',
        // flex:1,
        justifyContent:'center',
        alignItems:"center"
    },
    operator:{
        fontSize:40,
        marginBottom:20,
        minWidth:30,
    },
    buttonWrapper: {
        flexDirection: 'row',
        gap: 20,
    },
    button: {
        width: 100,
        height: 100,
        flex: 1
    }
})