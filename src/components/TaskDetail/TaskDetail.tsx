import { Text, View, TouchableOpacity, StyleSheet } from "react-native"
import { Task } from '../../constans/types'
import COLORS from "../../constans/theme"
type Props = { task: Task; onBack: () => void }

export default function TaskDetail({ task, onBack }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{task.title}</Text>
            <Text style={styles.label}>Description</Text>
            <Text style={styles.text}>{task.description}</Text>
            <Text style={styles.label}>Category</Text>
            <Text style={styles.text}>{task.category}</Text>
            <Text style={styles.label}>Fecha</Text>
            <Text style={styles.text}>{task.CreatedAt.toDateString()}</Text>

            <TouchableOpacity style={styles.button} onPress={onBack}>
                <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: COLORS.secundayText,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 25,
    },
    label: {
        fontWeight: 'bold',
        marginTop: 15,
    },
    text: {
        fontSize: 16,
        marginTop: 5,
    },
    button: {
        marginTop: 30,
        backgroundColor: COLORS.card,
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    }
});