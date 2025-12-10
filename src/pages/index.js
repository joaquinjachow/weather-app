import { useState, Suspense, lazy } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import 'react-toastify/dist/ReactToastify.css';

const Nav = lazy(() => import('@/components/nav/Nav'));
const Cards = lazy(() => import('@/components/cards/Cards'));
const Footer = lazy(() => import('@/components/footer/footer'));
const Loader = lazy(() => import('@/components/loader/Loader'));
const ClientWrapper = lazy(() => import('@/components/client-wrapper/ClientWrapper'));

const SuspenseFallback = () => (
  <div className="flex items-center justify-center w-full h-32">
    <div className="relative">
      <div className="w-12 h-12 border-4 border-blue-200 dark:border-blue-800 rounded-full"></div>
      <div className="absolute top-0 left-0 w-12 h-12 border-4 border-blue-600 dark:border-blue-400 rounded-full border-t-transparent animate-spin"></div>
    </div>
    <span className="ml-3 text-lg font-medium text-gray-700 dark:text-gray-300">Cargando componentes...</span>
  </div>
);

function WeatherApp() {
  const [cities, setCities] = useLocalStorage('weather-cities', []);
  const [isLoading, setIsLoading] = useState(false);

  function onClose(id) {
    setCities(oldCities => oldCities?.filter(c => c?.id !== id));
  }

  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

  function onSearch(ciudad) {
    if (!apiKey) {
      toast.error('Error de configuración: API key no encontrada', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
      });
      return;
    }
    setIsLoading(true);
    try {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${apiKey}`)
        .then(r => r.json())
        .then((recurso) => {
          setIsLoading(false);
          if(recurso?.main !== undefined){
            const ciudad = {
              min: Math.round(recurso?.main?.temp_min),
              max: Math.round(recurso?.main?.temp_max),
              img: recurso?.weather[0]?.icon,
              id: recurso?.id,
              wind: recurso?.wind?.speed,
              temp: Math.round(recurso?.main?.temp),
              name: recurso?.name,
              weather: recurso?.weather[0]?.main,
              clouds: recurso?.clouds?.all,
              latitud: recurso?.coord?.lat,
              longitud: recurso?.coord?.lon
            };
            setCities(oldCities => [...oldCities, ciudad]);
            toast.success(`${ciudad.name} agregada exitosamente!`, {
              position: 'top-right',
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
            });
          } else {
            toast.error('Ciudad no encontrada', {
              position: 'top-right',
              autoClose: 2500,
              hideProgressBar: false,
              closeOnClick: true,
            });
          }
        })
        .catch((error) => {
          setIsLoading(false);
          console.error('Error en la llamada a la API:', error);
          toast.error('Error al obtener datos del clima', {
            position: 'top-right',
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
          });
        });
    } catch (error) {
      setIsLoading(false);
      console.error('Error general:', error);
      toast.error('Error inesperado, intente nuevamente', {
        position: 'top-right',
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
      });
    }
  }

  return (
    <main className='min-h-screen bg-center bg-cover bg-clouds dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 transition-all duration-300'>
      <Suspense fallback={<SuspenseFallback />}>
        <Nav onSearch={onSearch} existingCities={cities}/>
      </Suspense>
      {isLoading && (
        <Suspense fallback={<SuspenseFallback />}>
          <Loader />
        </Suspense>
      )}
      <Suspense fallback={<SuspenseFallback />}>
        <Cards cities={cities} onClose={onClose}/>
      </Suspense>
      <Suspense fallback={<SuspenseFallback />}>
        <Footer/>
      </Suspense>
      <ToastContainer />
    </main>
  )
}

export default function Home() {
  return (
    <Suspense fallback={<SuspenseFallback />}>
      <ClientWrapper>
        <WeatherApp />
      </ClientWrapper>
    </Suspense>
  );
}