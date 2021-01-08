<template>
   <div class="tags">
   		<g-link class="tags__link" v-for="tag in feature.tags" :key="tag.id" :to="tag.path">
   			<span>#{{ tag.title }}</span>
   		</g-link>
    </div>
</template>

<script>
export default {
  props: ['feature']
}
</script>

<style lang="scss">
.tags {

  &__link {
		margin-right: .7em;
		font-size: .5em;
		font-weight: 600;
		color: currentColor;
		text-decoration: none;
		padding: .4em 1em;
		border-radius: 500px;
		display: inline-block;
		position: relative;
		overflow: hidden;
		transition: opacity .25s;
		border: 2px solid var(--link-color);
		color: var(--font-color);
		opacity: .85;

		&:before {
			content: '';
			background: var(--link-color);
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			z-index: -2;
			opacity: 1;
			transition: opacity .25s;
			opacity: 0;
		}
		
		&:hover {
			color: var(--button-text-color);

			&:before {
				opacity: 1;
			}
		}
  }
}
</style>