import {motion} from 'framer-motion';
import { PieChart, Pie,Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";




const categoryData = [
    {name: "Electronics", value: 4500 },
{ name: "Clothing", value: 3200 },
{ name: "Home & Garden", value: 2800 },
{ name: "Books", value: 2100 },
{ name: "Sports & Outdoors", value: 1900 },
];

const COLORS = ["#8B5CF6", "#3B82F6", "#22C55E", "#F59E0B", "#F43F5E"];


const CategoryDistributionChart = () => {
    return (
    <motion.div
    classNmae='bg-gray-800 bg-opacity-50 background-blur-md rounded-xl p-6 border border-gray-700'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
    >
        <h2
        className='text-lg font-semibold mb-4 text-gray-100'>Category Distribution</h2>
        <div className='h-80'>
            <ResponsiveContainer
                width={"100%"}
                height={"100%"}
            >
                <PieChart>
                    <Pie
                    data={categoryData}
                    dataKey="value"
                    nameKey="name"
                    cx={"50%"}
                    cy={"50%"}
                    labelLine={false}
                    outerRadius={80}
                    fill='#8884d8'
                    label={({name, percent}) => `${name} (${percent.toFixed(0)}%)`}
                    >
                    {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}

                    <Tooltip
                        contentStyle={{
                            backkgroundColor: "rgpa(31,41,55,0.8)",
                            borderColor: "#4B5563"
                        }}
                        itemStyle={{ color: "#ESE7EB" }}
                    />
                        <Legend />
                    </Pie>
                </PieChart>

            </ResponsiveContainer>
        </div>
    </motion.div>
    );
};

export default CategoryDistributionChart