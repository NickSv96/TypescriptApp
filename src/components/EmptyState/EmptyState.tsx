import { Text, StyleSheet, View } from "react-native"
import COLORS from "../../constans/theme";

export default function EmptyState() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>No tienes tareas pendientes</Text>
            <Text style={styles.text}>Empieza por crear nuevas tareas!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 40,
        backgroundColor: COLORS.primary,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
});

