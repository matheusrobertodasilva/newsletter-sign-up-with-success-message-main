<script>
    export default{
        data(){
            return{
                email:"ash@loremcompany.com"
            }
        }
    }
</script>

<template>
    <section class="lg:flex lg:justify-center lg:items-center lg:h-screen">
        <div class="bg-White px-6 py-10 flex flex-col justify-between h-screen lg:h-auto lg:rounded-3xl lg:w-[32vw] lg:p-10 lg:m-auto">
            <div class="mt-28 lg:mt-0">
                <div class="mb-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FF6A3A"/><stop offset="100%" stop-color="#FF527B"/></linearGradient></defs><g fill="none"><circle cx="32" cy="32" r="32" fill="url(#a)"/><path stroke="#FFF" stroke-width="4" d="m18.286 34.686 8.334 7.98 19.094-18.285"/></g></svg>
                </div>
                <h1 class="text-[40px] font-bold leading-[2.5rem] lg:text-[38px]">Thanks for subscribing!</h1>
                <p class="my-7">A confirmation email has been sent to <span class="text-Dark-Slate-Grey font-bold">{{ email }}</span>. Please open it and click the button inside to confirm your subscription.</p>
            </div>
            <button class="p-4 bg-Charcoal-Grey text-White rounded-lg lg:p-3 lg:hover:bg-Tomato lg:hover:shadow-lg lg:hover:shadow-Tomato ">Dismiss message </button>
        </div>
    </section>
</template>