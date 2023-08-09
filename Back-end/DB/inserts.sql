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