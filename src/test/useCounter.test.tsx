import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../hooks/useCounter";
import { describe, test } from "vitest";

describe('useCounter custom hook', () => {
  test('It initially renders 0', () => {
    const { result } = renderHook(() => useCounter({}));
    expect(result.current.counter).toBe(0);
  })

  test('It renders the initially passed number', () => {
    const { result, unmount } = renderHook(() => useCounter({ initialCount: 10 }));
    expect(result.current.counter).toBe(10);
    unmount();
  })

  test('It should increment the count', () => {
    const { result, unmount } = renderHook(() => useCounter({ initialCount: 10 }));
    act(() => { result.current.increment()})
    expect(result.current.counter).toBe(11);
    unmount();
  })

})