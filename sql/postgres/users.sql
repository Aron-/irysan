CREATE TABLE users (
    id SERIAL PRIMARY KEY,       -- Auto-incrementing ID
    name VARCHAR(100) NOT NULL,  -- User's name, cannot be null
    email VARCHAR(100) NOT NULL UNIQUE -- User's email, must be unique
);
