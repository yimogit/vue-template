<template>
  <div>
    <h3>图片剪切上传</h3>
    <input class="update-input"
           type="file"
           accept="image/*"
           v-if="!uploadModel.showPopup"
           @change="uploadAvatar($event)" />
    <div v-if="uploadModel.showPopup"
         style="width:300px;height:300px;">
      <img :src="uploadModel.preview"
           id="avatarImage"
           style="width:100%;height:100%;" />
      <div class="subscribe-btn">
        <button
                @click="saveAvatar">确定上传</button>
        <button
                @click="cancelAvatar"
                style="background: white;color: #00a0c9;margin-top: 8px;">取消</button>
      </div>
    </div>
    <div>
      <img :src="uploadModel.preview"
           v-if="!uploadModel.showPopup && uploadModel.preview"
           style="width:300px;height:300px;"
           id="show-prev" testattr="true"/>
    </div>
    <v-previewer opAttr="testattr" />
  </div>
</template>
<script>
import common from '@/utils/common';

import 'cropperjs/dist/cropper.css';
import Cropper from 'cropperjs';

let cropperImg;
export default {
  data() {
    return {
      uploadModel: {
        preview: '',
        showPopup: false
      }
    }
  },
  methods: {
    uploadAvatar(event) {
      let _this = this;
      if (event.target.files == null || event.target.files.length === 0) return;
      let files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        let reader = new FileReader();
        let file = files[i];
        reader.readAsDataURL(file);
        // eslint-disable-next-line
        reader.onload = function (e) {
          _this.uploadModel.showPopup = true;
          _this.uploadModel.preview = this.result;
          _this.$nextTick(() => {
            _this.initCropper();
          });
        };
      }
    },
    initCropper() {
      setTimeout(() => {
        let image = document.getElementById('avatarImage');
        cropperImg = new Cropper(image, {
          autoCrop: false,
          viewMode: 1,
          aspectRatio: 1,
          autoCropArea: 0.5,
          dragMode: 'move',
          cropBoxResizable: false,
          minCropBoxWidth: 100,
          ready() {
            this.cropper.crop();
          }
        });
      });
    },
    cancelAvatar() {
      this.uploadModel.showPopup = false;
      this.uploadModel.preview = '';
    },
    saveAvatar() {
      let _this = this;
      _this.uploadModel.showPopup = false;
      _this.uploadModel.preview = '';
      console.log('上传头像中');
      let formData = new FormData();
      let base64 = cropperImg.getCroppedCanvas().toDataURL('image/png');
      _this.uploadModel.preview = base64;
      console.log(base64)
      let file = common.dataURItoBlob(base64);
      formData.append('file', file, 'avatar.png');
      console.log(formData)
    }
  }
}
</script>
