import { Search } from "lucide-react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Filter } from "@/types";

interface Props {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filter: "all" | "active" | "completed";
  setFilter: (filter: "all" | "active" | "completed") => void;
}

export default function SearchAndFilterToDo({
  searchQuery,
  setSearchQuery,
  setFilter,
}: Props) {
  return (
    <div className="mb-6 flex flex-col sm:flex-row gap-4">
      <div className="flex-1 flex items-center gap-4">
        <Search className="left-3  text-gray-400 h-5 w-5" />
        <Input
          type="text"
          placeholder="Search todos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1"
        />
      </div>
      <Select onValueChange={(value) => setFilter(value as Filter)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Status" defaultValue={"all"} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
