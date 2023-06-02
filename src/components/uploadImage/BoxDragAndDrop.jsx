const BoxDragAndDrop = ({ onImageUpload, dragProps, urlImage }) => {
  return (
    <div
      onClick={onImageUpload}
      {...dragProps}
      className="h-full bg-shadow border-4 border-dashed border-primary-color p-4 flex items-center text-center"
    >
      <span className="text-white font-semibold text-sm m-auto">
        {urlImage
          ? 'Imagen añadida correctamente'
          : 'Elija una imagen o arrastre y suelte una imagen 📤'}
      </span>
    </div>
  )
}

export default BoxDragAndDrop
