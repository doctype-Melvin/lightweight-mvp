<script>
    // @ts-nocheck
    import { loggedIn } from "$lib/utils/stores";
    import { goto } from "$app/navigation";

    function handleSubmit(event) {
        event.preventDefault();
        console.log('Sign in User and redirect')
        loggedIn.set(true);
        goto('/');
    }

    let email = '';
    let password = '';

</script>

<svelte:head>
    <title>Sign in!</title>
    <meta name="description" content="Lightweight MVP" />
</svelte:head>


    <form on:submit|preventDefault={handleSubmit} data-testid="sign-in-form" autocomplete='off'>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" bind:value={email} class="form-control" />
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" bind:value={password} class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary">Sign in</button>
    </form>
                 