
import './Checkout.css';

const Checkout = () => {
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
                        <li>Item 1 - $10</li>
                        <li>Item 2 - $20</li>
                    </ul>
                    <p>Cart Total: $30</p>
                    <p>Discount Code: NONE</p>
                </div>
            </div>
        </div>
    );
};

export default Checkout;