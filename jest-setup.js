import '@testing-library/jest-dom';
import 'whatwg-fetch';

import { server } from './src/mocks/server.js';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
