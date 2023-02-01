// 기본값이 light인 ThemeContext
const ThemeContext = React.createContext('light');

// 로그인한 유저정보를 담는 UserContext
const UserContext = React.createContext({
  name: 'Guest'
});

function App(props) {
  const { signedInUser, theme } = props;

  return (
    <ThemeContext.Provider value={theme}>
      <UserContext.Provider value={signedInUser}>
        <Layout />
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

function Layout(props) {
  return (
    <div>
      <Sidebar />
      <Content />
    </div>
  );
}

function Content() {
  return (
    <ThemeContext.Consumer>    {/* Provider에 정보를 받아오기 위해 Consumer를 쓰고, 그 안에 함수를 넣는다 */}
      {theme => (
        <UserContext.Consumer>
          {user => (
            <ProfilePage user={user} theme={theme} />
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
}