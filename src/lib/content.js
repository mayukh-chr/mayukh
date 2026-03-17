const writingModules = import.meta.glob('../content/writing/*.md', { eager: true, query: '?raw', import: 'default' })
const archiveModules = import.meta.glob('../content/archive/*.md', { eager: true, query: '?raw', import: 'default' })

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (!match) return { data: {}, content: raw }

  const data = {}
  for (const line of match[1].split('\n')) {
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    let val = line.slice(idx + 1).trim()
    // Strip surrounding quotes
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1)
    }
    data[key] = val
  }
  return { data, content: match[2] }
}

function parseModules(modules) {
  return Object.entries(modules)
    .map(([filepath, raw]) => {
      const slug = filepath.split('/').pop().replace('.md', '')
      const { data, content } = parseFrontmatter(raw)
      return { ...data, slug, content }
    })
    .sort((a, b) => String(b.year ?? '').localeCompare(String(a.year ?? '')))
}

export const getWritingPosts = () => parseModules(writingModules)
export const getArchivePosts = () => parseModules(archiveModules)
