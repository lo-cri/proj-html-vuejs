<script >
export default {
    name: "NavBarComp"
}

</script>

<template>
    <div class="d-flex justify-content-between align-items-baseline" id="Top">
        <div>
            <!-- selezione lingua -->
            <select class="form-select" aria-label="Default select example">
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="de">German</option>
            </select>
        </div>

        <div class="d-flex">
            <!-- navbar -->
            <ul id="nav">
                <li> <a href="#">Home</a> </li>
                <li class="position-relative"><a href="#">Pages</a></li>
                <li> <a href="#">Course Formats</a> </li>
                <li> <a href="#">Courses</a> </li>
                <li> <a href="#">Demos</a> </li>
            </ul>

            <!-- social icons -->
            <ul id="social">
                <li> <a href="#"><font-awesome-icon :icon="['fab', 'facebook']" /></a> </li>
                <li> <a href="#"><font-awesome-icon :icon="['fab', 'twitter']" /></a> </li>
                <li> <a href="#"><font-awesome-icon :icon="['fab', 'instagram']" /></a> </li>
                <li> <a href="#"><font-awesome-icon :icon="['fab', 'linkedin']" /></a> </li>
                <li> <a href="#"><font-awesome-icon :icon="['fab', 'google-plus']" /></a> </li>
                <li> <a href="#"><font-awesome-icon :icon="['fab', 'youtube']" /></a> </li>

            </ul>
        </div>

    </div>
</template>

<style lang="scss" scoped>
#Top{
    margin-bottom: -5px;
    margin-top: 5px;
}

select {
    border: 0;
    font-size: 14px;
}

ul {
    display: flex;

    li {
        list-style-type: none;

        a {
            text-decoration: none;
            color: #77777a;
        }

    }
}

#nav {
    font-size: 14px;

    li {
        padding: 0 15px;
    }
}

#social {
    font-size: 16px;

    li {
        padding: 0 5px;
    }
}
</style>