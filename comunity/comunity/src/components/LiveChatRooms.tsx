import React from 'react';
import { MessageSquareIcon, MicIcon, CalendarIcon, BellIcon, UsersIcon } from 'lucide-react';
const LiveChatRooms = () => {
  const chatRooms = [{
    id: 1,
    type: 'voice',
    title: "Live Debate: Is 'Train to Pakistan' still relevant today?",
    participants: 24,
    time: '7:00 PM IST',
    active: true
  }, {
    id: 2,
    type: 'chat',
    title: "Exploring Jhumpa Lahiri's portrayal of immigrant experiences",
    participants: 18,
    time: 'Active now'
  }, {
    id: 3,
    type: 'event',
    title: 'AMA with author Amish Tripathi: Mythology in modern fiction',
    participants: 156,
    time: 'Tomorrow, 6:30 PM IST'
  }];
  return <div className="bg-[#1A1A1A] rounded-lg border border-[#0F52BA]/20 overflow-hidden mb-8">
      <div className="bg-gradient-to-r from-[#0F52BA]/20 to-[#8B0000]/20 px-5 py-4 border-b border-[#0F52BA]/20">
        <h2 className="text-xl font-bold text-[#F5F5DC] flex items-center">
          <MessageSquareIcon className="mr-2 text-[#8B0000]" size={20} />
          Live Chat & Voice Rooms
        </h2>
      </div>
      <div className="p-5">
        <p className="text-[#F5F5DC]/80 text-sm mb-4">
          Join real-time conversations with fellow literature enthusiasts. Voice
          rooms feature live debates and read-along sessions.
        </p>
        <div className="space-y-4">
          {chatRooms.map(room => <div key={room.id} className={`bg-[#0D0F1F] rounded-lg p-4 border ${room.active ? 'border-[#8B0000]/50 shadow-[0_0_15px_rgba(139,0,0,0.2)]' : 'border-[#F5F5DC]/10'}`}>
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-full ${room.type === 'voice' ? 'bg-[#8B0000]/20' : room.type === 'chat' ? 'bg-[#0F52BA]/20' : 'bg-[#FFD700]/20'}`}>
                    {room.type === 'voice' && <MicIcon size={16} className="text-[#8B0000]" />}
                    {room.type === 'chat' && <MessageSquareIcon size={16} className="text-[#0F52BA]" />}
                    {room.type === 'event' && <CalendarIcon size={16} className="text-[#FFD700]" />}
                  </div>
                  <div>
                    <h3 className="font-medium text-[#F5F5DC]">{room.title}</h3>
                    <div className="flex items-center mt-1 text-xs text-[#F5F5DC]/60">
                      <UsersIcon size={12} className="mr-1" />
                      <span>{room.participants} participants</span>
                      <span className="mx-2">•</span>
                      <span>{room.time}</span>
                    </div>
                  </div>
                </div>
                {room.type === 'event' ? <button className="flex items-center space-x-1 bg-[#0D0F1F] border border-[#FFD700]/30 hover:border-[#FFD700] text-[#FFD700] text-xs py-1 px-2 rounded-md transition-colors">
                    <BellIcon size={12} />
                    <span>Remind me</span>
                  </button> : <button className={`text-xs py-1 px-3 rounded-md ${room.active ? 'bg-[#8B0000] hover:bg-[#8B0000]/80 text-white' : 'bg-[#0F52BA] hover:bg-[#0F52BA]/80 text-white'} transition-colors`}>
                    Join
                  </button>}
              </div>
              {room.active && <div className="mt-3 flex -space-x-2">
                  {[...Array(5)].map((_, idx) => <img key={idx} src={`https://i.pravatar.cc/32?img=${idx + 10}`} alt="Participant" className="w-6 h-6 rounded-full border border-[#0D0F1F]" />)}
                  <div className="w-6 h-6 rounded-full bg-[#0F52BA]/30 flex items-center justify-center text-xs text-[#F5F5DC]/70 border border-[#0D0F1F]">
                    +{room.participants - 5}
                  </div>
                </div>}
            </div>)}
        </div>
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-[#F5F5DC]/10">
          <span className="text-xs text-[#F5F5DC]/60">
            Upcoming: 12 scheduled events this week
          </span>
          <button className="text-xs text-[#0F52BA] hover:text-[#0F52BA]/80 transition-colors">
            View Calendar
          </button>
        </div>
      </div>
    </div>;
};
export default LiveChatRooms;