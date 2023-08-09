--@block
-- Cargar datos en la tabla "artistas"
INSERT INTO "artistas" ("Artista_id", "Nombre", "Genero", "FotoArtista")
VALUES
    (1, 'Beyoncé', 'R&B/Pop', 123456),
    (2, 'Ed Sheeran', 'Pop', 789012),
    (3, 'Rihanna', 'R&B/Pop', 345678),
    (4, 'Michael Jackson', 'Pop', 901234),
    (5, 'Taylor Swift', 'Pop/Country', 567890),
    (6, 'Bruno Mars', 'Pop/R&B', 234567),
    (7, 'Adele', 'Pop/Soul', 678901),
    (8, 'Drake', 'Hip-Hop/R&B', 345678),
    (9, 'Ariana Grande', 'Pop/R&B', 901234),
    (10, 'Coldplay', 'Pop/Rock', 456789);

--@block
-- Cargar datos en la tabla "albums"
INSERT INTO "albums" ("Album_id", "Artista_id", "NombreAlbum", "FotoAlbum")
VALUES
    (1, 1, 'Dangerously In Love', 123456),
    (2, 1, 'I Am... Sasha Fierce', 789012),
    (3, 1, 'Lemonade', 345678),
    (4, 2, '÷', 901234),
    (5, 2, 'x', 567890),
    (6, 3, 'Good Girl Gone Bad', 234567),
    (7, 3, 'Unapologetic', 678901),
    (8, 3, 'Talk That Talk', 345678),
    (9, 4, 'Thriller', 901234),
    (10, 5, 'Fearless', 456789),
    (11, 5, '1989', 123456),
    (12, 6, 'Doo-Wops & Hooligans', 789012),
    (13, 6, 'Uptown Special', 345678),
    (14, 6, '24K Magic', 901234),
    (15, 7, '21', 567890),
    (16, 7, '25', 234567),
    (17, 8, 'Views', 678901),
    (18, 8, 'Scorpion', 345678),
    (19, 9, 'My Everything', 901234),
    (20, 9, 'Thank U, Next', 456789),
    (21, 9, 'Positions', 123456),
    (22, 10, 'Viva la Vida or Death and All His Friends', 789012),
    (23, 10, 'X&Y', 345678),
    (24, 10, 'Parachutes', 901234);

--@block
-- Cargar datos en la tabla "canciones"
INSERT INTO "canciones" ("Cancion_id", "Artista_id", "Album_id", "Genero", "Nombre")
VALUES
    -- Beyoncé
    (1, 1, 1, 'R&B/Pop', 'Crazy in Love'),
    (2, 1, 2, 'R&B/Pop', 'Single Ladies (Put a Ring on It)'),
    (3, 1, 3, 'R&B/Pop', 'Formation'),

    -- Ed Sheeran
    (4, 2, 4, 'Pop', 'Shape of You'),
    (5, 2, 5, 'Pop', 'Thinking Out Loud'),
    (6, 2, 4, 'Pop/Rock', 'Castle on the Hill'),

    -- Rihanna
    (7, 3, 6, 'R&B/Pop', 'Umbrella'),
    (8, 3, 7, 'R&B/Pop', 'Diamonds'),
    (9, 3, 8, 'Electrónica/Dance', 'We Found Love'),

    -- Michael Jackson
    (10, 4, 9, 'Pop/R&B', 'Billie Jean'),
    (11, 4, 9, 'Pop/Rock', 'Beat It'),
    (12, 4, 9, 'Pop/Rock', 'Thriller'),

    -- Taylor Swift
    (13, 5, 10, 'Pop/Country', 'Love Story'),
    (14, 5, 11, 'Pop', 'Shake It Off'),
    (15, 5, 11, 'Pop', 'Blank Space'),

    -- Bruno Mars
    (16, 6, 12, 'Pop/R&B', 'Just the Way You Are'),
    (17, 6, 13, 'Funk/Pop', 'Uptown Funk'),
    (18, 6, 14, 'R&B/Pop/Funk', '24K Magic'),

    -- Adele
    (19, 7, 15, 'Pop/Soul', 'Rolling in the Deep'),
    (20, 7, 15, 'Pop/Soul', 'Someone Like You'),
    (21, 7, 16, 'Pop/Soul', 'Hello'),

    -- Drake
    (22, 8, 17, 'Hip-Hop/R&B', 'Hotline Bling'),
    (23, 8, 18, 'Hip-Hop/R&B', 'God´s Plan'),
    (24, 8, 18, 'Hip-Hop/R&B', 'In My Feelings'),

    -- Ariana Grande
    (25, 9, 19, 'Pop/R&B', 'Problem'),
    (26, 9, 20, 'Pop/R&B', 'Thank U, Next'),
    (27, 9, 21, 'Pop/R&B', 'Positions'),

    -- Coldplay
    (28, 10, 22, 'Pop/Rock', 'Viva la Vida'),
    (29, 10, 23, 'Pop/Rock', 'Fix You'),
    (30, 10, 24, 'Pop/Rock', 'Yellow');


