import React, { useReducer, useState } from 'react';

let nextId = 3;
const initialState = [
  { id: 1, title: 'Reading a book', done: true },
  { id: 3, title: 'Writing a paragraph', done: false },
];

const reducer = (todo, action) => {
  console.log(action);
  switch (action.type) {
    case 'addTodo': {
      return [
        ...todo,
        {
          id: nextId++,
          title: action.payload,
          done: false,
        },
      ];
    }
    case 'updateTodo': {
      return todo.map((item) =>
        item.id === action.payload.id
          ? { ...item, title: action.payload.title }
          : item
      );
    }
    case 'deleteTodo': {
      return todo.filter((item) => item.id !== action.payload);
    }
    case 'toggle': {
      return todo.map((item) =>
        item.id === action.payload.id
          ? { ...item, done: action.payload.value }
          : item
      );
    }
    default: {
      throw new Error('Unknown action type');
    }
  }
};

const Todo3 = () => {
  const [todo, dispatch] = useReducer(reducer, initialState);
  const [title, setTitle] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null); // ID of the item being edited
  const [editTitle, setEditTitle] = useState(''); // Title of the item being edited

  console.log('The initial state is:', todo);

  return (
    <div>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-[2px] border-solid border-black"
        />
        <button
          className="px-8 py-1 mx-2 rounded-full bg-cyan-500"
          onClick={() => {
            if (title.trim() === '') return; // Prevent adding empty todos
            dispatch({ type: 'addTodo', payload: title });
            setTitle(''); // Clear the input field
          }}
        >
          Add
        </button>
      </div>
      <div>
        {todo.map((item) => (
          <div className="flex justify-between gap-y-2" key={item.id}>
            <div>
              <input
                type="checkbox"
                checked={item.done}
                onChange={(e) =>
                  dispatch({
                    type: 'toggle',
                    payload: { id: item.id, value: e.target.checked },
                  })
                }
              />
              {isEditing && editId === item.id ? (
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="border-[2px] border-gray-400 ml-2 rounded"
                />
              ) : (
                <span className={`${item.done ? 'line-through' : ''} ml-2`}>
                  {item.title}
                </span>
              )}
            </div>
            <div>
              {isEditing && editId === item.id ? (
                <>
                  <button
                    className="mx-2 px-6 py-1 rounded-full bg-green-400"
                    onClick={() => {
                      if (editTitle.trim() === '') return; // Prevent empty updates
                      dispatch({
                        type: 'updateTodo',
                        payload: { id: item.id, title: editTitle },
                      });
                      setIsEditing(false);
                      setEditId(null);
                      setEditTitle('');
                    }}
                  >
                    Save
                  </button>
                  <button
                    className="mx-2 px-6 py-1 rounded-full bg-gray-400"
                    onClick={() => {
                      setIsEditing(false);
                      setEditId(null);
                      setEditTitle('');
                    }}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="mx-2 px-6 py-1 rounded-full bg-yellow-400"
                    onClick={() => {
                      setIsEditing(true);
                      setEditId(item.id);
                      setEditTitle(item.title);
                    }}
                  >
                    Edit
                  </button>
                </>
              )}
              <button
                className="mx-2 px-6 py-1 rounded-full bg-red-400"
                onClick={() => dispatch({ type: 'deleteTodo', payload: item.id })}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo3;
