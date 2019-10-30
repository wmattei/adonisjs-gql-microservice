'use strict';

const { test, trait, beforeEach } = use('Test/Suite')('Auth');

const User = use('App/Models/User');

beforeEach(async () => {
  // await User.truncate();
});

trait('Test/ApiClient');


/**
 * Verifica se o login retornou o token
 */
test('Login', async ({ client, assert }) => {
  await User.create({
    username: 'Wagner Mattei',
    email: 'wagner.mattei@gmail.com',
    password: '123456'
  });

  const response = await client.post('/api/v1/auth/login').send({
    email: 'wagner.mattei@gmail.com',
    password: '123456'
  }).end().catch();
  // console.log(response.error);
  response.assertStatus(200);

  assert.exists('token', response.body);
});
