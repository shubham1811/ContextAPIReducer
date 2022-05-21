import React, { useContext, useState } from 'react';
import {
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupAddon
} from "reactstrap";
import { v4 } from "uuid";
import TodoContext from '../Context/TodoContext';
import { ADD_TODO } from '../Context/action.type';

const TodoForm = () => {
    const [TodoString, setTodoString] = useState();
    const { dispatch } = useContext(TodoContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (TodoString === "") {
            return alert("Please enter the value and then submit the button")
        }
        const todo = {
            TodoString: TodoString,
            id: v4()
        }
        dispatch({
            type: ADD_TODO,
            payload: todo
        })
        setTodoString("");
    }
    return (<Form onSubmit={handleSubmit}>
        <FormGroup>
            <InputGroup>
                <Input
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="Your next Todo"
                    value={TodoString}
                    onChange={e => { setTodoString(e.target.value) }}
                //TODO: value, onChange
                />
                <Button
                    color="warning"
                //TODO: onclick
                >Add</Button>
            </InputGroup>
        </FormGroup >
    </Form >)
}

export default TodoForm;