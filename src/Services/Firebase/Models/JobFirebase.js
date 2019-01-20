import FirebaseDatabase from './FirebaseDatabase';

export default class JobFirebase extends FirebaseDatabase {
  writeJobData ({ name = '', description = '' }) {
    return this.db
      .collection('jobs')
      .add(
        { name, description },
        { merge: true },
      );
  }

  readJobs () {
    return this.db.collection('jobs').get();
  }
}
