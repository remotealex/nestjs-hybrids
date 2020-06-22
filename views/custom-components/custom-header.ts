import { html, define, Hybrids, property } from 'hybrids';

interface CustomHeader extends HTMLElement {
  titleText?: string;
  user?: string;
  userObj?: { username: string };
}

const parse = (keyToParse: string, keyToAssign: string) =>
  property('', host => {
    host[keyToAssign] = JSON.parse(host[keyToParse]);
  });

export const CustomHeader: Hybrids<CustomHeader> = {
  titleText: '',
  user: parse('user', 'userObj'),
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
