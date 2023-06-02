const ImageSelected = ({
  img,
  loading,
  onUpload,
  onImageRemove,
  onImageUpdate
}) => {
  return (
    <div className="h-full">
      <img
        className="w-full h-full object-cover"
        src={img}
        alt="image-selected"
        width={300}
      />
      <div className="flex justify-between text-sm font-semibold">
        {loading ? (
          <p>Subiendo imagen ⏳...</p>
        ) : (
          <>
            <button
              className="hover:text-primary-color"
              disabled={loading}
              onClick={onUpload}
            >
              Subir 📤
            </button>
            <button
              className="hover:text-primary-color"
              disabled={loading}
              onClick={() => onImageUpdate(0)}
            >
              Actualizar ✏️
            </button>
            <button
              className="hover:text-primary-color"
              disabled={loading}
              onClick={() => onImageRemove(0)}
            >
              Cancelar ❌
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default ImageSelected
