import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert, KeyboardAvoidingView, TextInput } from 'react-native'

export default function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("trabajo");

    const [touchedTitle, setTouchedTitle] = useState(false)
    const [touchedDescription, setTouchedDescription] = useState(false)

    const handleAddTask = () => {
        setTouchedTitle(true)
        setTouchedDescription(true)
        if (title.trim().length < 5 || description.trim().length < 10) {
            return;
        }
        const task = {
            title: title.trim(),
            description: description.trim(),
            category,
            createdAt: new Date()
        }
        console.log("Tarea creada", task);
        Alert.alert("Exito", "Tarea capturada localmente...")

        setTitle("")
        setDescription("")
        setCategory("trabajo")
        setTouchedDescription(false)
        setTouchedTitle(false)
    }

    const titleError = touchedTitle && title.trim().length < 5
    const descriptionError = touchedDescription && description.trim().length < 10

    return (
        <KeyboardAvoidingView style={styles.container}>
            <Text style={styles.title}>Nueva Tarea</Text>
            <Text style={styles.label}>Titulo</Text>
            <TextInput style={[styles.input, titleError && styles.errorInput]}
                placeholder='Titulo de la tarea'
                value={title}
                onChangeText={setTitle}
                onBlur={() => setTouchedTitle(true)}
                autoCapitalize='sentences'
                returnKeyType='next'
            />
            {
                titleError && (
                    <Text style={styles.error}>El titulo debe tener al menos 5 caracteres.</Text>
                )
            }
            <Text style={styles.label}>Descripción</Text>

            <TextInput
                style={[styles.input, styles.description, descriptionError && styles.errorInput,]}
                placeholder="Descripción"
                value={description}
                onChangeText={setDescription}
                onBlur={() => setTouchedDescription(true)}
                autoCapitalize="sentences"
                multiline
            />

            {descriptionError && (
                <Text style={styles.error}>La descripción debe tener al menos 10 caracteres.</Text>
            )}
            <Text style={styles.label}>Categoría</Text>

            <View style={styles.categories}>
                {['Trabajo', 'Estudio', 'Personal'].map((item) => (
                    <TouchableOpacity
                        key={item}
                        style={[
                            styles.category,

                            category === item && styles.selectedCategory,
                        ]}
                        onPress={() => setCategory(item)}
                    >
                        <Text>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={handleAddTask}
            >
                <Text style={styles.buttonText}>Guardar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 25,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 6,
        marginTop: 12,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
    },
    description: {
        height: 100,
    },
    errorInput: {
        borderColor: 'red',
    },
    error: {
        color: 'red',
        fontSize: 13,
        marginTop: 4,
    },
    categories: {
        flexDirection: 'row',
        gap: 8,
    },
    category: {
        flex: 1,
        padding: 12,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
    },
    selectedCategory: {
        backgroundColor: 'lightblue',
    },
    button: {
        marginTop: 25,
        padding: 15,
        backgroundColor: 'blue',
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});