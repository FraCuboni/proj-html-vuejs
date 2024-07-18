<script>

export default{
  name : 'NotFound',
}

</script>

<template>
    <div class="container">
        <div class="flex-cont">
            <div class="number">Error 4</div>
            <div class="cont-img">
                <img src="/public/img/dog-icon.png" alt="dog-paw">
            </div>
            <div class="number">4</div>
        </div>
        <div class="flex-cont home">
            <p>
                We're sorry but we couldn't find the page you're looking for
            </p>
            <router-link :to="{name: 'home'}" class="home-button">Back to Home</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/mixins' as *;
@use '../../styles/partials/variables' as *;

.container {
    padding: 80px 0 120px 0;

    .flex-cont {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        .number {
            font-size: 60px;
            font-weight: 600;
            color: $brown;
        }

        .cont-img {
            width: 50px;
        }
    }

    .home {
        flex-direction: column;
        gap: 40px;

        p {
            text-align: center;
        }

        .home-button {
            text-align: center;
            background-color: $orange;
            color: $white;
            border-radius: 30px;
            font-size: 22px;
            font-weight: 500;
            padding: 12px 30px;
            text-decoration: none;
            display: inline-block;
        }

        .home-button:hover {
            cursor: pointer;
        }
    }
}

</style>