import FirebaseDatabase from './FirebaseDatabase';

export default class UserFirebase extends FirebaseDatabase {
  async writeUserData ({ userId, name, phone, job, subsidiary }) {
    try {
      console.log('this.db', this.db)
      const userStored = await this.db
      .collection('users')
      .doc(userId)
      .set(
        { name, phone, job, subsidiary },
        { merge: true }
      );

      return userStored;
    } catch (e) {
      console.log(e);
    }
  }
}
