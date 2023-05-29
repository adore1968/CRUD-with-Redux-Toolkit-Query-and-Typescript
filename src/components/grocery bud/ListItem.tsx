import { FaEdit, FaTrash } from "react-icons/fa";
import { Task } from "../../interfaces/types";
import {
  useDeleteTaskMutation,
  useGetTasksQuery,
} from "../../redux/api/tasksApi";
import {
  notify,
  setUpdateStates,
} from "../../redux/features/grocery bud/groceryBudSlice";
import { useAppDispatch } from "../../hooks/storeHooks";

type Props = { task: Task };

function ListItem({ task }: Props) {
  const [deleteTask] = useDeleteTaskMutation();
  const appDispatch = useAppDispatch();
  const { data } = useGetTasksQuery(null);

  const handleUpdate = () => {
    const currentTask = data?.find((value) => value.id === task.id);
    if (currentTask) {
      appDispatch(setUpdateStates(currentTask));
    }
  };

  const handleDelete = () => {
    deleteTask(task.id);
    notify("danger", "Deleted task");
  };

  return (
    <div className="flex items-center justify-between">
      <h4 className="sm:text-xl text-lg text-gray-600">{task.name}</h4>
      <div className="flex items-center gap-2">
        <button
          onClick={handleUpdate}
          className="hover:text-green-500 text-green-600 transition-colors"
        >
          <FaEdit />
        </button>
        <button
          onClick={handleDelete}
          className="hover:text-red-500 text-red-600 transition-colors"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default ListItem;
