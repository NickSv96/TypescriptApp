import { View, StyleSheet, Pressable, Text } from "react-native"
import { useState } from "react"

const Contador = () => {
    const [ contador, setContador ] = useState(0);
    const Sumar = () => {
        setContador(contador+1)
    }
    const Restar = ()=>{
        if(contador===0){
            setContador(0)
        }else{
            setContador(contador-1)
        }
    }
  return (
    <View style={style.container}>
        <Text style={style.title}>Contador con botones</Text>
        <Text style={style.text}>{contador}</Text>
        <View style={style.buttons}>
            <Pressable style={style.button} onPress={Sumar}>
                <Text style={style.buttonText}>+</Text>
            </Pressable>
            <Pressable style={style.button} onPress={Restar}>
                <Text style={style.buttonText}>-</Text>
            </Pressable>
        </View>
        
    </View>
  )
}

const style = StyleSheet.create({
    container:{
        width: '100%',
        padding: 20,
        alignItems: "center",
    },
    title: {
        width: 300,
        fontSize: 30,
    },
    text: {
        width: 200,
        fontSize: 30,
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        marginBottom: 30,
    },
    button: {
        width: 60,
        height: 50,
        backgroundColor: "#222",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        marginHorizontal: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 28,
    },
})

export default Contador;