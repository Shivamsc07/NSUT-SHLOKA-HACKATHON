import React from 'react';
import { UsersIcon, MessageSquareIcon, UserPlusIcon, EditIcon, HeartIcon, BellIcon } from 'lucide-react';
const CommunityFeatures = () => {
  return <section className="py-16 px-4 bg-gradient-to-b from-[#0D0F1F] to-[#0D0F1F]/95">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5DC] mb-4">
            <span className="text-[#FFD700]">Community</span> & Collaboration
          </h2>
          <p className="text-lg text-[#F5F5DC]/80 max-w-2xl mx-auto">
            Connect with fellow storytellers, collaborate on projects, and grow
            together as writers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Co-Writing Mode */}
          <div className="bg-[#1A1A1A] border border-[#DAA520] rounded-lg p-6">
            <div className="flex items-center mb-6">
              <UsersIcon className="h-6 w-6 text-[#FFD700] mr-2" />
              <h3 className="text-xl font-bold text-[#F5F5DC]">
                Co-Writing Mode
              </h3>
            </div>
            <div className="bg-[#0D0F1F] rounded-lg p-6 border border-[#DAA520]/30 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-[#F5F5DC]">
                  Active Collaboration: "The Lost Temples"
                </h4>
                <span className="px-3 py-1 bg-[#0F52BA]/20 text-[#F5F5DC]/90 text-xs rounded-full border border-[#0F52BA]/30">
                  In Progress
                </span>
              </div>
              <div className="flex -space-x-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#0F52BA]/20 flex items-center justify-center border border-[#DAA520]/50 z-30">
                  <span className="text-xs font-medium">AR</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#8B0000]/20 flex items-center justify-center border border-[#DAA520]/50 z-20">
                  <span className="text-xs font-medium">VM</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#0F52BA]/20 flex items-center justify-center border border-[#DAA520]/50 z-10">
                  <span className="text-xs font-medium">KS</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#0D0F1F] flex items-center justify-center border border-[#DAA520]/50">
                  <span className="text-xs font-medium">+2</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-[#F5F5DC]/70 mb-4">
                <span>Last edited by Vikram Mehta</span>
                <span>2 hours ago</span>
              </div>
              <div className="bg-[#0D0F1F]/50 p-4 rounded border border-[#DAA520]/20 mb-4">
                <p className="text-[#F5F5DC]/80 text-sm italic">
                  "...The ancient doorway creaked open, revealing a chamber
                  untouched for centuries. Golden statues of forgotten deities
                  lined the walls, their gemstone eyes gleaming in the
                  torchlight..."
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-[#F5F5DC]/70">
                  <EditIcon className="h-4 w-4 mr-1" />
                  <span>Chapter 7 in progress</span>
                </div>
                <button className="px-4 py-1.5 bg-[#FFD700] text-[#0D0F1F] text-sm font-medium rounded hover:bg-[#FFD700]/90">
                  Continue Writing
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <button className="flex-1 flex items-center justify-center px-4 py-3 bg-[#0D0F1F] text-[#FFD700] rounded-md hover:bg-[#0D0F1F]/70 border border-[#DAA520]/30">
                <UsersIcon className="h-5 w-5 mr-2" />
                <span>Start New Collaboration</span>
              </button>
              <button className="flex-1 flex items-center justify-center px-4 py-3 bg-[#0D0F1F] text-[#FFD700] rounded-md hover:bg-[#0D0F1F]/70 border border-[#DAA520]/30">
                <MessageSquareIcon className="h-5 w-5 mr-2" />
                <span>Join Existing Project</span>
              </button>
            </div>
          </div>
          {/* Request Feedback */}
          <div className="bg-[#1A1A1A] border border-[#DAA520] rounded-lg p-6">
            <div className="flex items-center mb-6">
              <MessageSquareIcon className="h-6 w-6 text-[#FFD700] mr-2" />
              <h3 className="text-xl font-bold text-[#F5F5DC]">
                Request Feedback
              </h3>
            </div>
            <div className="bg-[#0D0F1F] rounded-lg p-6 border border-[#DAA520]/30 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-[#F5F5DC]">
                  Your Feedback Requests
                </h4>
                <button className="text-xs text-[#FFD700]">View All</button>
              </div>
              <div className="space-y-4 mb-4">
                <div className="bg-[#0D0F1F]/50 p-4 rounded border border-[#DAA520]/20 flex items-center justify-between">
                  <div>
                    <h5 className="font-medium text-[#F5F5DC] mb-1">
                      The Ancient Scroll of Wisdom
                    </h5>
                    <p className="text-xs text-[#F5F5DC]/70">
                      Requested 2 days ago • 3/5 responses received
                    </p>
                  </div>
                  <button className="px-3 py-1 bg-[#0F52BA]/20 text-[#F5F5DC] text-xs rounded border border-[#0F52BA]/30">
                    View Responses
                  </button>
                </div>
                <div className="bg-[#0D0F1F]/50 p-4 rounded border border-[#DAA520]/20 flex items-center justify-between">
                  <div>
                    <h5 className="font-medium text-[#F5F5DC] mb-1">
                      Whispers of the Monsoon
                    </h5>
                    <p className="text-xs text-[#F5F5DC]/70">
                      Requested 1 week ago • 5/5 responses received
                    </p>
                  </div>
                  <button className="px-3 py-1 bg-[#0F52BA]/20 text-[#F5F5DC] text-xs rounded border border-[#0F52BA]/30">
                    View Responses
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="font-medium text-[#F5F5DC] mb-2">
                  Feedback Requests From Others
                </h4>
                <div className="bg-[#0D0F1F]/50 p-4 rounded border border-[#DAA520]/20 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-[#0F52BA]/20 flex items-center justify-center mr-3 border border-[#DAA520]/50">
                      <span className="text-xs font-medium">PP</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-[#F5F5DC] mb-1">
                        Priya Patel needs feedback on "Echoes of Partition"
                      </h5>
                      <p className="text-xs text-[#F5F5DC]/70">
                        Requested 1 day ago • Historical Fiction
                      </p>
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-[#FFD700] text-[#0D0F1F] text-xs font-medium rounded hover:bg-[#FFD700]/90">
                    Provide Feedback
                  </button>
                </div>
              </div>
            </div>
            <button className="w-full flex items-center justify-center px-4 py-3 bg-[#0D0F1F] text-[#FFD700] rounded-md hover:bg-[#0D0F1F]/70 border border-[#DAA520]/30">
              <MessageSquareIcon className="h-5 w-5 mr-2" />
              <span>Request Feedback on a Story</span>
            </button>
          </div>
        </div>
        {/* Follow Your Favorite Writers */}
        <div className="mt-8 bg-[#1A1A1A] border border-[#DAA520] rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <UserPlusIcon className="h-6 w-6 text-[#FFD700] mr-2" />
              <h3 className="text-xl font-bold text-[#F5F5DC]">
                Follow Your Favorite Writers
              </h3>
            </div>
            <button className="text-sm text-[#FFD700]">View All</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Writer 1 */}
            <div className="bg-[#0D0F1F] rounded-lg p-4 border border-[#DAA520]/30 flex items-start">
              <div className="w-12 h-12 rounded-full bg-[#0F52BA]/20 flex items-center justify-center mr-4 border border-[#DAA520]/50">
                <span className="text-sm font-medium">AS</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-medium text-[#F5F5DC]">Aditi Sharma</h4>
                  <button className="text-[#FFD700] text-sm hover:text-[#FFD700]/80">
                    Follow
                  </button>
                </div>
                <p className="text-xs text-[#F5F5DC]/70 mb-2">
                  Fantasy & Mythology Writer
                </p>
                <div className="flex items-center text-xs text-[#F5F5DC]/60">
                  <span className="flex items-center mr-3">
                    <EditIcon className="h-3 w-3 mr-1" />
                    12 Stories
                  </span>
                  <span className="flex items-center">
                    <HeartIcon className="h-3 w-3 mr-1" />
                    2.4k Likes
                  </span>
                </div>
              </div>
            </div>
            {/* Writer 2 */}
            <div className="bg-[#0D0F1F] rounded-lg p-4 border border-[#DAA520]/30 flex items-start">
              <div className="w-12 h-12 rounded-full bg-[#8B0000]/20 flex items-center justify-center mr-4 border border-[#DAA520]/50">
                <span className="text-sm font-medium">RK</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-medium text-[#F5F5DC]">Raj Kumar</h4>
                  <button className="text-[#F5F5DC]/60 text-sm">
                    Following
                  </button>
                </div>
                <p className="text-xs text-[#F5F5DC]/70 mb-2">
                  Historical Fiction Writer
                </p>
                <div className="flex items-center text-xs text-[#F5F5DC]/60">
                  <span className="flex items-center mr-3">
                    <EditIcon className="h-3 w-3 mr-1" />
                    18 Stories
                  </span>
                  <span className="flex items-center">
                    <HeartIcon className="h-3 w-3 mr-1" />
                    3.1k Likes
                  </span>
                </div>
              </div>
            </div>
            {/* Writer 3 */}
            <div className="bg-[#0D0F1F] rounded-lg p-4 border border-[#DAA520]/30 flex items-start">
              <div className="w-12 h-12 rounded-full bg-[#0F52BA]/20 flex items-center justify-center mr-4 border border-[#DAA520]/50">
                <span className="text-sm font-medium">MK</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-medium text-[#F5F5DC]">Meera Krishnan</h4>
                  <button className="text-[#FFD700] text-sm hover:text-[#FFD700]/80">
                    Follow
                  </button>
                </div>
                <p className="text-xs text-[#F5F5DC]/70 mb-2">
                  Mythology & Romance Writer
                </p>
                <div className="flex items-center text-xs text-[#F5F5DC]/60">
                  <span className="flex items-center mr-3">
                    <EditIcon className="h-3 w-3 mr-1" />9 Stories
                  </span>
                  <span className="flex items-center">
                    <HeartIcon className="h-3 w-3 mr-1" />
                    1.8k Likes
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Follow Confirmation */}
          <div className="mt-4 bg-[#0F52BA]/10 border border-[#0F52BA]/30 rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center">
              <BellIcon className="h-5 w-5 text-[#FFD700] mr-3" />
              <p className="text-[#F5F5DC]/90">
                <span className="text-[#FFD700]">
                  You just followed Aditi Sharma!
                </span>{' '}
                Get notified when she posts her next chapter.
              </p>
            </div>
            <button className="text-sm text-[#FFD700]">
              Manage Notifications
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default CommunityFeatures;