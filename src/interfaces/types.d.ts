export interface Task {
  id: string;
  name: string;
}

export interface GroceryBudStates {
  task: Task;
  isUpdate: boolean;
}
