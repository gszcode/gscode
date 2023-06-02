import ImageUploading from 'react-images-uploading'
import BoxDragAndDrop from './BoxDragAndDrop'
import ImageSelected from './ImageSelected'
import { useUploadImage } from '../../hooks/useUploadImage'

const UploadImage = () => {
  const { images, urlImage, loading, handleChange, onUpload } = useUploadImage()
  localStorage.setItem('urlImage', urlImage)

  return (
    <div className="h-full">
      <ImageUploading
        multiple={false}
        value={images}
        maxNumber={1}
        onChange={handleChange}
      >
        {({
          imageList,
          dragProps,
          onImageUpload,
          onImageUpdate,
          onImageRemove
        }) => (
          <>
            {imageList[0] ? (
              <ImageSelected
                img={imageList[0].dataURL}
                {...{
                  onImageRemove,
                  onUpload,
                  onImageUpdate,
                  loading
                }}
              />
            ) : (
              <BoxDragAndDrop {...{ onImageUpload, dragProps, urlImage }} />
            )}
          </>
        )}
      </ImageUploading>
    </div>
  )
}

export default UploadImage
