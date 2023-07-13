import ImageList from '@mui/material/ImageList'
import { Image } from '../../store/images/types'
import { ImageItem } from '../ImageItem/ImageItem'

export interface ImageGalleryProps {
  images: Image[]
}

/**
 * Renderiza uma galeria de imagens
 *
 * @param {Image[]} images - Um array com as imagens
 * @return {JSX.Element} - A galeria de imagens renderizada
 */
const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <ImageList variant="woven" cols={4} gap={8} data-testid={'image-gallery'}>
      {images.map((item) => (
        <ImageItem
          author={item.author}
          download_url={item.download_url}
          id={item.id}
          key={item.id}
        />
      ))}
    </ImageList>
  )
}

export { ImageGallery }
