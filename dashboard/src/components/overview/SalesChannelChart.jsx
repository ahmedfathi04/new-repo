import {motion} from 'framer-motion';
import { CartesianGrid, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';







const COLORS = ["#8B5CF6", "#3B82F6", "#22C55E", "#F59E0B", "#F43F5E"];


const SalesChannelData = [
  { name: "Website", value: 45600 },
  { name: "Mobile App", value: 38200 },
  { name: "Social Media", value: 18700}
];


const SalesChannelChart = () => {
  return (
    <motion.div
    className='bg-gray-800 bg-opacity-50 background-blur-md rounded-xl p-6 border border-gray-700'
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    >
    <h2 className='text-lg font-semibold mb-4 text-gray-100'>Sales Channel</h2>
    <div className='h-80'>
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <BarChart>
        data={SalesChannelData}
        <CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
        <XAxis dataKey='name' stroke='#9ca3af' />
        <YAxis stroke='#9ca3af' />
        <Tooltip
        contentStyle={{
          backgroundColor: "rgba(31,41,55,0.8)",
          borderColor: "#4B5563"
        }}
        itemStyle={{ color: "#ESE7EB" }}
        />
        <Legend />
          <Bar
            dataKey={"value"} fill="#8884d8"
            >
              {SalesChannelData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>

    </motion.div>
      
  )
}

export default SalesChannelChart