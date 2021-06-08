CREATE TABLE "users" (
  "id" SERIAL UNIQUE PRIMARY KEY,
  "roles" text,
  "email" varchar190,
  "password" varchar190
);

CREATE TABLE "book" (
  "id" SERIAL UNIQUE PRIMARY KEY,
  "title" varchar190,
  "edition_year" int,
  "pages" int,
  "isbn" varchar190,
  "author" number
);

CREATE TABLE "author" (
  "id" SERIAL UNIQUE PRIMARY KEY,
  "lastname" varchar190,
  "firstname" varchar190
);

CREATE TABLE "genre" (
  "id" SERIAL UNIQUE PRIMARY KEY,
  "name" varchar190,
  "description" text
);

CREATE TABLE "book_genre" (
  "genreId" number,
  "bookId" number
);

CREATE TABLE "loaner" (
  "id" SERIAL UNIQUE PRIMARY KEY,
  "lastname" varchar190,
  "firstname" varchar190,
  "tel" varchar190,
  "active" boolean,
  "creation_date" datetime,
  "modification_date" datetime,
  "user" number
);

CREATE TABLE "loan" (
  "id" SERIAL UNIQUE PRIMARY KEY,
  "loan_date" datetime,
  "return_date" datetime,
  "bookId" number,
  "loanerId" number
);

ALTER TABLE "book" ADD FOREIGN KEY ("author") REFERENCES "author" ("id");

ALTER TABLE "book_genre" ADD FOREIGN KEY ("genreId") REFERENCES "genre" ("id");

ALTER TABLE "book_genre" ADD FOREIGN KEY ("bookId") REFERENCES "book" ("id");

ALTER TABLE "loaner" ADD FOREIGN KEY ("user") REFERENCES "users" ("id");

ALTER TABLE "book" ADD FOREIGN KEY ("id") REFERENCES "loan" ("bookId");

ALTER TABLE "loaner" ADD FOREIGN KEY ("id") REFERENCES "loan" ("loanerId");