--@block
    -- Canciones adicionales para Beyoncé
INSERT INTO "canciones" ("Cancion_id", "Artista_id", "Album_id", "Genero", "Nombre")
VALUES
    (31, 1, 2, 'R&B/Pop', 'Halo'),
    (32, 1, 3, 'R&B/Pop', 'Sorry'),
    (33, 1, 3, 'R&B/Pop', 'Hold Up'),
    (34, 1, 3, 'R&B/Pop', 'Freedom'),
    (35, 1, 2, 'R&B/Pop', 'If I Were a Boy'),
    (36, 1, 2, 'R&B/Pop', 'Sweet Dreams'),
    (37, 1, 3, 'R&B/Pop', 'All Night');

-- Canciones adicionales para Ed Sheeran
INSERT INTO "canciones" ("Cancion_id", "Artista_id", "Album_id", "Genero", "Nombre")
VALUES
    (38, 2, 5, 'Pop', 'Photograph'),
    (39, 2, 4, 'Pop', 'Galway Girl'),
    (40, 2, 5, 'Pop', 'Perfect'),
    (41, 2, 4, 'Pop', 'Castle on the Hill'),
    (42, 2, 4, 'Pop', 'Shape of You'),
    (43, 2, 5, 'Pop', 'Thinking Out Loud'),
    (44, 2, 5, 'Pop', 'I See Fire');

-- Canciones adicionales para Rihanna
INSERT INTO "canciones" ("Cancion_id", "Artista_id", "Album_id", "Genero", "Nombre")
VALUES
    (45, 3, 6, 'R&B/Pop', 'Rude Boy'),
    (46, 3, 7, 'R&B/Pop', 'Stay'),
    (47, 3, 6, 'R&B/Pop', 'Don´t Stop the Music'),
    (48, 3, 8, 'R&B/Pop', 'Where Have You Been'),
    (49, 3, 6, 'R&B/Pop', 'Take a Bow'),
    (50, 3, 6, 'R&B/Pop', 'Only Girl (In the World)'),
    (51, 3, 8, 'Electrónica/Dance', 'Cheers (Drink to That)');

-- Canciones adicionales para Michael Jackson
INSERT INTO "canciones" ("Cancion_id", "Artista_id", "Album_id", "Genero", "Nombre")
VALUES
    (52, 4, 9, 'Pop/R&B', 'Smooth Criminal'),
    (53, 4, 9, 'Pop/R&B', 'Black or White'),
    (54, 4, 10, 'Pop/R&B', 'Wanna Be Startin´ Somethin´'),
    (55, 4, 10, 'Pop/R&B', 'Human Nature'),
    (56, 4, 9, 'Pop/R&B', 'Don´t Stop ´Til You Get Enough'),
    (57, 4, 10, 'Pop/R&B', 'The Girl Is Mine'),
    (58, 4, 9, 'Pop/R&B', 'Remember the Time');

-- Canciones adicionales para Taylor Swift
INSERT INTO "canciones" ("Cancion_id", "Artista_id", "Album_id", "Genero", "Nombre")
VALUES
    (59, 5, 11, 'Pop', 'Wildest Dreams'),
    (60, 5, 11, 'Pop', 'Bad Blood'),
    (61, 5, 10, 'Pop/Country', 'You Belong with Me'),
    (62, 5, 11, 'Pop', 'Style'),
    (63, 5, 10, 'Pop/Country', 'Fifteen'),
    (64, 5, 11, 'Pop', 'Out of the Woods'),
    (65, 5, 11, 'Pop', 'New Romantics');

-- Canciones adicionales para Bruno Mars
INSERT INTO "canciones" ("Cancion_id", "Artista_id", "Album_id", "Genero", "Nombre")
VALUES
    (66, 6, 12, 'Pop/R&B', 'Grenade'),
    (67, 6, 14, 'R&B/Pop/Funk', 'That´s What I Like'),
    (68, 6, 13, 'Funk/Pop', 'Treasure'),
    (69, 6, 14, 'R&B/Pop/Funk', 'Chunky'),
    (70, 6, 14, 'R&B/Pop/Funk', 'Perm'),
    (71, 6, 14, 'R&B/Pop/Funk', 'Versace on the Floor'),
    (72, 6, 13, 'Funk/Pop', 'Uptown Funk');

-- Canciones adicionales para Adele
INSERT INTO "canciones" ("Cancion_id", "Artista_id", "Album_id", "Genero", "Nombre")
VALUES
    (73, 7, 16, 'Pop/Soul', 'Set Fire to the Rain'),
    (74, 7, 15, 'Pop/Soul', 'Turning Tables'),
    (75, 7, 15, 'Pop/Soul', 'Rumour Has It'),
    (76, 7, 16, 'Pop/Soul', 'Someone Like You'),
    (77, 7, 15, 'Pop/Soul', 'Rolling in the Deep'),
    (78, 7, 16, 'Pop/Soul', 'Hello'),
    (79, 7, 16, 'Pop/Soul', 'When We Were Young');

