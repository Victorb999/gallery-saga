import ImageList from '@mui/material/ImageList'
import { Image } from '../../store/images/types'
import { ImageItem } from '../ImageItem/ImageItem'

interface ImageGalleryProps {
  images: Image[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <ImageList cols={4}>
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
