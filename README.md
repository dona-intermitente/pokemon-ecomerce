# pokemon-ecomerce
## _El ultimo ecomerce de pokemones de todos los tiempos_

pokemon-ecomerce permite registrate como usuario para realizar compra de pokemones en la plataforma.
### Puedes:
- Redistrate e iniciar sesion con cualquier correo.
- Ver los detalles de cualquier pokemon.
- Marcar pokemones como favoritos.
- Comprar uno de cada pokemon (si aun quedan disponibles).

## Requisitos del sistema
- [Node.js](https://nodejs.org/) 12.22.0 or later
- MacOS, Windows (including WSL), and Linux are supported

## Installacion
Clona el repositorio
```bash
git clone https://github.com/dona-intermitente/pokemon-ecomerce.git
```
Instala las dependencias.
```bash
cd pokemon-ecomerce 
yarn install
# o
npm i
```
Establece las variables de entorno
```bash
cp .env.local.example .env.local
```
## Variables de entorno
| Nombre | Descripción |
| ------ | ------ |
| NEXTAUTH_URL | Url base donde esta ejecutado el proyecto. |
| NEXT_PUBLIC_POKEMON_API | Url de la api de para obtener los pokemones. |
| NEXT_PUBLIC_USER_API | Url de la api para datos del ecomerce. |
Los ejempos los puedes ver en *.env.local.example*

## Iniciar modo desarrollo
```bash
yarn dev
# o
npm run dev
```
Verifique la implementación navegando a la dirección de su servidor en su navegador preferido.
```bash
127.0.0.1:3000
# o
http://localhost:3000
```