'use strict';

describe('Weather', function(){

  var weather;

  beforeEach(function(){
    weather = new Weather;
  });

  it('gives stormy weather sometimes', function(){
    spyOn(Math,'random').and.returnValue(1);
    expect(weather.isStormy()).toBeTruthy();
  });

  it('gives not stormy weather other times', function(){
    spyOn(Math,'random').and.returnValue(0);
    expect(weather.isStormy()).toBeFalsy();
  });

});
