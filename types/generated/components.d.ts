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

export interface AbcAbc2 extends Schema.Component {
  collectionName: 'components_abc_abc2s';
  info: {
    displayName: 'abc2';
  };
  attributes: {};
}

export interface AchivementsAchivements extends Schema.Component {
  collectionName: 'components_achivements_achivements';
  info: {
    displayName: 'achivements';
  };
  attributes: {
    title: Attribute.String;
    successfulcases: Attribute.Integer;
    satisfiedcustomer: Attribute.Integer;
    expertconsultants: Attribute.Integer;
  };
}

export interface BlogBlog extends Schema.Component {
  collectionName: 'components_blog_blogs';
  info: {
    displayName: 'blog';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    date: Attribute.Date;
    tag: Attribute.JSON;
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

export interface DisplayDisplay2 extends Schema.Component {
  collectionName: 'components_display_display2s';
  info: {
    displayName: 'display2';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    title: Attribute.String;
  };
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

export interface FaqFaq extends Schema.Component {
  collectionName: 'components_faq_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.Blocks;
  };
}

export interface HomecarouselHomecarousel extends Schema.Component {
  collectionName: 'components_homecarousel_homecarousels';
  info: {
    displayName: 'homecarousel';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    title: Attribute.String;
  };
}

export interface HomecarouselHomecarousel1 extends Schema.Component {
  collectionName: 'components_homecarousel_homecarousel1s';
  info: {
    displayName: 'homecarousel1';
    description: '';
  };
  attributes: {
    display: Attribute.Component<'display.display2', true>;
    testimonials: Attribute.Component<'testimonials.testimonials', true>;
    achivements: Attribute.Component<'achivements.achivements', true>;
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

export interface TestimonialsTestimonials extends Schema.Component {
  collectionName: 'components_testimonials_testimonials';
  info: {
    displayName: 'testimonials';
  };
  attributes: {
    video: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    name: Attribute.String;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'abc.abc': AbcAbc;
      'abc.abc2': AbcAbc2;
      'achivements.achivements': AchivementsAchivements;
      'blog.blog': BlogBlog;
      'display.display': DisplayDisplay;
      'display.display1': DisplayDisplay1;
      'display.display2': DisplayDisplay2;
      'displayview.displayview': DisplayviewDisplayview;
      'faq.faq': FaqFaq;
      'homecarousel.homecarousel': HomecarouselHomecarousel;
      'homecarousel.homecarousel1': HomecarouselHomecarousel1;
      'info.info': InfoInfo;
      'main.main': MainMain;
      'sessioncard.beneficiaries': SessioncardBeneficiaries;
      'sessioncard.cancellationpolicy': SessioncardCancellationpolicy;
      'sessioncard.keyfeatures': SessioncardKeyfeatures;
      'sessioncard.sessioncard': SessioncardSessioncard;
      'tags.tags': TagsTags;
      'testimonials.testimonials': TestimonialsTestimonials;
    }
  }
}
