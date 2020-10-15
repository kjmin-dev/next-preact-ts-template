interface Route {
  path: string
  key: string
  text: string
  icon: string
}

type Routes = ReadonlyArray<Route>

const routes: Routes = [
  {
    path: '/',
    key: 'APP_ROOT',
    text: 'Home',
    icon: 'HomeOutlined',
  },
  {
    path: '/about',
    key: 'ABOUT',
    text: 'About',
    icon: 'UserOutlined',
  },
  {
    path: '/contact',
    key: 'CONTACT',
    text: 'Contact',
    icon: 'PhoneOutlined',
  },
]

export default routes
