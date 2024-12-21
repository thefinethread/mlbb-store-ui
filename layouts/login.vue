<template>
	<div
		class="h-dvh w-dvw flex flex-col justify-between text-neutral-50 max-w-7xl mx-auto py-6 px-8"
	>
		<div class="fixed top-0 right-0 bottom-0 left-0 bg-[#171717]"></div>
		<LoginHeader />
		<main class="sm:mx-auto flex flex-col gap-8">
			<slot />
		</main>
		<QuickLinkFooter />
	</div>
</template>
