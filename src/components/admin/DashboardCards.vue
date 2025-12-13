<template>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
    <DashboardStatCard v-for="card in cards" :key="card.label" v-bind="card" />
  </div>
</template>

<script setup lang="ts">
import DashboardStatCard from '@/components/admin/DashboardStatCard.vue'

const cards = [
  {
    label: 'Revenue',
    value: '$5,820',
    percent: '+38%',
    period: 'Last Month',
    icon: 'database',
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary',
    titleColor: 'text-primary',
    percentColor: 'text-success',

    chart: {
      series: [
        {
          name: 'Revenue',
          data: [10, 18, 15, 25, 22, 30, 28, 40]
        }
      ],
      options: {
        chart: { sparkline: { enabled: true } },
        stroke: { curve: 'smooth', width: 2 },
        fill: {
          type: 'gradient',
          gradient: { opacityFrom: 0.4, opacityTo: 0.1 }
        },
        colors: ['#727cf5'],
        tooltip: { enabled: false }
      }
    }
  },

  {
    label: 'Orders',
    value: '1,250',
    percent: '+12%',
    period: 'This Week',
    icon: 'shopping-bag',
    iconBg: 'bg-success/10',
    iconColor: 'text-success',
    titleColor: 'text-success',
    percentColor: 'text-success'
  },

  {
    label: 'Customers',
    value: '4,500',
    percent: '+8%',
    period: 'This Month',
    icon: 'users',
    iconBg: 'bg-info/10',
    iconColor: 'text-info',
    titleColor: 'text-info',
    percentColor: 'text-success'
  },

  {
    label: 'Growth',
    value: '12%',
    percent: '-2%',
    period: 'Last Month',
    icon: 'trending-up',
    iconBg: 'bg-warning/10',
    iconColor: 'text-warning',
    titleColor: 'text-warning',
    percentColor: 'text-danger'
  }
]
</script>
