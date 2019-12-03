<template>
	<header class="header">
	  <a class="header__logo" href="/">
			<Logo />
		</a>
		<Nav/>
	</header>
</template>

<script>
import Nav from '@/components/Nav'
import Logo from '@/assets/svgs/Logo.svg'

export default {
  components: {
		Nav,
		Logo,
  },
}
</script>

<style lang="scss">
.header {
	display: flex;
	max-width: var(--content-width);
	margin: 0 auto;
	justify-content: space-between;
	padding: 0 var(--space);
	padding-top: var(--space);
	align-items: center;

	&__logo {
		&:hover {
			svg {
				animation: bounce 1s ease infinite forwards;

				circle {
					fill: var(--font-color);
				}
				// .line {
				// 	stroke: var(--link-color);
				// }
			}
		}

		> svg {
			display: block;
			height: 4em;
			width: 4em;
			overflow: visible;
			transition: transform .15s;

			* {
				transform-origin: center;
				transition: all .25s ease;
			}

			circle {
				animation: circle .75s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
				transform: scale(0);
				fill: var(--link-color);
			}
			.line {
				animation: line .75s .35s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
				transform: scale(0);
			}
			.line-3 {
				animation: line .75s .15s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
			}

		}

		@keyframes circle {
			from {
				opacity: 0;
				transform: scale(0);
			}
			to {
				opacity: 1;
				transform: scale(1);
			}
		}

		@keyframes line {
			from {
				transform: scale(0);
			}
			to {
				transform: scale(.75);
			}
		}

		@keyframes bounce {
			0% {
				transform: scale(1);
			}
			50% {
				transform: scale(.85);
			}
			100% {
				transform: scale(1);
			}
		}
	}

	@media screen and (min-width: 650px) {
		align-items: center;
	}
}
</style>
