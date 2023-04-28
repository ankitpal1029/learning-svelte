<script lang="ts">

import {input } from "./store"
const handleChange = () => {
    input.set(local)
}
let local: string;
</script>

<h1>{$input}</h1>
<input 
    type="text" 
    on:change={handleChange} 
    bind:value={local} 
    on:input={handleChange}
/>

