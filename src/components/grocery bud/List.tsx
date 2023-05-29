import { Task } from "../../interfaces/types";
import ListItem from "./ListItem";

type Props = { data: Task[] };

function List({ data }: Props) {
  return (
    <div className="flex flex-col gap-5">
      {data.map((task) => (
        <ListItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default List;
