<template>
	<div
		class="h-dvh w-dvw flex flex-col justify-between text-neutral-50 max-w-7xl mx-auto py-6 px-8"
	>
		<div class="bg"></div>
		<div class="fixed top-0 right-0 bottom-0 left-0 bg-[#171717]"></div>
		<LoginHeader />
		<main class="sm:mx-auto flex flex-col gap-8">
			<slot />
		</main>
		<QuickLinkFooter />
	</div>
</template>

<style>
.bg {
	position: fixed;
	inset: 0;
	z-index: 10;
	pointer-events: none;
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjUwMCIgeDI9IjUwMCIgeTE9IjUwMCIgeTI9IjEwMDAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9ImhzbCgwIDEwMCUgNTAlLzE1JSkiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9ImhzbCgwIDEwMCUgNTAlLzAlKSIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCNhKSIgZD0iTTEwMDAgMTAwMEgwVjUwMGM1MDAtMjUwIDUwMCAyNTAgMTAwMCAwdjUwMHoiLz48L3N2Zz4=);
	background-repeat: repeat-x;
	background-position-y: center;
	background-size: 300vw var(--bgh, 100%);
	--bgw: clamp(50em, var(--VWidth), 1920px);
	animation: hue 10s linear infinite, wave 20s linear infinite;
	opacity: 1;
}

.bg::after,
.bg::before {
	content: '';
	display: block;
	position: absolute;
	inset: 0;
	background-image: inherit;
	background-repeat: inherit;
	background-position-y: inherit;
	background-size: inherit;
}

.bg::after {
	animation: wave 20s -5s linear infinite reverse;
}
.bg::after {
	animation: wave 20s -10s linear infinite reverse;
}
@keyframes hue {
	0%,
	100%,
	50% {
		filter: hue-rotate(210deg);
	}
	25% {
		filter: hue-rotate(240deg);
	}
	75% {
		filter: hue-rotate(180deg);
	}
}

@keyframes wave {
	0% {
		background-position-x: 0;
	}
	100% {
		background-position-x: 80%;
	}
}
/* Change the white to any color */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
	transition: background-color 5000s;
	-webkit-text-fill-color: #fff !important;
}
</style>
