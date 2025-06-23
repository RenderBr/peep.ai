<template>
    <div class="flex grow justify-center items-center w-full h-full min-h-full p-4">
        <Card class="w-full max-w-md shadow-lg">
            <CardHeader class="text-center space-y-2">
                <CardTitle class="text-3xl font-bold">Get started</CardTitle>
                <CardDescription class="text-muted-foreground">
                    Enter your information to start your journey.
                </CardDescription>
            </CardHeader>
            <CardContent class="space-y-4">
                <form @submit="onSubmit" class="space-y-4">
                    <FormField v-slot="{ componentField }" name="email">
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input v-bind="componentField" type="email" placeholder="Enter your email"
                                    class="h-11" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>

                    <FormField v-slot="{ componentField }" name="username">
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input v-bind="componentField" type="text" placeholder="Enter your username"
                                    class="h-11" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>

                    <FormField v-slot="{ componentField }" name="password">
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input v-bind="componentField" type="password" placeholder="Enter your password"
                                    class="h-11" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>

                    <Button type="submit" class="w-full h-11 mt-6">
                        Create Account
                    </Button>
                </form>
            </CardContent>
            <CardFooter class="text-center">
                <p class="text-sm text-muted-foreground">
                    Already have an account?
                    <NuxtLink to="/login" class="font-medium text-primary hover:underline">
                        Sign in
                    </NuxtLink>
                </p>
            </CardFooter>
        </Card>
    </div>
</template>

<script lang="ts" setup>
import { useForm } from 'vee-validate';
import { RegisterSchema } from '~/types/schemas/zod/RegisterSchema';
const supabase = useSupabaseClient();
const form = useForm({
    validationSchema: RegisterSchema,
})

const onSubmit = form.handleSubmit((values) => {
    supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
            data: {
                username: values.username,
            },
            
        }
    }).then(({ error }) => {
        if (error) {
            console.error('Registration failed:', error.message);
            return;
        }

        navigateTo('/login');
    });
});
</script>