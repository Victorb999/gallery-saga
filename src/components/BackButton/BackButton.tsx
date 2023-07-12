import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

/**
 * Renderiza o botão de voltar.
 *
 * @return {JSX.Element} O componente do botão de voltar.
 */
const BackButton = () => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <Button
      variant="contained"
      startIcon={<ArrowBackIcon />}
      onClick={handleGoBack}
    >
      Voltar
    </Button>
  )
}

export { BackButton }
