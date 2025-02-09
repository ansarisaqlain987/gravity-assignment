import { Todo } from "@/types";

interface Props {
  todos: Todo[];
}
export default function ToDoStats({ todos }: Props) {
  return (
    <div className="my-4 text-sm text-gray-600 text-center">
      {todos.length} total items, {todos.filter((t) => !t.completed).length}{" "}
      remaining
    </div>
  );
}
