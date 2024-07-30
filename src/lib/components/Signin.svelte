<script>
    // @ts-nocheck
	import { goto } from "$app/navigation";

    function handleSubmit(event) {
        event.preventDefault();
        console.log('Sign in User', event.target)
        // goto('/')
    }

    let email = '';
    let password = '';


</script>

<svelte:head>
    <title>Sign in!</title>
    <meta name="description" content="Lightweight MVP" />
</svelte:head>

<section>
    <div class="container">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <div class="card">
                    <div class="card-header">
                        <h4>Sign in</h4>
                    </div>
                    <div class="card-body">
                        <form on:submit|preventDefault={handleSubmit}>
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>