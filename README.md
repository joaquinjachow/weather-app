# Weather App 🌤️

Una aplicación web para consultar el clima de diferentes ciudades del mundo.

## 🚀 Características

- 🔍 Búsqueda de ciudades por nombre
- 🌡️ Información detallada del clima (temperatura, mínima, máxima)
- 💾 Persistencia de datos en localStorage
- 📱 Diseño mobile
- ⚡ Estados de carga y manejo de errores
- 🚫 Prevención de ciudades duplicadas

## 🛠️ Tecnologías

- **Frontend**: Next.js 14, React 18
- **Styling**: Tailwind CSS
- **Notificaciones**: React Toastify
- **API**: OpenWeatherMap

## 📋 Requisitos Previos

- Node.js 18+ 
- npm o yarn

## 🔧 Instalación

1. **Clona el repositorio**
   ```bash
   git clone <tu-repositorio>
   cd weather-app
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Configura las variables de entorno**
   
   Crea un archivo `.env.local` en la raíz del proyecto:
   ```env
   NEXT_PUBLIC_OPENWEATHER_API_KEY=tu_api_key_aqui
   ```
   
   Para obtener una API key gratuita:
   - Ve a [OpenWeatherMap](https://openweathermap.org/)
   - Regístrate y obtén tu API key gratuita

4. **Ejecuta la aplicación**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

5. **Abre tu navegador**
   
   Ve a [http://localhost:3000](http://localhost:3000)

## 📱 Uso

1. **Buscar una ciudad**: Escribe el nombre de la ciudad en el campo de búsqueda
2. **Ver el clima**: La información del clima se mostrará en una tarjeta
3. **Eliminar ciudad**: Haz clic en la "X" para eliminar una ciudad
4. **Persistencia**: Las ciudades se guardan automáticamente en tu navegador

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la [Licencia MIT](LICENSE).

## 👨‍💻 Autor

**Joaquin Jachow**
- LinkedIn: [Joaquin Jachow](https://www.linkedin.com/in/joaquin-jachow/)
- Github: [Joaquin Jachow](https://github.com/joaquinjachow)

---

⭐ Si te gustó este proyecto, ¡dale una estrella!