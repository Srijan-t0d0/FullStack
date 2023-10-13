import categories from "../Categories";

interface Props {
  onSelectCatrgory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCatrgory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCatrgory(event.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
