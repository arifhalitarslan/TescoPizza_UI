import React, { useState } from 'react';
import './Checkout.css';

const Checkout = () => {
    const [cart, setCart] = useState([
        { id: 1, name: "Item 1", price: 10, quantity: 1 },
        { id: 2, name: "Item 2", price: 20, quantity: 1 }
    ]);

    const [discountCode, setDiscountCode] = useState("");
    const [total, setTotal] = useState(calculateTotal(cart));

    function calculateTotal(cart) {
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
        });
        return total;
    }

    const handleQuantityChange = (id, quantity) => {
        const newCart = cart.map(item => {
            if (item.id === id) {
                return { ...item, quantity };
            }
            return item;
        });
        setCart(newCart);
        setTotal(calculateTotal(newCart));
    };

    const handleRemoveItem = (id) => {
        const newCart = cart.filter(item => item.id !== id);
        setCart(newCart);
        setTotal(calculateTotal(newCart));
    };

    const handleIncrement = (id) => {
        const newCart = cart.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCart(newCart);
        setTotal(calculateTotal(newCart));
    };

    const handleDecrement = (id) => {
        const newCart = cart.map(item => {
            if (item.id === id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCart(newCart);
        setTotal(calculateTotal(newCart));
    };

    const handleGoToPayment = () => {
        window.location.href = 'http://localhost:5173/payment';
    };

    return (
        <div className="checkout-container">
            <div className="form-section">
                <form>
                    <h2>Personal Information</h2>
                    <div className="form-row">
                        <div className="form-group">
                            <label>First Name:</label>
                            <input type="text" name="firstName" required />
                        </div>
                        <div className="form-group">
                            <label>Last Name:</label>
                            <input type="text" name="lastName" required />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="email" name="email" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Address:</label>
                            <input type="text" name="address" required />
                        </div>
                        <div className="form-group">
                            <label>Country:</label>
                            <select name="country" required>
                                <option value="us">United States</option>
                                <option value="ca">Canada</option>
                                <option value="uk">United Kingdom</option>
                                {/* Add other countries as needed */}
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Phone Number:</label>
                        <input type="tel" name="phone" required />
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Town:</label>
                            <input type="text" name="town" required />
                        </div>
                        <div className="form-group">
                            <label>City:</label>
                            <input type="text" name="city" required />
                        </div>
                        <div className="form-group">
                            <label>Zip/Postal Code:</label>
                            <input type="text" name="postalCode" required />
                        </div>
                    </div>
                </form>
                <form>
                    <h2>Billing Address</h2>
                    <div className="form-group">
                        <label>Address:</label>
                        <input type="text" name="billingAddress" required />
                    </div>
                    <div className="form-group">
                        <label>City:</label>
                        <input type="text" name="billingCity" required />
                    </div>
                    <div className="form-group">
                        <label>Postal Code:</label>
                        <input type="text" name="billingPostalCode" required />
                    </div>
                </form>
                <form>
                    <h2>Cargo Information</h2>
                    <div className="form-group">
                        <label>Cargo Option:</label>
                        <select name="cargo">
                            <option value="standard">Standard</option>
                            <option value="express">Express</option>
                        </select>
                    </div>
                </form>
            </div>
            <div className="cart-section">
                <h2>Current Cart</h2>
                <div className="cart-container">
                    <ul>
                        {cart.map(item => (
                            <li key={item.id}>
                                {item.name} - ${item.price}
                                <div className="quantity-controls">
                                    <button className="green-button small-button" onClick={() => handleIncrement(item.id)}>+</button>
                                    <input
                                        type="number"
                                        min="1"
                                        value={item.quantity}
                                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                    />
                                    <button className="red-button small-button" onClick={() => handleDecrement(item.id)}>-</button>
                                </div>
                                <button className="orange-button small-button" onClick={() => handleRemoveItem(item.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <p>Cart Total: ${total}</p>
                    <div>
                        <input
                            type="text"
                            placeholder="Discount Code"
                            value={discountCode}
                            onChange={(e) => setDiscountCode(e.target.value)}
                        />
                    </div>
                    <button className="green-button go-payment-button" onClick={handleGoToPayment}>Go to Payment</button>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
