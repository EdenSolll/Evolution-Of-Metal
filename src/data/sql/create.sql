DROP TABLE songs;

CREATE TABLE genre (
 id SERIAL PRIMARY KEY,
 genre VARCHAR(255),
 start_year INT,
 y_axis INT
);

CREATE TABLE genre_parent (
  gid INT references genre(id),
  parent_id INT references genre(id),
  PRIMARY KEY (gid, parent_id)
);

CREATE TABLE genre_child (
  gid INT references genre(id),
  child_id INT references genre(id),
  PRIMARY KEY (gid, child_id)
);

CREATE TABLE song (
 id SERIAL PRIMARY KEY,
 year INT,
 title VARCHAR(255),
 artist VARCHAR(255),
 src VARCHAR(255),
 genre_id INT
);
