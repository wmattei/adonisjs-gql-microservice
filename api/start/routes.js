'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.get("/", "HomeController.index")
}).prefix("/api/v1").middleware('auth:jwt');

Route.group('auth', () => {
  Route.post("/login", "AuthController.login")
}).prefix('/api/v1/auth');
