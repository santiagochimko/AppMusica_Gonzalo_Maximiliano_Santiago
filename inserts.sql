-- Insertar datos en la tabla "artistas" para el año 2020
INSERT INTO "artistas" ("Artista_id", "Nombre", "Genero", "FotoArtista")
VALUES
  (1, 'Bad Bunny', 'Reggaetón', 123456789),
  (2, 'The Weeknd', 'Pop', 987654321),
  (3, 'Dua Lipa', 'Pop', 567890123),
  (4, 'BTS', 'K-pop', 456789012),
  (5, 'Harry Styles', 'Pop', 345678901),
  (6, 'Taylor Swift', 'Pop', 234567890),
  (7, 'Post Malone', 'Hip-hop', 123456789),
  (8, 'Billie Eilish', 'Pop', 987654321),
  (9, 'Ariana Grande', 'Pop', 567890123),
  (10, 'Drake', 'Hip-hop', 456789012);

--@block

-- Insertar álbumes ficticios para cada artista
-- Bad Bunny
INSERT INTO "albums" ("Album_id", "Artista_id", "NombreAlbum", "FotoAlbum")
VALUES
  (1, 1, 'Álbum Ficticio 1 de Bad Bunny', 123456789),
  (2, 1, 'Álbum Ficticio 2 de Bad Bunny', 987654321),
  (3, 1, 'Álbum Ficticio 3 de Bad Bunny', 567890123);

-- The Weeknd
INSERT INTO "albums" ("Album_id", "Artista_id", "NombreAlbum", "FotoAlbum")
VALUES
  (4, 2, 'Álbum Ficticio 1 de The Weeknd', 456789012),
  (5, 2, 'Álbum Ficticio 2 de The Weeknd', 345678901),
  (6, 2, 'Álbum Ficticio 3 de The Weeknd', 234567890);

-- Dua Lipa
INSERT INTO "albums" ("Album_id", "Artista_id", "NombreAlbum", "FotoAlbum")
VALUES
  (7, 3, 'Álbum Ficticio 1 de Dua Lipa', 123456789),
  (8, 3, 'Álbum Ficticio 2 de Dua Lipa', 987654321),
  (9, 3, 'Álbum Ficticio 3 de Dua Lipa', 567890123);

-- BTS
INSERT INTO "albums" ("Album_id", "Artista_id", "NombreAlbum", "FotoAlbum")
VALUES
  (10, 4, 'Álbum Ficticio 1 de BTS', 456789012),
  (11, 4, 'Álbum Ficticio 2 de BTS', 345678901),
  (12, 4, 'Álbum Ficticio 3 de BTS', 234567890);

-- Harry Styles
INSERT INTO "albums" ("Album_id", "Artista_id", "NombreAlbum", "FotoAlbum")
VALUES
  (13, 5, 'Álbum Ficticio 1 de Harry Styles', 123456789),
  (14, 5, 'Álbum Ficticio 2 de Harry Styles', 987654321),
  (15, 5, 'Álbum Ficticio 3 de Harry Styles', 567890123);

-- Taylor Swift
INSERT INTO "albums" ("Album_id", "Artista_id", "NombreAlbum", "FotoAlbum")
VALUES
  (16, 6, 'Álbum Ficticio 1 de Taylor Swift', 456789012),
  (17, 6, 'Álbum Ficticio 2 de Taylor Swift', 345678901),
  (18, 6, 'Álbum Ficticio 3 de Taylor Swift', 234567890);

-- Post Malone
INSERT INTO "albums" ("Album_id", "Artista_id", "NombreAlbum", "FotoAlbum")
VALUES
  (19, 7, 'Álbum Ficticio 1 de Post Malone', 123456789),
  (20, 7, 'Álbum Ficticio 2 de Post Malone', 987654321),
  (21, 7, 'Álbum Ficticio 3 de Post Malone', 567890123);

-- Billie Eilish
INSERT INTO "albums" ("Album_id", "Artista_id", "NombreAlbum", "FotoAlbum")
VALUES
  (22, 8, 'Álbum Ficticio 1 de Billie Eilish', 456789012),
  (23, 8, 'Álbum Ficticio 2 de Billie Eilish', 345678901),
  (24, 8, 'Álbum Ficticio 3 de Billie Eilish', 234567890);

-- Ariana Grande
INSERT INTO "albums" ("Album_id", "Artista_id", "NombreAlbum", "FotoAlbum")
VALUES
  (25, 9, 'Álbum Ficticio 1 de Ariana Grande', 123456789),
  (26, 9, 'Álbum Ficticio 2 de Ariana Grande', 987654321),
  (27, 9, 'Álbum Ficticio 3 de Ariana Grande', 567890123);

