/**
@license
Copyright 2019 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import {TextAreaCharCounter, TextFieldBase} from '@material/mwc-textfield/mwc-textfield-base';
import {ComplexAttributeConverter, html, property, query} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {ifDefined} from 'lit-html/directives/if-defined';
import {live} from 'lit-html/directives/live';

export {TextFieldType} from '@material/mwc-textfield/mwc-textfield-base';

const booleanOrStringConverter: ComplexAttributeConverter<boolean|string> = {
  fromAttribute(value) {
    if (value === null) {
      return false;
    } else if (value === '') {
      return true;
    }

    return value;
  },
  toAttribute(value) {
    if (typeof value === 'boolean') {
      return value ? '' : null;
    }

    return value;
  }
};

export abstract class TextAreaBase extends TextFieldBase {
  @query('textarea') protected formElement!: HTMLInputElement;

  @property({type: Number}) rows = 2;

  @property({type: Number}) cols = 20;

  @property({converter: booleanOrStringConverter})
  charCounter: boolean|TextAreaCharCounter = false;

  protected get shouldRenderHelperText(): boolean {
    return !!this.helper || !!this.validationMessage ||
        (this.charCounterVisible && this.charCounter !== 'internal');
  }

  render() {
    const withInternalCounter = this.charCounter === 'internal';
    const classes = {
      'mdc-text-field--disabled': this.disabled,
      'mdc-text-field--no-label': !this.label,
      'mdc-text-field--filled': !this.outlined,
      'mdc-text-field--outlined': this.outlined,
      'mdc-text-field--end-aligned': this.endAligned,
      'mdc-text-field--with-internal-counter': withInternalCounter,
    };

    const charCounter = this.renderCharCounter();
    return html`
      <label class="mdc-text-field mdc-text-field--textarea ${
        classMap(classes)}">
        ${this.renderRipple()}
        ${this.outlined ? this.renderOutline() : this.renderLabel()}
        ${this.renderInput()}
        ${withInternalCounter ? charCounter : ''}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(withInternalCounter ? '' : charCounter)}
    `;
  }

  protected renderInput() {
    const minOrUndef = this.minLength === -1 ? undefined : this.minLength;
    const maxOrUndef = this.maxLength === -1 ? undefined : this.maxLength;
    const autocapitalizeOrUndef = this.autocapitalize ?
        (this.autocapitalize as 'off' | 'none' | 'on' | 'sentences' | 'words' |
         'characters' | 'off' | 'none' | 'on' | 'sentences' | 'words' |
         'characters') :
        undefined;

    return html`
      <textarea
          aria-labelledby="label"
          class="mdc-text-field__input"
          .value="${live(this.value) as unknown as string}"
          rows="${this.rows}"
          cols="${this.cols}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${ifDefined(minOrUndef)}"
          maxlength="${ifDefined(maxOrUndef)}"
          name="${ifDefined(this.name === '' ? undefined : this.name)}"
          inputmode="${ifDefined(this.inputMode)}"
          autocapitalize="${ifDefined(autocapitalizeOrUndef)}"
          @input="${this.handleInputChange}"
          @blur="${this.onInputBlur}">
      </textarea>`;
  }
}
