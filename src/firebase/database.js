import firebase from './index';

const db = firebase.firestore();

db.settings({
  cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED,
});

db.enablePersistence({
  synchronizeTabs:true
}).catch(function(err) {
  console.error(err);

  if (err.code === 'failed-precondition') {
    // Multiple tabs open, persistence can only be enabled
    // in one tab at a a time.
    // ...
  } else if (err.code === 'unimplemented') {
    // The current browser does not support all of the
    // features required to enable persistence
    // ...
  }
});

export const COLLECTIONS = {
  users: 'users',
  blogs: 'blogs',
  tags: 'tags',
};

export default db;
