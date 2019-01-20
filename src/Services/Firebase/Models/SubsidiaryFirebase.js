import FirebaseDatabase from './FirebaseDatabase';

export default class SubsidiaryFirebase extends FirebaseDatabase {
  writeJSubsidiaryData ({ name = '', address = '', tel = '' }) {
    return this.db
      .collection('subsidiaries')
      .add(
        { name, address, tel },
        { merge: true },
      );
  }

  readSubsidiaries () {
    return this.db.collection('subsidiaries').get();
  }
}
