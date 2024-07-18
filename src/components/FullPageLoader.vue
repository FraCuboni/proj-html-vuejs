<script>
export default {
name: "FullPageLoader",
props: {
    loading: {
    type: Boolean,
    default: false
    }
}
}
</script>

<template>
    <div v-if="loading" class="loader-overlay">
        <div class="loader"></div>
    </div>
</template>


<style lang="scss" scoped>
    .loader-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;

        .loader {
            border: 16px solid #f3f3f3;
            border-radius: 50%;
            border-top: 16px solid #3498db;
            width: 120px;
            height: 120px;
            animation: spin 2s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    }

    
</style>
