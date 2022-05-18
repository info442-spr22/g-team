import {signInWithPopup, TwitterAuthProvider} from 'firebase/auth'
import {TWITTER} from '../resources/constants/storage-keys'
import {auth} from '../index'

const provider = new TwitterAuthProvider()

export default class TwitterPostService {
  static BASE_URL = "https://upload.twitter.com/1.1/media/upload.json?media_category=TWEET_IMAGE"

  static getToken() {
    return window.sessionStorage.getItem(TWITTER.TOKEN)
  }

  static async authenticate() {
    return signInWithPopup(auth, provider)
      .then(result => {
        const credential = TwitterAuthProvider.credentialFromResult(result)
        // window.sessionStorage.setItem(TWITTER.CREDENTIAL, credential)
        window.sessionStorage.setItem(TWITTER.TOKEN, credential.accessToken)
      })
      .catch(error => {
        alert(error.message)
        console.log(error)
      })
  }

  static uploadImage(base64) {
    let params = new FormData();
    params.append("media_data", base64)
    // fetch(this.BASE_URL + `&media_data=${base64}`, {method: "POST", body: params})

    const token = this.getToken()
    if (token) {
      fetch(this.BASE_URL, {method: "POST", body: params})
        .then(resp => resp.json())
        .then(console.log)
        .catch(err => console.log(err.message))
    } else {
      return new Promise((resolve, reject) => {reject({ message: "Something went wrong, try sharing again. You may need to sign in." })})
    }

  }
}
