export default async (urls) => {
  try {
    return await Promise.all(urls.map(fetch))
  } catch (e) {
    console.error(...e)
  }
}
