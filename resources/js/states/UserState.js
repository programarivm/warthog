export default class UserState {
  static initial() {
    return {
      record: {
        firstname: '',
        surname: '',
        date_of_birth: '',
        phone_number: '',
        email: '',
        password: ''
      }
    };
  }
}
