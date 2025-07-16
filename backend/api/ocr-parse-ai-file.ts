import axios from 'axios'

export const uploadFileToOpenAI = async (file: File) => {
  try {
    const r = await axios.post(
      `https://api.openai.com/v1/files`,
      {
        file,
        purpose: 'user_data'
      },
      { headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` } }
    )

    const fileId = r?.data?.id

    return fileId
  } catch (error) {
    console.error(`Error occured durning uploadFileToOpenAI: ${error}`)
  }
}

export const getFileContentByAI = async (fileId: string) => {
  try {
    const r = await axios.get(`https://api.openai.com/v1/files/${fileId}/content`, {
      headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` }
    })
    return r.data
  } catch (error) {
    console.error(`Error occured durning getFileContentByAI: ${error}`)
  }
}
