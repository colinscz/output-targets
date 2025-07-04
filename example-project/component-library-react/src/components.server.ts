/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 */

/* eslint-disable */

import type { EventName, StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent, type HydrateModule, type SerializeShadowRootOptions } from '@stencil/react-output-target/ssr';
import { type CheckboxChangeEventDetail, type IMyComponent, type InputChangeEventDetail, type MyCheckboxCustomEvent, type MyComponentScopedCustomEvent, type MyInputCustomEvent, type MyInputScopedCustomEvent, type MyPopoverCustomEvent, type MyRadioGroupCustomEvent, type MyRangeCustomEvent, type OverlayEventDetail, type RadioGroupChangeEventDetail, type RangeChangeEventDetail } from "component-library";
import { MyButtonScoped as MyButtonScopedElement, defineCustomElement as defineMyButtonScoped } from "component-library/components/my-button-scoped.js";
import { MyButton as MyButtonElement, defineCustomElement as defineMyButton } from "component-library/components/my-button.js";
import { MyCheckbox as MyCheckboxElement, defineCustomElement as defineMyCheckbox } from "component-library/components/my-checkbox.js";
import { MyComplexPropsScoped as MyComplexPropsScopedElement, defineCustomElement as defineMyComplexPropsScoped } from "component-library/components/my-complex-props-scoped.js";
import { MyComplexProps as MyComplexPropsElement, defineCustomElement as defineMyComplexProps } from "component-library/components/my-complex-props.js";
import { MyComponentScoped as MyComponentScopedElement, defineCustomElement as defineMyComponentScoped } from "component-library/components/my-component-scoped.js";
import { MyComponent as MyComponentElement, defineCustomElement as defineMyComponent } from "component-library/components/my-component.js";
import { MyCounter as MyCounterElement, defineCustomElement as defineMyCounter } from "component-library/components/my-counter.js";
import { MyInputScoped as MyInputScopedElement, defineCustomElement as defineMyInputScoped } from "component-library/components/my-input-scoped.js";
import { MyInput as MyInputElement, defineCustomElement as defineMyInput } from "component-library/components/my-input.js";
import { MyListItemScoped as MyListItemScopedElement, defineCustomElement as defineMyListItemScoped } from "component-library/components/my-list-item-scoped.js";
import { MyListItem as MyListItemElement, defineCustomElement as defineMyListItem } from "component-library/components/my-list-item.js";
import { MyListScoped as MyListScopedElement, defineCustomElement as defineMyListScoped } from "component-library/components/my-list-scoped.js";
import { MyList as MyListElement, defineCustomElement as defineMyList } from "component-library/components/my-list.js";
import { MyPopover as MyPopoverElement, defineCustomElement as defineMyPopover } from "component-library/components/my-popover.js";
import { MyRadioGroup as MyRadioGroupElement, defineCustomElement as defineMyRadioGroup } from "component-library/components/my-radio-group.js";
import { MyRadio as MyRadioElement, defineCustomElement as defineMyRadio } from "component-library/components/my-radio.js";
import { MyRange as MyRangeElement, defineCustomElement as defineMyRange } from "component-library/components/my-range.js";
import { MyToggleContent as MyToggleContentElement, defineCustomElement as defineMyToggleContent } from "component-library/components/my-toggle-content.js";
import { MyToggle as MyToggleElement, defineCustomElement as defineMyToggle } from "component-library/components/my-toggle.js";
import React from 'react';

export const serializeShadowRoot: SerializeShadowRootOptions = { "scoped": ["my-counter"], "default": "declarative-shadow-dom" };

export type MyButtonEvents = {
    onMyFocus: EventName<CustomEvent<void>>,
    onMyBlur: EventName<CustomEvent<void>>
};

export const MyButton: StencilReactComponent<MyButtonElement, MyButtonEvents> = /*@__PURE__*/ createComponent<MyButtonElement, MyButtonEvents>({
    tagName: 'my-button',
    properties: {
        color: 'color',
        buttonType: 'button-type',
        disabled: 'disabled',
        expand: 'expand',
        fill: 'fill',
        download: 'download',
        href: 'href',
        rel: 'rel',
        shape: 'shape',
        size: 'size',
        strong: 'strong',
        target: 'target',
        type: 'type'
    },
    hydrateModule: import('component-library/hydrate') as Promise<HydrateModule>,
    serializeShadowRoot,
    elementClass: MyButtonElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onMyFocus: 'myFocus',
        onMyBlur: 'myBlur'
    } as MyButtonEvents,
    defineCustomElement: defineMyButton
});

