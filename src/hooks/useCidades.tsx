import React, { useEffect, useState } from 'react'

export interface ICidades {
  nome: string
  codigo_ibge: string
}

export const useCidades = (uf: string) => {
  const [cidades, setCidades] = useState<ICidades[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!uf) return;

    setLoading(true);
    fetch(`https://brasilapi.com.br/api/ibge/municipios/v1/${uf}`)
      .then((response) => response.json())
      .then((data) => setCidades(data))
      .then(() => setLoading(false));
  }, [uf]);

  return {
    cidades,
    loading
  };
}
