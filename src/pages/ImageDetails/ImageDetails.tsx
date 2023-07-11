import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchImageDetailsRequest } from '../../store/images/actions'
import { ImagesState } from '../../store/images/types'
import { ImageInfo } from '../../components/ImageInfo/ImageInfo'
import { LoadingComponent } from '../../components/LoadingComponent/LoadingComponent'
import { ErrorComponent } from '../../components/ErrorComponent/ErrorComponent'

const ImageDetails = () => {
  const { id } = useParams()
  const { dataImageDetail, loading, error } = useSelector(
    (state: ImagesState) => state,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (id) dispatch(fetchImageDetailsRequest(id))
  }, [dispatch, id])

  if (loading) {
    return <LoadingComponent />
  }

  if (error) {
    return <ErrorComponent />
  }

  return (
    <>
      <ImageInfo
        author={dataImageDetail.author}
        download_url={dataImageDetail.download_url}
        height={dataImageDetail.height}
        width={dataImageDetail.width}
      />
    </>
  )
}

export { ImageDetails }
