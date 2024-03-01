
import user from './profile/user.json';
import Profile from './profile/profile';

export const App = () => {
  return (
    <div>
      <Profile>
        name={user.userName}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      </Profile>
    </div>
  );
};
