<script lang="ts">
    import type {PageData} from "./$types"
  import type { PreLoadType } from "./+page";
    export let data: PageData;

    const {title, content} = data;

</script>

<h1>{title}</h1>
<p>{content}</p>