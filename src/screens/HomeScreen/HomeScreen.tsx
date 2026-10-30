import { Text, View, StyleSheet, FlatList, TouchableOpacity } from "react-native"
import { useState } from "react"
import EmptyState from "../../components/EmptyState/EmptyState"
import TaskDetail from "../../components/TaskDetail/TaskDetail"
import { Task } from "../../constans/types"
import COLORS from "../../constans/theme"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useNavigation } from "@react-navigation/native"
import { TasksStackParamList } from "../../Navigation/TasksStack"

type HomeNavProp = NativeStackNavigationProp<TasksStackParamList, 'TaskList'>

function HomeScreen() {
    const navigation = useNavigation<HomeNavProp>();
    const [task] = useState<Task[]>([
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
    const handleTaskPress = (task: Task) => {
        navigation.navigate('TaskDetail', {
            id: task.id,
            title: task.title,
            description: task.description,
            category: task.category,
            CreatedAt: task.CreatedAt.toISOString(),
        });
    };
    const handleAddPress = () => {
        navigation.navigate("TaskForm");
    }
    return (
        <View style={styles.container}>

            {
                task.length === 0 ? (
                    <EmptyState />
                ) : (
                    <FlatList
                        data={task}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.card} onPress={() => handleTaskPress(item)}>
                                <Text style={styles.taskTitle}>{item.title}</Text>
                                <Text style={styles.taskCategory}>{item.category}</Text>
                            </TouchableOpacity>
                        )}
                    />
                )}
            <TouchableOpacity style={styles.fab} onPress={handleAddPress}>
                <Text style={styles.fabText}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: COLORS.primary,
    },
    card: {
        padding: 15,
        marginBottom: 10,
        backgroundColor: COLORS.card,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 8,
    },
    taskTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: COLORS.textLight,
    },
    taskCategory: {
        color: COLORS.textLight,
    },
    fab: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: COLORS.card,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
    },
    fabText: {
        color: 'white',
        fontSize: 32,
        lineHeight: 34,
        fontWeight: 'bold',
    },
});