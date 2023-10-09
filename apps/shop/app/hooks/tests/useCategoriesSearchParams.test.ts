import { renderHook } from '@testing-library/react';
import { useSearchParams } from '../useSearchParams';

const mockSearchParams = {
  get: jest.fn(),
  set: jest.fn(),
};

jest.mock('next/navigation', () => ({
  useSearchParams: () => mockSearchParams,
}));
describe('useCategoriesSearch params', () => {
  it('should check all possible params', () => {
    mockSearchParams.get.mockReturnValueOnce('someSortValue');
    mockSearchParams.get.mockReturnValueOnce('true');
    mockSearchParams.get.mockReturnValueOnce('50');
    mockSearchParams.get.mockReturnValueOnce('100');

    const { result } = renderHook(() => useSearchParams());

    expect(result.current.getParam.sort).toBe('someSortValue');
    expect(result.current.getParam.availability).toBe('true');
    expect(result.current.getParam.filterPriceLow).toBe('50');
    expect(result.current.getParam.filterPriceHigh).toBe('100');
  });

  it('should set all possible params', () => {
    const { result } = renderHook(() => useSearchParams());

    const newAvailabilityValue = 'false';
    const newFilterPriceLowValue = '25';
    const newFilterPriceHighValue = '75';

    result.current.setParam('availability', newAvailabilityValue);
    result.current.setParam('filterPriceLow', newFilterPriceLowValue);
    result.current.setParam('filterPriceHigh', newFilterPriceHighValue);

    expect(window.location.search).toContain(
      `availability=${newAvailabilityValue}&filterPriceLow=${newFilterPriceLowValue}&filterPriceHigh=${newFilterPriceHighValue}`
    );
  });

  it('createQueryString should create a query string with the specified value', () => {
    const { result } = renderHook(() => useSearchParams());

    const paramValue = 'newSortValue';

    expect(result.current.createSortQueryString(paramValue)).toContain(
      `sort=${paramValue}`
    );
  });
});
