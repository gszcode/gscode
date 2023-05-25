import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

const SERVICE_ID = 'service_3yzdvze'
const TEMPLATE_ID = 'template_dyms2kh'
const USER_ID = 'iSWlwFYA8VQFUNq94'

export const sendEmail = (contact) => {
  emailjs.send(SERVICE_ID, TEMPLATE_ID, contact, USER_ID).then(
    (response) => {
      if (response.status) {
        Swal.fire({
          title: 'Enviado!',
          text: 'Email enviado correctamente',
          icon: 'success',
          confirmButtonText: 'Cerrar'
        })
      }
    },
    (err) => {
      Swal.fire({
        title: 'Error!',
        text: `Ocurrio un error: ${err}`,
        icon: 'error',
        confirmButtonText: 'Cerrar'
      })
    }
  )
}