export type MyButtonScopedEvents = {
    onMyFocus: EventName<CustomEvent<void>>,
    onMyBlur: EventName<CustomEvent<void>>
};

export const MyButtonScoped: StencilReactComponent<MyButtonScopedElement, MyButtonScopedEvents> = /*@__PURE__*/ createComponent<MyButtonScopedElement, MyButtonScopedEvents>({
    tagName: 'my-button-scoped',
    properties: {
        color: 'color',
        buttonType: 'button-type',
        disabled: 'disabled',
        expand: 'expand',
        fill: 'fill',
        download: 'download',
        href: 'href',
        rel: 'rel',
        shape: 'shape',
        size: 'size',
        strong: 'strong',
        target: 'target',
        type: 'type'
    },
    hydrateModule: import('component-library/hydrate') as Promise<HydrateModule>,
    serializeShadowRoot,
    elementClass: MyButtonScopedElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onMyFocus: 'myFocus',
        onMyBlur: 'myBlur'
    } as MyButtonScopedEvents,
    defineCustomElement: defineMyButtonScoped
});

export type MyCheckboxEvents = {
    onIonChange: EventName<MyCheckboxCustomEvent<CheckboxChangeEventDetail>>,
    onIonFocus: EventName<CustomEvent<void>>,
    onIonBlur: EventName<CustomEvent<void>>
};

export const MyCheckbox: StencilReactComponent<MyCheckboxElement, MyCheckboxEvents> = /*@__PURE__*/ createComponent<MyCheckboxElement, MyCheckboxEvents>({
    tagName: 'my-checkbox',
    properties: {
        color: 'color',
        name: 'name',
        checked: 'checked',
        indeterminate: 'indeterminate',
        disabled: 'disabled',
        value: 'value',
        labelPlacement: 'label-placement',
        justify: 'justify',
        alignment: 'alignment'
    },
    hydrateModule: import('component-library/hydrate') as Promise<HydrateModule>,
    serializeShadowRoot,
    elementClass: MyCheckboxElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onIonChange: 'ionChange',
        onIonFocus: 'ionFocus',
        onIonBlur: 'ionBlur'
    } as MyCheckboxEvents,
    defineCustomElement: defineMyCheckbox
});

export type MyComplexPropsEvents = NonNullable<unknown>;

export const MyComplexProps: StencilReactComponent<MyComplexPropsElement, MyComplexPropsEvents> = /*@__PURE__*/ createComponent<MyComplexPropsElement, MyComplexPropsEvents>({
    tagName: 'my-complex-props',
    properties: {
        foo: 'foo',
        baz: 'baz',
        quux: 'quux',
        grault: 'grault',
        waldo: 'waldo'
    },
    hydrateModule: import('component-library/hydrate') as Promise<HydrateModule>,
    serializeShadowRoot,
    elementClass: MyComplexPropsElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {} as MyComplexPropsEvents,
    defineCustomElement: defineMyComplexProps
});

export type MyComplexPropsScopedEvents = NonNullable<unknown>;

export const MyComplexPropsScoped: StencilReactComponent<MyComplexPropsScopedElement, MyComplexPropsScopedEvents> = /*@__PURE__*/ createComponent<MyComplexPropsScopedElement, MyComplexPropsScopedEvents>({
    tagName: 'my-complex-props-scoped',
    properties: {
        foo: 'foo',
        baz: 'baz',
        quux: 'quux',
        grault: 'grault',
        waldo: 'waldo'
    },
    hydrateModule: import('component-library/hydrate') as Promise<HydrateModule>,
    serializeShadowRoot,
    elementClass: MyComplexPropsScopedElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {} as MyComplexPropsScopedEvents,
    defineCustomElement: defineMyComplexPropsScoped
});

export type MyComponentEvents = NonNullable<unknown>;

