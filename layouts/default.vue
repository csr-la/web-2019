<template>
  <div>
    <nuxt />
    <FooterContent/>
    <ScrollToTop/>
  </div>
</template>

<script>
import FooterContent from '@/components/common/FooterContent'
import ScrollToTop from '@/components/common/ScrollToTop'

export default {
  components: {
    FooterContent,
    ScrollToTop
  },
  props: ['active'],
  head () {
    const i18nSeo = this.$nuxtI18nSeo()
    return { 
      title: this.$t('siteTitleClean'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('metaDescription')
        },
        ...i18nSeo.meta
      ],
    }
  }
}
</script>

<style lang="postcss">
  body {
    @apply font-sans text-gray-800;
  }
  main p {
    @apply mt-5 font-serif text-lg;
  }

  .clearfix-left::after {
  content: "";
  display: table;
  clear: left;
  }

  .title {
    @apply mt-2 inline-block font-bold text-3xl leading-tight;
  }

  .clear-right {
    clear: right;
  }

  .invisible-hidden {
    position: absolute;
    left: -9999px;
    max-height: 0px;
    overflow: hidden;
    opacity: 0;
  }

  .copytext a {
    @apply font-sans text-base text-gray-600 border-b border-gray-400 transition-all transition-100 transition-ease-in-out;
  }

  .copytext a:hover {
    @apply text-gray-900 border-gray-900;
  }

  img {
    @apply transition-opacity transition-250 transition-ease-in-out text-transparent;
  }

  img[lazy=loading] {
    @apply opacity-0;
  }

  img[lazy=loaded] {
    @apply opacity-100;
  }
</style>
