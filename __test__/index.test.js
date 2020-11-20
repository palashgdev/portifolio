require('@testing-library/jest-dom')

const firebase = require('@firebase/testing');

const PROJECT_ID = 'palashg7563-blog-d9d54';
const email = 'palashgdev@gmail.com'
const UID = 'Vyr5N0OUVjSfmrRpIGPhsP5nlZs2';

const getFirebase = () => {
  const firebaseInstance = firebase.initializeTestApp({
    projectId: PROJECT_ID,
    auth: {
      email,
      uid: UID
    }
  });

  return firebaseInstance;
}
describe('Sample Test', () => {

  afterAll(async () => {
    await firebase.clearFirestoreData({
      projectId: PROJECT_ID
    });
  })

  it('get a doc if you are not logged in', async () => {
    const firebaseInstance = getFirebase()

    const blogRef = firebaseInstance.firestore().collection('blogs');

    await firebase.assertSucceeds(blogRef.get())
  });


  it("Cannot Create a docs until you are logged in", async () => {
    const firebaseInstance = getFirebase()

    const blogRef = firebaseInstance.firestore().collection('blogs');

    await firebase.assertSucceeds(blogRef.add({
      user: "asd"
    }))
  });


  it("Create a doc in the tags for admin user", async () => {
    const fireStore = getFirebase().firestore();

    const tagsRef = fireStore.collection('tags');

    await firebase.assertSucceeds(tagsRef.add({
      tags: "asd"
    }));

  })
})