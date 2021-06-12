/* eslint-disable react/prop-types */
import React from 'react';

function TableRow() {
  return (
    <>
      <table className="table-row">
        <tr className="row">
          <th className="td-center">Calida del aire</th>
          <th className="td-center">Implicaciones a la salúd</th>
          <th className="last-td td-center">Precauciones</th>
        </tr>

        {/* QA */}

        <tr style={{ backgroundColor: '#01C6F5' }} className="row row-data">
          <td>Buena</td>
          <td>
            No se anticipan impactos a la salud cuando la calidad del
            aire se encuentra en este intervalo.

          </td>
          <td className="last-td">Ninguna</td>
        </tr>

        <tr style={{ backgroundColor: '#0CF528' }} className="row">
          <td>Moderada</td>
          <td>
            Las personas extra ordinariamente sensitivas deben
            considerar limitación de los esfuerzos físicos excesivos y prolongados al aire libre.

          </td>
          <td className="last-td">Los niños y adultos activos, y las personas con enfermedades respiratorias, como asma, deben limitar el esfuerzo prolongado al aire libre.</td>
        </tr>

        <tr style={{ backgroundColor: '#F5F300' }} className="row">
          <td>Dañina para grupos sensibles</td>
          <td>
            Los niños y adultos activos, y personas con enfermedades
            respiratorias tales como el asma,
            deben evitar los esfuerzos físicos excesivos y prolongados al aire libre.

          </td>
          <td className="last-td">Los niños y adultos activos, y las personas con enfermedades respiratorias, como asma, deben limitar el esfuerzo prolongado al aire libre.</td>
        </tr>

        <tr style={{ backgroundColor: '#F5A500' }} className="row">
          <td>Dañina para la salúd</td>
          <td>
            Los niños y adultos activos, y personas con enfermedades
            respiratorias tales como el asma, deben evitar los esfuerzos
            excesivos prolongados al aire libre; las demás personas, especialmente los niños,
            deben limitar los esfuerzos físicos excesivos y prolongados al aire libre.

          </td>
          <td className="last-td">Los niños y adultos activos, y las personas con enfermedades respiratorias, como asma, deben evitar el esfuerzo prolongado al aire libre; todos los demás, especialmente los niños, deben limitar el esfuerzo prolongado al aire libre</td>
        </tr>

        <tr style={{ backgroundColor: '#f56200' }} className="row">
          <td>Muy dañina para la salúd</td>
          <td>
            Los niños y adultos activos, y personas con enfermedades
            respiratorias tales como el asma,
            deben evitar todos los esfuerzos excesivos al aire libre;
            las demás personas, especialmente los niños,
            deben limitar los esfuerzos físicos excesivos al aire libre.

          </td>
          <td className="last-td">Los niños y adultos activos, y las personas con enfermedades respiratorias, como asma, deben evitar todo esfuerzo al aire libre; todos los demás, especialmente los niños, deben limitar el esfuerzo al aire libre.</td>
        </tr>

        <tr style={{ backgroundColor: '#F50C2D' }} className="row">
          <td>Arriegado</td>
          <td>NO SALGAS</td>
          <td className="last-td">NO SALGAS</td>
        </tr>

      </table>
    </>
  );
}

export default TableRow;
