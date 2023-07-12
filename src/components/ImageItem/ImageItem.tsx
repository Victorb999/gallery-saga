import React, { useState } from 'react'
import ImageListItem from '@mui/material/ImageListItem'
import { Link } from 'react-router-dom'

// styles
import styles from './styles.module.css'

export interface ImageItemProps {
  author: string
  download_url: string
  id: number
}

/**
 * Renderiza o componente com a imagem
 *
 * @param {ImageItemProps} author - O autor da imagem
 * @param {ImageItemProps} download_url - A url de download da imagem
 * @param {ImageItemProps} id - O id da imagem
 * @return {JSX.Element} O componente com a imagem renderizado
 */
const ImageItem = ({ author, download_url, id }: ImageItemProps) => {
  const [isLoading, setIsLoading] = useState(true)

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  return (
    <Link
      to={`image/${id}`}
      className={isLoading ? styles.loadingImage : styles.imageItem}
    >
      <ImageListItem
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <img
          src={`${download_url}`}
          alt={author}
          loading="lazy"
          onLoad={handleImageLoad}
          data-testid="image-test"
        />
      </ImageListItem>
    </Link>
  )
}

export { ImageItem }
