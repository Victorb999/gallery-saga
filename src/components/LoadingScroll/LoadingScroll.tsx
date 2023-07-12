import { Box, Typography } from '@mui/material'

/**
 * Renderiza o componente de loading no scroll
 *
 * @return {ReactNode} O componente de loading no scroll
 */
const LoadingScroll = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        p: 16,
      }}
      data-testid="loading-scroll"
    >
      <Typography sx={{ mb: 2 }} variant="h5" component="div">
        ... Carregando mais imagens =)
      </Typography>
    </Box>
  )
}

export { LoadingScroll }
