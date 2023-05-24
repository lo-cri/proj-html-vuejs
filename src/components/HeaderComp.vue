<script >
import NavbarComp from './NavbarComp.vue';

export default {
    name: "HeaderComp",
    component: {
        NavbarComp
    },
    components: { NavbarComp }
}

</script>

<template>
    <div class="w-90">
        <NavbarComp />
    </div>
    <hr>
    <div class="d-flex w-90 py-3 justify-content-between">
        <img src="../../public/MasterStudy_logo.svg" alt="logo">

        <div class="d-flex align-items-center">
            <div class="d-flex align-items-center">
                <font-awesome-icon :icon="['fas', 'bars']" />
                <span class="ms-1">CATEGORY</span>
            </div>
            <div class="input-group ms-2">
                <input type="text" class="form-control py-3" placeholder="Search courses" aria-describedby="basic-addon1">
                <span class="input-group-text text-white px-4"><font-awesome-icon
                        :icon="['fas', 'magnifying-glass']" /></span>
            </div>
        </div>

        <div class="d-flex align-items-center">
            <div class="d-flex align-items-center">
                <font-awesome-icon :icon="['fas', 'bullhorn']" style="color: #195ec8;" />
                <span class="ms-1"> <a href="#">Become an Instructor</a> </span>
            </div>
            <div class="d-flex align-items-center">
                <font-awesome-icon :icon="['fas', 'briefcase']" class="ms-4" style="color: #195ec8;" />
                <span class="ms-1"> <a href="#">For Enterprise</a> </span>
            </div>
        </div>

        <div class="d-flex align-items-center">
            <div class="d-flex align-items-center" style="cursor: pointer;">
                <font-awesome-icon :icon="['far', 'user']" style="color: #195ec8;" />
                <span class="ms-1" style="color: #195ec8;">Log in</span>
            </div>

            <button type="button" class="btn ms-4">SIGN UP</button>

            <font-awesome-icon :icon="['far', 'bookmark']" class="ms-4"
                style="color: #195ec8; font-size: 22px; cursor: pointer;" />
        </div>




    </div>

    <div class="d-flex w-100 py-3 justify-content-between" style="background-color: #273044;">
        <div class="d-flex w-60 justify-content-between">
            <div class="d-flex align-items-center">
                <font-awesome-icon :icon="['fas', 'chart-line']" style="color: white;" />
                <span class="ms-1" style="color: white;"><a id="Corporate" href="#">Bussines</a></span>
            </div>
            <div class="d-flex align-items-center">
                <font-awesome-icon :icon="['fas', 'palette']" style="color: white;" />
                <span class="ms-1" style="color: white;"><a id="Corporate" href="#">Design</a></span>
            </div>
            <div class="d-flex align-items-center">
                <font-awesome-icon :icon="['fas', 'gear']" style="color: white;" />
                <span class="ms-1" style="color: white;"><a id="Corporate" href="#">Development</a></span>
            </div>
            <div class="d-flex align-items-center">
                <font-awesome-icon :icon="['fas', 'face-smile']" style="color: white;"/>
                <span class="ms-1" style="color: white;"><a id="Corporate" href="#">Lifestile</a></span>
            </div>
            <div class="d-flex align-items-center">
                <font-awesome-icon :icon="['fas', 'print']" style="color: white;"/>
                <span class="ms-1" style="color: white;"><a id="Corporate" href="#">Office Productivity</a></span>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
hr {
    color: #77777a;
    margin: 0;
}

.w-90 {
    width: 90%;
    margin: 0 auto;
}

.w-100{
    width: 100%;
    margin: 0 auto;
}

.w-60{
    width: 40%;
    margin: 0 auto;
}

.input-group {
    width: 500px;

    .form-control {
        background-color: #f0f2f5;
        color: #77777a;
        border-radius: 0;
        border: 0;
    }

    .input-group-text {
        border-radius: 0;
        border: 0;
        background-color: #457992;
    }
}

a {
    color: #77777a;
    text-decoration: none;
}

a#Corporate{
    color: white;
    text-decoration: none;
}

.btn {
    background-color: #46c197;
    color: white;
    font-weight: bolder;
    border-radius: 25px;
    padding: 10px 30px;

    &:hover {
        background-color: #ff4450;
        color: white;
    }
}
</style>