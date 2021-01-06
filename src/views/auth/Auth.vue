<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-7 col-md-7 d-none d-sm-block bg">
                <div class="icon-ankasa text-center">
                    <img src="../../assets/illustration.png" alt="background">
                </div>
            </div>
            <div class="col-lg-5 col-md-5">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Auth'
}
</script>

<style scoped>
.bg {
    background: #2395FF;
    height: fit-content;
}

.bg .icon-ankasa img {
    margin: 200px 0;
}

@media (max-width: 799px) {
    .bg .icon-ankasa img {
        margin-left: -30px;
    }
}

@media (max-width: 775px) {
    .bg .icon-ankasa img {
        margin-left: -40px;
    }
}
</style>
