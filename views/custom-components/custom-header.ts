import { html, define, Hybrids } from 'hybrids';

import { parse } from '../helpers';

interface CustomHeader extends HTMLElement {
  titleText?: string;
  user?: string;
  userObj?: { username: string };
}

export const CustomHeader: Hybrids<CustomHeader> = {
  titleText: '',
  user: parse('user', 'userObj'), // Parse the user JSON
  render: ({ titleText, userObj }) => {
    return html`
      ${titleText &&
        html`
          <h1>${titleText}</h1>
        `}
      <nav>
        <li><a href="/">Home</a></li>
        <br />
        <li><a href="/about">About</a></li>
        <br />
        ${!!userObj
          ? html`
              <li><a href="/profile">Profile</a></li>
              <br />
              <li>
                <a href="/logout" data-turbolinks="false">Log out</a>
              </li>
            `
          : html`
              <li><a href="/login">Log in</a></li>
            `}
      </nav>
      <br />
    `;
  },
};

define('custom-header', CustomHeader);
