<script >
export default {
    name: "IntroductionComp"
}

</script>

<template>
    <div class="d-flex w-100 align-items-center my-3 triangle">
        <div class="w-75">
            <div class="triangle">
                <div class="w-60">
                <h1 class="my-3">Udemy Affiliate Sales</h1>
                <h4 class="my-3">Monetize your audience and attract new customers with Udemy!</h4>
                </div>
            </div>
        </div>
        <div class="justify-content-end">
            <img src="../../public/slide-1.jpg" alt="base" width="985px">
        </div>
    </div>
</template>

<style lang="scss" scoped>

h1{
    font-weight: bolder;
    color: white;
    font-size: 45px;
}

h4{
    color: white;
    font-size: 20px;
}

.w-100{
    width: 100%;
    margin: 0 auto;
}

.w-75{
    width: 75%;
    height: 400.02px;
    margin: 0 auto;
    background-color: #ec4658;
    position: relative;
    text-align: center;
    .triangle {
        text-align:justify;
   
    }
    .triangle:after {
        content: "";
        position: absolute;
        top: 0;
        right: -185px;
        border-style: solid;
        border-width: 400px 0 0 185px;
        border-color: transparent transparent transparent #ec4658;
    }
}

.w-60{
    width: 70%;
    margin: 130px 250px;
}

</style>