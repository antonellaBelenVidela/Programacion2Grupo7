# Configuración del entorno de desarrollo para Laboratorio 3

Vamos a comentar 2 alternativas, una utilizando Docker y otra instalando todos los componentes necesarios sobre la máquina host.


# Instalando todo sobre la máquina host

## Instalar NodeJs

1. Ingresar a [NodeJs - Descargas](https://nodejs.org/en/download/) y seleccionar según la plataforma en la que nos encontremos el instalador que mejor se adapte a nuestro sistema operativo.

👉 En el caso de Windows, seleccionar los instaladores que se encuentran en la pestaña "Prebuilt Installer"

![Instalador de Windows](config_env/win_1.png)

👉 En el caso de MacOs o Linux, seleccionar la pestaña "Package Manager" y seleccionar "NVM" en el último combo. Luego copiar y ejecutar en una terminal los comandos que se muestran.

![Instalador de Linux o MacOs](config_env/lin_1.png)

⚠️ **En todos los casos seleccionar alguna versión estable (LTS)**


## Directorio de trabajo

Una vez instalado node, debemos crear el directorio en el cual vamos a desarrollar.
Crear un directorio, que será el directorio del proyecto a utilizar y dentro del mismo descomprimir el archivo 📦 *bootstrap.zip*.

Este archivo contiene lo siguiente:

📂/
 - 📂 src: directorio donde crearemos todos los archivos typescript (\*.ts)
  - 📄 index.ts: archivo de prueba. A futuro será nuestro punto de entrada.
 - 📂 tests: directorio donde crearemos las pruebas unitarias 
 - 📄 package.json: este archivo contiene los comandos a utilizar en el desarrollo y los paquetes necesarios para construir nuestra solución.
 - 📄 tsconfig.json: este archivo contiene la configuración utilizada en el proceso de "compilación"
 - 📄 jest.config.js: este archivo contiene la configuración utilizada durante la ejecución de las pruebas unitarias.
 - 📄 README.md: este archivo.


# Utilizando Docker

## Instalar Docker

Para utilizar Docker, primero debemos instalarlo en nuestro sistema. También debemos tener instalado docker-compose.

👉 Para poder instalar Docker, ingresar a [Docker](https://www.docker.com/products/docker-desktop/) y seguir las instrucciones que se presentan según la plataforma en la cual estemos trabajando.

👉Luego debemos instalar *docker-compose*. Para ello ingresar a [Docker Compose](https://docs.docker.com/compose/install/) y seguir las instrucciones que se presentan según la plataforma en la cual estemos trabajando.


## Directorio de trabajo

Crear un directorio, que será el directorio del proyecto a utilizar y dentro del mismo descomprimir el archivo 📦*bootstrap_with_docker.zip*.

Este archivo contiene lo siguiente:

📂/
 - 📂 src: directorio donde crearemos todos los archivos typescript (\*.ts)
   - 📄 index.ts: archivo de prueba. A futuro será nuestro punto de entrada.
 - 📂 tests: directorio donde crearemos las pruebas unitarias 
 - ⚡ generate_docker_base_files.sh: este archivo contiene los comandos que nos permitiran crear los archivos para construir nuestro contenedor de Docker y para ejecutarlo.
 - 📄 package.json: este archivo contiene los comandos a utilizar en el desarrollo y los paquetes necesarios para construir nuestra solución.
 - 📄 tsconfig.json: este archivo contiene la configuración utilizada en el proceso de "compilación"
 - 📄 jest.config.js: este archivo contiene la configuración utilizada durante la ejecución de las pruebas unitarias.
 - 📄 README.md: este archivo.

## Construir nuestro contenedor.

👉 Para obtener ayuda sobre cómo ejecutar el script generate_docker_base_files.sh, ejecutar el script de la siguiente manera: 

```bash
# Para conocer la ayuda podemos ejecutar el script con el parámetro -h o sin él.

# Opcion 1
user@host:~$ ./generate_docker_base_files.sh -h

# Opcion 2
user@host:~$ ./generate_docker_base_files.sh
```

### Generar los archivos de configuración de Docker

👉 Para construir los archivos de configuración de Docker, ejecutar el script de la siguiente manera:

```bash

# generar los archivos de configuración
user@host:~$ ./generate_docker_base_files.sh -g my_container

```

Luego debemos tener 3 archivos:

📂/
 -...
 - 📄 Dockerfile: este archivo posee las instrucciones para construir la imagen a partir de la cual se generaran los contenedores.
 - 📄 docker-compose.yml: este archivo permite construir la imagen.
 - 📄 docker_dev.env: archivo con datos de configuración para construir la imagen.


### Construir la imagen

👉 Para construir la imagen de Docker, ejecutar el script de la siguiente manera:

```bash

# generar la imagen
user@host:~$ ./generate_docker_base_files.sh -b docker_dev.env

```

Al finalizar debemos ver en la terminal la salida de la ejecución del archivo index.ts

### Ejecutar el contenedor para comenzar a desarrollar

👉 Para crear un contenedor a partir de  la imagen de Docker creada, ejecutar el script de la siguiente manera:

```bash

# ejecutar el contendor
user@host:~$ ./generate_docker_base_files.sh -r my_container

```
⚠️⚠️⚠️ **NOTA** ⚠️⚠️⚠️

En caso de que arroje un error indicando que el contenedor ya existe, debemos primero eliminar el existente. Para ello realizar lo siguiente:


```bash
# Verificar los contenedores existentes
user@host:~$ docker ps -a

# Eliminar el contenedor 
user@host:~$ docker rm my_container

# ejecutar el contendor
user@host:~$ ./generate_docker_base_files.sh -r my_container

```

Una vez que ejecutamos el contenedor, vamos a poder ejecutar comandos dentro del mismo

---

Independientemente de cuál haya sido el tipo de instalación elegido, debemos continuar con los siguientes pasos:

## Instalar las dependencias

Desde una terminal, ingresar al directorio de trabajo creado y ejecutar el siguiente comando: 

```bash
# comando que permite instalar los paquetes especificados en el archivo package.json
user@host:~$ npm i
```

## Compilar el proyecto

Desde una terminal, ingresar al directorio de trabajo creado y ejecutar el siguiente comando: 

```bash
# comando que permite compilar la solución.
user@host:~$ npm run build
```

## Configurar VisualCode (IDE)

Instalar los siguientes complementos:

* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
* [JEST](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)
* [PlantUML](https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml)
* [Test Adapter Converter](https://marketplace.visualstudio.com/items?itemName=ms-vscode.test-adapter-converter)
* [Test Explorer UI](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-test-explorer)

### ⚠️ Sólo para quienes estén utilizando Docker: 
* [Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack).

Para desarrollar/ejecutar dentro del contenedor, luego de instalar el plugin *Remote Development* debemos acceder al panel de contenedores que se encuentra en la barra lateral izquierda e indicarle a vscode que "adjunte" la ventana de vscode al contenedor. Para ello seguir los siguientes pasos:

![Menu Contenedores](config_env/vscode_1.png)  

![Menu Contenedores](config_env/vscode_2.png)
