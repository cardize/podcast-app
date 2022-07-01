export const CURRENT_PODCAST = 'CURRENT_PODCAST'

export const currentPodcast = (podcast) => {
  return {
    type: CURRENT_PODCAST,
    payload: podcast,
  }
}
