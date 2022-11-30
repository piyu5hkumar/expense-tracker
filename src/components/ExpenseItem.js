import "./ExpenseItem.css";

function ExpenseItem() {
  const myVar = "piyush kumar";
  return (
    <div className="expense-item">
      <div>Date</div>
      <div className="expense-item__description">
        <h2>{myVar}</h2>
        <div className="expense-item__price">{1 + 1}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
