import axios from 'axios';

type ResponseType<T = {}> = {
    resultCode: number
    messages: string[]
    fieldsErrors: string[]
    date: T
}

type GetTodolistType = {
    id: string
    title: string
    addedDate: Date
    order: number
}

type DeleteResponseType = {
    resultCode: number
    messages: string[]
    data: {}
}

type CreateResponseType = {
    resultCode: number
    messages: string[]
    data: {
        item: GetTodolistType
    }
}

type UpdateResponseType = {
    resultCode: number
    messages: string[]
    fieldsErrors: string[]
    date: {}
}

type payloadType = {
    title: string
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true
})
export const todolistAPI = {
    updateTodolist(todoId: string, title: string) {
        return instance.put<ResponseType>(`todo-lists/${todoId}`, {title})
    },
    deleteTodolist(todoId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todoId}`)
    },
    createTodolist(payload: payloadType) {
        return instance.post<ResponseType<{ item: GetTodolistType }>>('todo-lists', payload)
    },
    getTodolist() {
        return instance.get<GetTodolistType[]>('todo-lists')
    }
}

