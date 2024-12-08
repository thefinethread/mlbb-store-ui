<template>
	<header class="h-16 w-full max-w-[90rem] m-auto fixed top-0 left-0 right-0 z-50 backdrop-blur-lg">
		<div
			class="w-full h-full flex justify-between items-center px-8 backdrop-blur-lg"
		>
			<NuxtLink to="/">
				<NuxtImg src="/svgs/store-logo.svg" class="h-10 w-10" />
			</NuxtLink>

			<div class="flex gap-6 items-center justify-between">
				<ul>
					<li class="cursor-pointer">
						<NuxtImg src="/svgs/search-icon.svg" class="h-6 w-6" />
					</li>
				</ul>
				<div class="cursor-pointer hover:text-neutral-300 transition-colors">
					Login
				</div>
			</div>
		</div>
	</header>
</template>

<script setup></script>
