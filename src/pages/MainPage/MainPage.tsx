import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changePage, fetchImagesRequest } from '../../store/images/actions'
import { ImagesState } from '../../store/images/types'
import { ImageGallery } from '../../components/ImageGallery/ImageGallery'

const MainPage = () => {
  const { data, loading, error, page } = useSelector(
    (state: ImagesState) => state,
  )
  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    dispatch(fetchImagesRequest(page))
  }, [dispatch, page])

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 200 &&
        !isLoading
      ) {
        setIsLoading(true)
        dispatch(changePage(page + 1))
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [dispatch, page, isLoading])

  useEffect(() => {
    setIsLoading(false)
  }, [data])

  if (loading && page === 1) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      <ImageGallery images={data} />
      {isLoading && <div>Loading...</div>}
    </div>
  )
}

export { MainPage }
