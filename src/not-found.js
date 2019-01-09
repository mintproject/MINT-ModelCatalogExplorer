import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/**
 * @customElement
 * @polymer
 */
class NotFound extends PolymerElement {
  static get template() {
    return html`
    <style>
      :host {
        display: block;

        padding: 10px 20px;
      }
    </style>

    Oops you hit a 404. <a href="[[rootPath]]">Head back to home.</a>
`;
  }

  static get is() { return 'not-found'; }
  static get properties() {
    return {
      message: {
        type: String,
        value: "Error 404"
    }
  }
}
}
window.customElements.define(NotFound.is, NotFound);
