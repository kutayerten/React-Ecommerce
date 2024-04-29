import React from 'react'
import { useSelector } from 'react-redux'

const CartTotal = () => {
  const { cartTotal,shipping,tax,orderTotal} = useSelector((state) => state.cartState);
  return (
    <div className="card bg-base-200">
      <div className="card-body">
        {/* SUBTOTAL */}
        <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
          <span>Subtotal</span>
          <span className='font-medium'>{cartTotal / 100} $</span>
        </p>
        {/* SHIPPING */}
        <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
          <span>Shipping</span>
          <span className='font-medium'>{shipping / 100} $</span>
        </p>
        {/* Tax */}
        <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
          <span>Tax</span>
          <span className='font-medium'>{(tax / 100).toFixed(2)} $</span>
        </p>
        {/* Order Total */}
        <p className='flex justify-between text-md mt-4  pb-2'>
          <span>Order Total</span>
          <span className='font-bold'>{(orderTotal / 100).toFixed(2)} $</span>
        </p>
      </div>
    </div>
  )
}

export default CartTotal