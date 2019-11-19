<template>
	<footer class="footer">
		<span class="footer__copyright">Copyright © {{ date }} - Karl Kihlström</span>
	</footer>
</template>

<script>
export default {
  computed: {
		date () {
			return new Date().getFullYear()
		}
	},
}
</script>

<style lang="scss">
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space);
  padding-top: calc(var(--space) * 2);
  text-align: center;
	font-size: .8em;
	font-weight: 500;
	opacity: .75;
}
</style>
