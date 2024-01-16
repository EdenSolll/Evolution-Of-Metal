CREATE TABLE genre_parent (
  gid INT references genre(id),
  parent_id INT references genre(id),
  PRIMARY KEY (gid, parent_id)
);
