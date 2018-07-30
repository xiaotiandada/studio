<template>
    <div class="all-wrapper">
      <div class="fade1"></div>

      <v-menu></v-menu>

        <v-section></v-section>

        <v-counters></v-counters>

        <v-sales></v-sales>

        <v-demos-one></v-demos-one>

        <v-accounting></v-accounting>

        <v-demos-two></v-demos-two>

        <v-crm></v-crm>

        <v-demos-three></v-demos-three>

        <v-section-features></v-section-features>

        <v-call></v-call>

        <v-footer></v-footer>

        <div class="display-type"></div>

    </div>
</template>

<script>
import Menu from '@/views/Nav/index'
import Section from '@/views/Section/index'
import Sales from '@/views/Sales/index'
import DemosOne from '@/views/Demos/demosOne'
import DemosTwo from '@/views/Demos/demosTwo'
import DemosThree from '@/views/Demos/demosThree'
import Crm from '@/views/Crm/index'
import Accounting from '@/views/Accounting/index'
import SectionFeatures from '@/views/SectionFeatures/index'
import Features from '@/views/Features/index'
import Call from '@/views/Call/index'
import Footer from '@/views/Footer/index'
import Counters from '@/views/Counters/index'
export default {
  name: 'index',
  components: {
    VMenu: Menu,
    VSection: Section,
    VSales: Sales,
    VDemosOne: DemosOne,
    VDemosTwo: DemosTwo,
    VDemosThree: DemosThree,
    VCrm: Crm,
    VAccounting: Accounting,
    VSectionFeatures: SectionFeatures,
    VFeatures: Features,
    VCall: Call,
    VFooter: Footer,
    VCounters: Counters
  }
}
</script>

<style scoped>

</style>
