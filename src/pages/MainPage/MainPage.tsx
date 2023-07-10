import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchImagesRequest } from '../../store/images/actions'
import { ImagesState } from '../../store/images/types'
import { ImageGallery } from '../../components/ImageGallery/ImageGallery'

const MainPage = () => {
  const { data, loading, error } = useSelector((state: ImagesState) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchImagesRequest())
  }, [dispatch])
  console.log('ATIVOU', data, loading, error)

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      <ImageGallery images={data} />
    </div>
  )
}

export { MainPage }
