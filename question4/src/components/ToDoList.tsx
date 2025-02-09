import { Todo } from "@/types";
import { CheckCircle2, Circle, Trash2 } from "lucide-react";

interface Props {
  items: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export default function ToDoList({ items, toggleTodo, deleteTodo }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      {items.length === 0 ? (
        <div className="p-8 text-center text-gray-500">No todos found</div>
      ) : (
        <ul className="divide-y divide-gray-100">
          {items.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50"
            >
              <button
                onClick={() => toggleTodo(todo.id)}
                className="text-indigo-600 hover:text-indigo-700"
              >
                {todo.completed ? (
                  <CheckCircle2 className="h-6 w-6" />
                ) : (
                  <Circle className="h-6 w-6" />
                )}
              </button>
              <span
                className={`flex-1 ${
                  todo.completed
                    ? "line-through text-gray-400"
                    : "text-gray-700"
                }`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-gray-400 hover:text-red-600"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
