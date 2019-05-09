import React from 'react';

 const Comparative = () => {
 return(
    <div className="container-fluid comparative">
     <div class="table-responsive">
         <table class="table  table-striped">
             <thead>
                 <tr>
                     <th></th>
                     <th>Plan edificación</th>
                     <th>Plan edificación y Contenido</th>
                 </tr>
             </thead>
             <tbody className="text-left">
                 <tr>
                 <td>Asegura la estructura de tu hogar</td>
                 <td className="text-center"><i class="far fa-check-square"></i></td>
                 <td className="text-center"><i class="far fa-check-square"></i></td>
                 <td></td>
                 </tr>
                 <tr>
                 <td>Nos adpatamos al nivel de cobertura que necesitas</td>
                 <td className="text-center"><i class="far fa-check-square"></i></td>
                 <td className="text-center"><i class="far fa-check-square"></i></td>
                 </tr>
                 <tr>
                 <td>Las mejores asistencias para cuidar tu hogar</td> 
                 <td className="text-center"><i class="far fa-check-square"></i></td>
                 <td className="text-center"><i class="far fa-check-square"></i></td>
                 </tr>
                <tr>
                <td>Asegura el contenido de tu hogar</td>
                <td className="text-center"><i class="far fa-window-close"></i></td>
                <td className="text-center"><i class="far fa-check-square"></i></td>
                </tr>
                <tr>
                    <td></td>
                    <td className="text-center">Desde S/45.90 Mensual</td>
                    <td className="text-center">Desde S/55.90 Mensual</td>
                </tr>
                <tr className="text-center">
                    <td></td>
                    <td><button type="button" className="btn  color-button">Solicitar</button></td>
                    <td><button type="button" className="btn  color-button">Solicitar</button></td>
                </tr>
             </tbody>
         </table>
     </div>
     
    </div>
      
    );
 }
 export default Comparative;