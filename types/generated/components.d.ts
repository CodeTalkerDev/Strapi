import type { Schema, Attribute } from '@strapi/strapi';

export interface ContactPageAddress extends Schema.Component {
  collectionName: 'components_contact_page_addresses';
  info: {
    displayName: 'Address';
    icon: 'pinMap';
  };
  attributes: {
    Address: Attribute.Media;
    location: Attribute.String;
    phone_number: Attribute.String;
    addressURL: Attribute.String;
  };
}

export interface ContactPageHeader extends Schema.Component {
  collectionName: 'components_contact_page_headers';
  info: {
    displayName: 'header';
    icon: 'alien';
    description: '';
  };
  attributes: {
    marquee: Attribute.Text;
    text: Attribute.RichText;
    Header: Attribute.Media;
  };
}

export interface FooterFooter extends Schema.Component {
  collectionName: 'components_footer_footers';
  info: {
    displayName: 'Footer';
    icon: 'twitter';
    description: '';
  };
  attributes: {
    socialLinks: Attribute.Component<'social-media-links.social-media-links'>;
    privacyPolicyLink: Attribute.String;
    cookiesPolicyLink: Attribute.String;
    navigations: Attribute.Component<'nav.nav'>;
    Footer: Attribute.Media;
  };
}

export interface ListKeys extends Schema.Component {
  collectionName: 'components_list_keys';
  info: {
    displayName: 'Keys';
    icon: 'paint';
  };
  attributes: {
    word: Attribute.String;
  };
}

export interface ListKeywords extends Schema.Component {
  collectionName: 'components_list_keywords';
  info: {
    displayName: 'keywords';
    icon: 'cloud';
    description: '';
  };
  attributes: {
    word: Attribute.String;
  };
}

export interface ListStickyText extends Schema.Component {
  collectionName: 'components_list_sticky_texts';
  info: {
    displayName: 'stickyText';
    icon: 'bulletList';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface NavNav extends Schema.Component {
  collectionName: 'components_nav_navs';
  info: {
    displayName: 'Nav';
    icon: 'filter';
  };
  attributes: {
    Progetti: Attribute.String;
    Filosofia: Attribute.String;
    Blog: Attribute.String;
    Contatti: Attribute.String;
  };
}

export interface PageContatti extends Schema.Component {
  collectionName: 'components_page_contattis';
  info: {
    displayName: 'Contatti';
    icon: 'exit';
    description: '';
  };
  attributes: {
    IntriguingQuestion: Attribute.String;
    ContactURL: Attribute.String;
    Contatti: Attribute.Media;
  };
}

export interface PageEsperienza extends Schema.Component {
  collectionName: 'components_page_esperienzas';
  info: {
    displayName: 'Esperienza';
    icon: 'manyToMany';
    description: '';
  };
  attributes: {
    Esperienza: Attribute.Media;
    stickyTexts: Attribute.Component<'list.sticky-text', true>;
    text: Attribute.String;
  };
}

export interface PageHeader extends Schema.Component {
  collectionName: 'components_page_headers';
  info: {
    displayName: 'header';
    icon: 'alien';
  };
  attributes: {
    UnconventionalCreativeAgency: Attribute.String;
    Fluff: Attribute.String;
    MeasurableResults: Attribute.String;
    BeautifulProjects: Attribute.String;
    Header: Attribute.Media;
  };
}

export interface PageStrategy extends Schema.Component {
  collectionName: 'components_page_strategy_s';
  info: {
    displayName: 'Strategy ';
    icon: 'lightbulb';
    description: '';
  };
  attributes: {
    ProblemSolutionDescription: Attribute.RichText;
    OtherBeautifulThingsDescription: Attribute.String;
    OtherBeautifulThingsURL: Attribute.String;
    keywords: Attribute.Component<'list.keywords', true>;
    strategy: Attribute.Media;
  };
}

export interface Sec3ListSec3List extends Schema.Component {
  collectionName: 'components_sec3_list_sec3_lists';
  info: {
    displayName: 'sec3_list';
    icon: 'bulletList';
  };
  attributes: {
    item_name: Attribute.String;
  };
}

export interface SeoSeo extends Schema.Component {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'SEO';
    icon: 'earth';
    description: '';
  };
  attributes: {
    PageTitle: Attribute.String;
    Description: Attribute.Text;
    Keywords: Attribute.Text;
  };
}

export interface SocialMediaLinksSocialMediaLinks extends Schema.Component {
  collectionName: 'components_social_media_links_social_media_links';
  info: {
    displayName: 'Social-media-links';
    icon: 'dashboard';
  };
  attributes: {
    instagram: Attribute.String;
    facebook: Attribute.String;
    linkedin: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'contact-page.address': ContactPageAddress;
      'contact-page.header': ContactPageHeader;
      'footer.footer': FooterFooter;
      'list.keys': ListKeys;
      'list.keywords': ListKeywords;
      'list.sticky-text': ListStickyText;
      'nav.nav': NavNav;
      'page.contatti': PageContatti;
      'page.esperienza': PageEsperienza;
      'page.header': PageHeader;
      'page.strategy': PageStrategy;
      'sec3-list.sec3-list': Sec3ListSec3List;
      'seo.seo': SeoSeo;
      'social-media-links.social-media-links': SocialMediaLinksSocialMediaLinks;
    }
  }
}
