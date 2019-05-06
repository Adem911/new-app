import { observable } from "mobx";

class Twitch {
  @observable searchResponce = [];
  @observable addToFavorites = false;
  @observable favoriteChannels = [];
}

export default new Twitch();
