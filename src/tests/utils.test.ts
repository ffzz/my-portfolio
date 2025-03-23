import { describe, it, expect, vi } from 'vitest';
import { wait, debounce } from '@/lib/utils';

describe('Utility Functions', () => {
  it('wait should wait for the specified time', async () => {
    const start = Date.now();
    await wait(100);
    const end = Date.now();
    
    // Allow some margin of error
    expect(end - start).toBeGreaterThanOrEqual(90);
  });
  
  it('debounce should work correctly', async () => {
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, 100);
    
    debouncedFn();
    debouncedFn();
    debouncedFn();
    
    expect(mockFn).not.toHaveBeenCalled();
    
    await wait(150);
    
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
}); 