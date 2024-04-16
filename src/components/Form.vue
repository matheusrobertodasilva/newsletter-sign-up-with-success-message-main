<template>
    <section class="lg:h-screen lg:flex lg:justify-center lg:items-center ">
        <div class="bg-White lg:flex lg:flex-row-reverse lg:items-center lg:p-5 lg:rounded-3xl">
            <img src="/src/assets/images/illustration-sign-up-mobile.svg" alt="" class="lg:hidden">
            <img src="/src/assets/images/illustration-sign-up-desktop.svg" alt="" class="hidden lg:block h-[60vh] ml-8">
            <div class="lg:w-[25vw] lg:mx-5">
                <div class="px-5 py-10 lg:py-0 lg:px-0">
                    <h1 class="text-4xl lg:text-[58px] font-bold">Stay updated!</h1>
                    <p class="my-5 lg:my-8">Join 60,000+ product managers receiving monthly updates on:</p>
                    <ul class="ml-7 space-y-3 list-image-[url(src/assets/images/icon-list.svg)]">
                        <li class="before:mr-2">Product discovery and building what matters</li>
                        <li class="before:mr-2">Measuring to ensure updates are a success</li>
                        <li class="before:mr-2">And much more!</li>
                    </ul>
                    <form action="" class="my-5 lg:my-0 lg:mt-8 flex flex-col">
                        <label class="flex flex-col text-Dark-Slate-Grey font-bold lg:text-[14px]" for=""> Email address
                            <input type="text" placeholder="email@company.com" class="border-2 p-3 rounded-xl mt-2 font-normal text-[16px]">
                        </label>
                        <button class="my-5 bg-Charcoal-Grey text-white p-3 rounded-lg lg:hover:bg-Tomato lg:hover:duration-300 lg:hover:shadow-lg lg:hover:shadow-Tomato">Subscribe to monthly newsletter</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>