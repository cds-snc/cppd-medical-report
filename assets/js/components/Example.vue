<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Example Component</div>

            <p class="text-gray-700 text-base">
                I'm an example component!
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component ready.')
        }
    }
</script>