export const MyComponent: StencilReactComponent<MyComponentElement, MyComponentEvents> = /*@__PURE__*/ createComponent<MyComponentElement, MyComponentEvents>({
    tagName: 'my-component',
    properties: {
        first: 'first',
        middleName: 'middle-name',
        last: 'last'
    },
    hydrateModule: import('component-library/hydrate') as Promise<HydrateModule>,
    serializeShadowRoot,
    elementClass: MyComponentElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {} as MyComponentEvents,
    defineCustomElement: defineMyComponent
});

export type MyComponentScopedEvents = { onMyCustomEvent: EventName<MyComponentScopedCustomEvent<IMyComponent.someVar>> };

export const MyComponentScoped: StencilReactComponent<MyComponentScopedElement, MyComponentScopedEvents> = /*@__PURE__*/ createComponent<MyComponentScopedElement, MyComponentScopedEvents>({
    tagName: 'my-component-scoped',
    properties: {
        first: 'first',
        middleName: 'middle-name',
        last: 'last'
    },
    hydrateModule: import('component-library/hydrate') as Promise<HydrateModule>,
    serializeShadowRoot,
    elementClass: MyComponentScopedElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onMyCustomEvent: 'myCustomEvent' } as MyComponentScopedEvents,
    defineCustomElement: defineMyComponentScoped
});

export type MyCounterEvents = { onCount: EventName<CustomEvent<number>> };

export const MyCounter: StencilReactComponent<MyCounterElement, MyCounterEvents> = /*@__PURE__*/ createComponent<MyCounterElement, MyCounterEvents>({
    tagName: 'my-counter',
    properties: { startValue: 'start-value' },
    hydrateModule: import('component-library/hydrate') as Promise<HydrateModule>,
    serializeShadowRoot,
    elementClass: MyCounterElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onCount: 'count' } as MyCounterEvents,
    defineCustomElement: defineMyCounter
});

export type MyInputEvents = {
    onMyInput: EventName<MyInputCustomEvent<KeyboardEvent>>,
    onMyChange: EventName<MyInputCustomEvent<InputChangeEventDetail>>,
    onMyBlur: EventName<CustomEvent<void>>,
    onMyFocus: EventName<CustomEvent<void>>
};

export const MyInput: StencilReactComponent<MyInputElement, MyInputEvents> = /*@__PURE__*/ createComponent<MyInputElement, MyInputEvents>({
    tagName: 'my-input',
    properties: {
        color: 'color',
        accept: 'accept',
        autocapitalize: 'autocapitalize',
        autocomplete: 'autocomplete',
        autocorrect: 'autocorrect',
        autofocus: 'autofocus',
        clearInput: 'clear-input',
        clearOnEdit: 'clear-on-edit',
        disabled: 'disabled',
        enterkeyhint: 'enterkeyhint',
        inputmode: 'inputmode',
        max: 'max',
        maxlength: 'maxlength',
        min: 'min',
        minlength: 'minlength',
        multiple: 'multiple',
        name: 'name',
        pattern: 'pattern',
        placeholder: 'placeholder',
        readonly: 'readonly',
        required: 'required',
        spellcheck: 'spellcheck',
        step: 'step',
        size: 'size',
        type: 'type',
        value: 'value'
    },
    hydrateModule: import('component-library/hydrate') as Promise<HydrateModule>,
    serializeShadowRoot,
    elementClass: MyInputElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onMyInput: 'myInput',
        onMyChange: 'myChange',
        onMyBlur: 'myBlur',
        onMyFocus: 'myFocus'
    } as MyInputEvents,
    defineCustomElement: defineMyInput
});

export type MyInputScopedEvents = {
    onMyInput: EventName<MyInputScopedCustomEvent<KeyboardEvent>>,
    onMyChange: EventName<MyInputScopedCustomEvent<InputChangeEventDetail>>,
    onMyBlur: EventName<CustomEvent<void>>,
    onMyFocus: EventName<CustomEvent<void>>
};

