const ProfileStats = ({ userData }) => {
  const {
    allTimeSpend,
    totalSpendThisMonth,
    mostFrequentService,
    memberSince
  } = userData;
  return (
    <div className="profile-stats mr-8">
      <h4 className="text-lg font-semibold pt-1 mt-4">Stats</h4>
      <div className="flex flex-row space-x-2">
        <p className="text-sm font-bold">All Time Spend:</p>
        <p className="text-sm text-mute-foreground">{allTimeSpend}</p>
      </div>
      <div className="flex flex-row space-x-2">
        <p className="text-sm font-bold">This Month:</p>
        <p className="text-sm text-mute-foreground">{totalSpendThisMonth}</p>
      </div>
      <div className="flex flex-row space-x-2">
        <p className="text-sm font-bold">Frequent Service:</p>
        <p className="text-sm text-mute-foreground">{mostFrequentService}</p>
      </div>
      <div className="flex flex-row space-x-2">
        <p className="text-sm font-bold">Member Since:</p>
        <p className="text-sm text-mute-foreground">{memberSince}</p>
      </div>
    </div>
  );
};

export default ProfileStats;
