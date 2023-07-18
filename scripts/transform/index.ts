import { transformChuci } from './chuci'
import { transformSanzijingBasic } from './meng-xue-basic'
import { transformSanzijingExtension } from './meng-xue-extension'
import { loadPersistentId, savePersistentId } from './persistentId'
import { transformSiShuWuJing } from './si-shu-wu-jing'

async function bootstrap() {
  await loadPersistentId()
  await transformChuci()
  await transformSiShuWuJing()
  await transformSanzijingBasic()
  await transformSanzijingExtension()

  await savePersistentId()
}

bootstrap().catch((e) => {
  console.error(e)
})
