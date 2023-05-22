import blog from '../api/blog.json'
import Error from './404'
import BolgPage from './blog'
import PostPage from './post'

export default function Blog({ params: { slug } }) {
  const Post = blog.Posty.find((find) => find.slug == slug)
  const Ogloszenia = 'ogloszenia' == slug
  const Dokumenty = 'dokumenty' == slug
  const Kadra = 'kadra' == slug
  const OgloszeniaPost = blog.ogloszenia.find((find) => find.slug == slug)

  if (Post) {
    return <PostPage slug={slug} />
  } else if (OgloszeniaPost) {
    return <h1>503</h1>
  } else if (Ogloszenia || Dokumenty || Kadra) {
    return <BolgPage slug={slug} />
  } else {
    return <Error />
  }
}
