import React, { useContext } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FaCheckDouble } from "react-icons/fa"
import TodoContext from '../Context/TodoContext';
import { REMOVE_TODO } from '../Context/action.type';

const Todo = () => {
    const { todos, dispatch } = useContext(TodoContext);
    return (<ListGroup className="mt-5mb-2items">
        {todos.map(todo => (
            <ListGroupItem key={todo.id}>{todo.TodoString}
                <span
                    onClick={() => {
                        dispatch({
                            type: REMOVE_TODO,
                            payload: todo.id
                        })
                    }
                    }
                >
                    <FaCheckDouble />
                </span>
            </ListGroupItem>

        ))
        }
    </ListGroup >)
}

export default Todo;