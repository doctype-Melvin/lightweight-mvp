// @ts-nocheck

import {vi} from 'vitest';


// Mocking the entire $app/navigation module
// Mock the goto method to prevent "Error: Can't call goto on the server"
vi.mock('$app/navigation', () => ({
    goto: vi.fn(() => Promise.resolve())
}));