<script setup>

</script>

<template>
    <div class="inbox">
        <router-link to="/" class="item">
            <div class="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-house"
                    viewBox="0 0 16 16">
                    <path
                        d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                </svg>
            </div>
            <div class="text">Home</div>
        </router-link>
        <router-link to="/profile" class="item">
            <div class="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                    class="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
            </div>
            <div class="text">Profile</div>
        </router-link>
        <router-link to="/logfile" class="item">
            <div class="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                    class="bi bi-file-earmark-fill" viewBox="0 0 16 16">
                    <path
                        d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2z" />
                </svg>
            </div>
            <div class="text">Text</div>
        </router-link>
        <router-link to="/" class="item">
            <div class="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                    class="bi bi-file-ruled" viewBox="0 0 16 16">
                    <path
                        d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v4h10V2a1 1 0 0 0-1-1zm9 6H6v2h7zm0 3H6v2h7zm0 3H6v2h6a1 1 0 0 0 1-1zm-8 2v-2H3v1a1 1 0 0 0 1 1zm-2-3h2v-2H3zm0-3h2V7H3z" />
                </svg>
            </div>
            <div class="text">TodoList</div>
        </router-link>
    </div>
</template>

<style>
.inbox {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.item {
    padding: 20px 20px 20px 20px;
    display: flex;
    align-items: center;

    color: var(--main-color);
    text-decoration: none;

    transition: color 0.75s ease 0.1s;
    transition: background-color 0.25s ease 0.1s;
}

.item:hover {
    color: #b9cee2;
    background-color: #8aaac97f;
}

.text {
    margin-left: 30px;

    opacity: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: opacity 0.25s ease 0.1s;
}

.text {
    opacity: 1;
}

@media screen and (max-width: 992px) {

    .item {
        transition: none;
    }
}
</style>