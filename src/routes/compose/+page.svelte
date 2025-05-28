<script lang="ts">
    import { onMount } from 'svelte';

    let templateData = {title: 'Empty Template'}

    let showAddExerciseBtn = false

    onMount(() => {
        const storedData = localStorage.getItem('userTemplate')
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            templateData = parsedData;
            console.log('Recovered user data')
        } else {
            localStorage.setItem('userTemplate', JSON.stringify({
                title: 'My Template'
            }) )
            console.log('Created empty user template')
        }
    })

</script>

<section>
    <div class="header">
        <a href="/">⬅️ Back</a>
        <h2>Lightweight Composer</h2>
        <div></div>
    </div>
    <p>
        This is a simple tool to create your own workout templates. You can use it to
        quickly generate workouts based on your preferences.
    </p>
    <div>
        <h2 class="template-title" contenteditable="true" on:blur={((e) => {
            console.log(e.target.textContent)
            })}>
            {templateData.title}
        </h2>
        <button type="button" class="button-session">
            Add Session
        </button>
       
    </div>
</section>



<style>
    section {
        height: 100vh;
        color: #fff
    }

    section a {
        color: #fff;
    }

    .header {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
    }

    .button-session {
        background-color: #00c9b2;
        color: #c2fcf3;
        border: none;
        padding: 0.5rem 1rem;
        display: block;
        margin: 0 auto;
    }

    .button-session:hover {
        background-color: #00a99f;
        cursor: pointer;
    }

    .template-title {
        margin: 1rem;
        text-align: center;
        background-color: #6e0e4d;
        padding: 1rem 2rem;

    }
</style>