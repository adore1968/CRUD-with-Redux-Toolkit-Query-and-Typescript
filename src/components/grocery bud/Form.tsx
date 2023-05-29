import { ChangeEvent, FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import {
  changeTask,
  clearForm,
  notify,
} from "../../redux/features/grocery bud/groceryBudSlice";
import { v4 } from "uuid";
import {
  useCreateTaskMutation,
  useUpdateTaskMutation,
} from "../../redux/api/tasksApi";

function Form() {
  const { task, isUpdate } = useAppSelector((store) => store.groceryBudSlice);
  const useDispatch = useAppDispatch();
  const [createTask] = useCreateTaskMutation();
  const [updateTask] = useUpdateTaskMutation();

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const value = target.value;
    useDispatch(changeTask(value));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.name && isUpdate) {
      updateTask(task);
      notify("success", "Task updated");
    } else if (task.name) {
      const newTask = { ...task, id: v4() };
      createTask(newTask);
      notify("success", "Added task");
    }
    useDispatch(clearForm());
  };

  const handleIsUpdate = (): string => {
    if (isUpdate) {
      return "bg-green-600 hover:bg-green-500";
    }
    return "bg-red-600 hover:bg-red-500";
  };

  return (
    <div className="my-5">
      <form onSubmit={handleSubmit} className="sm:text-xl flex text-lg">
        <label htmlFor="name" className="flex-1">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="e.g. eggs"
            value={task.name}
            onChange={handleChange}
            className="w-full border border-slate-300 px-2 py-1.5 text-gray-600"
          />
        </label>
        <button
          type="submit"
          className={`rounded-r px-5 text-white transition-colors ${handleIsUpdate()}`}
        >
          {isUpdate ? "Edit" : "Create"}
        </button>
      </form>
    </div>
  );
}

export default Form;
