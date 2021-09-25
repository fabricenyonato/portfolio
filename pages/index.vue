<template>
    <div ref="area" id="area">
        <div @click="zoomOut()" class="fixed top-0 left-0 right-0 bottom-0 bg-black z-20 justify-center items-center backdrop-filter backdrop-blur bg-opacity-50 cursor-[zoom-out] transition-[top]" :class="{ hidden: !zoom, flex: zoom }" ref="zoom" id="zoom">
            <img ref="me-zoom" src="me.jpg" alt="fanrice nyonato" id="me-zoom" class="object-cover object-center" />
        </div>

        <div ref="el" id="el">
            <h1 class="mb-4 flex flex-row items-center">
                <img src="man.png" class="h-8 w-8" />
                <span class="ml-2 font-bold text-2xl font-extrabold">me</span>
            </h1>

            <div class="pl-10">
                <svg @click="zoomIn()" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" class="h-32 w-32 cursor-[zoom-in]" ref="me">
                    <defs>
                        <clipPath id="shape">
                            <path fill="#f00">
                                <animate  repeatCount="indefinite" attributeName="d" dur="10s" values="M489.5,288Q483,326,463,358Q443,390,401.5,396Q360,402,341,436Q322,470,286,465.5Q250,461,222.5,440.5Q195,420,161,419.5Q127,419,106,394.5Q85,370,75.5,340Q66,310,55,280Q44,250,47.5,217.5Q51,185,77,164Q103,143,117.5,115.5Q132,88,156.5,63Q181,38,215.5,35.5Q250,33,283.5,38.5Q317,44,351,54Q385,64,414,86.5Q443,109,436.5,150.5Q430,192,463,221Q496,250,489.5,288Z;M481.5,288Q485,326,446,345Q407,364,384.5,384Q362,404,341,434Q320,464,285,481Q250,498,218.5,471.5Q187,445,157,432Q127,419,108,393Q89,367,83.5,336.5Q78,306,64,278Q50,250,44.5,216Q39,182,65.5,158.5Q92,135,103,99Q114,63,151.5,62Q189,61,219.5,41Q250,21,288.5,17.5Q327,14,355,40Q383,66,416.5,85Q450,104,460,141.5Q470,179,474,214.5Q478,250,481.5,288Z;M454.5,285.5Q469,321,451,352Q433,383,401,398.5Q369,414,340.5,427Q312,440,281,449.5Q250,459,212.5,470.5Q175,482,157.5,441.5Q140,401,117,382Q94,363,72,339Q50,315,38,282.5Q26,250,36,217Q46,184,47.5,144Q49,104,90.5,95.5Q132,87,158.5,69Q185,51,217.5,61Q250,71,279,71Q308,71,349.5,63Q391,55,410,87.5Q429,120,429,156Q429,192,434.5,221Q440,250,454.5,285.5Z;M480.5,288.5Q487,327,460,355Q433,383,395,390.5Q357,398,335.5,422.5Q314,447,282,471.5Q250,496,218,471.5Q186,447,153,438Q120,429,97.5,403Q75,377,44.5,352Q14,327,18.5,288.5Q23,250,52.5,222.5Q82,195,81.5,161.5Q81,128,104.5,105Q128,82,156,64Q184,46,217,26Q250,6,281.5,31.5Q313,57,346,65Q379,73,403,97.5Q427,122,446,151Q465,180,469.5,215Q474,250,480.5,288.5Z;M489.5,288Q483,326,463,358Q443,390,401.5,396Q360,402,341,436Q322,470,286,465.5Q250,461,222.5,440.5Q195,420,161,419.5Q127,419,106,394.5Q85,370,75.5,340Q66,310,55,280Q44,250,47.5,217.5Q51,185,77,164Q103,143,117.5,115.5Q132,88,156.5,63Q181,38,215.5,35.5Q250,33,283.5,38.5Q317,44,351,54Q385,64,414,86.5Q443,109,436.5,150.5Q430,192,463,221Q496,250,489.5,288Z" />
                            </path>
                        </clipPath>
                    </defs>

                    <image x="0" y="0" width="100%" height="100%" clip-path="url(#shape)" xlink:href="me.jpg" preserveAspectRatio="none" class="grayscale transition-filter duration-500" id="me"></image>
                </svg>

                <h2 class="text-xl font-bold mt-4 ff-nunito font-extrabold">Fabrice NYONATO</h2>

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
                <span class="ml-2 font-bold text-2xl font-extrabold">works</span>
            </h1>

            <div class="flex flex-col gap-6 pl-10">
                <a :href="work.url" v-for="(work, index) in works" :key="index" :class="{ 'relative w-full h-32 work-item overflow-hidden': !!work.img }" target="_blank">
                    <img :src="work.img" :alt="work.name" class="w-full h-full object-cover object-top rounded-xl grayscale work-item__img transition-filter duration-500" v-if="work.img" />

                    <div :class="{ 'work-item__overlay transition-transform absolute top-0 left-0 w-full h-full flex flex-col justify-end bg-black bg-opacity-70 p-4': !!work.img }">
                        <h3 class="text-xl font-bold">{{ work.name }}</h3>
                        <div class="flex flex-row gap-x-2 flex-wrap text-gray-300 text-base">
                            <span v-for="(tech, index) in work.techs" :key="index">#{{ tech }}</span>
                        </div>
                    </div>
                </a>
            </div>

            <h1 class="mb-4 flex flex-row items-center mt-8">
                <img src="file.png" class="h-8 w-8" />
                <span class="ml-2 font-bold text-2xl font-extrabold">technologies</span>
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
                { name: 'PHP', logo: 'php-1.svg' },
            ],
            [
                { name: 'SQL', logo: 'mysql-6.svg' },
                { name: 'MongoDB', logo: 'mongodb-icon-1.svg' },
                { name: 'Firebase', logo: 'firebase-1.svg' },
                { name: 'Neo4j', logo: 'neo4j.svg' },
            ],
        ].map(items => items.sort((a, b) => {
            if (a.name > b.name) return 1
            if (b.name > a.name) return -1
            return 0
        }))

        return {
            techs,
            works,
            zoom: false,
        }
    },

    mounted() {
        if (matchMedia('(pointer: fine)').matches)
            this.window.addEventListener('mouseenter', this.mouseenter)
    },

    destroyed() {
        this.window.removeEventListener('mouseenter', this.mouseenter)
        this.window.addEventListener('mouseleave', this.mouseleave)
        removeEventListener('mousemove', this.mousemove)
    },

    computed: {
        /**
         * @returns {HTMLElement}
         */
        window() {
            return this.$refs['area']
        },

        /**
         * @returns {HTMLElement}
         */
        zone() {
            return this.$refs['el']
        },
    },

    methods: {
        zoomIn() {
            const me = this.$refs['me']
            const rect = me.getBoundingClientRect()

            const zoom = this.$refs['zoom']
            zoom.style.height = rect.height + 'px'
            zoom.style.width = rect.width + 'px'
            zoom.style.top = rect.top + 'px'
            zoom.style.left = rect.left + 'px'

            const { default: anime } = require('animejs')

            this.zoom = true

            anime({
                easing: 'easeInOutQuad',
                duration: 500,
                targets: zoom,
                height: [rect.height, innerHeight],
                width: [rect.width, innerWidth],
                top: [rect.top, 0],
                left: [rect.left, 0],
            })
        },

        zoomOut() {
            const zoom = this.$refs['zoom']
            const me = this.$refs['me']
            const rect = me.getBoundingClientRect()

            const { default: anime } = require('animejs')

            anime({
                easing: 'easeInOutQuad',
                duration: 500,
                targets: zoom,
                height: [innerHeight, rect.height],
                width: [innerWidth, rect.width],
                top: [0, rect.top],
                left: [0, rect.left],
                complete: () => {
                    this.zoom = false
                }
            })
        },

        /**
         * @param {MouseEvent} event
         */
        mousemove(event) {
            this.move(event)
        },

        /**
         * @param {MouseEvent} event
         */
        move(event) {
            Object.assign(this.zone.style, {
                left: this.left(event.x),
                top: this.top(event.y)
            })
        },

        /**
         * @param {MouseEvent} event
         */
        mouseenter(event) {
            this.move(event)

            addEventListener('mousemove', this.mousemove)
            this.window.addEventListener('mouseleave', this.mouseleave)
        },

        mouseleave() {
            removeEventListener('mousemove', this.mousemove)
            this.zone.style.left = ((innerWidth / 2) - 320) + 'px'
        },

        /**
         * @param {number} x
         * @returns {string}
         */
        left(x) {
            const width = 640
            const rect = this.zone.getBoundingClientRect()

            if (x <= 16) return '0px'
            if (x >= (innerWidth - 16)) return (innerWidth - width) + 'px'
            if (x < (rect.x + 16)) return (x - 16) + 'px'
            if (x > ((rect.x + width) - 16)) return ((x - width) + 16) + 'px'

            return rect.x + 'px'
        },

        /**
         * @param {number} y
         * @returns {string}
         */
        top(y) {
            const hiddenHeight = this.zone.offsetHeight - innerHeight
            const percent = (y * 100) / innerHeight

            return (-((hiddenHeight * percent) / 100)) + 'px'
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

/* #area {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    color: #f3f4f6;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    overflow: hidden;
} */

/* @media (pointer: coarse), (pointer: none) {
    #area {
        overflow: auto;
    }

    #el {
        left: unset;
        top: unset;
        position: unset;
        margin-left: auto;
        margin-right: auto;
    }
} */

#area {
    overflow: auto;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    color: #f3f4f6;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
}

@media (pointer: fine) {
    #area {
        position: relative;
        overflow: hidden;
    }

    #el {
        position: absolute;
        left: calc(50vw - 320px);
        top: 0px;

        transition-property: left, top;
        transition-duration: 150ms;
        transition-timing-function: ease-out;
    }
}

#el {
    display: flex;
    flex-direction: column;
    padding: 32px 16px;
    z-index: 10;
    max-width: 640px;
    margin-right: auto;
    margin-left: auto;
}
</style>
