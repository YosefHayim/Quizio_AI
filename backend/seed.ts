import { CONFIG } from './config'
import { createClient } from '@supabase/supabase-js'
import { faker } from '@faker-js/faker'

const supabase = createClient(CONFIG.supabaseUrl!, CONFIG.supabaseKey!)

if (!CONFIG.supabaseUrl! || CONFIG.supabaseKey) console.log('Dotenv not working...')

const createUsers = async (amount: number) => {
  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()

  const userInfo = {
    email: faker.internet.email({ firstName }),
    password: faker.internet.password({ length: 6 }),
    options: {
      data: {
        first_name: firstName,
        phone: faker.phone.number(),
        last_name: lastName,
        age: faker.number.bigInt({ min: 18, max: 90 })
      }
    }
  }

  for (let i = 0; i < amount; i++) {
    const { data, error } = await supabase.auth.signUp(userInfo)
    if (error) throw error
    console.log(data?.user?.app_metadata)
  }
}

createUsers(50)
