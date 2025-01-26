import React, { useState } from "react";

let nextId = 4;
const initialTodo = [
  { id: 0, title: "Tution", done: true },
  { id: 1, title: "Charging", done: false },
  { id: 2, title: "Practice", done: false },
];

const Todo = () => {
  const [todo, setTodo] = useState(initialTodo);
  const [todoTitle, setTodoTitle] = useState("");
  const [editingId, setEditingId] = useState(null); // Track the item being edited

  const handleAddTodo = (title) => {
    if (!title.trim()) return; // Prevent adding empty todos
    const newArray = [
      ...todo,
      {
        id: nextId++,
        title: title.trim(),
        done: false,
      },
    ];
    setTodo(newArray);
    setTodoTitle("");
  };

  const handleUpdateTodo = (id, updatedTitle) => {
    if (!updatedTitle.trim()) return; // Prevent empty titles
    const newArray = todo.map((item) =>
      item.id === id ? { ...item, title: updatedTitle.trim() } : item
    );
    setTodo(newArray);
    setEditingId(null); // Exit editing mode
  };

  const handleToggleDone = (id, done) => {
    const newArray = todo.map((item) =>
      item.id === id ? { ...item, done } : item
    );
    setTodo(newArray);
  };

  const handleDeleteTodo = (id) => {
    const deletedArray = todo.filter((item) => item.id !== id);
    setTodo(deletedArray);
  };

  return (
    <section>
      <div>
        <input
          type="text"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
          placeholder="Enter a new todo"
          className="border-[2px] border-solid border-black focus:border-[1px] focus:outline-none"
        />
        <button
          className="px-8 py-1 mx-2 bg-orange-300 rounded-full"
          onClick={() => handleAddTodo(todoTitle)}
        >
          Add
        </button>
      </div>

      <div className="mt-4">
        {todo.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-2 border-b"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={item.done}
                onChange={(e) => handleToggleDone(item.id, e.target.checked)}
                className="mr-2"
              />
              {editingId === item.id ? (
                <input
                  type="text"
                  value={item.title}
                  onChange={(e) =>
                    handleUpdateTodo(item.id, e.target.value)
                  }
                  className="border-[2px] border-solid border-black px-2 py-1"
                />
              ) : (
                <span
                  className={`${
                    item.done ? "line-through text-gray-400" : ""
                  }`}
                >
                  {item.title}
                </span>
              )}
            </div>

            <div>
              {editingId === item.id ? (
  <>
    <button
      className="px-4 py-1 mx-1 bg-green-400 rounded-full"
      onClick={() => handleUpdateTodo(item.id, item.title)} // Save changes here
    >
      Save
    </button>
    <button
      className="px-4 py-1 mx-1 bg-gray-300 rounded-full"
      onClick={() => setEditingId(null)} // Cancel editing
    >
      Cancel
    </button>
  </>
) : (
  <button
    className="px-4 py-1 mx-1 bg-blue-400 rounded-full"
    onClick={() => setEditingId(item.id)} // Enable editing
  >
    Edit
  </button>
)}


              <button
                className="px-4 py-1 mx-1 bg-red-400 rounded-full"
                onClick={() => handleDeleteTodo(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Todo;
