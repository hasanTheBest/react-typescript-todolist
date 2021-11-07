import React from "react";
import styled from "styled-components";

interface Props {
  todo: string;
  tags: string;
  setTodo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setTags: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const StyledTodoForm = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  & > form {
    border-radius: 1rem;
    display: flex;
    flex-flow: column nowrap;
    flex: 0 0 70%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 1.5rem;

    @media (max-width: 767.98px) {
      flex-basis: 90%;
    }

    & > .form-group {
      background-color: darkslategray;
      display: flex;
      flex-flow: column nowrap;
      padding: 1rem;
      border-radius: 0.5rem;
      font-weight: 600;
      &:not(:last-child) {
        margin-bottom: 1rem;
      }

      & > label {
        color: darkgreen;
        margin-bottom: 0.3rem;
        padding: 0.2rem 0.5rem;
        border-radius: 0.5rem;
        align-self: flex-start;
        background-color: rgba(0, 0, 0, 0.3);
      }

      & > input {
        background-color: rgba(255, 255, 255, 0.1);
        border: none;
        box-shadow: none;
        font-size: 1rem;
        font-weight: 600;
        padding: 0.8rem 1rem;
        border-radius: 0.3rem;
        color: rgba(255, 255, 255, 0.6);

        &::placeholder {
          color: rgba(255, 255, 255, 0.2);
        }

        &.submit {
          background-color: darkgreen;
          color: rgba(255, 255, 255, 0.5);
          cursor: pointer;

          &:disabled {
            cursor: not-allowed;
            background-color: rgba(255, 255, 255, 0.2);
          }
        }
      }
    }
  }
`;

const InsertTodo: React.FC<Props> = (props) => {
  return (
    <StyledTodoForm>
      <form onSubmit={props.onSubmit}>
        <div className="form-group">
          <label>Todo</label>
          <input
            type="text"
            placeholder="Cooking"
            value={props.todo}
            onChange={props.setTodo}
          />
        </div>
        <div className="form-group">
          <label>Tags</label>
          <input
            type="text"
            value={props.tags}
            placeholder="e.g movie,book"
            onChange={props.setTags}
          />
        </div>

        <div className="form-group">
          <input
            className="submit"
            type="submit"
            value="Add"
            disabled={!!props.todo ? false : true}
          />
        </div>
      </form>
    </StyledTodoForm>
  );
};

export default InsertTodo;
