import { React,Fragment,useContext,createContext } from 'react';
import Posts from './Posts'
import data from '../components/data/data.json'


const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = createContext(themes.dark)  



function Home() {

    return (
   <ThemeContext.Provider value={themes.light}>
    <Fragment>
    <div className="">
        <div className=''>
          {data.map((x)=>(
            <Posts key={x.id}
              data={x}
            />
          ))}
        </div>
    </div>

    <Toolbar />
    
        </Fragment>
      </ThemeContext.Provider>
    )
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}

export default Home
