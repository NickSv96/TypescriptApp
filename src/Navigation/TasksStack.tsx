import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import TaskDetailScreen from "../screens/TaskDetailScreen/TaskDetailScreen";
import TaskForm from "../components/TaskForm/TaskForm";
import COLORS from "../constans/theme";

export type TasksStackParamList = {
    TaskList: undefined;
    TaskDetail: {
        id: string;
        title: string;
        description: string;
        category: string;
        CreatedAt: string;
    };
    TaskForm: undefined;
}
const Stack = createNativeStackNavigator<TasksStackParamList>()

export default function TasksStack() {
    return (
        <Stack.Navigator
            initialRouteName="TaskList"
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.card
                },
                headerTintColor: COLORS.textLight,
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen
                name="TaskList"
                component={HomeScreen}
                options={{ title: "Mis Tareas" }}
            />
            <Stack.Screen
                name="TaskDetail"
                component={TaskDetailScreen}
                options={{ title: "Detalle de Tareas" }}
            />
            <Stack.Screen
                name="TaskForm"
                component={TaskForm}
                options={{ title: "Nueva Tarea" }}
            />
        </Stack.Navigator>
    )
}