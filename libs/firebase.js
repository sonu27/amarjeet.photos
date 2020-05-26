import firebase from 'firebase/app'

const config = {
  apiKey: 'AIzaSyAKoN-z66FND1Ofbjp5MMSQS9XoiW0OeLY',
  authDomain: 'amarjeet-photos.firebaseapp.com',
  projectId: 'amarjeet-photos'
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
