import {create} from 'zustand';
import api from "../http/api"


export const useUser = create((set, get) => ({
    email: null,
    name: null,
    surname: null,
    is_activated: false,
    categories: [],
    role: 'user',


}))

export const useMaterials = create((set, get) => ({
    materials: [],
    getOneMaterial: (id) => get().materials.filter(material => material.id == id)[0],
    loadMaterials: async () => {
        try {
            const response = await api.get('/materials');
            set(state => ({ materials: response.data }));
        } catch (error) {
            console.log("error when fetch materials", error)
        }
    },
}))

export const useTasks = create((set, get) => ({
    tasks: [],
    getOneTask: (id) => get().tasks.filter(task => task.id == id)[0],
    loadTasks: async () => {
        const newTasks = await api.get('tasks');
        set({ tasks: newTasks.data })
    }
}))