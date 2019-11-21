<template>
    <div class="file">
        <input type="hidden" name="files" v-bind:value="uploaded_files">
        <form enctype="multipart/form-data">
            <div class="">
                <label class="w-64 border-2 border-black cursor-pointer bg-gray-200 px-5 py-2 inline-block text-center">
                    <span>Upload</span>
                    <input type="file" ref="file" @change="onSelect" class="hidden">
                </label>
            </div>
        </form>
        <div class="mt-4">
            <div v-for="(file, key) in uploaded_files" class="border-t border-gray-300 py-4 px-4">
                {{ file }} <span class="remove-file">Remove</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                uploaded_files: []
            }
        },
        props: [
            'files'
        ],
        methods: {
            onSelect() {
                const file = this.$refs.file.files[0];
                this.uploaded_files.push(file.name);
            }
        },
        mounted() {
            if(this.files) {
                this.uploaded_files = this.files.split(",")
            }
            console.log('Component ready.')
        }
    }
</script>