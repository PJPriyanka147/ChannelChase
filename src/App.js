import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';
import {Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed, SearchBar} from './components';

const App = () =>(
     <BrowserRouter>
     <Box sx ={{backgroundColor: "#000"}} >
      <Navbar />
      <Routes>
        <Route path="/" exact element = {<Feed/>} />
        <Route path = "/video/:id" exact element = {<VideoDetail/>} />   
        <Route path = "/Channel/:id" exact element = {<ChannelDetail/>} />   
        <Route path = "/Search/:SearchTerm" exact element = {<SearchFeed/>} />   
      </Routes>
     </Box>
    </BrowserRouter>
  );


export default App
