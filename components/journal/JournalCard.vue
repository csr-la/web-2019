<template>
  <div class="mt-8 bg-white shadow-md rounded overflow-hidden">
    <div @click="toggleItem" class="px-6 sm:px-10 md:px-20 py-10 hover:bg-gray-100 cursor-pointer flex items-center justify-between select-none transition-100 transition-all transition-ease-in-out">
      <div>
        <h2 class="block font-sans uppercase tracking-wider text-lg">{{ $t('pages.' + country) }}</h2>
        <span class="mt-2 inline-block font-bold text-lg sm:text-2xl leading-tight">{{ timespan }}</span>
      </div>
      <span :class="'text-base-blue-500'">
        <icon-base v-if="!showItem" :twClass="['w-12', 'h-12']" icon-name="add-circle"><icon-add-circle /></icon-base>
        <icon-base v-if="showItem" :twClass="['w-12', 'h-12']" icon-name="remove-circle"><icon-remove-circle /></icon-base>
      </span>
    </div>
    <div :class="[!showItem ? 'invisible-hidden' : '']" class="journal-item px-6 sm:px-10 md:px-20 pb-16 transition-all transition-250 transition-linear">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import smoothReflow from 'vue-smooth-reflow'

export default {
  mixins: [smoothReflow],
  props: ['country', 'fromDay', 'fromMonth', 'toDay', 'toMonth'],
  data () {
    return {
      showItem: false
    }
  },
  computed: {
    timespan: function () {
      const sameMonth = this.fromMonth === this.toMonth

      const fromMonth = this.$t('journal.months.' + this.fromMonth)
      const toMonth = this.$t('journal.months.' + this.toMonth)

      if (this.$i18n.locale === 'de') {
        if (sameMonth) {
          return `${this.fromDay}. – ${this.toDay}. ${fromMonth} 2017`
        } else {
          return `${this.fromDay}. ${fromMonth} – ${this.toDay}. ${toMonth} 2017`
        }
      } else if (this.$i18n.locale === 'en') {
        if (sameMonth) {
          return `${fromMonth} ${this.fromDay} – ${this.toDay}, 2017`
        } else {
          return `${fromMonth} ${this.fromDay} – ${toMonth} ${this.toDay}, 2017`
        }
      } else if (this.$i18n.locale === 'es') {
        if (sameMonth) {
          return `${this.fromDay}. – ${this.toDay}. de ${fromMonth} de 2017`
        } else {
          return `${this.fromDay}. de ${fromMonth} – ${this.toDay}. de ${toMonth} de 2017`
        }
      } else if (this.$i18n.locale === 'pt') {
        if (sameMonth) {
          return `${this.fromDay} – ${this.toDay} de ${fromMonth} de 2017`
        } else {
          return `${this.fromDay} de ${fromMonth} – ${this.toDay} de ${toMonth} de 2017`
        }
      }
    }
  },
  methods: {
    toggleItem() {
      this.showItem = !this.showItem
    }
  },
  mounted(){
    this.$smoothReflow({
      el: '.journal-item',
      property: ['height']
    })
  },
}
</script>

<style lang="postcss">
  .page-journal .secondary {
    fill: #BFCCE6;
  }

  .page-journal .tertiary {
    fill: #003399;
  }

  @screen lg {
    .first-journal-card {
      @apply mt-0 rounded-t-none;
    }
  }
</style>
