import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {todolistAPI} from '../api/api';

export default {
    title: 'API'
}



export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
    todolistAPI.getTodolist().then((res) => {

            setState(res.data)
        })// здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const payload = {
            title: 'What is it bro?'
        }
            todolistAPI.createTodolist(payload).then((res) => {
                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = "2693c43b-fcf2-4468-b793-f89329e4c7f8";
        todolistAPI.deleteTodolist(todoId).then((res) => {
            setState(res.data);
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = "902dc198-1652-4c16-8be4-30408f012af2";
        const title = 'REDUX';

        todolistAPI.updateTodolist(todoId, title)
            .then((res) => {
                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
