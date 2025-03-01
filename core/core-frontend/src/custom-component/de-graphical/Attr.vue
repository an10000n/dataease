<script setup lang="ts">
import CommonAttr from '@/custom-component/common/CommonAttr.vue'
import { dvMainStoreWithOut } from '@/store/modules/data-visualization/dvMain'
import { snapshotStoreWithOut } from '@/store/modules/data-visualization/snapshot'

import { storeToRefs } from 'pinia'
import { ElIcon, ElMessage } from 'element-plus-secondary'
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { beforeUploadCheck, uploadFileResult } from '@/api/staticResource'
import { imgUrlTrans } from '@/utils/imgUtils'
import eventBus from '@/utils/eventBus'
import ImgViewDialog from '@/custom-component/ImgViewDialog.vue'

withDefaults(
  defineProps<{
    themes?: EditorTheme
  }>(),
  {
    themes: 'dark'
  }
)

const dvMainStore = dvMainStoreWithOut()
const snapshotStore = snapshotStoreWithOut()

const { curComponent } = storeToRefs(dvMainStore)

const fileList = ref([])
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const uploadDisabled = ref(false)
const files = ref(null)
const maxImageSize = 15000000

const handlePictureCardPreview = file => {
  dialogImageUrl.value = file.url
  dialogVisible.value = true
}

const handleRemove = (_, fileList) => {
  uploadDisabled.value = false
  curComponent.value.propValue.url = null
  fileList.value = []
  snapshotStore.recordSnapshotCache()
}
async function upload(file) {
  uploadFileResult(file.file, fileUrl => {
    snapshotStore.recordSnapshotCache()
    curComponent.value.propValue.url = fileUrl
  })
}

const goFile = () => {
  files.value.click()
}

const reUpload = e => {
  const file = e.target.files[0]
  if (file.size > maxImageSize) {
    sizeMessage()
  }
  uploadFileResult(file, fileUrl => {
    snapshotStore.recordSnapshotCache()
    curComponent.value.propValue.url = fileUrl
    fileList.value = [{ url: imgUrlTrans(curComponent.value.propValue.url) }]
  })
}

const sizeMessage = () => {
  ElMessage.success('图片大小不符合')
}
const init = () => {
  if (curComponent.value.propValue.url) {
    fileList.value = [{ url: imgUrlTrans(curComponent.value.propValue.url) }]
  } else {
    fileList.value = []
  }
}

watch(
  () => curComponent.value.propValue.url,
  () => {
    init()
  }
)

onMounted(() => {
  init()
  eventBus.on('uploadImg', goFile)
})
onBeforeUnmount(() => {
  eventBus.off('uploadImg', goFile)
})
</script>

<template>
  <div class="attr-list de-collapse-style">
    <CommonAttr
      :themes="themes"
      :element="curComponent"
      :background-color-picker-width="197"
      :background-border-select-width="197"
    >
    </CommonAttr>
  </div>
</template>

<style lang="less" scoped>
.de-collapse-style {
  :deep(.ed-collapse-item__header) {
    height: 36px !important;
    line-height: 36px !important;
    font-size: 12px !important;
    padding: 0 !important;
    font-weight: 500 !important;

    .ed-collapse-item__arrow {
      margin: 0 6px 0 8px;
    }
  }

  :deep(.ed-collapse-item__content) {
    padding: 16px 8px 0;
  }
  :deep(.ed-form-item) {
    display: block;
    margin-bottom: 8px;
  }
  :deep(.ed-form-item__label) {
    justify-content: flex-start;
  }
}

.disabled :deep(.el-upload--picture-card) {
  display: none;
}

.avatar-uploader :deep(.ed-upload) {
  width: 80px;
  height: 80px;
  line-height: 90px;
}

.avatar-uploader :deep(.ed-upload-list li) {
  width: 80px !important;
  height: 80px !important;
}

:deep(.ed-upload--picture-card) {
  background: #eff0f1;
  border: 1px dashed #dee0e3;
  border-radius: 4px;

  .ed-icon {
    color: #1f2329;
  }

  &:hover {
    .ed-icon {
      color: #3370ff;
    }
  }
}
.img-area {
  height: 80px;
  width: 80px;
  margin-top: 10px;
  overflow: hidden;

  &.img-area_dark {
    :deep(.ed-upload-list__item).is-success {
      border-color: #434343;
    }
    :deep(.ed-upload--picture-card) {
      background: #373737;
      border-color: #434343;
      .ed-icon {
        color: #ebebeb;
      }
      &:hover {
        .ed-icon {
          color: #3370ff;
        }
      }
    }
  }

  &.img-area_light {
    :deep(.ed-upload-list__item).is-success {
      border-color: #dee0e3;
    }
  }
}

.image-hint {
  color: #8f959e;
  size: 14px;
  line-height: 22px;
  font-weight: 400;
  margin-top: 2px;
  &.image-hint_dark {
    color: #757575;
  }
}

.re-update-span {
  cursor: pointer;
  color: #3370ff;
  size: 14px;
  line-height: 22px;
  font-weight: 400;
}
</style>
