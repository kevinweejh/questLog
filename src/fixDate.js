import { format } from "date-fns";

export default (newTask) => {
  const dateInput = newTask.dueDate;

  const newTaskDateFixed = {
    ...newTask,
    dueDate: format(
      new Date(
        dateInput.slice(0, 4),
        parseInt(dateInput.slice(4, 6), Number) - 1,
        dateInput.slice(6, 8),
      ),
      "dd MMM yyyy",
    ),
  };
  return newTaskDateFixed;
};
