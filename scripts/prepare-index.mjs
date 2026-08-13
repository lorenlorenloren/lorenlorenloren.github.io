import { copyFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = dirname(dirname(fileURLToPath(import.meta.url)))

copyFileSync(join(root, 'src', 'index.template.html'), join(root, 'index.html'))
