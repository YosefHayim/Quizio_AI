import { CONFIG } from '../config'
import FormData from 'form-data'
import axios from 'axios'
import fs from 'fs'

export const uploadFileToOpenAI = async (file: Express.Multer.File) => {
  try {
    const formData = new FormData()

    formData.append('file', fs.createReadStream(file.path), file.originalname)

    formData.append('purpose', 'assistants')

    const response = await axios.post('https://api.openai.com/v1/files', formData, {
      headers: {
        Authorization: `Bearer ${CONFIG.openAiKey}`,
        ...formData.getHeaders()
      }
    })
    return response.data.id
  } catch (error) {
    console.error('Error occurred during uploadFileToOpenAI:', error)
    throw error
  }
}

export const getFileContentByAI = async (fileId: string) => {
  try {
    const r = await axios.get(`https://api.openai.com/v1/files/${fileId}/content`, {
      headers: { Authorization: `Bearer ${CONFIG.openAiKey}` }
    })
    console.log(r.data)
    return r.data
  } catch (error) {
    console.error(`Error occured durning getFileContentByAI: ${error}`)
  }
}
