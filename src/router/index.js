import App from '../App.vue';

export default [{
  path: '/',
  redirect: '/imgs/1',
},
{
  path: '/imgs/:pageNum',
  component: App.components.ImgPage,
},
{
  path: '/login',
  component: App.components.LoginPage,
},
];
