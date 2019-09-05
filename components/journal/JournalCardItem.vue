<template>
  <div class="mt-14">
    <div :class="'bg-' + country + '-500'" class="inline-block py-2 px-4 rounded-t">
      <span class="sm:mr-1 inline-block text-xs sm:text-sm text-white tracking-wide font-bold leading-none">{{ date }}, {{ $t('pages.' + country) }}</span>
    </div>
    <div class="copytext bg-gray-200 rounded-b rounded-tr shadow-lg overflow-hidden">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['weekday', 'day', 'month', 'country'],
  computed: {
    date: function () {
      const weekday = this.$t('journal.weekdays.' + this.weekday)
      const month = this.$t('journal.months.' + this.month)

      if (this.$i18n.locale === 'de') {
        return `${weekday}, ${this.day}. ${month} 2017`
      } else if (this.$i18n.locale === 'en') {
        return `${weekday}, ${month} ${this.day}, 2017`
      } else if (this.$i18n.locale === 'es') {
        return `${weekday}, ${this.day} de ${month} de 2017`
      } else if (this.$i18n.locale === 'pt') {
        return `${weekday}, ${this.day} de ${month} de 2017`
      }
    }
  }
}
</script>

<style>

</style>
