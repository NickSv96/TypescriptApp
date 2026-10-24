import { Text, View, StyleSheet, FlatList, TouchableOpacity } from "react-native"
import { useState } from "react"
import EmptyState from "../../components/EmptyState/EmptyState"
import TaskDetail from "../../components/TaskDetail/TaskDetail"
import { Task } from "../../constans/types"
import COLORS from "../../constans/theme"

function HomeScreen() {
    const [task, setTask] = useState<Task[]>([
        {
            id: '1',
            title: 'Estudiar React Native',
            description: 'Repaso de FlatList y components',
            category: 'Estudio',
            CreatedAt: new Date(),
        },
        {
            id: '2',
            title: 'Practico Entregable',
            description: 'Continuar con el entregable numero 4',
            category: 'trabajo',
            CreatedAt: new Date(),
        },
    ])

    const [selectedTask, setSelectedTask] = useState<Task | null>(null)

    if (selectedTask) {
        return (
            <TaskDetail task={selectedTask} onBack={() => setSelectedTask(null)} />
        )
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mis Tareas</Text>
            {
                task.length === 0 ? (
                    <EmptyState />
                ) : (
                    <FlatList
                        data={task}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.card} onPress={() => setSelectedTask(item)}>
                                <Text style={styles.taskTitle}>{item.title}</Text>
                                <Text style={styles.category}>{item.category}</Text>
                            </TouchableOpacity>
                        )}
                    />
                )
            }
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },

    title: {
        width: '100%',
        height: 50,
        padding: 5,
        fontSize: 28,
        fontWeight: 'bold',
        backgroundColor: COLORS.card,
        color: COLORS.textLight,
    },

    card: {
        padding: 15,
        margin: 10,
        backgroundColor: COLORS.card,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
    },

    taskTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: COLORS.textLight,
    },
    category: {
        color: COLORS.textLight,
    }
});