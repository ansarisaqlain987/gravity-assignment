import { useEffect, useMemo, useState } from "react";
import { Filter, Todo } from "./types";
import ToDoList from "./components/ToDoList";
import SearchAndFilterToDo from "./components/SearchAndFilterToDo";
import AddToDoItem from "./components/AddToDoItem";
import ToDoStats from "./components/ToDoStats";
import ToDoHeader from "./components/Header";

function ToDoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  function persistTodos(newList: Todo[]) {
    localStorage.setItem("todos", JSON.stringify(newList));
  }

  function loadTodos() {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }

  useEffect(() => {
    loadTodos();
  }, []);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      const newData = [
        ...todos,
        { id: Date.now(), text: newTodo.trim(), completed: false },
      ];
      persistTodos(newData);
      setTodos(newData);
      setNewTodo("");
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    const newData = todos.filter((todo) => todo.id !== id);
    persistTodos(newData);
    setTodos(newData);
  };

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (todo.text.toLowerCase().includes(searchQuery.toLowerCase())) {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;
      }
      return false;
    });
  }, [filter, searchQuery, todos]);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 py-8 px-4">
        <div className="max-w-2xl mx-auto bg-background p-8 rounded-lg">
          <ToDoHeader />
          <SearchAndFilterToDo
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            filter={filter}
            setFilter={setFilter}
          />
          <AddToDoItem
            addTodo={addTodo}
            newTodo={newTodo}
            setNewTodo={setNewTodo}
          />
          <ToDoStats todos={todos} />
          <ToDoList
            items={filteredTodos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </div>
      </div>
    </>
  );
}

export default ToDoApp;
