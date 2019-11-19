<template>
	<div class="connect">
		<a :href="mailLink" v-html="mail" />
		<a v-for="edge in socials" :href="edge.node.link" :key="edge.node.id">
			<span>
				{{ edge.node.handle }}@
				<span v-html="edge.node.network"/>
			</span>
		</a>
	</div>
</template>

<static-query>
query {
  socials: allSocial {
    edges {
      node {
				link,
				network,
				handle,
				id,
      }
    }
  }
  metadata {
		mail,
		mailLink,
  }
}
</static-query>

<script>
export default {
	computed: {
		socials () {
			return this.$static.socials.edges
		},
		mail () {
			return this.$static.metadata.mail
		},
		mailLink () {
			return this.$static.metadata.mailLink
		},
	},
}
</script>

<style lang="scss">
.connect {
	display: flex;
	flex-flow: column;
	max-width: var(--content-width);
	padding: 0 var(--space);
	margin: 0 auto;

	a {
		font-size: 1.4em;
		font-weight: 600;
		transition: transform .25s ease;
		position: relative;
		height: 2em;
		width: 100%;

		@media screen and (min-width: 650px) {
			font-size: 2em;
		}

		> span {
			transition:
				transform .25s ease,
				color .25s ease,
				opacity .25s ease;
			position: absolute;
			transform: translateX(-100%);
			color: transparent;
			pointer-events: none;

			> span {
				opacity: 1;
				position: absolute;
				color: var(--link-color);
			}
		}

		&:hover {
			> span {
				transform: translateX(0);
				opacity: 1;
				color: var(--link-color-hover);
			}
		}
	}
}
</style>
