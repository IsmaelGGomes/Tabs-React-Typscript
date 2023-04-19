import React, { useState } from 'react';

import { useEstados } from "../../hooks/useEstados";
import { useCidades } from "../../hooks/useCidades";

export default function TestPage() {

  const { estados } = useEstados();
  const [selectedEstado,setSelectedEstado] = useState('');
  const { cidades, loading } = useCidades(selectedEstado);
  
  
  const handleEstadoUpdate = (event) => {
    setSelectedEstado(event.target.value);
  };

  return (
    <>
      <select value={selectedEstado} onChange={handleEstadoUpdate} >
        {estados.map((estado) => (
          <option key={estado.id} value={estado.sigla} >{estado.nome}</option>
        ))}
      </select>
      {loading ? (
        <p>Carregando</p>
      ) : (
        <select>
          {cidades.map((cidade) => (
            <option key={cidade.codigo_ibge} >{cidade.nome}</option>
          ))}
      </select>
      )}
    </>
  )
}
