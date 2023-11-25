export function getCId(props: any) {
  const cIds: Record<string, any> = {}

  for (const [key, value] of Object.entries(props)) {
    if (key.startsWith('data-astro-cid-'))
      cIds[key] = value
  }

  return cIds
}
