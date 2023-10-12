export async function fetchGraphQLOgolne(query, variables) {
  const response = await fetch(
    'https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clnjy77g74kpg01ue0l6kbpnf/master',
    {
      cache: 'no-store',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    }
  )
  const { data } = await response.json()

  return data
}

export async function fetchGraphQLFilm(query, variables) {
  const response = await fetch(
    'https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clhz48gql2gtd01uh6pdxdcrs/master',
    {
      cache: 'no-store',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    }
  )
  const { data } = await response.json()

  return data
}

export async function fetchGraphQLAktualnosci(query, variables) {
  const response = await fetch(
    'https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clmsvs4rz00kh01tafyoi2wxl/master',
    {
      cache: 'no-store',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    }
  )
  const { data } = await response.json()

  return data
}
export async function fetchGraphQLOgloszenia(query, variables) {
  const response = await fetch(
    'https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clmsvtfet00gt01uo1l9s3fen/master',
    {
      cache: 'no-store',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    }
  )
  const { data } = await response.json()

  return data
}
export async function fetchGraphQLDokumenty(query, variables) {
  const response = await fetch(
    'https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clmsvuz7s00nv01uo8v7jb4a9/master',
    {
      cache: 'no-store',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    }
  )
  const { data } = await response.json()

  return data
}

export async function getSchoolPosts() {
  const { schools } = await fetchGraphQLOgolne(`
  query getSchoolPosts {
    schools(first: 3) {
      id
      title
      link
      image { url }
    }
  }
  `)

  return schools
}
export async function getTransmissionPosts() {
  const { transmissions } = await fetchGraphQLAktualnosci(`
  query getTransmissionPosts {
    transmissions(first: 1000, orderBy: date_DESC) {
      id
      title
      slug
      date
      mainImage { url }
      content { html }
    }
  }
  `)

  return transmissions
}
export async function getTransmissionsPostBySlug(params) {
  const { transmissions } = await fetchGraphQLAktualnosci(
    `
      query getPostBySlug($slug: String!) {
      transmissions(where: { slug: $slug }) {
        title
        slug
        date
        mainImage { url }
        content { html }
        images(first: 100) { id url }
        files(first: 100) {
          id
          url
          fileName
        }
      }
    }
  `,
    { slug: params.slug }
  )
  return transmissions
}
export async function getAnnouncements() {
  const { announcements } = await fetchGraphQLOgloszenia(`
  query getAnnouncements {
    announcements(first: 1000, orderBy: date_DESC) {
      id
      title
      slug
      date
      mainImage { url }
      content { html }
    }
  }
  `)

  return announcements
}
export async function getAnnouncementsPostBySlug(params) {
  const { announcements } = await fetchGraphQLOgloszenia(
    `
      query getPostBySlug($slug: String!) {
        announcements(where: { slug: $slug }) {
        title
        slug
        date
        mainImage { url }
        content { html }
        images(first: 100) { id url }
        files(first: 100) {
          id
          url
          fileName
        }
      }
    }
  `,
    { slug: params.slug }
  )
  return announcements
}
export async function getDocumentsPosts() {
  const { documents } = await fetchGraphQLDokumenty(`
  query getDocumentsPosts {
    documents(first: 1000) {
      id
      title
      file { url fileName }
    }
  }
  `)

  return documents
}
export async function getDiscountsPosts() {
  const { discounts } = await fetchGraphQLOgolne(`
  query getDiscountsPosts {
    discounts(first: 1000) {
      id
      title
      description { html }
      mainImage { url }
    }
  }
  `)

  return discounts
}
export async function getCadrePosts() {
  const { cadres } = await fetchGraphQLOgolne(`
  query getCadrePosts {
    cadres(first: 1000) {
      id
      title
      description
      image { url }
      section
    }
  }
  `)

  return cadres
}
export async function getDirectionsPosts() {
  const { directions } = await fetchGraphQLOgolne(`
  query getDirectionsPosts {
    directions(first: 1000) {
      id
      school
      title
      slug
      mainImage { url }
    }
  }
  `)

  return directions
}
export async function getDirectionsPostBySlug(params) {
  const { directions } = await fetchGraphQLOgolne(
    `
      query getDirectionsPostBySlug($slug: String!) {
        directions(where: { slug: $slug }) {
        title
        slug
        mainImage { url }
        content { html }
        files(first: 100) {
          id
          url
          fileName
        }
        images(first: 100) { id url }
      }
    }
  `,
    { slug: params.slug }
  )
  return directions
}
export async function getOtherPostBySlug(params) {
  const { otherPosts } = await fetchGraphQLOgolne(
    `
      query getOtherPostBySlug($slug: String!) {
        otherPosts(where: { slug: $slug }) {
          id
          title
          slug
          mainImage { url }
          content { html }
          files(first: 100) {
            id
            url
            fileName
          }
          images(first: 100) { id url }
      }
    }
  `,
    { slug: params.slug }
  )
  return otherPosts
}
export async function getMovies() {
  const { movies } = await fetchGraphQLFilm(`
  query getMovies {
    movies(first: 1) {
      movie { url }
    }
  }
  `)

  return movies
}
