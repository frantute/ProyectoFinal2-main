const CenteredContainer = ({ children }) => {
    return (
      <div className="side-container">
        {children}
        <style jsx>{`
             
             .side-container {
               top: 200px;
               position: fixed; /* Fija el contenedor en la pantalla */
               display: flex;
               justify-content: left; /* Centrar horizontalmente */
               align-items: center; /* Centrar verticalmente */ 
               right: 20px; /* Coloca el contenedor en el lado derecho */
               width: 850px; /* Ancho deseado del contenedor */
               height: 400px;
               padding: 10px;
               
             }
           `}</style>
        
      </div>
    );
  };
  
  export default CenteredContainer;