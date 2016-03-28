describe('removeAllVowels Filter', function () {
  var $controller;

  beforeEach(module('app'));

  beforeEach(inject(function ($injector) {
    $filter = $injector.get('$filter');
  }));

  it('should return cd', function(){
    var str = $filter('removeAllVowels')('code');

    expect(str).toBe('cd');
  })
});
