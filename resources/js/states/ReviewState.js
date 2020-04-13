export default class ReviewState {
  static initial() {
    return {
      restaurants: [],
      record: {
        restaurant: {
          id: ''
        },
        comment: '',
        points: [3]
      }
    };
  }
}
