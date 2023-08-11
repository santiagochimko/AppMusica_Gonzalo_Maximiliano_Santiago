CREATE TABLE "playlists"(
    "id" SERIAL PRIMARY KEY,
    "cancion_id" INTEGER NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "nombre" VARCHAR(255) NOT NULL
);
CREATE TABLE "albums"(
    "id" SERIAL PRIMARY KEY,
    "artista_id" INTEGER NOT NULL,
    "nombrealbum" VARCHAR(255) NOT NULL,
    "fotoalbum" BIGINT NOT NULL
);
CREATE TABLE "canciones"(
    "id" SERIAL PRIMARY KEY,
    "artista_id" INTEGER NOT NULL,
    "album_id" INTEGER NOT NULL,
    "genero" VARCHAR(255) NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "estadodeanimo" VARCHAR(255),
    "ocasion" VARCHAR(255),
    "clima" VARCHAR(255)
);
CREATE TABLE "playlists_canciones"(
    "id" SERIAL PRIMARY KEY,
    "cancion_id" INTEGER NOT NULL,
    "playlist_id" INTEGER NOT NULL,
    "fecha" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE "usuarios"(
    "id" SERIAL PRIMARY KEY,
    "mail" VARCHAR(255) NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "contrasenia" VARCHAR(255) NOT NULL,
    "fotoUsuarios" VARCHAR
);
CREATE TABLE "artistas"(
    "id" SERIAL PRIMARY KEY,
    "nombre" VARCHAR(255) NOT NULL,
    "genero" VARCHAR(255) NOT NULL,
    "fotoartista" BIGINT NOT NULL
);
ALTER TABLE "canciones"
ADD CONSTRAINT "canciones_artista_id_foreign" FOREIGN KEY("artista_id") REFERENCES "artistas"("id");
ALTER TABLE "playlists"
ADD CONSTRAINT "playlists_usuario_id_foreign" FOREIGN KEY("usuario_id") REFERENCES "usuarios"("id");
ALTER TABLE "playlists_canciones"
ADD CONSTRAINT "playlistcanciones_cancion" FOREIGN KEY("cancion_id") REFERENCES "canciones"("id");
ALTER TABLE "playlists_canciones"
ADD CONSTRAINT "playlistcanciones_playlist" FOREIGN KEY("playlist_id") REFERENCES "playlists"("id");
ALTER TABLE "canciones"
ADD CONSTRAINT "canciones_album_id_foreign" FOREIGN KEY("album_id") REFERENCES "albums"("id");
ALTER TABLE "albums"
ADD CONSTRAINT "albums_artista_id_foreign" FOREIGN KEY("artista_id") REFERENCES "artistas"("id");