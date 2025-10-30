import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getUserFriends } from "../lib/api.js";
import NoFriendsFound from "../components/NoFriendsFound.jsx";
import FriendCard from "../components/FriendCard.jsx";

const FriendsPage = () => {
  const { data: friends, isLoading: loadingFriends } = useQuery({
    queryKey: ["friends"],
    queryFn: getUserFriends,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-base-content mb-2">
            My Friends
          </h1>
          {!loadingFriends && friends?.length > 0 && (
            <p className="text-base-content/70">
              You have {friends.length} {friends.length === 1 ? 'friend' : 'friends'}
            </p>
          )}
        </div>

        {/* Content Section */}
        {loadingFriends ? (
          <div className="flex flex-col items-center justify-center py-20">
            <span className="loading loading-spinner loading-lg text-primary mb-4" />
            <p className="text-base-content/60">Loading your friends...</p>
          </div>
        ) : friends?.length === 0 ? (
          <NoFriendsFound />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {friends.map((friend) => (
              <FriendCard key={friend._id} friend={friend} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendsPage;