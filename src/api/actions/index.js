import podcastClient from '../client'

export const searchPodcast = async (
  text,
  category,
  limit,
  use_default_content,
) => {
  const params = new URLSearchParams()
  if (text) params.append('text', text)
  if (category) params.append('category', category)
  if (limit) params.append('limit', limit)
  if (use_default_content)
    params.append('use_default_content', use_default_content)
  const { data } = await podcastClient({
    url: `https://nox-podcast-api.vercel.app/search`,
    method: 'GET',
    params: params,
  })
  return data
}
