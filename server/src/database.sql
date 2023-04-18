create TABLE person {
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
}

create TABLE product {
    id SERIAL PRIMARY KEY,
    p_name VARCHAR(255),
    p_id INTEGER,
    p_count INTEGER,
    p_desc VARCHAR(255),
    p_img VARCHAR(255),
    product_id INTEGER,
    FOREIGN KEY (product_id) REFERENCES person(id)
    }n