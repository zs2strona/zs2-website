export async function fetchGraphQL(query, variables) {
  const response = await fetch(
    'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clhz48gql2gtd01uh6pdxdcrs/master',
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
  const { schools } = await fetchGraphQL(`
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
  const { transmissions } = await fetchGraphQL(`
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
  const { transmissions } = await fetchGraphQL(
    `
      query getPostBySlug($slug: String!) {
      transmissions(where: { slug: $slug }) {
        title
        slug
        date
        mainImage { url }
        content { html }
        images { id url }
        files {
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
  const { announcements } = await fetchGraphQL(`
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
  const { announcements } = await fetchGraphQL(
    `
      query getPostBySlug($slug: String!) {
        announcements(where: { slug: $slug }) {
        title
        slug
        date
        mainImage { url }
        content { html }
        images { id url }
        files {
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
  const { documents } = await fetchGraphQL(`
  query getDocumentsPosts {
    documents(first: 1000) {
      id
      title
      description
      file { url }
    }
  }
  `)

  return documents
}
export async function getDiscountsPosts() {
  const { discounts } = await fetchGraphQL(`
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
  const { cadres } = await fetchGraphQL(`
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
  const { directions } = await fetchGraphQL(`
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
  const { directions } = await fetchGraphQL(
    `
      query getDirectionsPostBySlug($slug: String!) {
        directions(where: { slug: $slug }) {
        title
        slug
        mainImage { url }
        content { html }
        files {
          id
          url
          fileName
        }
        images { id url }
      }
    }
  `,
    { slug: params.slug }
  )
  return directions
}
export async function getOtherPostBySlug(params) {
  const { otherPosts } = await fetchGraphQL(
    `
      query getOtherPostBySlug($slug: String!) {
        otherPosts(where: { slug: $slug }) {
          id
          title
          slug
          mainImage { url }
          content { html }
          files {
            id
            url
            fileName
          }
          images { id url }
      }
    }
  `,
    { slug: params.slug }
  )
  return otherPosts
}
