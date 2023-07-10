// ImageDetails.tsx
import React from 'react'
import { useParams } from 'react-router'

const ImageDetails = () => {
  const { id } = useParams<'id'>()

  return (
    <div>
      {/* Renderize os detalhes da imagem com base no ID recebido nos parâmetros */}
      <h2>Detalhes da Imagem {id}</h2>
    </div>
  )
}

export { ImageDetails }
