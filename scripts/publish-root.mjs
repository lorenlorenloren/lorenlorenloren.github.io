import { copyFileSync, existsSync, mkdirSync, readdirSync, rmSync, statSync } from 'node:fs'
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

for (const file of readdirSync(dist)) {
  const source = join(dist, file)
  if (
    file === 'index.html' ||
    file === 'assets' ||
    file === 'Lorenzo_Martinez_Malvar_CV.pdf.pdf' ||
    !statSync(source).isFile()
  ) {
    continue
  }

  copyFileSync(source, join(root, file))
}

const distAssets = join(dist, 'assets')
for (const file of readdirSync(distAssets)) {
  copyFileSync(join(distAssets, file), join(publicAssets, file))
}
