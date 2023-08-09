CREATE TABLE "playlists"(
    "Playlist_id" INTEGER NOT NULL,
    "Cancion_id" INTEGER NOT NULL,
    "Usuario_id" INTEGER NOT NULL,
    "Nombre" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "playlists" ADD PRIMARY KEY("Playlist_id");
CREATE TABLE "albums"(
    "Album_id" INTEGER NOT NULL,
    "Artista_id" INTEGER NOT NULL,
    "NombreAlbum" VARCHAR(255) NOT NULL,
    "FotoAlbum" BIGINT NOT NULL
);
ALTER TABLE
    "albums" ADD PRIMARY KEY("Album_id");
CREATE TABLE "canciones"(
    "Cancion_id" INTEGER NOT NULL,
    "Artista_id" INTEGER NOT NULL,
    "Album_id" INTEGER NOT NULL,
    "Genero" VARCHAR(255) NOT NULL,
    "Nombre" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "canciones" ADD PRIMARY KEY("Cancion_id");
CREATE TABLE "usuarios"(
    "Usuario_id" INTEGER NOT NULL,
    "Mail" VARCHAR(255) NOT NULL,
    "Nombre" BIGINT NOT NULL,
    "Contrasenia" BIGINT NOT NULL,
    "FotoUsuarios" BIGINT NOT NULL
);
ALTER TABLE
    "usuarios" ADD PRIMARY KEY("Usuario_id");
CREATE TABLE "artistas"(
    "Artista_id" INTEGER NOT NULL,
    "Nombre" VARCHAR(255) NOT NULL,
    "Genero" VARCHAR(255) NOT NULL,
    "FotoArtista" BIGINT NOT NULL
);
ALTER TABLE
    "artistas" ADD PRIMARY KEY("Artista_id");
ALTER TABLE
    "canciones" ADD CONSTRAINT "canciones_artista_id_foreign" FOREIGN KEY("Artista_id") REFERENCES "artistas"("Artista_id");
ALTER TABLE
    "playlists" ADD CONSTRAINT "playlists_usuario_id_foreign" FOREIGN KEY("Usuario_id") REFERENCES "usuarios"("Usuario_id");
ALTER TABLE
    "playlists" ADD CONSTRAINT "playlists_cancion_id_foreign" FOREIGN KEY("Cancion_id") REFERENCES "canciones"("Cancion_id");
ALTER TABLE
    "canciones" ADD CONSTRAINT "canciones_album_id_foreign" FOREIGN KEY("Album_id") REFERENCES "albums"("Album_id");
ALTER TABLE
    "albums" ADD CONSTRAINT "albums_artista_id_foreign" FOREIGN KEY("Artista_id") REFERENCES "artistas"("Artista_id");

ALTER TABLE "canciones"
ADD COLUMN "EstadoDeAnimo" VARCHAR(255),
ADD COLUMN "Ocasion" VARCHAR(255),
ADD COLUMN "Clima" VARCHAR(255);

--@block
INSERT INTO canciones (
    Cancion_id,
    Artista_id,
    Album_id,
    Genero,
    Nombre,
    EstadoDeAnimo,
    Ocasion,
    Clima
  )
VALUES (
    Cancion_id:integer,
    Artista_id:integer,
    Album_id:integer,
    'Genero:character varying',
    'Nombre:character varying',
    'EstadoDeAnimo:character varying',
    'Ocasion:character varying',
    'Clima:character varying'
  );  




