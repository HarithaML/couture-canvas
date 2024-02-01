import React from "react";

const CartDropdown = () => {
    return (
        <div className="fixed top-30 right-20 bg-white border border-gray-300 p-4 shadow-md h-[400px] w-[300px] flex  flex-col items-center justify-center">
            <div className="max-h-[400px] overflow-y-auto w-[300px] flex flex-col items-center justify-center ">
                <div >
                    Item1
                </div>
                <div>
                    Item1
                </div>
              
            </div>
            <button className="bg-[#726DA8] p-2 rounded-xl mb-0 mt-5">Go To Checkout</button>
        </div>
    )
}

export default CartDropdown;