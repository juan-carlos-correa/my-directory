import FirebaseDatabase from './FirebaseDatabase';

export default class UserFirebase extends FirebaseDatabase {
  async writeUserData ({
    userId,
    name = '',
    phone = '',
    job = '',
    subsidiary = '',
    email = '',
    isAdmin = false,
    defaultPassword = '',
  }) {
    try {
      let userStored = null;

      if (userId) {
        userStored = await this.db
          .collection('users')
          .doc(userId)
          .set(
            { name, phone, job, subsidiary, email, isAdmin, defaultPassword },
            { merge: true }
          );
      } else {
        userStored = await this.db
          .collection('users')
          .add({ name, phone, job, subsidiary, email, isAdmin, defaultPassword });
      }

      return userStored;
    } catch (e) {
      console.log(e);
    }
  }

  async getUserData (userUid) {
    return this.db.collection('users').doc(userUid).get();
  }

  updateUserData (userUid, userData) {
    return this.db.collection('users').doc(userUid).update(userData);
  }
}
