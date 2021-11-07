import React, { useState } from "react";
import styled from "styled-components";
import { DisplayTodo } from "./Components/DisplayTodo";
import InsertTodo from "./Components/InsertTodo";
import { Todo } from "./Components/TodoItem";

const StyledAppWrapper = styled.div`
  width: 90%;
  max-width: 992px;
  margin: 0 auto;
`;
const StyledAppTitle = styled.div`
  text-align: center;
  padding: 0.5rem;
  color: rgba(255, 255, 255, 0.5);
  font-size: 1rem;
  margin-bottom: 1.5rem;

  & > h1 {
    font-size: 3rem;
    letter-spacing: 2px;
    font-variant: small-caps;
    background: linear-gradient(45deg, darkslateblue, darkcyan, darkslateblue);
    background-clip: text;
    font-weight: 900;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  & > p {
    font-size: 1.1rem;
    font-weight: 600;
    color: teal;
    letter-spacing: 1px;
  }
`;
function App() {
  const [todos, setTodos] = useState<Todo[] | []>([
    {
      id: 1,
      text: "Learn about Polymer",
      created_at: "Mon Apr 26 06:01:55 +0000 2015",
      Tags: ["Web Development", "Web Components"],
      is_complete: true,
    },
    {
      id: 2,
      text: "Watch Pluralsight course on Docker",
      created_at: "Tue Mar 02 07:01:55 +0000 2015",
      Tags: ["Devops", "Docker"],
      is_complete: true,
    },
    {
      id: 3,
      text: "Complete presentation prep for Aurelia presentation",
      created_at: "Wed Mar 05 10:01:55 +0000 2015",
      Tags: ["Presentation", "Aureia"],
      is_complete: false,
    },
    {
      id: 4,
      text: "Instrument creation of development environment with Puppet",
      created_at: "Fri June 30 13:00:00 +0000 2015",
      Tags: ["Devops", "Puppet"],
      is_complete: false,
    },
    {
      id: 5,
      text: "Transition code base to ES6",
      created_at: "Mon Aug 01 10:00:00 +0000 2015",
      Tags: ["ES6", "Web Development"],
      is_complete: false,
    },
  ]);

  // INSERT TODO
  const [todo, setTodo] = useState("");
  const [tags, setTags] = useState("");

  const handleTodo = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTodo(e.target.value);
  const handleTags = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTags(e.target.value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos((prev: Todo[]): Todo[] => [
      ...prev,
      {
        created_at: Date(),
        id: prev.length + 1,
        is_complete: false,
        Tags: tags.split(",").map((t) => t.trim()),
        text: todo,
      },
    ]);

    setTodo("");
    setTags("");
  };

  // handle remove TodoItem
  const handleRemove = (id: number) => {
    setTodos((prev) => (prev.length ? prev.filter((p) => p.id !== id) : []));
  };

  // handle completed
  const handleCompleted = (id: number) => {
    setTodos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, is_complete: !p.is_complete } : p))
    );
  };

  let today = new Date();
  let formattedDate = today.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  return (
    <StyledAppWrapper>
      <StyledAppTitle>
        <h1>My Todo</h1>
        <p>{formattedDate}</p>
      </StyledAppTitle>
      <DisplayTodo
        todos={todos}
        remove={handleRemove}
        completed={handleCompleted}
      />
      <InsertTodo
        todo={todo}
        tags={tags}
        setTodo={handleTodo}
        setTags={handleTags}
        onSubmit={handleSubmit}
      />
    </StyledAppWrapper>
  );
}

export default App;
