// const cloud_name = process.env.REACT_APP_CLOUD_NAME
// const preset = process.env.REACT_APP_PRESET

export const fileUpload = async (file) => {
  const cloudinaryUrl = `https://api.cloudinary.com/v1_1/gszcode/image/upload`

  const formData = new FormData()
  formData.append('upload_preset', 'gt1ghk4g')
  formData.append('file', file)

  try {
    const response = await fetch(cloudinaryUrl, {
      method: 'POST',
      body: formData
    })

    if (!response.ok) return null

    const data = await response.json()
    return data.secure_url
  } catch (error) {
    return null
  }
}
