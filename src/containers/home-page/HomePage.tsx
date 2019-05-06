import React from "react";
import axios from "axios";
import { observer, inject } from "mobx-react";
import SearchBar from "../../components/search-bar/SearchBar";
import StreamsList from "./home-page-elements/StreamsList";

interface IProps {
  twitch: any;
}

@inject("twitch")
@observer
class HomePage extends React.Component<IProps> {
  streamSearch = async (value: string | number) => {
    const responce = await axios({
      method: "get",
      url: `https://api.twitch.tv/kraken/search/streams?query=${value}`,
      headers: {
        "Client-ID": "dbbf5aptjpe3epytagu367uigia1jx"
      }
    });
     const updatedResponce = responce.data.streams.map((el:any) => {  // add favorite proprety to each channel
        el.favorite = false;
        return el;
    });
    this.props.twitch.searchResponce = updatedResponce;
    
  };

  render() {
    const listExist = this.props.twitch.searchResponce.length
    const {searchResponce, addToFavorites} = this.props.twitch;
    
    return (
      <div>
        Home Page
        <SearchBar streamSearch={this.streamSearch} />
        {listExist !==0 ? <StreamsList streams={searchResponce} addToFavorites={addToFavorites}/> : null}
      </div>
    );
  }
}

export default HomePage;
