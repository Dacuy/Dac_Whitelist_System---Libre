# DAC_WhitelistSystem 🌟

Bienvenido a **DAC_WhitelistSystem**, una aplicación web para gestionar solicitudes de whitelist para servidores, especialmente útil para servidores de FiveM. Los datos ingresados en el formulario se almacenan en una base de datos y luego un bot de Discord procesa las solicitudes para su aprobación o rechazo.


<img src="https://cdn.discordapp.com/attachments/1235722562294648836/1247282892032442510/image.png?ex=665f7636&is=665e24b6&hm=53b8543373c39d03e06da23aaf0eb9e6efbd304f178fbb846902f3a7a5971580&">
<img src="https://cdn.discordapp.com/attachments/1235722562294648836/1247283120613494834/image.png?ex=665f766d&is=665e24ed&hm=97b027c29f49d242d01f4b3ed69fe6740ab0e67b25d4be585dff254a1908dbdb&">
## Funcionalidades
- **Formulario de Solicitud**: Los usuarios pueden llenar un formulario con sus datos para solicitar el acceso a la whitelist.
- **Almacenamiento en Base de Datos**: Las solicitudes se almacenan de forma segura en una base de datos.
- **Integración con Discord**: Un bot de Discord toma los datos de la base de datos y envía mensajes para que las solicitudes sean aprobadas o rechazadas. <br>
- **PRONTO: Integración de credenciales**: Integracion de credenciales (base hecha puedes hacerlo por tu cuenta) para ver que administradores aprobaron y rechazaron mas whitelists y cuanto tiempo pasaron haceiendolo. (graficas en general con chart.js)

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

## Licencia
Proyecto de uso personal: No hace falta hacer mención al autor.
Proyecto de uso comercial (Cualquier proyecto que involucre a + de 5 personas que vayan a usar el sistema): Hacer mención al autor y colocar link al repositorio.

## Seguridad
**Importante**: Asegúrate de implementar medidas de seguridad adecuadas para ocultar tus credenciales de Firebase. De lo contrario, podrían quedar expuestas al público. Esto es crucial para proteger la integridad y seguridad de tu aplicación.

## Instalación
1. Clona el repositorio:
    ```bash
    git clone https://github.com/Dacuy/Dac_Whitelist_System---Libre.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd DAC_WhitelistSystem

4. Agrega tus credenciales de Firebase en el archivo de configuración correspondiente, y escondela para evitar problemas.

## Configuración del Bot de Discord
1. Crea un bot en el [portal de desarrolladores de Discord](https://discord.com/developers/applications).
2. Invita el bot a tu servidor de Discord.
3. Configura el bot para conectarse a tu base de datos Firebase y procesar las solicitudes, revisa mi perfil de github para obtener el codigo.


## Contacto
Para cualquier consulta o sugerencia, puedes contactarme en Discord: **dac_lc**.

Besitos,
**©All Rights Reserved: DAC_**

