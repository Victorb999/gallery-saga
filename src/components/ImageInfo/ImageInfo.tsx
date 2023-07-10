import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'

interface ImageItemProps {
  author: string
  download_url: string
  height: number
  width: number
}

const ImageInfo = ({ author, download_url, height, width }: ImageItemProps) => {
  return (
    <Box sx={{ padding: '32px', maxWidth: '100%', display: 'flex' }}>
      <img
        src={`${download_url}`}
        alt={author}
        loading="lazy"
        className="image"
      />
      <Box
        sx={{
          padding: '8px',
          maxWidth: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          ml: 10,
        }}
      >
        <Typography sx={{ mb: 2 }} variant="h6" component="div">
          <b>Author:</b> {author}
        </Typography>
        <Typography sx={{ mb: 2 }} variant="h6" component="div">
          <b>Altura imagem original:</b> {height}
        </Typography>
        <Typography sx={{ mb: 2 }} variant="h6" component="div">
          <b>Largura imagem original:</b> {width}
        </Typography>
        <Typography sx={{ mb: 2 }} variant="h6" component="div">
          <b>Download:</b> <a href={download_url}>{download_url}</a>
        </Typography>
        <Typography sx={{ mb: 2 }} variant="h6" component="div">
          <Link to="/">Voltar</Link>
        </Typography>
      </Box>
    </Box>
  )
}

export { ImageInfo }