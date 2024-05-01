// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <li className="table-row">
      <p className="transaction-list-title">{title}</p>
      <p className="transaction-list-title">Rs {amount}</p>
      <p className="transaction-list-title">{type}</p>
      <div className="delete-container">
        <button
          type="button"
          className="delete-button"
          onClick={onDeleteTransaction}
          data-testId="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
