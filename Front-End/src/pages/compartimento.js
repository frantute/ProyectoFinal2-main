  import React from 'react';
  import { useRouter } from 'next/router';
  import style from '../styles/compartimiento.module.css';
  import Header from '../components/Header';

  function Compartimiento() {
    const router = useRouter();
    
    const compartimento1 = async (e) => {
      e.preventDefault();
      
      // Definir compartimento aquí o donde sea necesario
      const compartimento = '1';
    
      try {
        const response = await fetch('http://localhost:5000/compartimento1');
    
        if (response.ok) {
          console.log('Se guardó la información correctamente');
          router.push('/compartimento1');
        } else {
          console.error('Error en la solicitud');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };
    
    const compartimento2 = async (e) => {
      e.preventDefault();
      
      // Definir compartimento aquí o donde sea necesario
      const compartimento = '2';
    
      try {
        const response = await fetch('http://localhost:5000/compartimento2');
    
        if (response.ok) {
          console.log('Se guardó la información correctamente');
          router.push('/compartimento2');
        } else {
          console.error('Error en la solicitud');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };
    
    const compartimento3 = async (e) => {
      e.preventDefault();
      
      // Definir compartimento aquí o donde sea necesario
      const compartimento = '3';
    
      try {
        const response = await fetch('http://localhost:5000/compartimento3');
    
        if (response.ok) {
          console.log('Se guardó la información correctamente');
          router.push('/compartimento3');
        } else {
          console.error('Error en la solicitud');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };

    const compartimento4 = async (e) => {
      e.preventDefault();
      
      // Definir compartimento aquí o donde sea necesario
      const compartimento = '4';
    
      try {
        const response = await fetch('http://localhost:5000/compartimento4');
    
        if (response.ok) {
          console.log('Se guardó la información correctamente');
          router.push('/compartimento4');
        } else {
          console.error('Error en la solicitud');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };

    return (
      <form>
        <Header />
        <h1 className={style.title}>Seleccione el compartimiento</h1>
        <div className={style.container}>
          <div className={style.containerimg}>
            <div className={style.button1} onClick={compartimento1} />
          
            <br />
            
            <div className={style.button2} onClick={compartimento2} />
            </div>
            <br />
        
          <div className={style.containerimg}>
            
          <div className={style.button3} onClick={compartimento3} />
            
            <br />
            <div className={style.button4} onClick={compartimento4} />
            <br />
          </div>
        </div>
      </form>
    );
  }

  export default Compartimiento;