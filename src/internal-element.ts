/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

 import {LitElement, html, css} from 'lit';
 import {customElement} from 'lit/decorators.js';
 
 /**
  * An example element.
  *
  * @fires count-changed - Indicates when the count changes
  * @slot - This element has a slot
  * @csspart button - The button
  */
 @customElement('internal-element')
 export class InternalElement extends LitElement {
   static override styles = css`
     :host {
       display: block;
       border: solid 1px red;
       padding: 16px;
       max-width: 800px;
     }
   `;
 
   override render() {
     return html`
       <h1>Internal element v4!</h1>
       <slot></slot>
     `;
   }
 }
 
 declare global {
   interface HTMLElementTagNameMap {
     'internal-element': InternalElement;
   }
 }
 