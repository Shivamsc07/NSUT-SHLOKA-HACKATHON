import React from 'react';
import { BarChartIcon, BookIcon, ClockIcon, HeartIcon } from 'lucide-react';
export const InsightsSection = () => {
  return <section className="bg-[#0D0F1F]/70 rounded-2xl p-6 border border-[#DAA520]/20 shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold flex items-center">
          <BarChartIcon size={20} className="mr-2 text-[#DAA520]" />
          <span>Reading Analytics</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <StatCard icon={<BookIcon className="text-[#0F52BA]" size={18} />} label="Books Read" value="42" change="+3 this month" positive={true} />
        <StatCard icon={<ClockIcon className="text-[#8B0000]" size={18} />} label="Reading Time" value="24.5 hrs" change="+2.5 hrs this week" positive={true} />
        <StatCard icon={<HeartIcon className="text-[#FFD700]" size={18} />} label="Favorite Genre" value="Poetry" change="65% of your reads" positive={null} />
        <StatCard icon={<BookIcon className="text-[#DAA520]" size={18} />} label="Completion Rate" value="87%" change="+12% from last month" positive={true} />
      </div>
      <div className="mb-6">
        <h3 className="text-sm uppercase tracking-wider text-[#DAA520] mb-3">
          Reading Progress
        </h3>
        <div className="space-y-3">
          <ProgressBar title="Meghdoot by Kalidasa" progress={75} />
          <ProgressBar title="Gitanjali by R. Tagore" progress={30} />
          <ProgressBar title="Godan by Premchand" progress={90} />
        </div>
      </div>
      <div>
        <h3 className="text-sm uppercase tracking-wider text-[#DAA520] mb-3">
          AI Recommendations
        </h3>
        <div className="bg-[#1A1A1A]/40 rounded-lg p-4 border border-[#DAA520]/10">
          <div className="flex items-start">
            <div className="text-2xl mr-3">🤖</div>
            <div>
              <p className="text-sm text-[#F5F5DC]">
                Based on your interest in Hindi poetry, you might enjoy{' '}
                <span className="text-[#DAA520] font-semibold">"Meghdoot"</span>{' '}
                by Kalidasa.
              </p>
              <div className="mt-2 flex">
                <button className="text-xs bg-[#DAA520]/20 text-[#DAA520] px-3 py-1 rounded-full mr-2 hover:bg-[#DAA520]/30 transition-colors">
                  Add to Library
                </button>
                <button className="text-xs bg-transparent border border-[#F5F5DC]/20 text-[#F5F5DC]/70 px-3 py-1 rounded-full hover:bg-[#F5F5DC]/10 transition-colors">
                  Not Interested
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
const StatCard = ({
  icon,
  label,
  value,
  change,
  positive
}) => {
  let changeColor = 'text-[#F5F5DC]/60';
  if (positive === true) changeColor = 'text-green-400';
  if (positive === false) changeColor = 'text-red-400';
  return <div className="bg-[#1A1A1A]/40 rounded-lg p-4 border border-[#DAA520]/10">
      <div className="flex items-center justify-between mb-2">
        <div className="text-xs text-[#F5F5DC]/70">{label}</div>
        <div className="p-1 bg-[#1A1A1A] rounded-md">{icon}</div>
      </div>
      <div className="text-xl font-semibold text-[#F5F5DC]">{value}</div>
      <div className={`text-xs ${changeColor}`}>{change}</div>
    </div>;
};
const ProgressBar = ({
  title,
  progress
}) => <div>
    <div className="flex justify-between items-center mb-1">
      <div className="text-sm text-[#F5F5DC] truncate">{title}</div>
      <div className="text-xs text-[#F5F5DC]/70">{progress}%</div>
    </div>
    <div className="w-full h-1.5 bg-[#1A1A1A] rounded-full overflow-hidden">
      <div className="h-full bg-gradient-to-r from-[#DAA520] to-[#FFD700]" style={{
      width: `${progress}%`
    }}></div>
    </div>
  </div>;