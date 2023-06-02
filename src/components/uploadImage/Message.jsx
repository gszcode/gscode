import Swal from 'sweetalert2'

const Message = ({ urlImage }) => {
  return (
    <>
      {urlImage && (
        <span>
          {Swal.fire({
            text: 'Imagen subida correctamente',
            icon: 'success',
            confirmButtonText: 'Cerrar'
          })}
        </span>
      )}
    </>
  )
}

export default Message