-- Drake
INSERT INTO "albums" ("Album_id", "Artista_id", "NombreAlbum", "FotoAlbum")
VALUES
  (28, 10, 'Álbum Ficticio 1 de Drake', 456789012),
  (29, 10, 'Álbum Ficticio 2 de Drake', 345678901),
  (30, 10, 'Álbum Ficticio 3 de Drake', 234567890);

--@block

-- Insertar canciones ficticias para cada artista
-- Bad Bunny
INSERT INTO "canciones" ("Cancion_id", "Artista_id", "Album_id", "Genero", "Nombre")
VALUES
  (1, 1, 1, 'Reggaetón', 'Canción Ficticia 1 de Bad Bunny'),
  (2, 1, 1, 'Reggaetón', 'Canción Ficticia 2 de Bad Bunny'),
  (3, 1, 1, 'Reggaetón', 'Canción Ficticia 3 de Bad Bunny');

-- The Weeknd
INSERT INTO "canciones" ("Cancion_id", "Artista_id", "Album_id", "Genero", "Nombre")
VALUES
  (4, 2, 2, 'Pop', 'Canción Ficticia 1 de The Weeknd'),
  (5, 2, 2, 'Pop', 'Canción Ficticia 2 de The Weeknd'),
  (6, 2, 2, 'Pop', 'Canción Ficticia 3 de The Weeknd');

-- Dua Lipa
INSERT INTO "canciones" ("Cancion_id", "Artista_id", "Album_id", "Genero", "Nombre")
VALUES
  (7, 3, 3, 'Pop', 'Canción Ficticia 1 de Dua Lipa'),
  (8, 3, 3, 'Pop', 'Canción Ficticia 2 de Dua Lipa'),
  (9, 3, 3, 'Pop', 'Canción Ficticia 3 de Dua Lipa');

-- BTS
INSERT INTO "canciones" ("Cancion_id", "Artista_id", "Album_id", "Genero", "Nombre")
VALUES
  (10, 4, 4, 'K-pop', 'Canción Ficticia 1 de BTS'),
  (11, 4, 4, 'K-pop', 'Canción Ficticia 2 de BTS'),
  (12, 4, 4, 'K-pop', 'Canción Ficticia 3 de BTS');

-- Harry Styles
INSERT INTO "canciones" ("Cancion_id", "Artista_id", "Album_id", "Genero", "Nombre")
VALUES
  (13, 5, 5, 'Pop', 'Canción Ficticia 1 de Harry Styles'),
  (14, 5, 5, 'Pop', 'Canción Ficticia 2 de Harry Styles'),
  (15, 5, 5, 'Pop', 'Canción Ficticia 3 de Harry Styles');

-- Taylor Swift
INSERT INTO "canciones" ("Cancion_id", "Artista_id", "Album_id", "Genero", "Nombre")
VALUES
  (16, 6, 6, 'Pop', 'Canción Ficticia 1 de Taylor Swift'),
  (17, 6, 6, 'Pop', 'Canción Ficticia 2 de Taylor Swift'),
  (18, 6, 6, 'Pop', 'Canción Ficticia 3 de Taylor Swift');

-- Post Malone
INSERT INTO "canciones" ("Cancion_id", "Artista_id", "Album_id", "Genero", "Nombre")
VALUES
  (19, 7, 7, 'Hip-hop', 'Canción Ficticia 1 de Post Malone'),
  (20, 7, 7, 'Hip-hop', 'Canción Ficticia 2 de Post Malone'),
  (21, 7, 7, 'Hip-hop', 'Canción Ficticia 3 de Post Malone');

-- Billie Eilish
INSERT INTO "canciones" ("Cancion_id", "Artista_id", "Album_id", "Genero", "Nombre")
VALUES
  (22, 8, 8, 'Pop', 'Canción Ficticia 1 de Billie Eilish'),
  (23, 8, 8, 'Pop', 'Canción Ficticia 2 de Billie Eilish'),
  (24, 8, 8, 'Pop', 'Canción Ficticia 3 de Billie Eilish');

-- Ariana Grande
INSERT INTO "canciones" ("Cancion_id", "Artista_id", "Album_id", "Genero", "Nombre")
VALUES
  (25, 9, 9, 'Pop', 'Canción Ficticia 1 de Ariana Grande'),
  (26, 9, 9, 'Pop', 'Canción Ficticia 2 de Ariana Grande'),
  (27, 9, 9, 'Pop', 'Canción Ficticia 3 de Ariana Grande');

-- Drake
INSERT INTO "canciones" ("Cancion_id", "Artista_id", "Album_id", "Genero", "Nombre")
VALUES
  (28, 10, 10, 'Hip-hop', 'Canción Ficticia 1 de Drake'),
  (29, 10, 10, 'Hip-hop', 'Canción Ficticia 2 de Drake'),
  (30, 10, 10, 'Hip-hop', 'Canción Ficticia 3 de Drake');




