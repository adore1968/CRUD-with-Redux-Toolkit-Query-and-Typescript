import List from "./List";
import Form from "./Form";
import { useGetTasksQuery } from "../../redux/api/tasksApi";
import Loading from "./Loading";

function GroceryBud() {
  const { isLoading, isFetching, isError, error, data } =
    useGetTasksQuery(null);

  if (isLoading || isFetching) return <Loading />;

  if (isError) console.log(error);

  return (
    <div className="min-w-fit sm:max-w-3xl flex-auto p-6 bg-white">
      <h1 className="sm:text-4xl text-3xl font-bold text-center">
        Grocery Bud
      </h1>
      <Form />
      {data && <List data={data} />}
    </div>
  );
}

export default GroceryBud;
