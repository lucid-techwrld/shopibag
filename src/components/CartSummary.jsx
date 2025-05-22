import React from "react";
import PaymentMethodSelect from "./PaymentMethodSelect";
import formatPrice from "../utils/formatPrice";

const CartSummary = ({ cartItems }) => {
  const subtotal = cartItems.reduce(
    (acc, p) => acc + p.productId.price * p.quantity,
    0
  );
  const tax = 2.5;
  const total = subtotal + tax;

  return (
    <div className="mt-8 border-t pt-4">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

      <div className="flex justify-between border-b py-2">
        <span>Subtotal</span>
        <span>${formatPrice(subtotal)}</span>
      </div>

      <div className="flex justify-between border-b py-2">
        <span>Estimated Tax</span>
        <span>${formatPrice(tax)}</span>
      </div>

      <div className="flex justify-between font-bold py-2 text-lg">
        <span>Total</span>
        <span>${formatPrice(total)}</span>
      </div>

      {/* Payment Method */}
      <div className="mt-6">
        <h3 className="text-lg font-medium mb-2">Payment Method</h3>
        <PaymentMethodSelect />
      </div>

      <button className="mt-6 w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-500 transition">
        Proceed to Payment
      </button>
    </div>
  );
};

export default CartSummary;
