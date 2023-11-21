import React, { useEffect, useState } from 'react';
import style from '../styles/usuario.module.css';
import Link from 'next/link';
import CenteredContainer from '../components/CenteredContainer2';
import Image from 'next/image'
import Header from '../components/Header';
function Usuario() {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    // Realizar la solicitud al backend para obtener la información del usuario
    fetch('/usuario')
      .then((response) => response.json())
      .then((data) => {
        // Actualizar el estado con los datos del usuario recibidos del backend
        setUserData(data);
      })
      .catch((error) => {
        console.error('Error al obtener la información del usuario:', error);
      });
  }, []);


  return (
    <div>
    <Header/>
    <div className={style.container}>
      <h1 className={style.title}>MI PERFIL</h1>
      <div  className={style.img}>
      <Image width={300} height={300} src="/Image/foto.png" alt="foto" /> 
      </div>
      
      <CenteredContainer>
       <form className='form-container'>
       
      <div className={style.contenedorflotante}>
       <label className={style.label}> Usuario/Mail: </label>
       <label className={style.label}> Nombre del responsable: </label>
       <label className={style.label}> Telefono del Responsable: </label>
       <label className={style.label}> Contraseña: </label>
       
       </div>
       
       {userData && (
        <div className={style.p}>
          <p>Nombre: {userData.nombre}</p>
          <p>Email: {userData.email}</p>
          <p>Nombre del responsable: {userData.nombreResp}</p>
          <p>Telefono del responsable: {userData.telefonoResp}</p>
          <p>contraseña: {userData.contraseña}</p>
         
        </div>
      )}
      </form>
      <br/>
       
      <div className={style.contenedorAbajo}>
      <div className={style.seguimiento}>
      <label className={style.cuenta}>
      ¿Olvidaste tu contraseña?
       </label>
        <Link className={style.LINK} href="/RecuperarContraseña">Recupérala</Link> {/* Corregir la ruta */}
        
         
        <button className={style.editar} >
         Editar
        </button>
        </div>
        </div>
        </CenteredContainer>
    </div>
    </div>
  )
}

export default Usuario
