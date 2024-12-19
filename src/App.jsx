import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="bg-neutral-800 h-screen flex justify-center items-center">
      <div className="border-2 p-6 pt-0">
        <h1 className="text-white  m-4 text-center font-bold">
          {"Currency Converter".toUpperCase()}
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <InputBox
            label="From"
            amount={amount}
            onAmountChange={(amount) => setAmount(amount)}
            onCurrencyChange={(currency) => setFrom(currency)}
            amountDisabled={false}
            selectedCurrency={from}
            currencyOptions={options}
          />
          <div className="relative w-full h-0.5">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              onClick={swap}
            >
              swap
            </button>
          </div>
          <InputBox
            label="To"
            amount={convertedAmount}
            onAmountChange={(amount) => setConvertedAmount(amount)}
            onCurrencyChange={(currency) => setTo(currency)}
            amountDisabled={true}
            selectedCurrency={to}
            currencyOptions={options}
          />

          <button
            type="submit"
            className="bg-blue-600 w-full mt-3 p-2 rounded-md"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
