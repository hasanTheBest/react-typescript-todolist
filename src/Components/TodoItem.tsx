import { format } from "timeago.js";
import React from "react";
import styled from "styled-components";

export interface Todo {
  id: number;
  text: string;
  is_complete: boolean;
  created_at: string;
  Tags?: string[];
}

interface TodoProps {
  todo: Todo;
  remove: (id: number) => void;
  completed: (id: number) => void;
}

const StyledTodoItem = styled.div`
  display: flex;
  flex: 1 0 50%;
  column-gap: 1rem;
  background-color: darkslateblue;
  color: rgba(255, 255, 255, 0.8);
  border-radius: 2rem;
  align-items: center;
  padding: 0.5rem 0;
  overflow: hidden;
  transition: all 0.4s ease;

  & > .title {
    margin: 0;
    padding: 0;
  }

  & > .btn {
    --dimension: 3rem;
    width: var(--dimension);
    height: var(--dimension);
    flex-basis: var(--dimension);
    position: relative;
    border: none;
    background-color: rgba(255, 255, 255, 0.2);
    font-weight: 600;
    color: rgba(255, 255, 255, 0.5);
    transition: all 0.3s ease;
  }
  & > .btn.remove {
    border-radius: 20%;
    color: darkred;
    &:hover,
    &:active {
      background-color: crimson;
      color: rgba(255, 255, 255, 0.6);
    }
  }
  & > .btn.complete {
    margin-left: 0.5rem;
    border-radius: 50%;

    & > .check-mark {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 60%;
      height: 60%;
      transform: translate(-50%, -50%);
      border-radius: 20%;
      overflow: hidden;
      font-size: 1.2rem;
      background-color: rgba(255, 255, 255, 0.3);

      &.active {
        background-color: darkcyan;
      }
    }
  }

  & > .tags {
    border-radius: 0.3rem;
    padding: 0.3rem;
    flex-grow: 1;

    & > span {
      background-color: rgba(255, 255, 255, 0.1);
      color: rgba(255, 255, 255, 0.7);
      font-weight: 600;
      padding: 0.2rem 0.5rem;
      border-radius: 0.5rem;
      font-size: 0.8rem;
      margin-bottom: 0.2rem;
      &:not(:last-child) {
        margin-right: 0.2rem;
      }
    }
  }

  & > .time {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 0.2rem;
    padding: 0.2rem 0.5rem;
    font-size: 0.8rem;
  }
`;

export const TodoItem: React.FC<TodoProps> = ({ todo, completed, remove }) => {
  return (
    <StyledTodoItem>
      <button className="btn complete" onClick={() => completed(todo.id)}>
        {todo.is_complete ? (
          <span className="check-mark active"> &#x2713; </span>
        ) : (
          <span className="check-mark"></span>
        )}
      </button>
      <h4 className="title">{todo.text}</h4>
      <div className="tags">
        {todo.Tags &&
          todo.Tags.map((t: string): JSX.Element => <span key={t}>{t}</span>)}
      </div>
      <span className="time">{format(Date.parse(todo.created_at))}</span>
      <button
        className="btn remove"
        onClick={() => remove(todo.id)}
        title="Remove Item"
      >
        &#x2573;
      </button>
    </StyledTodoItem>
  );
};
