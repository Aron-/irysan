CREATE TABLE products (
    id SERIAL PRIMARY KEY,        -- Auto-incrementing product ID
    name VARCHAR(150) NOT NULL,   -- Product name, cannot be null
    price NUMERIC(10, 2) NOT NULL CHECK (price > 0), -- Product price, must be a positive value
    category VARCHAR(50) NOT NULL -- Product category, cannot be null
);
