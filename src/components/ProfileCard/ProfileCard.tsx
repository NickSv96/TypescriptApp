import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import COLORS from '../../constans/theme'
type Props = {
    name: string;
    role: string;
    image: string;
    isActive: boolean;
}
function ProfileCard({name, role, image, isActive} : Props) {

  return (
    <View style={style.card}>
      <Image source={{uri:image}} style={style.avatar}/>
      <View style={style.info}>
        <Text style={style.name}>{name}</Text>
        <Text style={style.role}>{role}</Text>
      </View>
      <View style={[style.badge, isActive ? style.active : style.inactive]}>
        <Text style={style.badgeText}>
          {isActive ? 'Activo' : 'Inactivo'}
        </Text>
      </View>
    </View>
  )
}
const style = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: COLORS.border,
  },
  info: {
    marginLeft: 16,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textLight,
  },
  role: {
    fontSize: 14,
    color: COLORS.secundayText,
    marginTop: 2,
  },
  badge: {
    alignSelf: 'flex-start',
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  active: {
    backgroundColor: COLORS.success,
  },
  inactive: {
    backgroundColor: COLORS.danger,
  },
})

export default ProfileCard