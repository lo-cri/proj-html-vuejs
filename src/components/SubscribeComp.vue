<script >
export default {
    name: "SubscribeComp",
}

</script>

<template>
    <div class="w-100 d-flex justify-content-center" id="subscribe">
        <div class="w-75 d-flex ">
            <div class="w-50">
                <h4 class="fw-bolder">Subscribe our newsletter</h4>
                <p style="font-weight: 300;">There are many variations of passages of Lorem Ipsum available, but the
                    mayority have suffered
                    alternation in some form, by injected humor, or randomised words</p>
            </div>
            <div class="w-50">
                <h5 class="text-uppercase" style="font-weight: 300;">your e-mail address</h5>
                <div class="input-group ms-2">
                    <input type="text" class="form-control py-3" placeholder="Enter your E-mail"
                        aria-describedby="basic-addon1">
                    <span class="input-group-text text-white px-4 text-uppercase">subscribe</span>
                </div>
            </div>


        </div>



    </div>
</template>

<style lang="scss" scoped>
#subscribe {
    background-color: #4ed7a8;
    color: white;
    padding: 50px 0;

    .input-group {
        width: 500px;

        .form-control {
            background-color: #f0f2f5;
            color: #77777a;
            border-radius: 0;
            border: 0;
            font-size: 14px;
        }

        .input-group-text {
            border-radius: 0;
            border: 0;
            background-color: #ff4450;
            cursor: pointer;
        }
    }
}
</style>