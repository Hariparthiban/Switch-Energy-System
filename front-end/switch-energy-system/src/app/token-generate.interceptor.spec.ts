import { TestBed } from '@angular/core/testing';

import { TokenGenerateInterceptor } from './token-generate.interceptor';

describe('TokenGenerateInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenGenerateInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TokenGenerateInterceptor = TestBed.inject(TokenGenerateInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
