import React from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectedCurrency="usd",
    amountDisabled=false

}) {
  return (
    <div className='flex bg-white p-2 rounded mb-2'>
        <div className='flex-col mr-4 ml-4'>
        <label htmlFor="currency">{label}</label> <br />
        <input 
        id='currency'
        className='outline-none '
        type="number"
        placeholder='Amount'
        value={amount}
        onChange={(e)=>{onAmountChange && onAmountChange(Number(e.target.value))}} 
        disabled={amountDisabled}/>
        </div>
        
        <div className='flex-col mr-4'>
            <p>Currency</p>
            <select className='rounded bg-gray-100 outline-none cursor-pointer'
            name=""
             id=""
             value={selectedCurrency}
             onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}}>
                {
                    currencyOptions.map((currency)=>(
                        <option key={currency} value={currency}>{currency}</option>
                    ))
                }
            </select>
        </div>
    </div>
  )
}

export default InputBox