export const MyInputScoped: StencilReactComponent<MyInputScopedElement, MyInputScopedEvents> = /*@__PURE__*/ createComponent<MyInputScopedElement, MyInputScopedEvents>({
    tagName: 'my-input-scoped',
    properties: {
        color: 'color',
        accept: 'accept',
        autocapitalize: 'autocapitalize',
        autocomplete: 'autocomplete',
        autocorrect: 'autocorrect',
        autofocus: 'autofocus',
        clearInput: 'clear-input',
        clearOnEdit: 'clear-on-edit',
        disabled: 'disabled',
        enterkeyhint: 'enterkeyhint',
        inputmode: 'inputmode',
        max: 'max',
        maxlength: 'maxlength',
        min: 'min',
        minlength: 'minlength',
        multiple: 'multiple',
        name: 'name',
        pattern: 'pattern',
        placeholder: 'placeholder',
        readonly: 'readonly',
        required: 'required',
        spellcheck: 'spellcheck',
        step: 'step',
        size: 'size',
        type: 'type',
        value: 'value'
    },
    hydrateModule: import('component-library/hydrate') as Promise<HydrateModule>,
    serializeShadowRoot,
    elementClass: MyInputScopedElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onMyInput: 'myInput',
        onMyChange: 'myChange',
        onMyBlur: 'myBlur',
        onMyFocus: 'myFocus'
    } as MyInputScopedEvents,
    defineCustomElement: defineMyInputScoped
});

export type MyListEvents = NonNullable<unknown>;

export const MyList: StencilReactComponent<MyListElement, MyListEvents> = /*@__PURE__*/ createComponent<MyListElement, MyListEvents>({
    tagName: 'my-list',
    properties: {},
    hydrateModule: import('component-library/hydrate') as Promise<HydrateModule>,
    serializeShadowRoot,
    elementClass: MyListElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {} as MyListEvents,
    defineCustomElement: defineMyList
});

export type MyListItemEvents = NonNullable<unknown>;

export const MyListItem: StencilReactComponent<MyListItemElement, MyListItemEvents> = /*@__PURE__*/ createComponent<MyListItemElement, MyListItemEvents>({
    tagName: 'my-list-item',
    properties: {},
    hydrateModule: import('component-library/hydrate') as Promise<HydrateModule>,
    serializeShadowRoot,
    elementClass: MyListItemElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {} as MyListItemEvents,
    defineCustomElement: defineMyListItem
});

export type MyListItemScopedEvents = NonNullable<unknown>;

export const MyListItemScoped: StencilReactComponent<MyListItemScopedElement, MyListItemScopedEvents> = /*@__PURE__*/ createComponent<MyListItemScopedElement, MyListItemScopedEvents>({
    tagName: 'my-list-item-scoped',
    properties: {},
    hydrateModule: import('component-library/hydrate') as Promise<HydrateModule>,
    serializeShadowRoot,
    elementClass: MyListItemScopedElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {} as MyListItemScopedEvents,
    defineCustomElement: defineMyListItemScoped
});

export type MyListScopedEvents = NonNullable<unknown>;

export const MyListScoped: StencilReactComponent<MyListScopedElement, MyListScopedEvents> = /*@__PURE__*/ createComponent<MyListScopedElement, MyListScopedEvents>({
    tagName: 'my-list-scoped',
    properties: {},
    hydrateModule: import('component-library/hydrate') as Promise<HydrateModule>,
    serializeShadowRoot,
    elementClass: MyListScopedElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {} as MyListScopedEvents,
    defineCustomElement: defineMyListScoped
});

export type MyPopoverEvents = {
    onMyPopoverDidPresent: EventName<CustomEvent<void>>,
    onMyPopoverWillPresent: EventName<CustomEvent<void>>,
    onMyPopoverWillDismiss: EventName<MyPopoverCustomEvent<OverlayEventDetail>>,
    onMyPopoverDidDismiss: EventName<MyPopoverCustomEvent<OverlayEventDetail>>
};

export const MyPopover: StencilReactComponent<MyPopoverElement, MyPopoverEvents> = /*@__PURE__*/ createComponent<MyPopoverElement, MyPopoverEvents>({
    tagName: 'my-popover',
    properties: {
        component: 'component',
        componentProps: 'component-props',
        keyboardClose: 'keyboard-close',
        cssClass: 'css-class',
        backdropDismiss: 'backdrop-dismiss',
        event: 'event',
        showBackdrop: 'show-backdrop',
        translucent: 'translucent',
        animated: 'animated'
    },
    hydrateModule: import('component-library/hydrate') as Promise<HydrateModule>,
    serializeShadowRoot,
    elementClass: MyPopoverElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onMyPopoverDidPresent: 'myPopoverDidPresent',
        onMyPopoverWillPresent: 'myPopoverWillPresent',
        onMyPopoverWillDismiss: 'myPopoverWillDismiss',
        onMyPopoverDidDismiss: 'myPopoverDidDismiss'
    } as MyPopoverEvents,
    defineCustomElement: defineMyPopover
});

