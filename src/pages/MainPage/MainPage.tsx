import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { changePage, fetchImagesRequest } from '../../store/images/actions'
import { Box } from '@mui/material'
import { ImagesState } from '../../store/images/types'
import { ImageGallery } from '../../components/ImageGallery/ImageGallery'
import { LoadingComponent } from '../../components/LoadingComponent/LoadingComponent'
import { ErrorComponent } from '../../components/ErrorComponent/ErrorComponent'
import { LoadingScroll } from '../../components/LoadingScroll/LoadingScroll'

/**
 * Renderiza a página principal.
 *
 * @return {JSX.Element} O elemento JSX que representa a página principal.
 */
const MainPage = () => {
  const [isLoading, setIsLoading] = useState(false)

  /* Busca as váriaveis do redux */
  const { data, loading, error, page } = useSelector(
    (state: ImagesState) => state,
    shallowEqual,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    /* Chama a função do redux para buscar as imagens */
    dispatch(fetchImagesRequest(page))
  }, [dispatch, page])

  useEffect(() => {
    /* Função que verifica o scroll perto do fim da página para buscar as imagens */
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
    /* Quando as o dados mudam remove o scroll loading */
    setIsLoading(false)
  }, [data])

  /* Retorna o Loading na primeira execução */
  if (loading && page === 1) {
    return <LoadingComponent />
  }

  /* Feedback de erro */
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
      {data && <ImageGallery images={data} />}
      {isLoading && <LoadingScroll />}
    </Box>
  )
}

export { MainPage }
