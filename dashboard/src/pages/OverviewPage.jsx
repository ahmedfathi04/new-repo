import Header from "../components/common/Header";
import { Zap, Users, BarChart } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import { SalesOverView } from '../components/overview/SalesOverView.jsx';
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesChannelChart from "../components/overview/SalesChannelChart";
import { StatsCard } from "../components/common/StatsCard";
import { motion } from 'framer-motion';

const OverviewPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title='Overview' />

    <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-80'>
      
        <motion.div
        className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }} 
      >
        <StatsCard name='Total Sales' icon={Zap} value='$12,345' color='#6366F1'/>
        <StatsCard name='New Users' icon={Users} value='1,234' color='#8B5CF6'/>
        <StatsCard name='Total Products' icon={ShoppingBag} value='567' color='#EC4899'/>
        <StatsCard name='Conversion Rate' icon={BarChart} value='12.5%' color='#10B981'/>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <SalesOverView />
          <CategoryDistributionChart />
          <SalesChannelChart />
        </div>

    </main>
    </div>
  )
}

export default OverviewPage