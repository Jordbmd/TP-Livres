-- Adminer 5.0.6 PostgreSQL 17.4 (Debian 17.4-1.pgdg120+2) dump

DROP TABLE IF EXISTS "book";
DROP SEQUENCE IF EXISTS book_id_seq;
CREATE SEQUENCE book_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."book" (
    "id" integer DEFAULT nextval('book_id_seq') NOT NULL,
    "name" character varying NOT NULL,
    "numberOfVolumes" integer NOT NULL,
    "author" character varying NOT NULL,
    "price" numeric(10,2) NOT NULL,
    "rating" integer NOT NULL,
    "publicationDate" date NOT NULL,
    "createdAt" timestamptz DEFAULT now() NOT NULL,
    "updatedAt" timestamptz DEFAULT now() NOT NULL,
    CONSTRAINT "PK_a3afef72ec8f80e6e5c310b28a4" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "book" ("id", "name", "numberOfVolumes", "author", "price", "rating", "publicationDate", "createdAt", "updatedAt") VALUES
(2,	'FINAL teST',	1,	'Jordan D.',	10000999.99,	4,	'2023-01-01',	'2025-03-21 10:10:30.867946+00',	'2025-03-21 10:10:34.221044+00'),
(3,	'livre',	1,	'Jordan D.',	1999.99,	4,	'2023-01-01',	'2025-03-21 10:14:48.44174+00',	'2025-03-21 10:14:48.44174+00'),
(4,	'Le Petit Prince',	1,	'Antoine de Saint-Exupéry',	15.99,	5,	'1943-04-06',	'2025-03-21 10:17:41.394041+00',	'2025-03-21 10:17:41.394041+00'),
(5,	'1984',	1,	'George Orwell',	12.50,	4,	'1949-06-08',	'2025-03-21 10:17:49.528546+00',	'2025-03-21 10:17:49.528546+00'),
(6,	'To Kill a Mockingbird',	1,	'Harper Lee',	10.99,	5,	'1960-07-11',	'2025-03-21 10:17:54.566188+00',	'2025-03-21 10:17:54.566188+00'),
(7,	'The Great Gatsby',	1,	'F. Scott Fitzgerald',	14.99,	4,	'1925-04-10',	'2025-03-21 10:17:58.65371+00',	'2025-03-21 10:17:58.65371+00'),
(8,	'Moby Dick',	1,	'Herman Melville',	18.00,	3,	'1851-10-18',	'2025-03-21 10:18:03.234211+00',	'2025-03-21 10:18:03.234211+00'),
(9,	'War and Peace',	1,	'Leo Tolstoy',	20.00,	5,	'1869-01-01',	'2025-03-21 10:18:07.282317+00',	'2025-03-21 10:18:07.282317+00'),
(10,	'Pride and Prejudice',	1,	'Jane Austen',	9.99,	4,	'1813-01-28',	'2025-03-21 10:18:11.134035+00',	'2025-03-21 10:18:11.134035+00'),
(11,	'The Catcher in the Rye',	1,	'J.D. Salinger',	11.50,	4,	'1951-07-16',	'2025-03-21 10:18:15.191601+00',	'2025-03-21 10:18:15.191601+00'),
(12,	'Brave New World',	1,	'Aldous Huxley',	13.00,	4,	'1932-08-01',	'2025-03-21 10:18:19.218282+00',	'2025-03-21 10:18:19.218282+00');

-- 2025-03-21 10:20:39 UTC