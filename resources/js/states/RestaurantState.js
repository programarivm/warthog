export default class RestaurantState {
  static initial() {
    return {
      record: {
        name: '',
        description: '',
        address: '',
        lat: '',
        lon: ''
      }
    };
  }
}
