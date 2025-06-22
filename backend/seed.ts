import { CONFIG } from './config'
import axios from 'axios'
import { createClient } from '@supabase/supabase-js'
import { faker } from '@faker-js/faker'

const supabase = createClient(CONFIG.supabaseUrl!, CONFIG.supabaseKey!)

if (!CONFIG.supabaseUrl! && !CONFIG.supabaseKey) throw new Error('Not loaded')

const createUsers = async (amount: number) => {
  try {
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()

    for (let i = 0; i < amount; i++) {
      console.log('Uploading user number: ', i)

      const userInfo = {
        email: faker.internet.email({ firstName }),
        password: faker.internet.password({ length: 6 }),
        options: {
          data: {
            first_name: firstName,
            phone: faker.phone.number(),
            last_name: lastName,
            age: faker.number.int({ min: 18, max: 90 })
          }
        }
      }

      const { data, error } = await supabase.auth.signUp(userInfo)
      if (error) throw error

      await uploadUserImgToBucket(
        faker.image.personPortrait({ sex: undefined, size: 256 }),
        data!.user!.id
      )
    }
  } catch (error) {
    console.error(`createUsers Fn: `, error)
  }
}

const uploadUserImgToBucket = async (imageUrl: string, userId: string) => {
  try {
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' })
    const buffer = response.data

    const { data, error } = await supabase.storage
      .from('profile-images')
      .upload(`public/${userId}.png`, buffer, {
        contentType: 'image/png',
        cacheControl: '3600',
        upsert: false
      })

    if (error) throw error
    console.log(`Image uploaded for user: ${userId}`, data)
  } catch (error) {
    console.error(`uploadUserImgToBucket error:`, error)
  }
}

createUsers(50)
