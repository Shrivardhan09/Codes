import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { removeId, addQ, itemRemove } from "./Slice"

const AddToCart = () => {

    const cartData = useSelector((state) => state.SliceCart.cart)
    const dispatch = useDispatch()
    console.log(cartData)

    const totalPrice = useMemo(() => {
        let values = 0;
        // cartData.map((items) => values += items.price)
        // return values;
        cartData.map((item) => {
            const { price, quantity = 1 } = item
            return values += price * quantity
        });
        return values.toFixed(2);
    }, [cartData])

    return (
        <div
            style={{
                backgroundImage: "linear-gradient(45deg, #ffcccc, #ffe0b2, #fff7b2, #e0ffb2, #b2ffe0, #b2f7ff, #d9b2ff)"
            }}
        >
            <Link to='/'>
                Home
            </Link>
            <div>
                {cartData.map((items) => {
                    const { id, title, price, quantity } = items

                    return (
                        <div key={id}>
                            <p>{title}</p>
                            <p>{price}</p>
                            <div>
                                <button onClick={() => dispatch(removeId(items))}>-</button>
                                <span>Quantity : {quantity}</span>
                                <button onClick={() => dispatch(addQ(items))}>+</button>
                                <button onClick={() => dispatch(itemRemove(id))}>Remove From Cart</button>
                            </div>

                        </div>
                    )
                })}
                <div>
                    Total Price: 🤑 {totalPrice}
                </div>
            </div>

        </div>
    )
}

export default AddToCart
