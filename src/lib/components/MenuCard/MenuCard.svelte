<script lang="ts">
    export let href
    export let title
</script>

<section>
    <a href={href}>
       {title}
    </a>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>