import React from 'react';

const ListadoPacientes = ({ lista }) => {
  
  return (
    <div className="container mt-3">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Apellido y Nombre</th>
            <th>Numero HC</th>
            <th>Domicilio</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((item) => (
             <tr key={item.IdAPaciente}>
              <td>{item.IdPaciente}</td>
              <td>{item.ApeNomPaciente}</td>
              <td>{item.NroHCPaciente}</td>
              <td>{item.DomicilioPaciente}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoPacientes;