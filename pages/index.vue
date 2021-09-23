<template>
    <div class="fixed top-0 left-0 right-0 bottom-0 bg-black text-white text-lg overflow-auto">
        <div @click="zoomOut()" class="fixed top-0 left-0 right-0 bottom-0 bg-black z-20 justify-center items-center backdrop-filter backdrop-blur bg-opacity-50 cursor-[zoom-out] transition-[top]" :class="{ hidden: !zoom, flex: zoom }" ref="zoom" id="zoom">
            <img ref="me-zoom" src="me.jpg" alt="fanrice nyonato" id="me-zoom" class="object-cover object-center" />
        </div>

        <div class="max-w-screen-sm mx-auto flex flex-col my-8 px-4 z-10">
            <h1 class="mb-4 flex flex-row items-center">
                <img src="man.png" class="h-8 w-8" />
                <span class="ml-2 font-bold text-2xl">me</span>
            </h1>

            <div class="pl-10">
                <svg @click="zoomIn()" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" class="h-32 w-32 cursor-[zoom-in]" ref="me">
                    <defs>
                        <clipPath id="shape">
                        <path id="blob" d="M478,287Q477,324,460,357Q443,390,414.5,413.5Q386,437,356,460Q326,483,288,485Q250,487,215.5,474Q181,461,153.5,441Q126,421,106.5,395Q87,369,53.5,347Q20,325,21.5,287.5Q23,250,38.5,218Q54,186,70.5,159Q87,132,107.5,107Q128,82,150.5,48Q173,14,211.5,15Q250,16,281.5,36.5Q313,57,354,54Q395,51,419,80.5Q443,110,454.5,145Q466,180,472.5,215Q479,250,478,287Z" fill="#d1d8e0"></path>
                        </clipPath>
                    </defs>

                    <image x="0" y="0" width="100%" height="100%" clip-path="url(#shape)" xlink:href="me.jpg" preserveAspectRatio="none" class="grayscale transition-filter duration-500" id="me"></image>
                </svg>

                <h2 class="text-xl font-bold mt-4">Fabrice NYONATO</h2>

                <div class="flex flex-row items-center gap-2">
                    <img src="google-maps-2020-icon.svg" alt="google maps icon" class="h-4" />
                    <span>Lome, Togo</span>
                </div>

                <a href="mailto:nykorefa@gmail.com" class="flex flex-row items-center gap-2">
                    <img src="official-gmail-icon-2020-.svg" alt="gmail icon" class="h-4" />
                    <span>nykorefa@gmail.com</span>
                </a>

                <a href="https://github.com/fabricenyonato" target="_blank" class="flex flex-row items-center gap-2">
                    <img src="github-icon-1.svg" alt="github icon" class="h-4" />
                    <span>fabricenyonato</span>
                </a>
            </div>

            <h1 class="mb-4 flex flex-row items-center mt-8">
                <img src="laptop.png" class="h-8 w-8" />
                <span class="ml-2 font-bold text-2xl">works</span>
            </h1>

            <div class="flex flex-col gap-6 pl-10">
                <a :href="work.url" v-for="(work, index) in works" :key="index" :class="{ 'relative w-full h-32 work-item overflow-hidden': !!work.img }" target="_blank">
                    <img :src="work.img" :alt="work.name" class="w-full h-full object-cover object-top rounded-xl grayscale work-item__img transition-filter duration-500" v-if="work.img" />

                    <div :class="{ 'work-item__overlay transition-transform absolute top-0 left-0 w-full h-full flex flex-col justify-end bg-black bg-opacity-70 p-4': !!work.img }">
                        <h3 class="text-xl font-semibold">{{ work.name }}</h3>
                        <div class="flex flex-row gap-x-2 flex-wrap text-gray-300 text-base">
                            <span v-for="(tech, index) in work.techs" :key="index">#{{ tech }}</span>
                        </div>
                    </div>
                </a>
            </div>

            <h1 class="mb-4 flex flex-row items-center mt-8">
                <img src="file.png" class="h-8 w-8" />
                <span class="ml-2 font-bold text-2xl">techs</span>
            </h1>

            <div class="flex flex-col gap-6 pl-10">
                <div class="flex flex-row gap-x-8 gap-y-2 flex-wrap" v-for="(items, index) in techs" :key="index">
                    <div class="flex flex-row items-center gap-2" v-for="(item, index) in items" :key="index">
                        <img :src="item.logo" :alt="item.name" class="h-6" />
                        <span>{{ item.name }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        const works = [
            {
                name: 'n\'aam',
                url: 'https://naam.fabrice-nyonato.com',
                img: 'naam.png',
                year: '2021',
                techs: ['nuxt', 'strapi'],
            },
            {
                name: 'nuxt forest',
                url: 'https://nuxt-blog-seven.vercel.app',
                img: 'nuxt-forest.png',
                year: '2021',
                techs: ['nuxt'],
            },
            {
                name: 'contacts to csv',
                url: 'https://play.google.com/store/apps/details?id=com.rootstechnologies.contactstofile',
                year: '2020',
                techs: ['flutter', 'android'],
            },
            {
                name: 'pafpe',
                url: 'https://play.google.com/store/apps/details?id=com.rootstechnologies.pafpe',
                year: '2019',
                techs: ['ionic', 'angular', 'android'],
            },
        ]

        const techs = [
            [
                { name: 'Android', logo: 'android.svg' },
                { name: 'Angular', logo: 'angular-icon-1.svg' },
                { name: 'Flutter', logo: 'flutter-logo.svg' },
                { name: 'Next', logo: 'next-js.svg' },
                { name: 'Node', logo: 'nodejs-icon.svg' },
                { name: 'Nuxt', logo: 'colored-logo.svg' },
                { name: 'React', logo: 'react-2.svg' },
                { name: 'Vue', logo: 'vue-9.svg' },
                { name: 'Strapi', logo: 'strapi-2.svg' },
                { name: 'Tailwindcss', logo: 'tailwindcss.svg' },
            ],
            [
                { name: 'HTML', logo: 'html-1.svg' },
                { name: 'CSS', logo: 'css-3.svg' },
                { name: 'JavaScript', logo: 'logo-javascript.svg' },
                { name: 'TypeScript', logo: 'typescript.svg' },
                { name: 'Dart', logo: 'dart.svg' },
                { name: 'Kotlin', logo: 'kotlin-1.svg' },
            ],
            [
                { name: 'SQL', logo: 'postgresql.svg' },
                { name: 'MongoDB', logo: 'mongodb-icon-1.svg' },
                { name: 'Firebase', logo: 'firebase-1.svg' },
                { name: 'Neo4j', logo: 'neo4j.svg' },
            ],
        ].map(items => items.sort((a, b) => a.name ))

        return {
            techs,
            works,
            zoom: false,
        }
    },

    methods: {
        zoomIn() {
            /* const me = this.$refs['me']
            const rect = me.getBoundingClientRect()

            const zoom = this.$refs['zoom']
            zoom.style.height = rect.height + 'px'
            zoom.style.width = rect.width + 'px'
            zoom.style.top = rect.top + 'px'
            zoom.style.left = rect.left + 'px'

            const meZoom = this.$refs['me-zoom']
            meZoom.style.borderRadius = '50%'

            const { default: anime} = require('animejs')

            this.zoom = true

            anime.timeline({
                easing: 'easeInOutQuad',
                duration: 500,
            })
            .add({
                targets: zoom,
                height: [rect.height, innerHeight],
                width: [rect.width, innerWidth],
                top: [rect.top, 0],
                left: [rect.left, 0],
            })
            .add({
                targets: meZoom,
                borderRadius: ['50%', '0%']
            }, 0) */

            this.zoom = true
            const zoom = this.$refs['zoom']

            const { default: anime} = require('animejs')

            anime({
                targets: zoom,
                easing: 'easeInOutQuad',
                duration: 500,
                opacity: [0, 1],
            })
        },

        zoomOut() {
            /* const zoom = this.$refs['zoom']
            const meZoom = this.$refs['me-zoom']
            const me = this.$refs['me']
            const rect = me.getBoundingClientRect()

            const { default: anime} = require('animejs')

            anime.timeline({
                easing: 'easeInOutQuad',
                duration: 500,
                complete: () => {
                    this.zoom = false
                }
            })
            .add({
                targets: zoom,
                height: [innerHeight, rect.height],
                width: [innerWidth, rect.width],
                top: [0, rect.top],
                left: [0, rect.left],
            })
            .add({
                targets: meZoom,
                borderRadius: ['0%', '50%']
            }, 0) */

            const zoom = this.$refs['zoom']

            const { default: anime} = require('animejs')

            anime({
                targets: zoom,
                easing: 'easeInOutQuad',
                duration: 500,
                opacity: [1, 0],
                complete: () => {
                    this.zoom = false
                }
            })
        },
    }
}
</script>

<style scoped>
.work-item:hover .work-item__overlay {
    transform: translateY(8rem);
}

.work-item:hover .work-item__img,
#me:hover {
    filter: grayscale(0);
}

#me-zoom {
    width: min(100%, 100vh, 100vw);
    height: min(100%, 100vh, 100vw);
}

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar {
    background: transparent;
}

::-webkit-scrollbar-track {
    background: #303030;
}

::-webkit-scrollbar-thumb {
    background:#4b4b4b;
}

::-webkit-scrollbar-thumb:hover {
    background:#535353;
}
</style>
