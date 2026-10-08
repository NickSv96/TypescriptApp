import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import COLORS from '../../constans/theme'
function ProfileScreen() {
  return (
    <View style={style.container}>
        <Text style={style.title}>Profiles</Text>
        <View style={style.containerCards}>
          <ProfileCard
          name="Eze Vivares"
          role="Peya"
          image="https://i.pravatar.cc/150?img=60"
          isActive= {true}
          />
          <ProfileCard
          name="Agustina Fuentes"
          role="Chef"
          image="https://i.pravatar.cc/150?img=45"
          isActive= {false}
          />
          <ProfileCard
          name="Facu Lacerna"
          role="Minecraft player"
          image="https://i.pravatar.cc/150?img=70"
          isActive= {true}
          />
          <ProfileCard
          name="Gamian Acre"
          role="Pro-player"
          image="https://i.pravatar.cc/150?img=12"
          isActive= {true}
          />
        </View>
        
    </View>
  )
}
const style = StyleSheet.create({
    title:{
        width: '100%',
        height: 70,
        textAlign: 'center',
        paddingTop: 15,
        fontSize: 30,
        fontWeight: 'bold',
        color: COLORS.textLight,
        backgroundColor: COLORS.card,
    },
    container:{
      flex: 1,
      backgroundColor: COLORS.primary,
    },
    containerCards:{
      padding: 20,
    }
})

export default ProfileScreen