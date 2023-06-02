import { useState } from 'react'
import { fileUpload } from '../utils/fileUpload'
import Swal from 'sweetalert2'

export const useUploadImage = () => {
  const [images, setImages] = useState([])
  const [urlImage, setUrlImage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (imageList) => setImages(imageList)

  const onUpload = async () => {
    setLoading(true)
    const url = await fileUpload(images[0].file)
    setLoading(false)

    if (url) setUrlImage(url)
    else
      Swal.fire({
        text: 'Error, inténtalo de nuevo más tarde',
        icon: 'error',
        confirmButtonText: 'Cerrar'
      })

    setImages([])
  }

  return {
    images,
    urlImage,
    loading,
    handleChange,
    onUpload
  }
}
