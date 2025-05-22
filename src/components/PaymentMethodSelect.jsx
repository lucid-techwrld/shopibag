import Select from "react-select";

const options = [
  { value: "card", label: "Credit / Debit Card" },
  { value: "paypal", label: "PayPal" },
  { value: "cod", label: "Cash on Delivery" },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    fontSize: "16px",
    padding: "6px",
  }),
  option: (provided, state) => ({
    ...provided,
    fontSize: "16px",
    backgroundColor: state.isFocused ? "#bfdbfe" : "white",
    color: "#111827",
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 9999,
  }),
};

const PaymentMethodSelect = () => {
  return (
    <div className="w-full">
      <label className="block mb-2 font-medium text-gray-700">
        Payment Method
      </label>
      <Select options={options} styles={customStyles} />
    </div>
  );
};

export default PaymentMethodSelect;
