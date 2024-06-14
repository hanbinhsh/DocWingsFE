<template>
    <li class="nav-header">
        <div class="dropdown profile-element">
            <span>
                <img alt="image" class="img-circle" src="../assets/img/profile_small.jpg" />
            </span>
            <a data-toggle="dropdown" class="dropdown-toggle" href="profile">
                <span class="clear">
                    <span class="block m-t-xs">
                        <strong class="font-bold">
                            {{ userData.userName }}
                            <span class="text-muted text-xs block">{{userData.phone}}</span>
                        </strong>
                    </span>
                </span>
            </a>
        </div>
        <div class="logo-element">DW+</div>
    </li>
</template>

<script>
export default {
    name: 'UserItem',
    data() {
        return {
            userData: JSON.parse(sessionStorage.getItem('userData')) || {}
        };
    }
}
</script>

<style scoped></style>