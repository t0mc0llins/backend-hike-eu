# Hike EU Backend

Hike EU is a site where users can browse hiking routes and post their own trails using interactive mapping and blogging features!

<img src="https://i.imgur.com/o3TDntL.png" width="8%"> 

The backend is a simple REST api written in Node.js.

- Sequelize is used with PostgreSQL to build and seed the database
- Routes include basic validation and are authenticated with a middleware where appropriate
- Users are issued with JSON Web Tokens when they login (checked by the middleware when needed)

---

[Here](https://github.com/t0mc0llins/frontend-hike-eu) is a link to the Hike EU client repository which has a demo of the app in action.

[This](https://hike-eu.netlify.app/) is a link to the deployed app. You can login with email: test@test.com and password: test1234 if you would like to try out the hiking route creation features.
