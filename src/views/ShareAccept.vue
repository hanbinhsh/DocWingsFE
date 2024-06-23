<template>
  <div class="canvas-menu">
    <div v-show="false">
      <div v-viewer="viewerOptions" class="images clearfix">
        <img v-for="(src, index) in images" class="images" :key="index" :src="src">
      </div>
    </div>
    <div class="modal inmodal fade in" id="audioModal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content" style="width: 1400px">
          <div class="modal-header">
            {{ this.audio_videoTitle }}
            <button @click="closePlayer" type="button" class="close" data-dismiss="modal"><span
                aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
          </div>
          <div class="modal-body">
            <div class="text-center">
              <VideoPlayer v-if="showPlayer" :options="audioOptions" :key="new Date().getTime()"
                class="video-js-a vjs-big-play-centered" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal inmodal fade in" id="videoModal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            {{ this.audio_videoTitle }}
            <button @click="closePlayer" type="button" class="close" data-dismiss="modal"><span
                aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
          </div>
          <div class="modal-body">
            <div class="text-center">
              <VideoPlayer v-if="showPlayer" :options="videoOptions" :key="new Date().getTime()"
                class="video-js-v vjs-big-play-centered" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="wrapper">
      <div id="page-wrapper" class="gray-bg">
        <div class="row wrapper border-bottom white-bg page-heading">
          <div class="col-sm-4">
            <h2>查看分享</h2>
          </div>
          <ul class="nav navbar-top-links navbar-right">
            <li>
              <span class="m-r-sm text-muted welcome-message">欢迎来到文档之翼</span>
            </li>
            <li v-if="userData.userName">
              <span class="m-r-sm text-muted welcome-message">用户：{{ userData.userName }}</span>
            </li>
            <li v-else>
              <span class="m-r-sm text-muted welcome-message">用户未登录</span>
            </li>
            <li v-if="userData.userName">
              <a href="/userhome">
                <i class="fa fa-sign-out"></i>返回个人中心
              </a>
            </li>
            <li v-else>
              <a href="/login">
                <i class="fa fa-sign-out"></i>登录
              </a>
            </li>
          </ul>
        </div>
        <div class="wrapper wrapper-content animated fadeInRight article">
          <div class="row">
            <div class="col-lg-10 col-lg-offset-1">
              <div class="ibox">
                <div class="ibox-content">
                  <div class="text-center article-title">
                    <span v-if="exist" class="text-muted"><i class="fa fa-clock-o"></i>
                      {{ share.dueTime ? new Date(share.dueTime).toLocaleString() : '无限' }}
                      <span v-if="share.lastRatio > 0" class="pie">{{ share.lastRatio }}/1</span>
                    </span>
                    <h1 v-if="exist">
                      {{ share.sharerName }}的分享
                    </h1>
                    <h1 v-else>
                      分享不存在
                    </h1>
                  </div>
                  <div class="row" style="min-height: 490px;">
                    <div class="col-md-10" v-if="exist">
                      <div class="mail-box ibox table-responsive">
                        <table class="table table-hover table-mail ibox-content">
                          <thead>
                            <tr>
                              <th>名称</th>
                              <th>文件大小</th>
                              <th>下载</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(folder, index) in folders" :key="index" class="read"
                              @dblclick="enterPath(folder.folderId, folder.parentId)">
                              <td><i class="fa fa-folder-o"></i> {{ folder.folderName }}
                              </td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr v-for="(file, index) in files" :key="index" class="read" @dblclick="filePreview(file)">
                              <td>
                                <i v-if="file.fileType.startsWith('image/')" class="fa fa-file-image-o"></i>
                                <i v-else-if="file.fileType.includes('pdf')" class="fa fa-file-pdf-o"></i>
                                <i v-else-if="file.fileType.includes('word')" class="fa fa-file-word-o"></i>
                                <i v-else-if="file.fileType.includes('excel')" class="fa fa-file-excel-o"></i>
                                <i v-else-if="file.fileType.includes('sheet')" class="fa fa-file-excel-o"></i>
                                <i v-else-if="file.fileType.includes('powerpoint')" class="fa fa-file-powerpoint-o"></i>
                                <i v-else-if="file.fileType.includes('presentation')"
                                  class="fa fa-file-powerpoint-o"></i>
                                <i v-else-if="file.fileType.startsWith('video/')" class="fa fa-file-movie-o"></i>
                                <i v-else-if="file.fileType.startsWith('audio/')" class="fa fa-file-audio-o"></i>
                                <i v-else-if="file.fileType.includes('compressed')" class="fa fa-file-archive-o"></i>
                                <i v-else class="fa fa-file-o"></i> {{ file.fileName }}
                              </td>
                              <td>{{ file.fileSize }}MB</td>
                              <td>
                                <div class="btn-group">
                                  <a @click="downloadFile(file)"><i class="fa fa-download"></i>&nbsp;</a>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="col-md-2" v-if="exist">
                      <div>
                        <div class="btn-group pull-right">
                          <button :class="{ 'disabled': !isFolder }" class="btn btn-white btn-sm" @click="backPath()"><i
                              class="fa fa-arrow-left"></i></button>
                          <button :class="{ 'disabled': !isFolder }" class="btn btn-white btn-sm"
                            @click="enterPath(this.topFolderId)"><i class="fa fa-home"></i></button>
                        </div>
                        <button class="btn btn-white btn-sm" @click="updateShare()"><i
                            class="fa fa-refresh"></i></button>
                      </div>
                      <div class="hr-line-dashed"></div>
                      <div>
                        <ul class="category-list folder-list m-b-md" style="padding: 0">
                          <li>
                            <a> <i class="fa fa-circle text-navy"></i> 接收者
                              <span class="label label-primary pull-right">{{ this.share.accepterName }}</span></a>
                          </li>
                          <li>
                            <a> <i class="fa fa-circle text-danger"></i> 权限
                              <span class="label label-primary pull-right">{{ this.share.auth }}</span></a>
                          </li>
                          <li>
                            <a> <i class="fa fa-circle text-primary"></i> 有效时间
                              <span class="label label-primary pull-right">{{ formattedLastTime }}</span></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <hr>
                  <div>
                    <div class="pull-right">{{ new Date().toLocaleString() }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <div>
            <strong>Copyright</strong> DocWings &copy; 2024
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import { useRoute } from 'vue-router';
import axios from "axios";
import toastr from "../assets/js/plugins/toastr/toastr.min.js";
import "../assets/js/plugins/peity/jquery.peity.min.js";
toastr.options = {
  "closeButton": true,
  "debug": false,
  "progressBar": true,
  "preventDuplicates": true,
  "positionClass": "toast-bottom-center",
  "onclick": null,
  "showDuration": "400",
  "hideDuration": "1000",
  "timeOut": "7000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
};

export default {
  name: 'ShareAccept',
  data() {
    return {
      folders: [],
      files: [],
      images: [],
      topFolderId: null,
      userData: JSON.parse(sessionStorage.getItem('userData')) || {},
      currentFolder: null,
      isFolder: false,
      shareId: null,
      exist: null,
      share: null,
      outOfDate: null,
    };
  },
  computed: {
    formattedLastTime() {
      const lastTimeDate = new Date(this.share.dueTime);
      const currentTime = new Date();
      let diffMillis = lastTimeDate.getTime() - currentTime.getTime();
      if (diffMillis < 0) {
        return '无限';
      }
      const days = Math.floor(diffMillis / (24 * 60 * 60 * 1000));
      diffMillis %= 24 * 60 * 60 * 1000;
      const hours = Math.floor(diffMillis / (60 * 60 * 1000));
      diffMillis %= 60 * 60 * 1000;
      const minutes = Math.floor(diffMillis / (60 * 1000));
      if (days === 0) {
        return `${hours}时 ${minutes}分`;
      } else if (days === 0 && hours === 0) {
        return `${minutes}分`;
      }
      return `${days}天 ${hours}时 ${minutes}分`;
    },
  },
  setup() {
    const route = useRoute();
    const shareId = route.params.shareid;
    return {
      shareId,
    };
  },
  methods: {
    async filePreview(file) {
      if (this.isTrash) return;
      if (file.fileType.startsWith('image/')) {
        let imageUrl = "api/downloadFile?fileID=" + file.fileId
        this.images = [imageUrl]
        const imageDivs = this.$el.querySelector('.images')
        const viewer = imageDivs.$viewer
        // viewer.index = key
        viewer.show()
      }
      else if (file.fileType.startsWith('audio/')) {
        this.audio_videoTitle = file.fileName;
        this.audioOptions.sources.src = 'api/downloadFile?fileID=' + file.fileId;
        this.audioOptions.sources.type = file.fileType;
        this.showPlayer = true;
        $('#audioModal').modal('show');
      }
      else if (file.fileType.startsWith('video/')) {
        this.audio_videoTitle = file.fileName;
        this.videoOptions.sources.src = 'api/downloadFile?fileID=' + file.fileId;
        this.videoOptions.sources.type = file.fileType;
        this.showPlayer = true;
        $('#videoModal').modal('show');
      }
      else if (file.fileType.includes('wordprocessingml') || file.fileType.includes('pdf') || file.fileType.includes('spreadsheetml')) {
        window.open('/preview?fileID=' + file.fileId + '&&fileType=' + file.fileType, '_blank');
      }
    },
    initializePeity() {
      this.$nextTick(() => {
        $('span.pie').peity('pie', {
          fill: ['#1ab394', '#d7d7d7', '#ffffff'],
        });
        $('.line').peity('line', {
          fill: '#1ab394',
          stroke: '#169c81',
        });
        $('.bar').peity('bar', {
          fill: ['#1ab394', '#d7d7d7'],
        });
        $('.bar_dashboard').peity('bar', {
          fill: ['#1ab394', '#d7d7d7'],
          width: 100,
        });
        const updatingChart = $('.updating-chart').peity('line', {
          fill: '#1ab394',
          stroke: '#169c81',
          width: 64,
        });
        setInterval(() => {
          const random = Math.round(Math.random() * 10);
          const values = updatingChart.text().split(',');
          values.shift();
          values.push(random);
          updatingChart.text(values.join(',')).change();
        }, 1000);
      });
    },
    async enterPath(id) {
      if (!this.isFolder) return;
      await this.findFFsByParentId(id);
    },
    async findFFsByParentId(id) {
      const response = await axios.get('/api/findFFsByParentId?parentId=' + id);
      this.folders = response.data.data.folders;
      this.files = response.data.data.files;
      const responseFiles = await axios.get('/api/findFolderById?id=' + id);
      this.currentFolder = responseFiles.data.data.folder;
      this.initializePeity();
    },
    async backPath() {
      if (!this.isFolder) return;
      if (this.currentFolder.folderId === this.topFolderId) {
        toastr.error('已经是分享根文件夹了', '错误');
        return;
      }
      await this.enterPath(this.currentFolder.parentId);
    },
    downloadFile(file) {
      axios.post('/api/downloadFile?fileID=' + file.fileId, {}, { responseType: 'blob' }).then((res) => {
        const blob = new Blob([res.data]);
        const fileName = file.fileName;
        if (blob.size > 0) {
          const elink = document.createElement('a');
          elink.style.display = 'none';
          elink.href = URL.createObjectURL(blob);
          elink.download = `${fileName}`;
          document.body.appendChild(elink);
          elink.click();
          URL.revokeObjectURL(elink.href);
          document.body.removeChild(elink);
        }
      });
    },
    async queryShare() {
      const response = await axios.get('/api/getSharesByShareId?shareId=' + this.shareId);
      if (response.data.data.isExist == 1) {
        if (response.data.data.share.validate == 0) {
          toastr.error('该分享已经被取消了', '错误');
          return;
        }
        if (response.data.data.share.accepterId != 0) {
          if (this.userData.userId == null) {
            toastr.error('用户未登录，请登录后再试', '错误');
            return;
          } else if (
            this.userData.userId != response.data.data.share.accepterId &&
            this.userData.userId != response.data.data.share.sharerId
          ) {
            toastr.error('您没有权限查看该分享', '错误');
            return;
          }
        }
        this.exist = true;
        this.share = response.data.data.share;
        this.updateShare();
      } else {
        this.exist = false;
      }
    },
    async updateShare() {
      if (this.share.isFolder == 0) {
        const response = await axios.get('/api/findFileById?id=' + this.share.fileId);
        if (response.data.data.file.isDeleted == 1) {
          toastr.error('分享的文件已经被删除了', '错误');
          return;
        } else {
          this.files = [response.data.data.file];
        }
      } else {
        const response = await axios.get('/api/findFolderById?id=' + this.share.folderId);
        if (response.data.data.folder.isDeleted == 1) {
          toastr.error('分享的文件已经被删除了', '错误');
          return;
        } else {
          this.isFolder = true;
          this.topFolderId = response.data.data.folder.folderId;
          this.currentFolder = response.data.data.folder;
          await this.findFFsByParentId(response.data.data.folder.folderId);
        }
      }
      this.initializePeity();
    },
  },
  async created() {
    this.shareId = this.$route.params.shareid;
    this.userData = JSON.parse(sessionStorage.getItem('userData')) || {};
    await this.queryShare();
    this.initializePeity();
  },
  watch: {
    shares() {
      this.$nextTick(() => {
        this.initializePeity();
      });
    },
  },
};
</script>
