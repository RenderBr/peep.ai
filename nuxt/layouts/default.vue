<template>
    <div class="min-h-screen flex flex-col">
        <nav class="bg-sidebar flex justify-between p-4 items-center flex-shrink-0 border-b-sidebar-border border">
            <header class="font-bold text-2xl tracking-tight">fable.ai</header>

            <div>
                <ul class="flex flex-row gap-3">
                    <li>
                        <NuxtLink to="/register">
                            <Button variant="outline">
                                Register
                            </Button>
                        </NuxtLink>
                    </li>
                    <li>

                        <NuxtLink to="/login">
                            <Button variant="default">
                                Login
                            </Button>

                        </NuxtLink>
                    </li>
                </ul>
            </div>

        </nav>

        <main class="flex-1 grow flex flex-col overflow-auto">
            <slot />
        </main>
    </div>
</template>

<script setup lang="ts">

</script>