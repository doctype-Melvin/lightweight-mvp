<script>
    // @ts-nocheck

    export let href
    export let title
</script>

<section>
    <h2><a href={href}>{title}</a></h2>
</section>

<style>
    section {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>