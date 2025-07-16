import { faker } from '@faker-js/faker';
import { createClient } from '@supabase/supabase-js';
import axios from 'axios';
import fs from 'fs';
import { CONFIG } from './config';

const QUIZZEZ_DATA = JSON.parse(fs.readFileSync('./quizzez.json', 'utf8'));
const supabase = createClient(CONFIG.supabaseUrl!, CONFIG.supabaseKey!);

const adminSupbase = createClient(
  CONFIG.supabaseUrl!,
  CONFIG.supabaseServiceRole!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);

if (!(CONFIG.supabaseUrl! || CONFIG.supabaseKey))
  throw new Error('Public Client Not loaded');
if (!CONFIG.supabaseServiceRole) throw new Error('Service role Not loaded');

const createUsers = async (amount: number) => {
  try {
    for (let i = 0; i < amount; i++) {
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      console.log('Uploading user number: ', i);

      const userInfo = {
        email: faker.internet.email({ firstName }),
        password: faker.internet.password({ length: 6 }),
        options: {
          data: {
            first_name: firstName,
            phone: faker.phone.number(),
            last_name: lastName,
            age: faker.number.int({ min: 18, max: 90 }),
          },
        },
      };

      const { data, error } = await supabase.auth.signUp(userInfo);
      if (error) throw error;

      await uploadUserImgToBucket(
        faker.image.personPortrait({ sex: undefined, size: 256 }),
        data!.user!.id
      );
    }
  } catch (error) {
    console.error('createUsers Fn: ', error);
  }
};

const uploadUserImgToBucket = async (imageUrl: string, userId: string) => {
  try {
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = response.data;

    const { data, error } = await supabase.storage
      .from('profile-images')
      .upload(`public/${userId}.png`, buffer, {
        contentType: 'image/png',
        cacheControl: '3600',
        upsert: false,
      });

    if (error) throw error;
    console.log(`Image uploaded for user: ${userId}`, data);
  } catch (error) {
    console.error('uploadUserImgToBucket error:', error);
  }
};

const uploadQuizzez = async () => {
  try {
    for (let i = 36; i < QUIZZEZ_DATA.length; i++) {
      const quizzArr = QUIZZEZ_DATA[i];
      console.log(`Quizz injectin number ${i}: ${quizzArr}`);
      const { data, error } = await supabase
        .from('quizzes')
        .insert({ generated_quiz: quizzArr, is_file: false })
        .select();
      if (error) throw error;
      console.log(data);
    }
  } catch (error) {
    console.error(error);
  }
};

const deleteDataBySpecificTableName = async (tableName: string) => {
  try {
    const r = await supabase.from(tableName).delete().not('id', 'is', null);
    if (r) console.log(r);
  } catch (error) {
    console.error(error);
  }
};

const deleteAllUsers = async () => {
  const { data: users, error: listError } =
    await adminSupbase.auth.admin.listUsers();
  if (listError) throw listError;

  for (const user of users.users) {
    const { error } = await adminSupbase.auth.admin.deleteUser(user.id);
    if (error) {
      console.error(`Failed to delete user ${user.id}:`, error);
    } else {
      console.log(`Deleted user: ${user.id}`);
    }
  }
};

deleteAllUsers();

const main = async (
  amountOfUsers: number,
  tableName: string,
  uploadQuiz: boolean,
  generaeteNewUsers: boolean
) => {
  if (tableName.length > 1) return deleteDataBySpecificTableName(tableName);
  if (generaeteNewUsers) return await createUsers(amountOfUsers);
  if (uploadQuiz) return await uploadQuizzez();
};

// main(0, 'users', false, false)
