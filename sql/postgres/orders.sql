CREATE TABLE orders (
    id SERIAL PRIMARY KEY,               -- Auto-incrementing order ID
    user_id INT REFERENCES users(id) ON DELETE CASCADE,  -- Foreign key to users table, cascade on delete
    product_id INT REFERENCES products(id) ON DELETE CASCADE, -- Foreign key to products table, cascade on delete
    quantity INT NOT NULL CHECK (quantity > 0),  -- Quantity ordered, must be a positive value
    created_at TIMESTAMPTZ DEFAULT NOW()  -- Timestamp of the order, defaults to current timestamp
);
