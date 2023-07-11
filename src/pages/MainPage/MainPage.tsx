import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changePage, fetchImagesRequest } from '../../store/images/actions'
import { Box } from '@mui/material'
import { ImagesState } from '../../store/images/types'
import { ImageGallery } from '../../components/ImageGallery/ImageGallery'
import { LoadingComponent } from '../../components/LoadingComponent/LoadingComponent'
import { ErrorComponent } from '../../components/ErrorComponent/ErrorComponent'
import { LoadingScroll } from '../../components/LoadingScroll/LoadingScroll'

const MainPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { data, loading, error, page } = useSelector(
    (state: ImagesState) => state,
  )
  const dispatch = useDispatch()

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
    return <LoadingComponent />
  }

  if (error) {
    return <ErrorComponent />
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        p: 8,
      }}
    >
      <ImageGallery images={data} />
      {isLoading && <LoadingScroll />}
    </Box>
  )
}

export { MainPage }
