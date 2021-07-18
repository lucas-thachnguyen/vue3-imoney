<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <form
        class="flex flex-col justify-start space-y-6"
        @submit.prevent="onSubmit"
      >
        <div class="row">
          <label class="flex flex-col" for="emailAdress">
            <span class="font-semibold">Email Adress</span>
            <input
              id="emailAdress"
              type="text"
              placeholder="Email..."
              class="px-4 py-3
              rounded-lg mt-1 border border-gray-100"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="password">
            <span class="font-semibold">Password</span>
            <input
              id="password"
              type="text"
              placeholder="password..."
              class="px-4 py-3
              rounded-lg mt-1 border border-gray-100"
            />
          </label>
        </div>
        <div class="row">
          <button
            class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg"
            type="submit"
          >
            Sign in
          </button>
        </div>
      </form>

      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm new user.</span>
        <span class="ml-1">
          <router-link
            :to="{ name: 'Register', params: {} }"
            class="text-primary font-bold"
            >Sign up</router-link
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    function onSubmit() {}
    return { onSubmit };
  },
};
</script>
