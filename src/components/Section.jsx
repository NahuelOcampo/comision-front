import React from 'react';
import Data from './Data'

export default function Section() {
    return (
        <>
        <h2 className="titulo">Integrantes de la comisión</h2>
            <Data />
          <div className="nosotros">
              <h2 className="titulo" id="1">Nosotros</h2> 
              <div className="flex">
                <div>
                  <h3>La comisión de homenaje del GADA 101 bateria "B" Teniente Gral. Pablo Ricchieri, tendra por objeto:</h3>
                  <ul className="section-p">
                    <li>Reivindicar la gesta de las islas Malvinas y la Defensa de nuestra soberanía nacional.</li>
                    <li>Desarrollar las actividades necesarias para integrar al veterano de guerra en aquellos aspects que contribuyan a mantener viva la gesta de las islas Malvinas, sin fines de lucro ni orientacion politica partidaria.</li>
                    <li>Mantener en forma permanente el recuerdo de los héroes caidos en combate por la soberanía nacional y los fallecidos por Malvinas.</li>
                    <li>Realizar, estimular, colaborar, participar, e intervenir en toda clase de iniciativas, ya sean de carácter educacional, intelectual, artistico, social, periodistico y/o afines, actuando por si o colaborando con otras instituciones, para mantener viva la llama Malvinense.</li>
                    <li>contibuir en todo aquello que signifique reinvindicación y reconocimiento a todos los que participaron en el teatro de operaciones de Malvinas.</li>
                    <li>Todas las actividades enunciadas se realizarán caundo corresponda por personal idóneo y/o profesional y sin fines de lucro.</li>
                    <li>Desarrollar un ambiente de cordialidad y solidaridad entre sus asociados y propender al mejoramiento intelectual y cultural de los mismos.</li>
                  </ul>
                </div> 
                </div>
              </div>
        </>
    )
}
