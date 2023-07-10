import ImageListItem from '@mui/material/ImageListItem'
import { Link } from 'react-router-dom'

interface ImageItemProps {
  author: string
  download_url: string
  id: number
}

const ImageItem = ({ author, download_url, id }: ImageItemProps) => {
  return (
    <Link to={`image/${id}`} className="image-item">
      <ImageListItem>
        <img src={`${download_url}`} alt={author} loading="lazy" />
      </ImageListItem>
    </Link>
  )
}

export { ImageItem }
