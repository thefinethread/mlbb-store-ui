<template>
	<NuxtLayout name="login">
		<div class="bg"></div>
		<div class="w-full h-full flex justify-center items-center">
			<form
				@submit="handleSubmit"
				class="rounded-xl sm:rounded-3xl w-full bg-white bg-opacity-10 py-8 px-6 sm:py-14 sm:px-16 sm:w-[500px] z-10 backdrop-blur"
			>
				<h1 class="text-lg sm:text-2xl font-bold mb-6">SIGN IN</h1>
				<div class="flex flex-col gap-4">
					<CommonInputText
						v-for="input in inputFields"
						:id="input.id"
						:placeholder="input.placeholder"
						:input-type="input.inputType"
						:label-icon-path="input.labelIconPath"
						:show-cta="input.showCta"
						@handle-cta-click="handleCtaClick"
					>
						<template #cta>
							<img src="/svgs/right-arrow.svg" class="h-6" />
						</template>
					</CommonInputText>
				</div>

				<div class="flex gap-4 justify-between w-full items-center my-8">
					<span class="h-0.5 w-full bg-white bg-opacity-20"></span>
					<span class="text-white opacity-60 text-xs font-bold">OR</span>
					<span class="h-0.5 w-full bg-white bg-opacity-20"></span>
				</div>

				<Primary>
					<p class="flex justify-center gap-3">
						Sign In with Google
						<img src="/svgs/google.svg" class="h-6 w-6" />
					</p>
				</Primary>
			</form>
		</div>
	</NuxtLayout>
</template>

<script setup lang="ts">
import Primary from '~/components/common/button/Primary.vue';

const handleCtaClick = () => {};
const handleSubmit = (e: Event) => {
	e.preventDefault();
	console.log('submit');
};

const inputFields = [
	{
		id: 'email',
		placeholder: 'Email',
		inputType: 'email',
		labelIconPath: '/svgs/email.svg',
	},
	{
		id: 'password',
		placeholder: 'Password',
		inputType: 'password',
		labelIconPath: '/svgs/lock.svg',
		showCta: true,
	},
];

definePageMeta({
	layout: false,
});
</script>

<style>
.bg {
	position: fixed;
	inset: 0;
	z-index: 0;
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
