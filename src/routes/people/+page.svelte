<script lang="ts">
  import type { PageServerData } from "./$types";

  export let data: PageServerData;



</script>

<div class="container">
{#each data.results as person}
    <div>
        <img src={person.picture.medium} alt="profile pic"/>
    </div>
{/each}

</div>

<style>
    .container{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-auto-rows: 100px;
    }
</style>