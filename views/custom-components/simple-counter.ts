import { html, define, Hybrids } from 'hybrids';

interface SimpleCounter extends HTMLElement {
  count: number;
}

export function increaseCount(host: SimpleCounter) {
  host.count += 1;
}

export const SimpleCounter: Hybrids<SimpleCounter> = {
  count: 0,
  render: ({ count }) => html`
    <style>
      button {
        border: none;
        font-size: 20px;
      }
    </style>
    <button onclick="${increaseCount}">
      Count: ${count}
    </button>
  `,
};

define('simple-counter', SimpleCounter);
