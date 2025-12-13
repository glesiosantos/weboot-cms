<template>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
    <!-- Sales Overview -->
    <apexchart
      type="line"
      height="150"
      :options="chart1.options"
      :series="chart1.series"
      class="bg-white p-4 rounded-xl shadow"
    />

    <!-- Revenue -->
    <apexchart
      type="bar"
      height="150"
      :options="chart2.options"
      :series="chart2.series"
      class="bg-white p-4 rounded-xl shadow"
    />

    <!-- Mixed -->
    <apexchart
      type="area"
      height="150"
      :options="chart3.options"
      :series="chart3.series"
      class="bg-white p-4 rounded-xl shadow"
    />

    <!-- Radial -->
    <apexchart
      type="radialBar"
      height="150"
      :options="chart4.options"
      :series="chart4.series"
      class="bg-white p-4 rounded-xl shadow"
    />
  </div>
</template>

<script setup lang="ts">
const chart1 = {
  series: [
    {
      name: 'Sales',
      data: [10, 40, 35, 60, 55, 70, 90]
    }
  ],
  options: {
    chart: { toolbar: { show: false }, sparkline: { enabled: true } },
    stroke: { curve: 'smooth', width: 3 },
    colors: ['#727cf5']
  }
}

const chart2 = {
  series: [
    {
      name: 'Revenue',
      data: [44, 55, 41, 67, 22, 43]
    }
  ],
  options: {
    chart: { toolbar: { show: false }, sparkline: { enabled: true } },
    plotOptions: { bar: { columnWidth: '45%' } },
    colors: ['#0acf97']
  }
}

const chart3 = {
  series: [
    {
      name: 'Subscribers',
      data: [10, 15, 12, 25, 22, 25, 30]
    }
  ],
  options: {
    chart: { toolbar: { show: false }, sparkline: { enabled: true } },
    stroke: { curve: 'smooth' },
    colors: ['#39afd1']
  }
}

const chart4 = {
  series: [75],
  options: {
    chart: { sparkline: { enabled: true } },
    colors: ['#ffbc00'],
    plotOptions: {
      radialBar: {
        hollow: { size: '60%' },
        track: { background: '#e9ecef' }
      }
    }
  }
}
</script>
