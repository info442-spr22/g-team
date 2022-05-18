
export default class TwitterPostService {
  // static BASE_URL = "https://upload.twitter.com/1.1/media/upload.json?command=INIT&media_type=image/png&media_category=TWEET_IMAGE"
  static BASE_URL = "https://upload.twitter.com/1.1/media/upload.json?media_category=TWEET_IMAGE"
  // TODO: If you see this singleton code commented out here, I forgot to delete it - please delete it for me!
  // instance;
  // constructor() {
  //   // Singleton pattern
  //   return this.instance || this
  // }
  // async function likePost() {
  //   // 'this' is the like icon of the card with id 'id'.
  //   let id = this.parentNode.parentNode.parentNode.id;
  //
  //   let params = new FormData();
  //   params.append("id", id);
  //
  //   try {
  //     let resp = await fetch("/yipper/likes", {"method": "post", "body": params});
  //     await checkStatus(resp);
  //     this.parentNode.lastChild.textContent = await resp.text();
  //   } catch (err) {
  //     handleError();
  //   }
  // }

  static uploadImage(base64) {
    let params = new FormData();
    params.append("media_data", base64)
    // fetch(this.BASE_URL + `&media_data=${base64}`, {method: "POST", body: params})

    fetch(this.BASE_URL, {method: "POST", body: params})
      .then(resp => resp.json())
      .then(console.log)
      .catch(err => console.log(err.message))
  }
}
