<script lang="ts">
    const randomObject =
        [
            {
                title: "something1",
                description: "another thing 1",
                id: 1
            },
            {
                title: "something2",
                description: "another thing 2",
                id: 2
            },
            {
                title: "something3",
                description: "another thing 3",
                id: 3
            }
        ]

</script>

{#each randomObject as object}
    {#if object.id == 2}
    <h1>Id 2 has been censored</h1>
    {:else}
    <h1>{object.title}</h1>
    <p>{object.description}</p>
    {/if}
{/each}