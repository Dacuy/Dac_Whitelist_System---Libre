# DAC_WhitelistSystem 🌟

Bienvenido a **DAC_WhitelistSystem**, una aplicación web para gestionar solicitudes de whitelist para servidores, especialmente útil para servidores de FiveM. Los datos ingresados en el formulario se almacenan en una base de datos y luego un bot de Discord procesa las solicitudes para su aprobación o rechazo.

## Funcionalidades
- **Formulario de Solicitud**: Los usuarios pueden llenar un formulario con sus datos para solicitar el acceso a la whitelist.
- **Almacenamiento en Base de Datos**: Las solicitudes se almacenan de forma segura en una base de datos.
- **Integración con Discord**: Un bot de Discord toma los datos de la base de datos y envía mensajes para que las solicitudes sean aprobadas o rechazadas.

## Estructura del Proyecto
DAC_WHITELISTSYSTEM/
│
├── assets/
│ └── imgs/
│ ├── citizen_cursor.png
│ ├── cursor.png
│ ├── Ellipse.png
│ ├── Ellipse2.png
│ ├── grid.svg
│ ├── l2ogo.webp
│ ├── mainlanding.png
│ └── seg_landing.png
│
├── css/
│ ├── styles.css
│ └── stylesform.css
│
├── html/
│ ├── form.html
│ ├── index.html
│ ├── normativas.html
│ └── session.html
│
├── js/
│ ├── f2skhjthast.js
│ ├── script.js
│ └── spanscript.js
│
└── README.md


## Requisitos
- Credenciales de Firebase para el almacenamiento de datos.
- Bot de Discord configurado para interactuar con la base de datos y gestionar las solicitudes.

## Seguridad
**Importante**: Asegúrate de implementar medidas de seguridad adecuadas para ocultar tus credenciales de Firebase. De lo contrario, podrían quedar expuestas al público. Esto es crucial para proteger la integridad y seguridad de tu aplicación.

## Instalación
1. Clona el repositorio:
    ```bash
    git clone https://github.com/tuusuario/DAC_WhitelistSystem.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd DAC_WhitelistSystem
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```
4. Agrega tus credenciales de Firebase en el archivo de configuración correspondiente.

## Uso
1. Inicia el servidor de desarrollo:
    ```bash
    npm start
    ```
2. Abre tu navegador y ve a `http://localhost:3000` para ver la aplicación en funcionamiento. También puedes usar una extensión como Open Live Server para visualizar la aplicación durante el desarrollo.
3. Configura tu bot de Discord para que se conecte a la base de datos y gestione las solicitudes.

## Configuración del Bot de Discord
1. Crea un bot en el [portal de desarrolladores de Discord](https://discord.com/developers/applications).
2. Invita el bot a tu servidor de Discord.
3. Configura el bot para conectarse a tu base de datos Firebase y procesar las solicitudes.

## Contribuciones
Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue estos pasos:
1. Haz un fork del proyecto.
2. Crea una nueva rama con tu característica o corrección:
    ```bash
    git checkout -b nombre-de-tu-rama
    ```
3. Realiza tus cambios y haz commit:
    ```bash
    git commit -m "Descripción de tus cambios"
    ```
4. Sube tus cambios a tu fork:
    ```bash
    git push origin nombre-de-tu-rama
    ```
5. Abre un Pull Request en GitHub.

## Contacto
Para cualquier consulta o sugerencia, puedes contactarme en Discord: **dac_lc**.

Besitos,
**DAC_**

