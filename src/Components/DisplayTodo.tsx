import React from "react";
import styled from "styled-components";
import { TodoItem } from "./TodoItem";
import { Todo } from "./TodoItem";

interface TodosProps {
  todos: Todo[];
  remove: (id: number) => void;
  completed: (id: number) => void;
}

const StyledDisplayTodo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  row-gap: 1.2rem;

  @media (max-width: 767.98px) {
    row-gap: 0.7rem;
  }
`;

export const DisplayTodo: React.FC<TodosProps> = (props) => {
  return (
    <StyledDisplayTodo>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          remove={props.remove}
          completed={props.completed}
        />
      ))}
    </StyledDisplayTodo>
  );
};
