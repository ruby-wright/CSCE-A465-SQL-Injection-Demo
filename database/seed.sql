INSERT INTO users (username, password, role) VALUES
('alice', 'alicepass', 'user'),
('bob', 'bobpass', 'user'),
('admin', 'supersecret', 'admin');

INSERT INTO products (name, description, price) VALUES
('Laptop', 'High performance laptop', 999.99),
('Mouse', 'Wireless mouse', 29.99),
('Keyboard', 'Mechanical keyboard', 79.99);

INSERT INTO admin_notes (title, content) VALUES
('Incident Note', 'Suspicious search traffic detected last week.'),
('Maintenance', 'Rotate database password on Friday night.');