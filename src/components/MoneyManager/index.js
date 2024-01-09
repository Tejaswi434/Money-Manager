import {Component} from 'react'

import './index.css'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    typeData: transactionTypeOptions[0].optionId,
    mainList: [],
  }

  creatingCase = event => {
    event.preventDefault()
    const {titleInput, amountInput, typeData, mainList} = this.state
    const newData = {
      title: titleInput,
      amount: amountInput,
      type: typeData,
    }
    this.setState(prevState => ({
      mainList: [...prevState.mainList, newData],
      titleInput: '',
      amountInput: '',
    }))
  }

  changeTitleInput = event => {
    const {titleInput} = this.state
    this.setState((titleInput: event.target.value))
  }

  changeAmountInput = event => {
    const {amountInput} = this.state
    this.setState((amountInput: event.target.value))
  }

  changeType = event => {
    const {typeData} = this.state
    this.setState((typeData: event.target.value))
  }

  render() {
    const {titleInput, amountInput, typeData, mainList} = this.state

    return (
      <div className="main_container">
        <div className="first">
          <h1>Hi,Richard</h1>
          <p>
            Welcome back to your <span className="blue">Money Manager</span>
          </p>
        </div>
        <div className="second_box">
          <div className="green_box">
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
              alt="balance"
              className="sizing"
            />
            <div className="margining">
              <p>Your Balance</p>
              <p> Rs {}</p>
            </div>
          </div>
          <div className="blue_box">
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
              alt="income"
              className="sizing"
            />
            <div className="margining">
              <p>Your Balance</p>
              <p> Rs {}</p>
            </div>
          </div>
          <div className="purple_box">
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
              alt="expenses"
              className="sizing"
            />
            <div className="margining">
              <p>Your Balance</p>
              <p> Rs {}</p>
            </div>
          </div>
        </div>
        <div className="Third">
          <div className="third_a">
            <form onSubmit={this.creatingCase}>
              <h1>Add Transaction</h1>
              <label htmlFor="first">TITLE</label>
              <br />
              <input
                type="text"
                id="first"
                onChange={this.changeTitleInput}
                placeholder="TITLE"
              />
              <br />
              <label htmlFor="amount">AMOUNT</label>
              <br />
              <input
                id="amount"
                onChange={this.changeAmountInput}
                type="text"
                placeholder="AMOUNT"
              />
              <br />
              <label htmlFor="type">Type</label>
              <br />
              <select id="type" value={typeData} onChange={this.changeType}>
                {transactionTypeOptions.map(each => (
                  <option key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <br />
              <button className="blueButton" type="submit">
                Add
              </button>
            </form>
          </div>
          <ul className="third_b">
            <h2>History</h2>
            <li className="rowing">
              <p className="rowing_individiual">Title</p>
              <p className="rowing_individiual">Amount</p>
              <p className="rowing_individiual">Type</p>
            </li>
            <TransactionItem mainList={mainList} />
          </ul>
        </div>
      </div>
    )
  }
}

export default MoneyManager
