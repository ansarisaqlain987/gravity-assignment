import { Plus } from "lucide-react";

interface Props {
  newTodo: string;
  setNewTodo: (todo: string) => void;
  addTodo: (e: React.FormEvent) => void;
}
export default function AddToDoItem({ addTodo, newTodo, setNewTodo }: Props) {
  return (
    <form onSubmit={addTodo} className="mb-6 flex gap-2">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo..."
        className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 flex items-center gap-2"
      >
        <Plus className="h-5 w-5" />
        Add
      </button>
    </form>
  );
}
