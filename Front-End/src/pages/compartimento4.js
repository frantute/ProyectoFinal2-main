import React from 'react'
import CenteredContainer from '../components/CenteredContainer';
import style from '../styles/compartimiento1.module.css';
import Image from 'next/image'
import Link from 'next/link';
import Dropdown from '../components/dropdown';
import Header from '../components/Header';
const compartimiento4 = () => {
  return (
    <div>
      <Header/>
      <div  className={style.img}>
      <Image width={400} height={750} src="/Image/compartimento4.png" alt="Imagen comp1" /> 
      </div>
      <CenteredContainer> 
      <form className="form-container">
      <div className={style.label}>
      <div className={style.contenedorflotante}>
        <label htmlFor="name">Nombre de la pastilla: </label>
        <input type="text" id="NOMBRE" name="name" />
      </div> <br/>
      <div className="form-group">
        <label htmlFor="Horario"> Horario en el que se toma: </label>
        <Dropdown />
       
      </div> <br/>
      <div className="form-group">
      <div className={style.contenedorflotante}>
        <label htmlFor="cuanto"> Por cuantos dias se toma? </label>
        <input type="text" id="dias" name="dias" onChange={(event) => setDias(event.target.value)} /> 
        <label htmlFor="dias"> Todos los dias? </label>  
         <input className={style.checkbox} type="checkbox" value="yes" onChange={(event) => setTodosLosDias(event.target.value)}/> 
         </div> 
      </div><br/>
      <div className={style.contenedorflotante}>
        <label htmlFor="fecha">Fecha de Incio </label>
        <input type="text" id="FECHA" name="fecha" onChange={(event) => setFechaInicio(event.target.value)}/>
      </div> <br/>
      </div>
      
      <button className={style.BTN} onClick={(e) => Guardar(e)}>
        <div className={style.contenidoEncima}>Guardar</div>
        </button>
        
    </form>
      </CenteredContainer>

    </div>
  )
}

export default compartimiento4
