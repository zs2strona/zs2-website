export default function Head({ title, description }) {
  return (
    <>
      <title>{`${title} | Zespół Szkoł Nr 2 im. Jana Kochanowskiego w Łańcucie`}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content={
          description ||
          'Z nami rozwiniesz swoje zainteresowania, posiądziesz wiedzę i umiejętności. Wszystko pod okiem najlepszych nauczycieli i wspaniałych kolegów, którzy zawsze Ci doradzą oraz pomogą z każdym problemem.'
        }
      />
    </>
  )
}
