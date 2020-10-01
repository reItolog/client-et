import Vue from 'vue';
import VueRouter from 'vue-router';
import Todo from '../views/Todo.vue';
import Signup from '../views/Signup.vue';
import Signin from '../views/Signin.vue';
import EmailVerify from '../views/EmailVerify.vue';

const Users = () => import('../views/Users.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Todo',
    component: Todo,
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
  },
  {
    path: '/auth/signup',
    name: 'AutSignup',
    component: Signup,
  },
  {
    path: '/auth/signin',
    name: 'AutSignin',
    component: Signin,
  },
  {
    path: '/__/auth/action/email-verify',
    name: 'EmailVerify',
    component: EmailVerify,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
