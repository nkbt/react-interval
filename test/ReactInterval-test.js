describe('ReactInterval', () => {
  const ReactIntervalInjector = require('inject!../src/ReactInterval');
  let mock, ReactInterval;


  beforeEach(() => {
    mock = jasmine.createSpyObj('mock', ['']);
  });


  beforeEach(() => ReactInterval = ReactIntervalInjector({
    mock
  }));


  it('should be ok', () => {
    expect(ReactInterval).toBeTruthy();
  });
});
