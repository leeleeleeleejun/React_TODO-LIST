import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({
  todos,
  onRemove,
  onToggle,
}: {
  todos: {
    id: number;
    text: string;
    checked: boolean;
  }[];
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
