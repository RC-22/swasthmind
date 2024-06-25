import type { Schema, Attribute } from '@strapi/strapi';

export interface AbcAbc extends Schema.Component {
  collectionName: 'components_abc_abcs';
  info: {
    displayName: 'abc';
  };
  attributes: {
    display: Attribute.Boolean;
  };
}

export interface DisplayDisplay extends Schema.Component {
  collectionName: 'components_display_displays';
  info: {
    displayName: 'display';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    date: Attribute.Date;
  };
}

export interface DisplayDisplay1 extends Schema.Component {
  collectionName: 'components_display_display1s';
  info: {
    displayName: 'display1';
  };
  attributes: {};
}

export interface DisplayviewDisplayview extends Schema.Component {
  collectionName: 'components_displayview_displayviews';
  info: {
    displayName: 'displayview';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    date: Attribute.Date;
  };
}

export interface InfoInfo extends Schema.Component {
  collectionName: 'components_info_infos';
  info: {
    displayName: 'info';
  };
  attributes: {
    date: Attribute.Date;
    timings: Attribute.JSON;
    counsellername: Attribute.String;
    duration: Attribute.Decimal;
    price: Attribute.BigInteger;
  };
}

export interface MainMain extends Schema.Component {
  collectionName: 'components_main_mains';
  info: {
    displayName: 'main';
    description: '';
  };
  attributes: {
    profileimg: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    facilitator: Attribute.String;
  };
}

export interface SessioncardBeneficiaries extends Schema.Component {
  collectionName: 'components_sessioncard_beneficiaries';
  info: {
    displayName: 'beneficiaries';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
  };
}

export interface SessioncardCancellationpolicy extends Schema.Component {
  collectionName: 'components_sessioncard_cancellationpolicies';
  info: {
    displayName: 'cancellationpolicy';
  };
  attributes: {
    description: Attribute.Text;
  };
}

export interface SessioncardKeyfeatures extends Schema.Component {
  collectionName: 'components_sessioncard_keyfeatures';
  info: {
    displayName: 'keyfeatures';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface SessioncardSessioncard extends Schema.Component {
  collectionName: 'components_sessioncard_sessioncards';
  info: {
    displayName: 'sessioncard';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    cardimage: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    date: Attribute.Date;
    profileimg: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    facilitator: Attribute.String;
  };
}

export interface TagsTags extends Schema.Component {
  collectionName: 'components_tags_tags';
  info: {
    displayName: 'tags';
  };
  attributes: {
    time: Attribute.Time;
    price: Attribute.String;
    link: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'abc.abc': AbcAbc;
      'display.display': DisplayDisplay;
      'display.display1': DisplayDisplay1;
      'displayview.displayview': DisplayviewDisplayview;
      'info.info': InfoInfo;
      'main.main': MainMain;
      'sessioncard.beneficiaries': SessioncardBeneficiaries;
      'sessioncard.cancellationpolicy': SessioncardCancellationpolicy;
      'sessioncard.keyfeatures': SessioncardKeyfeatures;
      'sessioncard.sessioncard': SessioncardSessioncard;
      'tags.tags': TagsTags;
    }
  }
}
