
CREATE TABLE liquor (
  id             SERIAL PRIMARY KEY,
  name           VARCHAR(255) NOT NULL,
  container_type VARCHAR(20) NOT NULL
                   CHECK (container_type IN ('pack','bottle','can')),
  abv            NUMERIC(4,2),              -- e.g. 40.00 for 40% ABV
  quantity       INTEGER    NOT NULL DEFAULT 0
);