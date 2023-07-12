import { Box, Typography } from '@mui/material'
import { ReactComponent as LoadingSvg } from '../../assets/undraw_load.svg'

/**
 * Renderiza o componente de loading
 *
 * @return {JSX.Element} O componente de loading
 */
const LoadingComponent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        p: 16,
      }}
      data-testid="loading-component"
    >
      <LoadingSvg />
      <Typography sx={{ mb: 2 }} variant="h4" component="div">
        Aguarde um pouco, estamos carregando as imagens pra você
      </Typography>
    </Box>
  )
}

export { LoadingComponent }
