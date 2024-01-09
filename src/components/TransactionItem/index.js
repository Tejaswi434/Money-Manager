// Write your code here

const TransactionItem = props => {
  const {mainList} = props
  const {title, amount, type} = mainList

  return (
    <li>
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
    </li>
  )
}
export default TransactionItem
