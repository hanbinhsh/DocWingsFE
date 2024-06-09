<template>
    <nav class="navbar-default navbar-static-side" role="navigation">
        <div class="sidebar-collapse">
            <ul class="nav metismenu" id="side-menu">
                <li class="nav-header">
                    <div class="dropdown profile-element">
                        <span>
                            <img alt="image" class="img-circle" src="../assets/img/profile_small.jpg" />
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

                <li v-for="item in menuItems" :key="item.label" :class="{ active: route.path === item.link }">
                    <router-link :to="item.link">
                        <i :class="item.icon"></i> <span class="nav-label">{{ item.label }}</span>
                        <span v-if="item.submenu" class="fa arrow"></span>
                    </router-link>
                    <ul v-if="item.submenu" class="nav nav-second-level collapse">
                        <li v-for="subitem in item.submenu" :key="subitem.label">
                            <router-link :to="subitem.link">{{ subitem.label }}</router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
    name: 'Sidebar',
    props: {
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
    setup() {
        const route = useRoute();
        return { route };
    }
}
</script>

<style scoped></style>