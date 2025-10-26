export const API_BASE = 'https://api.unionmarket.dev';

export interface ApiResponse<T> {
  data: T;
  isMock: boolean;
}

export async function mockFetch<T>(payload: T): Promise<ApiResponse<T>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: payload, isMock: true });
    }, 350);
  });
}
