import { create } from "zustand"
import api from "../http/api"

/*
const useUser = create((set, get) => ({
    materials: [],
    getOneMaterial: (id) => get().materials.filter(material => material.id == id)[0],
    setMaterials: async () => {
        const newMaterials = await api.get('materials');
        set({materials: newMaterials.data})
    }
}))
*/
const useMaterials = create((set, get) => ({
    materials: [],
    getOneMaterial: (id) => get().materials.filter(material => material.id == id)[0],
    setMaterials: async () => {
        const newMaterials = await api.get('materials');
        set({materials: newMaterials.data})
    }
}))

const useTasks = create((set, get) => ({
    tasks: [],
    getOneTask: (id) => get().tasks.filter(tasks => task.id == id)[0],
    setTasks: async () => {
        const newTasks = await api.get('tasks');
        set({tasks: newTasks.data})
    }
}))
