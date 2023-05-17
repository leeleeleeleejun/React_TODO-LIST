import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
type todos = {
  id: number;
  text: string;
  checked: boolean;
};

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

const App = () => {
  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기

  const [todos, setTodos] = useState<todos[]>(createBulkTodos());
  const nextId = useRef<number>(todos.length + 1);

  const onInsert = useCallback((text: string) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos((prev) => [...prev, todo]);
    nextId.current += 1; // nextId 1씩 더하기
  }, []);

  const onRemove = useCallback((id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback((id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
