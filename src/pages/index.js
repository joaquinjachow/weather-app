import { useState } from 'react';
import Nav from '@/components/nav/Nav'
import Cards from '@/components/cards/Cards'
import Footer from '@/components/footer/footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [cities, setCities] = useState([]);

  function onClose(id) {
    setCities(oldCities => oldCities?.filter(c => c?.id !== id));
  }

  const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

  function onSearch(ciudad) {
    try {
    //Llamado a la API del clima
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
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
        console.error('Error en la llamada a la API:', error);
        toast.error('Error al obtener datos del clima', {
          position: 'top-right',
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
        });
      });
    } catch (error) {
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
    <main className='min-h-screen bg-center bg-cover bg-clouds'>
      <Nav onSearch={onSearch}/>
      <Cards cities={cities} onClose={onClose}/>
      <Footer/>
      <ToastContainer />
    </main>
  )
}
