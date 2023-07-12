import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchImageDetailsRequest } from '../../store/images/actions'
import { ImagesState } from '../../store/images/types'
import { ImageInfo } from '../../components/ImageInfo/ImageInfo'
import { LoadingComponent } from '../../components/LoadingComponent/LoadingComponent'
import { ErrorComponent } from '../../components/ErrorComponent/ErrorComponent'

/**
 * Renderiza os detalhes de uma imagem baseada no parametro da URL.
 *
 * @return {JSX.Element} O componente de detalhes de imagem renderizado.
 */

const ImageDetails = () => {
  const params = useParams()
  const id = params?.id
  const imagesState = useSelector((state: ImagesState) => state)
  const { dataImageDetail, loading, error } = imagesState || {}
  const dispatch = useDispatch()

  useEffect(() => {
    /* Se o id é válido faz a busca da imagem */
    if (id) {
      dispatch(fetchImageDetailsRequest(id))
    }
  }, [dispatch, id])

  /* Retorna o loading  */
  if (loading) {
    return <LoadingComponent />
  }

  /* Feeback de erro */
  if (error) {
    return <ErrorComponent />
  }

  return (
    <>
      {dataImageDetail && (
        <ImageInfo
          author={dataImageDetail.author}
          download_url={dataImageDetail.download_url}
          height={dataImageDetail.height}
          width={dataImageDetail.width}
        />
      )}
    </>
  )
}

export { ImageDetails }
