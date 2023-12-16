const ProfileStats = ({ userData }) => {
  const {
    allTimeSpend,
    totalSpendThisMonth,
    mostFrequentService,
    memberSince
  } = userData;
  return (
    <div className="profile-stats flex flex-col space-y-2">
      <h4 className="text-lg font-semibold pt-1 mt-4">User Stats</h4>
      <div className="profile-stats__item">
        <div className="profile-stats__item__label font-bold">
          All Time Spend
        </div>
        <div className="profile-stats__item__value ">{allTimeSpend}</div>
      </div>
      <div className="profile-stats__item ">
        <div className="profile-stats__item__label font-bold">
          Total Spend This Month
        </div>
        <div className="profile-stats__item__value">{totalSpendThisMonth}</div>
      </div>
      <div className="profile-stats__item">
        <div className="profile-stats__item__label font-bold">
          Most Frequent Service
        </div>
        <div className="profile-stats__item__value ">{mostFrequentService}</div>
      </div>
      <div className="profile-stats__item">
        <div className="profile-stats__item__label font-bold">Member Since</div>
        <div className="profile-stats__item__value">{memberSince}</div>
      </div>
    </div>
  );
};

export default ProfileStats;
