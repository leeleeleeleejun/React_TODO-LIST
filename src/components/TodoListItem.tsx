import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({
  todo,
  onRemove,
  onToggle,
}: {
  todo: { id: number; text: string; checked: boolean };
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}) => {
  const { text, checked } = todo;

  return (
    <div className="TodoListItem">
      <div
        className={cn('checkbox', { checked })}
        onClick={() => {
          onToggle(todo.id);
        }}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}{' '}
        <div className="text">{text}</div>
      </div>
      <div
        className="remove"
        onClick={() => {
          onRemove(todo.id);
        }}
      >
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
