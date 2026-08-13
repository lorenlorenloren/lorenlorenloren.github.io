import { copyFileSync, existsSync, mkdirSync, readdirSync, rmSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const dist = join(root, 'dist')
const publicAssets = join(root, 'assets')

if (!existsSync(dist)) {
  throw new Error('dist folder not found. Run the Vite build first.')
}

if (existsSync(publicAssets)) {
  rmSync(publicAssets, { recursive: true, force: true })
}

mkdirSync(publicAssets, { recursive: true })
copyFileSync(join(dist, 'index.html'), join(root, 'index.html'))

const distAssets = join(dist, 'assets')
for (const file of readdirSync(distAssets)) {
  copyFileSync(join(distAssets, file), join(publicAssets, file))
}
