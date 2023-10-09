import axios from 'axios';
import { HttpClient } from './http';

// Mocking axios methods
jest.mock('axios');

describe('HttpClient', () => {
  let httpClient: HttpClient;

  beforeEach(() => {
    httpClient = new HttpClient();
  });

  describe('get', () => {
    it('should make a GET request using axios and return a response', async () => {
      (axios.get as jest.Mock).mockResolvedValue({ data: 'test-response' });

      const url = 'https://test-url.com';
      const response = await httpClient.get(url);

      expect(response.data).toBe('test-response');
      expect(axios.get).toHaveBeenCalledWith(url, expect.anything());
    });

  });

  describe('post', () => {
    it('should make a POST request using axios and return a response', async () => {
      (axios.post as jest.Mock).mockResolvedValue({ data: 'test-response' });

      const url = 'https://test-url.com';
      const data = { key: 'value' };
      const response = await httpClient.post(url, data);

      expect(response.data).toBe('test-response');
      expect(axios.post).toHaveBeenCalledWith(url, data, expect.anything());
    });
  });
});
