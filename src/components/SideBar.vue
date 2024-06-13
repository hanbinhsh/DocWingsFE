<template>
    <nav class="navbar-default navbar-static-side" role="navigation">
      <div class="sidebar-collapse">
        <ul class="nav metismenu" id="side-menu">
          <li class="nav-header">
            <div class="dropdown profile-element">
              <span>
                <img alt="image" class="img-circle" :src="profileImage" />
              </span>
              <a data-toggle="dropdown" class="dropdown-toggle" href="profile">
                <span class="clear">
                  <span class="block m-t-xs">
                    <strong class="font-bold">
                      {{ profileName }}
                      <span class="text-muted text-xs block">{{ profileRole }}</span>
                    </strong>
                  </span>
                </span>
              </a>
            </div>
            <div class="logo-element">{{ logoText }}</div>
          </li>
  
          <li v-for="item in menuItems" :key="item.label" :class="{ active: isActive(item) }">
            <template v-if="item.submenu">
              <a href="javascript:void(0)" @click="toggleSubmenu(item)">
                <i :class="item.icon"></i> <span class="nav-label">{{ item.label }}</span>
                <span class="fa arrow"></span>
              </a>
              <ul class="nav nav-second-level collapse" :class="{ 'in': isActive(item) || isSubmenuOpen(item) }">
                <li v-for="subitem in item.submenu" :key="subitem.label" :class="{ active: route.path === subitem.link }">
                  <router-link :to="subitem.link">{{ subitem.label }}</router-link>
                </li>
              </ul>
            </template>
            <template v-else>
              <router-link :to="item.link">
                <i :class="item.icon"></i> <span class="nav-label">{{ item.label }}</span>
              </router-link>
            </template>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  import { useRoute } from 'vue-router';
  import { ref, watch } from 'vue';
  
  export default {
    name: 'Sidebar',
    props: {
      profileImage: {
        type: String,
        default: '../assets/img/profile_small.jpg'
      },
      profileName: {
        type: String,
        default: 'NAME'
      },
      profileRole: {
        type: String,
        default: 'Art Director'
      },
      logoText: {
        type: String,
        default: 'DW+'
      },
      menuItems: {
        type: Array,
        default: () => ([
          { label: '主页', link: '/userhome', icon: 'fa fa-laptop' },
          {
            label: '文件管理', icon: 'fa fa-folder-o', submenu: [
              { label: '所有文件', link: '/allfiles' },
              { label: '图片', link: '/table_basic' },
              { label: '文档', link: '/table_data_tables' },
              { label: '视频', link: '/table_foo_table' },
              { label: '音乐', link: '/jq_grid' },
              { label: '其他', link: '/jq_grid' }
            ]
          },
          { label: '分享', link: '/share', icon: 'fa fa-share-square-o' },
          { label: '回收站', link: '/recycle', icon: 'fa fa-trash-o' },
          { label: '用户组编辑', link: '/user-groups', icon: 'fa fa-group' },
          { label: '日志', link: '/log', icon: 'fa fa-file-text-o' },
          { label: '个人资料', link: '/profile', icon: 'fa fa-diamond' }
        ])
      }
    },
    setup(props) {
      const route = useRoute();
      const openSubmenus = ref([]);
  
      const isActive = (item) => {
        if (item.submenu) {
          return item.submenu.some(subitem => subitem.link === route.path);
        }
        return item.link === route.path;
      };
  
      const isSubmenuOpen = (item) => {
        return openSubmenus.value.includes(item.label);
      };
  
      const toggleSubmenu = (item) => {
        if (isSubmenuOpen(item)) {
          openSubmenus.value = openSubmenus.value.filter(label => label !== item.label);
        } else {
          openSubmenus.value.push(item.label);
        }
      };
  
      // Watch for route changes to update submenu state
      watch(route, (newRoute) => {
        openSubmenus.value = props.menuItems
          .filter(item => item.submenu && isActive(item))
          .map(item => item.label);
      }, { immediate: true });
  
      return { route, isActive, isSubmenuOpen, toggleSubmenu };
    }
  }
  </script>
  