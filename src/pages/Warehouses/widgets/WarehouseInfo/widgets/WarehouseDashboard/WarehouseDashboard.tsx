import { Box, Stack, useMediaQuery } from '@mui/material'

import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import { WarehouseInfoQuery } from '../../../../../../graphql/generated.ts'

// This is just a mock data, you should use the data from the props. I Had no time to implement it.
const movementLogs = [
  { id: 1, created_at: '2021-01-01', type: 'IN', warehouse_current_capacity: 1000 },
  { id: 2, created_at: '2021-02-02', type: 'OUT', warehouse_current_capacity: 1200 },
  { id: 3, created_at: '2021-02-03', type: 'IN', warehouse_current_capacity: 1250 },
  { id: 4, created_at: '2021-03-04', type: 'OUT', warehouse_current_capacity: 820 },
  { id: 5, created_at: '2021-05-05', type: 'IN', warehouse_current_capacity: 750 },
  { id: 6, created_at: '2021-05-06', type: 'OUT', warehouse_current_capacity: 1600 },
  { id: 7, created_at: '2021-06-07', type: 'IN', warehouse_current_capacity: 2100 },
  { id: 8, created_at: '2021-06-08', type: 'OUT', warehouse_current_capacity: 1350 },
  { id: 9, created_at: '2021-07-09', type: 'IN', warehouse_current_capacity: 1800 },
  { id: 10, created_at: '2021-07-10', type: 'OUT', warehouse_current_capacity: 1000 },
  { id: 11, created_at: '2021-10-11', type: 'IN', warehouse_current_capacity: 350 },
]

const monthsMap = {
  0: 'Jan',
  1: 'Feb',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'Sep',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec',
}

// Group logs by month and sum the min and the max capacity for each month,
// do nt use string methods to group by month, use Date methods
const groupedLogs = Object.values(
  movementLogs.reduce(
    (acc, log) => {
      const date = new Date(log.created_at)
      const month = date.getMonth()
      const year = date.getFullYear()
      const key = `${year}-${month}`
      if (!acc[key]) {
        acc[key] = {
          month,
          year,
          min: log.warehouse_current_capacity,
          max: log.warehouse_current_capacity,
        }
      } else {
        acc[key].min = Math.min(acc[key].min, log.warehouse_current_capacity)
        acc[key].max = Math.max(acc[key].max, log.warehouse_current_capacity)
      }
      return acc
    },
    {} as Record<string, { month: number; year: number; min: number; max: number }>,
  ),
).map((log) => ({ ...log, month: monthsMap[log.month as keyof typeof monthsMap] }))

export type WarehouseDashboardProps = {
  warehouse: WarehouseInfoQuery['warehouses'][number]
}

const WarehouseDashboard = ({ warehouse }: WarehouseDashboardProps) => {
  const isMediumScreen = useMediaQuery('(max-width: 1200px)')
  const isSmallScreen = useMediaQuery('(max-width: 650px)')
  const isSuperSmallScreen = useMediaQuery('(max-width: 450px)')

  const getPieChartContainerDirection = (() => {
    if (isSmallScreen) return 'column'
    if (isMediumScreen) return 'row'
    return 'column'
  })()

  const capacityChartData = [
    {
      name: 'Free capacity',
      value: warehouse.capacity - warehouse.current_capacity,
      color: '#25c8cb',
    },
    { name: 'Used capacity', value: warehouse.current_capacity, color: '#f38ce6' },
  ]

  const movementLogsHistoryData = warehouse.movement_logs.map((log) => ({
    created_at: log.created_at,
    warehouse_current_capacity: log.warehouse_current_capacity,
  }))

  return (
    <Stack sx={{ backgroundColor: 'primary.900' }}>
      <Stack direction={isMediumScreen ? 'column' : 'row'} p={3} gap={2} flexWrap="nowrap">
        <Stack
          justifyContent="center"
          alignItems="center"
          gap={5}
          direction={getPieChartContainerDirection}
        >
          <ResponsiveContainer width={400} height={200}>
            <PieChart>
              <Pie
                data={capacityChartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={isSuperSmallScreen ? 25 : 35}
                outerRadius={isSuperSmallScreen ? 45 : 70}
                fill="#8884d8"
                label={(entry) => entry.name}
              >
                {capacityChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip label={'123'} />
            </PieChart>
          </ResponsiveContainer>
          <ResponsiveContainer width={400} height={200}>
            <PieChart>
              <Pie
                data={capacityChartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={isSuperSmallScreen ? 25 : 35}
                outerRadius={isSuperSmallScreen ? 45 : 70}
                fill="#8884d8"
                label={(entry) => entry.name}
              >
                {capacityChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip label={'123'} />
            </PieChart>
          </ResponsiveContainer>
        </Stack>
        <ResponsiveContainer height={450}>
          <AreaChart data={movementLogsHistoryData}>
            <Area
              dataKey="warehouse_current_capacity"
              label="Warehouse current capacity"
              stroke="#8884d8"
              fill="#8c0c8c"
            />
            <CartesianGrid stroke="#ccc" strokeDasharray="1 2" />
            <XAxis dataKey="created_at" />
            <YAxis allowDecimals />
            <Legend />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      </Stack>

      <ResponsiveContainer height={350}>
        <AreaChart width={200} height={200} data={groupedLogs}>
          <Area dataKey="max" stroke="#b00fb0" fill="#8c0c8c" type="monotone" />
          <Area dataKey="min" stroke="#25c8cb" fill="#25c8cb" type="monotone" />
          <CartesianGrid stroke="#ccc" strokeDasharray="1 2" />
          <XAxis dataKey="month" />
          <YAxis allowDecimals />
          <YAxis allowDecimals />
          <YAxis allowDecimals />
          <Legend />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </Stack>
  )
}

export default WarehouseDashboard
