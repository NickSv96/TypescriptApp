import { useRoute, useNavigation, RouteProp } from "@react-navigation/native"
import { TasksStackParamList } from "../../Navigation/TasksStack"
import TaskDetail from "../../components/TaskDetail/TaskDetail"
import { Task } from "../../constans/types"
type TaskDetailRouteProp = RouteProp<TasksStackParamList, 'TaskDetail'>;

export default function TaskDetailScreen() {
    const route = useRoute<TaskDetailRouteProp>()
    const navigation = useNavigation()
    const { id, title, description, category, CreatedAt } = route.params;
    const task: Task = {
        id,
        title,
        description,
        category,
        CreatedAt: new Date(CreatedAt),
    }
    return <TaskDetail task={task} onBack={() => navigation.goBack()} />
}