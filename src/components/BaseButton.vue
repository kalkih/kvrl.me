<template>
	<component :is="tag" class="base-button" :href="href || false" target="_blank">
		<slot></slot>
	</component>
</template>

<script>
export default {
	props: {
		link: {
			type: Boolean,
			default: false,
		},
		href: {
			type: String,
			default: false
		},
	},
	computed: {
		tag () {
			return this.link ? 'a' : 'div'
		},
	},
}
</script>

<style lang="scss">
.base-button {
	border-radius: 500px;
	border: 2px solid var(--link-color);
	color: var(--link-color);
	cursor: pointer;
	display: block;
	display: inline-block;
	font-size: .8em;
	font-weight: 700;
	letter-spacing: .075em;
	overflow: hidden;
	padding: .6em 1em;
	position: relative;
	text-align: center;
	text-decoration: none;
	transition: opacity .25s, color .25s;
	user-select: none;

	&:before {
		content: '';
		background: var(--link-color);
		bottom: 0;
		left: 0;
		opacity: 0;
		position: absolute;
		right: 0;
		top: 0;
		transition: opacity .25s;
		z-index: -2;
	}
	
	&:hover {
		color: var(--button-text-color);

		&:before {
			opacity: 1;
		}
	}
	
	&.--accent {
		color: var(--button-text-color);
		&:before {
			opacity: 1;
		}
		&:hover {
			opacity: 1;

			&:before {
				opacity: .85;
			}
		}
	}

  &.--alt {
		border: 0;
		padding: calc(.6em + 2px) calc(1em + 2px);

		&:hover {
			color: var(--font-color);
			&:before {
				opacity: 0;
			}
		}
  }
}
</style>