import { motion } from 'framer-motion'
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts'

const data = [
  { name: 'Jan', behavioral: 40, recovery: 24, engagement: 35 },
  { name: 'Feb', behavioral: 30, recovery: 28, engagement: 42 },
  { name: 'Mar', behavioral: 45, recovery: 32, engagement: 38 },
  { name: 'Apr', behavioral: 50, recovery: 45, engagement: 55 },
  { name: 'May', behavioral: 35, recovery: 42, engagement: 48 },
  { name: 'Jun', behavioral: 60, recovery: 55, engagement: 62 },
  { name: 'Jul', behavioral: 55, recovery: 52, engagement: 58 },
  { name: 'Aug', behavioral: 70, recovery: 65, engagement: 72 },
  { name: 'Sep', behavioral: 65, recovery: 68, engagement: 78 },
  { name: 'Oct', behavioral: 80, recovery: 75, engagement: 85 },
  { name: 'Nov', behavioral: 75, recovery: 78, engagement: 82 },
  { name: 'Dec', behavioral: 90, recovery: 85, engagement: 95 },
]

export default function AnimatedChart() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="h-48"
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorBehavioral" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="oklch(0.72 0.15 195)" stopOpacity={0.4} />
              <stop offset="95%" stopColor="oklch(0.72 0.15 195)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorRecovery" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="oklch(0.75 0.12 85)" stopOpacity={0.4} />
              <stop offset="95%" stopColor="oklch(0.75 0.12 85)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip
            contentStyle={{
              backgroundColor: 'oklch(0.10 0.01 260)',
              border: '1px solid oklch(0.20 0.01 260)',
              borderRadius: '8px',
              color: 'oklch(0.95 0 0)',
            }}
          />
          <Area
            type="monotone"
            dataKey="behavioral"
            stroke="oklch(0.72 0.15 195)"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorBehavioral)"
          />
          <Area
            type="monotone"
            dataKey="recovery"
            stroke="oklch(0.75 0.12 85)"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorRecovery)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