-- Canciones adicionales para Drake
INSERT INTO "canciones" ("Cancion_id", "Artista_id", "Album_id", "Genero", "Nombre")
VALUES
    (80, 8, 17, 'Hip-Hop/R&B', 'Started From the Bottom'),
    (81, 8, 18, 'Hip-Hop/R&B', 'Nice for What'),
    (82, 8, 18, 'Hip-Hop/R&B', 'Nonstop'),
    (83, 8, 18, 'Hip-Hop/R&B', 'Money In The Grave'),
    (84, 8, 17, 'Hip-Hop/R&B', 'One Dance'),
    (85, 8, 17, 'Hip-Hop/R&B', 'Controlla'),
    (86, 8, 18, 'Hip-Hop/R&B', 'Chicago Freestyle');

-- Canciones adicionales para Ariana Grande
INSERT INTO "canciones" ("Cancion_id", "Artista_id", "Album_id", "Genero", "Nombre")
VALUES
    (87, 9, 21, 'Pop/R&B', '34+35'),
    (88, 9, 20, 'Pop/R&B', 'Imagine'),
    (89, 9, 20, 'Pop/R&B', 'Needy'),
    (90, 9, 21, 'Pop/R&B', 'POV'),
    (91, 9, 19, 'Pop/R&B', 'Break Free'),
    (92, 9, 19, 'Pop/R&B', 'No Tears Left to Cry'),
    (93, 9, 21, 'Pop/R&B', 'My Hair');

-- Canciones adicionales para Coldplay
INSERT INTO "canciones" ("Cancion_id", "Artista_id", "Album_id", "Genero", "Nombre")
VALUES
    (94, 10, 24, 'Pop/Rock', 'Fix You'),
    (95, 10, 23, 'Pop/Rock', 'Clocks'),
    (96, 10, 23, 'Pop/Rock', 'The Scientist'),
    (97, 10, 24, 'Pop/Rock', 'Viva la Vida'),
    (98, 10, 24, 'Pop/Rock', 'Adventure of a Lifetime'),
    (99, 10, 23, 'Pop/Rock', 'Yellow'),
    (100, 10, 23, 'Pop/Rock', 'In My Place');

--@block
-- Asignar ocasión, clima y estado de ánimo a cada canción en la tabla "canciones"
UPDATE "canciones" SET "Ocasion" = 'Ejercicio fisico', "Clima" = 'Soleado', "EstadoDeAnimo" = 'Motivado' WHERE "Cancion_id" IN (1, 6, 11, 16, 21, 26, 31, 36, 41, 46);
UPDATE "canciones" SET "Ocasion" = 'Limpieza', "Clima" = 'Nublado', "EstadoDeAnimo" = 'Relajado' WHERE "Cancion_id" IN (2, 7, 12, 17, 22, 27, 32, 37, 42, 47);
UPDATE "canciones" SET "Ocasion" = 'Celebracion', "Clima" = 'Despejado', "EstadoDeAnimo" = 'Feliz' WHERE "Cancion_id" IN (3, 8, 13, 18, 23, 28, 33, 38, 43, 48);
UPDATE "canciones" SET "Ocasion" = 'Dormir', "Clima" = 'Lluvioso', "EstadoDeAnimo" = 'Tranquilo' WHERE "Cancion_id" IN (4, 9, 14, 19, 24, 29, 34, 39, 44, 49);
UPDATE "canciones" SET "Ocasion" = 'Meditar', "Clima" = 'Soleado', "EstadoDeAnimo" = 'Sereno' WHERE "Cancion_id" IN (5, 10, 15, 20, 25, 30, 35, 40, 45, 50);
UPDATE "canciones" SET "Ocasion" = 'Social', "Clima" = 'Despejado', "EstadoDeAnimo" = 'Animado' WHERE "Cancion_id" IN (51, 56, 61, 66, 71, 76, 81, 86, 91, 96);
UPDATE "canciones" SET "Ocasion" = 'Estudiar', "Clima" = 'Nublado', "EstadoDeAnimo" = 'Concentrado' WHERE "Cancion_id" IN (52, 57, 62, 67, 72, 77, 82, 87, 92, 97);
UPDATE "canciones" SET "Ocasion" = 'Relajacion', "Clima" = 'Despejado', "EstadoDeAnimo" = 'Tranquilo' WHERE "Cancion_id" IN (53, 58, 63, 68, 73, 78, 83, 88, 93, 98);
UPDATE "canciones" SET "Ocasion" = 'Viajando', "Clima" = 'Soleado', "EstadoDeAnimo" = 'Aventurero' WHERE "Cancion_id" IN (54, 59, 64, 69, 74, 79, 84, 89, 94, 99);
UPDATE "canciones" SET "Ocasion" = 'Jugando', "Clima" = 'Despejado', "EstadoDeAnimo" = 'Divertido' WHERE "Cancion_id" IN (55, 60, 65, 70, 75, 80, 85, 90, 95, 100);

