import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);
  const onDelete = (id: number) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        ></ExpenseForm>
      </div>

      {expenses.length !== 0 && (
        <>
          <div className="mb-3">
            <ExpenseFilter
              onSelectCatrgory={(category) => setSelectedCategory(category)}
            ></ExpenseFilter>
          </div>
          <ExpenseList
            expenses={visibleExpenses}
            onDelete={onDelete}
          ></ExpenseList>
        </>
      )}
    </div>
  );
}

export default App;
