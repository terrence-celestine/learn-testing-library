import { renderHook } from "@testing-library/react";
import { useIsTablet } from "./useIsTablet";

beforeEach(() => {
  window.innerWidth = 1024;
});
test("should show tablet go brrr", () => {
  window.innerWidth = 500;
  const { result } = renderHook(() => useIsTablet());
  expect(result.current).toBe(false);
});

test("jesse test 2", () => {
  const { result } = renderHook(() => useIsTablet());
  expect(result.current).toBe(true);
});
