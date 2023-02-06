import {create} from 'zustand';
import api from "../http/api"


export const useUser = create((set, get) => ({
    email: null,
    name: null,
    surname: null,
    isActivated: false,
    categories: ['any', "stegano", "web", "osint", "network", "ppc", "admin"],
    role: 'user',
    setUser: (user) => {
        set({
            email: user.email,
            name: user.name,
            surname: user.surname,
            isActivated: user.activated,
            name: user.name,
            name: user.name,
            categories: user.categories
        })
    },
    clearUser: () => {set({
        email: null,
        name: null,
        surname: null,
        isActivated: false,
        categories: [],
        role: 'user',
    })}
}))

export const useMaterials = create((set, get) => ({
    materials: [],
    getOneMaterial: (id) => get().materials.filter(material => +material.id === +id)[0],
    loadMaterials: async (categories) => {
        try {
            const response = await api.get(`/materials?cat=${categories}`);
            set(state => ({ materials: response.data }));
        } catch (error) {
            console.log("error when fetch materials", error)
        }
    },
}))

export const useTasks = create((set, get) => ({
    tasks: [],
    page: 1,
    getOneTask: (id) => get().tasks.filter(task => +task.id === +id)[0],
    loadTasks: async (categories) => {
        const newTasks = await api.get(`/tasks?cat=${categories}&page=${get().page}`);
        set({ tasks: newTasks.data })
    }
}))