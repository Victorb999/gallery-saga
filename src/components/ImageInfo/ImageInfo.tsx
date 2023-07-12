import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import { BackButton } from '../BackButton/BackButton'

//icons
import PersonIcon from '@mui/icons-material/Person'
import HeightIcon from '@mui/icons-material/Height'
import MultipleStopIcon from '@mui/icons-material/MultipleStop'
import OpenInFullIcon from '@mui/icons-material/OpenInFull'

// styles
import styles from './styles.module.css'

export interface ImageItemProps {
  author: string
  download_url: string
  height: number
  width: number
}

/**
 * Renderiza as informações de uma imagem
 *
 * @param {ImageItemProps} author - O autor da imagem
 * @param {ImageItemProps} download_url - A url de download da imagem
 * @param {ImageItemProps} height - A altura da imagem
 * @param {ImageItemProps} width - A largura da imagem
 * @return {JSX.Element} O componente com as informações das imagens renderizado
 */
const ImageInfo = ({ author, download_url, height, width }: ImageItemProps) => {
  const LinkImage = (): JSX.Element => {
    return (
      <a href={download_url} target="_blank" rel="noreferrer">
        {download_url}
      </a>
    )
  }

  return (
    <Box className={styles.container}>
      <img
        src={`${download_url}`}
        alt={author}
        loading="lazy"
        className={styles.image}
      />
      <Box>
        <List className={styles.imageInfo}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Autor" secondary={author} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <MultipleStopIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Largura da imagem original"
              secondary={`${width}px`}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <HeightIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Altura da imagem original"
              secondary={height}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <OpenInFullIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Abrir em tamanho total"
              secondary={<LinkImage />}
            />
          </ListItem>
          <ListItem>
            <BackButton />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export { ImageInfo }
