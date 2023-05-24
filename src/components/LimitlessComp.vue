<script >
export default {
    name: "LimitlessComp",


}

</script>

<template>
    <div class="w-100 d-flex align-items-center my-5" id="limitless">
        <div class="w-75">
            <div class="w-50">
                <h2 style="font-size: 50px; font-weight: 300;">Limitless learning, more possibilities</h2>
                <h4 class="my-5">Online courses open the opporttunity fole learning to almost anyone, regardless of their
                    scheduling commitments.
                </h4>
                <button type="button" class="btn">READ MORE</button>
            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
#limitless {
    background-image: url(../../public/bg.png);
    height: 600px;

    .w-75 {
        margin: 0 auto;
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
}
</style>