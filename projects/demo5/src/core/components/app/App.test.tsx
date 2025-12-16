import { render } from "@testing-library/react";
import { App } from "./App";
import {Layout} from '../layout/layout';

vi.mock('../layout/layout');

describe('App', () => {
  test('renders correctly', () => {
    render(<App />);
    expect(Layout).toHaveBeenCalled()
  });
});
