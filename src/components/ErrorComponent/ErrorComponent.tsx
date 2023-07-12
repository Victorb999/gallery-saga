import { Box, Typography } from '@mui/material'
import { ReactComponent as ErrorSvg } from '../../assets/undraw_error.svg'

/**
 * Renderiza o componente de erro
 *
 * @return {JSX.Element} O componente de erro renderizado
 */
const ErrorComponent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        p: 16,
      }}
      data-testid="error-component"
    >
      <ErrorSvg />
      <Typography sx={{ mb: 2 }} variant="h4" component="div">
        Ops ocorreu um erro ao carregar as imagens
      </Typography>
      <Typography sx={{ mb: 2 }} variant="h4" component="div">
        Tente novamente mais tarde
      </Typography>
    </Box>
  )
}

export { ErrorComponent }
