describe('Favorite Food Filter', function () {
  var $controller;

  beforeEach(module('app'));

  beforeEach(inject(function ($injector) {
    $filter = $injector.get('$filter');
  }));

  it('should return "Frank"', function(){
    var list = [
      {
        name: 'Frank',
        favoriteFood: 'peanut butter'
      }, {
        name: 'Lauren',
        favoriteFood: 'chicken'
      }
    ];

    var result = $filter('favoriteFood')(list, 'peanut butter');

    expect(result[0].name).toBe('Frank');
  })
});
