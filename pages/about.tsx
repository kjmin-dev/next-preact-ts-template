import Layout from 'antd/lib/layout'
import Typography from 'antd/lib/typography'
import Main from '@/layouts/Main'

export default function About() {
  return (
    <Main key="About" title="About">
      <h1>About</h1>

      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        rhoncus augue augue, vel semper libero eleifend a. Duis sodales eros
        dapibus pretium euismod. Quisque venenatis sit amet tellus sit amet
        rutrum. Aliquam euismod sapien id consectetur vehicula. Sed risus eros,
        ornare eget imperdiet ac, consectetur et mauris. Donec pharetra et dolor
        auctor cursus. Quisque at dapibus risus. Orci varius natoque penatibus
        et magnis dis parturient montes, nascetur ridiculus mus. Phasellus id
        elit leo. Proin euismod purus lacus, quis cursus mi mollis sit amet.
        Nulla vitae molestie justo, a gravida enim.
      </Typography>

      <Typography>
        Mauris nec vestibulum massa. Nam vehicula justo nec aliquam ultricies.
        Vivamus dapibus, leo in scelerisque aliquam, mi velit sagittis magna, et
        accumsan ex felis ac lectus. Morbi rhoncus eros turpis, sit amet viverra
        dolor eleifend ornare. Etiam at fermentum tellus, id interdum purus.
        Phasellus vel scelerisque eros, ut cursus eros. Aliquam consectetur
        lobortis bibendum. Aenean bibendum risus eu ipsum vestibulum sodales.
      </Typography>
    </Main>
  )
}
