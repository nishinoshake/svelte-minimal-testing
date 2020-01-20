<script>
	import { count, increment } from './stores.js'
</script>

<button on:click={increment}>{$count}</button>