export type MyRadioEvents = {
    onIonFocus: EventName<CustomEvent<void>>,
    onIonBlur: EventName<CustomEvent<void>>
};

export const MyRadio: StencilReactComponent<MyRadioElement, MyRadioEvents> = /*@__PURE__*/ createComponent<MyRadioElement, MyRadioEvents>({
    tagName: 'my-radio',
    properties: {
        color: 'color',
        name: 'name',
        disabled: 'disabled',
        value: 'value',
        labelPlacement: 'label-placement',
        justify: 'justify',
        alignment: 'alignment'
    },
    hydrateModule: import('component-library/hydrate') as Promise<HydrateModule>,
    serializeShadowRoot,
    elementClass: MyRadioElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onIonFocus: 'ionFocus',
        onIonBlur: 'ionBlur'
    } as MyRadioEvents,
    defineCustomElement: defineMyRadio
});

export type MyRadioGroupEvents = { onMyChange: EventName<MyRadioGroupCustomEvent<RadioGroupChangeEventDetail>> };

export const MyRadioGroup: StencilReactComponent<MyRadioGroupElement, MyRadioGroupEvents> = /*@__PURE__*/ createComponent<MyRadioGroupElement, MyRadioGroupEvents>({
    tagName: 'my-radio-group',
    properties: {
        allowEmptySelection: 'allow-empty-selection',
        compareWith: 'compare-with',
        name: 'name',
        value: 'value'
    },
    hydrateModule: import('component-library/hydrate') as Promise<HydrateModule>,
    serializeShadowRoot,
    elementClass: MyRadioGroupElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onMyChange: 'myChange' } as MyRadioGroupEvents,
    defineCustomElement: defineMyRadioGroup
});

export type MyRangeEvents = {
    onMyChange: EventName<MyRangeCustomEvent<RangeChangeEventDetail>>,
    onMyFocus: EventName<CustomEvent<void>>,
    onMyBlur: EventName<CustomEvent<void>>
};

export const MyRange: StencilReactComponent<MyRangeElement, MyRangeEvents> = /*@__PURE__*/ createComponent<MyRangeElement, MyRangeEvents>({
    tagName: 'my-range',
    properties: {
        color: 'color',
        debounce: 'debounce',
        name: 'name',
        dualKnobs: 'dual-knobs',
        min: 'min',
        max: 'max',
        pin: 'pin',
        snaps: 'snaps',
        step: 'step',
        ticks: 'ticks',
        disabled: 'disabled',
        value: 'value'
    },
    hydrateModule: import('component-library/hydrate') as Promise<HydrateModule>,
    serializeShadowRoot,
    elementClass: MyRangeElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onMyChange: 'myChange',
        onMyFocus: 'myFocus',
        onMyBlur: 'myBlur'
    } as MyRangeEvents,
    defineCustomElement: defineMyRange
});

export type MyToggleEvents = NonNullable<unknown>;

export const MyToggle: StencilReactComponent<MyToggleElement, MyToggleEvents> = /*@__PURE__*/ createComponent<MyToggleElement, MyToggleEvents>({
    tagName: 'my-toggle',
    properties: {},
    hydrateModule: import('component-library/hydrate') as Promise<HydrateModule>,
    serializeShadowRoot,
    elementClass: MyToggleElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {} as MyToggleEvents,
    defineCustomElement: defineMyToggle
});

export type MyToggleContentEvents = NonNullable<unknown>;

export const MyToggleContent: StencilReactComponent<MyToggleContentElement, MyToggleContentEvents> = /*@__PURE__*/ createComponent<MyToggleContentElement, MyToggleContentEvents>({
    tagName: 'my-toggle-content',
    properties: { visible: 'visible' },
    hydrateModule: import('component-library/hydrate') as Promise<HydrateModule>,
    serializeShadowRoot,
    elementClass: MyToggleContentElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {} as MyToggleContentEvents,
    defineCustomElement: defineMyToggleContent
});
