'use strict';

const Response = use('App/Helpers/Response');

class AuthController {
  async login({ request, auth }) {
    const { email, password } = request.only([ 'email', 'password' ]);

    const token = await auth.attempt(email, password);

    return Response.token('Bem vindo!', token);
  }
}

module.exports = AuthController;
