{
    testEngine: { name: 'axe-core', version: '4.4.1' },
    testRunner: { name: 'axe' },
    testEnvironment: {
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',    
      windowWidth: 1188,
      windowHeight: 658,
      orientationAngle: 0,
      orientationType: 'landscape-primary'
    },
    timestamp: '2022-02-24T06:45:14.229Z',
    url: 'https://dequeuniversity.com/demo/mars/',
    toolOptions: { reporter: 'v1' },
    inapplicable: [
      {
        id: 'accesskeys',
        impact: null,
        tags: [Array],
        description: 'Ensures every accesskey attribute value is unique',
        help: 'accesskey attribute value should be unique',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/accesskeys?application=webdriverio',
        nodes: []
      },
      {
        id: 'area-alt',
        impact: null,
        tags: [Array],
        description: 'Ensures <area> elements of image maps have alternate text',
        help: 'Active <area> elements must have alternate text',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/area-alt?application=webdriverio',
        nodes: []
      },
      {
        id: 'aria-command-name',
        impact: null,
        tags: [Array],
        description: 'Ensures every ARIA button, link and menuitem has an accessible name',
        help: 'ARIA commands must have an accessible name',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/aria-command-name?application=webdriverio',
        nodes: []
      },
      {
        id: 'aria-dialog-name',
        impact: null,
        tags: [Array],
        description: 'Ensures every ARIA dialog and alertdialog node has an accessible name',
        help: 'ARIA dialog and alertdialog nodes should have an accessible name',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/aria-dialog-name?application=webdriverio',
        nodes: []
      },
      {
        id: 'aria-input-field-name',
        impact: null,
        tags: [Array],
        description: 'Ensures every ARIA input field has an accessible name',
        help: 'ARIA input fields must have an accessible name',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/aria-input-field-name?application=webdriverio',
        nodes: []
      },
      {
        id: 'aria-meter-name',
        impact: null,
        tags: [Array],
        description: 'Ensures every ARIA meter node has an accessible name',
        help: 'ARIA meter nodes must have an accessible name',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/aria-meter-name?application=webdriverio',
        nodes: []
      },
      {
        id: 'aria-progressbar-name',
        impact: null,
        tags: [Array],
        description: 'Ensures every ARIA progressbar node has an accessible name',
        help: 'ARIA progressbar nodes must have an accessible name',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/aria-progressbar-name?application=webdriverio',
        nodes: []
      },
      {
        id: 'aria-required-children',
        impact: null,
        tags: [Array],
        description: 'Ensures elements with an ARIA role that require child roles contain them',
        help: 'Certain ARIA roles must contain particular children',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/aria-required-children?application=webdriverio',
        nodes: []
      },
      {
        id: 'aria-required-parent',
        impact: null,
        tags: [Array],
        description: 'Ensures elements with an ARIA role that require parent roles are contained by them',
        help: 'Certain ARIA roles must be contained by particular parents',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/aria-required-parent?application=webdriverio',
        nodes: []
      },
      {
        id: 'aria-roledescription',
        impact: null,
        tags: [Array],
        description: 'Ensure aria-roledescription is only used on elements with an implicit or explicit role',
        help: 'aria-roledescription must be on elements with a semantic role',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/aria-roledescription?application=webdriverio',
        nodes: []
      },
      {
        id: 'aria-text',
        impact: null,
        tags: [Array],
        description: 'Ensures "role=text" is used on elements with no focusable descendants',
        help: '"role=text" should have no focusable descendants',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/aria-text?application=webdriverio',
        nodes: []
      },
      {
        id: 'aria-toggle-field-name',
        impact: null,
        tags: [Array],
        description: 'Ensures every ARIA toggle field has an accessible name',
        help: 'ARIA toggle fields must have an accessible name',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/aria-toggle-field-name?application=webdriverio',
        nodes: []
      },
      {
        id: 'aria-tooltip-name',
        impact: null,
        tags: [Array],
        description: 'Ensures every ARIA tooltip node has an accessible name',
        help: 'ARIA tooltip nodes must have an accessible name',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/aria-tooltip-name?application=webdriverio',
        nodes: []
      },
      {
        id: 'aria-treeitem-name',
        impact: null,
        tags: [Array],
        description: 'Ensures every ARIA treeitem node has an accessible name',
        help: 'ARIA treeitem nodes should have an accessible name',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/aria-treeitem-name?application=webdriverio',
        nodes: []
      },
      {
        id: 'blink',
        impact: null,
        tags: [Array],
        description: 'Ensures <blink> elements are not used',
        help: '<blink> elements are deprecated and must not be used',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/blink?application=webdriverio',
        nodes: []
      },
      {
        id: 'definition-list',
        impact: null,
        tags: [Array],
        description: 'Ensures <dl> elements are structured correctly',
        help: '<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements',    
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/definition-list?application=webdriverio',
        nodes: []
      },
      {
        id: 'dlitem',
        impact: null,
        tags: [Array],
        description: 'Ensures <dt> and <dd> elements are contained by a <dl>',
        help: '<dt> and <dd> elements must be contained by a <dl>',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/dlitem?application=webdriverio',
        nodes: []
      },
      {
        id: 'empty-table-header',
        impact: null,
        tags: [Array],
        description: 'Ensures table headers have discernible text',
        help: 'Table header text must not be empty',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/empty-table-header?application=webdriverio',
        nodes: []
      },
      {
        id: 'frame-focusable-content',
        impact: null,
        tags: [Array],
        description: 'Ensures <frame> and <iframe> elements with focusable content do not have tabindex=-1',
        help: 'Frames with focusable content must not have tabindex=-1',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/frame-focusable-content?application=webdriverio',
        nodes: []
      },
      {
        id: 'html-xml-lang-mismatch',
        impact: null,
        tags: [Array],
        description: 'Ensure that HTML elements with both valid lang and xml:lang attributes agree on the base language of the page',      
        help: 'HTML elements with lang and xml:lang must have the same base language',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/html-xml-lang-mismatch?application=webdriverio',
        nodes: []
      },
      {
        id: 'input-image-alt',
        impact: null,
        tags: [Array],
        description: 'Ensures <input type="image"> elements have alternate text',
        help: 'Image buttons must have alternate text',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/input-image-alt?application=webdriverio',
        nodes: []
      },
      {
        id: 'landmark-banner-is-top-level',
        impact: null,
        tags: [Array],
        description: 'Ensures the banner landmark is at top level',
        help: 'Banner landmark should not be contained in another landmark',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/landmark-banner-is-top-level?application=webdriverio',
        nodes: []
      },
      {
        id: 'landmark-complementary-is-top-level',
        impact: null,
        tags: [Array],
        description: 'Ensures the complementary landmark or aside is at top level',
        help: 'Aside should not be contained in another landmark',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/landmark-complementary-is-top-level?application=webdriverio',
        nodes: []
      },
      {
        id: 'landmark-contentinfo-is-top-level',
        impact: null,
        tags: [Array],
        description: 'Ensures the contentinfo landmark is at top level',
        help: 'Contentinfo landmark should not be contained in another landmark',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/landmark-contentinfo-is-top-level?application=webdriverio',
        nodes: []
      },
      {
        id: 'landmark-main-is-top-level',
        impact: null,
        tags: [Array],
        description: 'Ensures the main landmark is at top level',
        help: 'Main landmark should not be contained in another landmark',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/landmark-main-is-top-level?application=webdriverio',
        nodes: []
      },
      {
        id: 'landmark-no-duplicate-banner',
        impact: null,
        tags: [Array],
        description: 'Ensures the document has at most one banner landmark',
        help: 'Document should not have more than one banner landmark',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/landmark-no-duplicate-banner?application=webdriverio',
        nodes: []
      },
      {
        id: 'landmark-no-duplicate-contentinfo',
        impact: null,
        tags: [Array],
        description: 'Ensures the document has at most one contentinfo landmark',
        help: 'Document should not have more than one contentinfo landmark',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/landmark-no-duplicate-contentinfo?application=webdriverio',
        nodes: []
      },
      {
        id: 'landmark-no-duplicate-main',
        impact: null,
        tags: [Array],
        description: 'Ensures the document has at most one main landmark',
        help: 'Document should not have more than one main landmark',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/landmark-no-duplicate-main?application=webdriverio',
        nodes: []
      },
      {
        id: 'marquee',
        impact: null,
        tags: [Array],
        description: 'Ensures <marquee> elements are not used',
        help: '<marquee> elements are deprecated and must not be used',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/marquee?application=webdriverio',
        nodes: []
      },
      {
        id: 'meta-refresh',
        impact: null,
        tags: [Array],
        description: 'Ensures <meta http-equiv="refresh"> is not used',
        help: 'Timed refresh must not exist',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/meta-refresh?application=webdriverio',
        nodes: []
      },
      {
        id: 'object-alt',
        impact: null,
        tags: [Array],
        description: 'Ensures <object> elements have alternate text',
        help: '<object> elements must have alternate text',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/object-alt?application=webdriverio',
        nodes: []
      },
      {
        id: 'presentation-role-conflict',
        impact: null,
        tags: [Array],
        description: 'Flags elements whose role is none or presentation and which cause the role conflict resolution to trigger.',
        help: 'Elements of role none or presentation should be flagged',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/presentation-role-conflict?application=webdriverio',
        nodes: []
      },
      {
        id: 'role-img-alt',
        impact: null,
        tags: [Array],
        description: "Ensures [role='img'] elements have alternate text",
        help: "[role='img'] elements must have an alternative text",
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/role-img-alt?application=webdriverio',
        nodes: []
      },
      {
        id: 'scope-attr-valid',
        impact: null,
        tags: [Array],
        description: 'Ensures the scope attribute is used correctly on tables',
        help: 'scope attribute should be used correctly',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/scope-attr-valid?application=webdriverio',
        nodes: []
      },
      {
        id: 'scrollable-region-focusable',
        impact: null,
        tags: [Array],
        description: 'Ensure elements that have scrollable content are accessible by keyboard',
        help: 'Scrollable region must have keyboard access',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/scrollable-region-focusable?application=webdriverio',
        nodes: []
      },
      {
        id: 'server-side-image-map',
        impact: null,
        tags: [Array],
        description: 'Ensures that server-side image maps are not used',
        help: 'Server-side image maps must not be used',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/server-side-image-map?application=webdriverio',
        nodes: []
      },
      {
        id: 'skip-link',
        impact: null,
        tags: [Array],
        description: 'Ensure all skip links have a focusable target',
        help: 'The skip-link target should exist and be focusable',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/skip-link?application=webdriverio',
        nodes: []
      },
      {
        id: 'svg-img-alt',
        impact: null,
        tags: [Array],
        description: 'Ensures <svg> elements with an img, graphics-document or graphics-symbol role have an accessible text',
        help: '<svg> elements with an img role must have an alternative text',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/svg-img-alt?application=webdriverio',
        nodes: []
      },
      {
        id: 'th-has-data-cells',
        impact: null,
        tags: [Array],
        description: 'Ensure that <th> elements and elements with role=columnheader/rowheader have data cells they describe',
        help: 'Table headers in a data table must refer to data cells',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/th-has-data-cells?application=webdriverio',
        nodes: []
      },
      {
        id: 'valid-lang',
        impact: null,
        tags: [Array],
        description: 'Ensures lang attributes have valid values',
        help: 'lang attribute must have a valid value',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/valid-lang?application=webdriverio',
        nodes: []
      }
    ],
    passes: [
      {
        id: 'aria-allowed-attr',
        impact: 'serious',
        tags: [Array],
        description: "Ensures ARIA attributes are allowed for an element's role",
        help: 'Elements must only use allowed ARIA attributes',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/aria-allowed-attr?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'aria-allowed-role',
        impact: null,
        tags: [Array],
        description: 'Ensures role attribute has an appropriate value for the element',
        help: 'ARIA role should be appropriate for the element',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/aria-allowed-role?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'aria-hidden-body',
        impact: null,
        tags: [Array],
        description: "Ensures aria-hidden='true' is not present on the document body.",
        help: "aria-hidden='true' must not be present on the document body",
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/aria-hidden-body?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'aria-hidden-focus',
        impact: null,
        tags: [Array],
        description: 'Ensures aria-hidden elements do not contain focusable elements',
        help: 'ARIA hidden element must not contain focusable elements',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/aria-hidden-focus?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'aria-required-attr',
        impact: null,
        tags: [Array],
        description: 'Ensures elements with ARIA roles have all required ARIA attributes',
        help: 'Required ARIA attributes must be provided',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/aria-required-attr?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'aria-roles',
        impact: null,
        tags: [Array],
        description: 'Ensures all elements with a role attribute use a valid value',
        help: 'ARIA roles used must conform to valid values',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/aria-roles?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'aria-valid-attr-value',
        impact: null,
        tags: [Array],
        description: 'Ensures all ARIA attributes have valid values',
        help: 'ARIA attributes must conform to valid values',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/aria-valid-attr-value?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'aria-valid-attr',
        impact: null,
        tags: [Array],
        description: 'Ensures attributes that begin with aria- are valid ARIA attributes',
        help: 'ARIA attributes must conform to valid names',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/aria-valid-attr?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'autocomplete-valid',
        impact: null,
        tags: [Array],
        description: 'Ensure the autocomplete attribute is correct and suitable for the form field',
        help: 'autocomplete attribute must be used correctly',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/autocomplete-valid?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'avoid-inline-spacing',
        impact: null,
        tags: [Array],
        description: 'Ensure that text spacing set through style attributes can be adjusted with custom stylesheets',
        help: 'Inline text spacing must be adjustable with custom stylesheets',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/avoid-inline-spacing?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'button-name',
        impact: 'critical',
        tags: [Array],
        description: 'Ensures buttons have discernible text',
        help: 'Buttons must have discernible text',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/button-name?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'bypass',
        impact: null,
        tags: [Array],
        description: 'Ensures each page has at least one mechanism for a user to bypass navigation and jump straight to the content',      
        help: 'Page must have means to bypass repeated blocks',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/bypass?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'color-contrast',
        impact: 'serious',
        tags: [Array],
        description: 'Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds',
        help: 'Elements must have sufficient color contrast',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/color-contrast?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'document-title',
        impact: null,
        tags: [Array],
        description: 'Ensures each HTML document contains a non-empty <title> element',
        help: 'Documents must have <title> element to aid in navigation',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/document-title?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'duplicate-id-active',
        impact: 'serious',
        tags: [Array],
        description: 'Ensures every id attribute value of active elements is unique',
        help: 'IDs of active elements must be unique',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/duplicate-id-active?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'duplicate-id-aria',
        impact: 'critical',
        tags: [Array],
        description: 'Ensures every id attribute value used in ARIA and in labels is unique',
        help: 'IDs used in ARIA and labels must be unique',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/duplicate-id-aria?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'duplicate-id',
        impact: 'minor',
        tags: [Array],
        description: 'Ensures every id attribute value is unique',
        help: 'id attribute value must be unique',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/duplicate-id?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'empty-heading',
        impact: null,
        tags: [Array],
        description: 'Ensures headings have discernible text',
        help: 'Headings should not be empty',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/empty-heading?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'form-field-multiple-labels',
        impact: null,
        tags: [Array],
        description: 'Ensures form field does not have multiple label elements',
        help: 'Form field must not have multiple label elements',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/form-field-multiple-labels?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'frame-tested',
        impact: null,
        tags: [Array],
        description: 'Ensures <iframe> and <frame> elements contain the axe-core script',
        help: 'Frames should be tested with axe-core',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/frame-tested?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'frame-title-unique',
        impact: null,
        tags: [Array],
        description: 'Ensures <iframe> and <frame> elements contain a unique title attribute',
        help: 'Frames should have a unique title attribute',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/frame-title-unique?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'frame-title',
        impact: 'serious',
        tags: [Array],
        description: 'Ensures <iframe> and <frame> elements have an accessible name',
        help: 'Frames must have an accessible name',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/frame-title?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'heading-order',
        impact: null,
        tags: [Array],
        description: 'Ensures the order of headings is semantically correct',
        help: 'Heading levels should only increase by one',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/heading-order?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'html-lang-valid',
        impact: null,
        tags: [Array],
        description: 'Ensures the lang attribute of the <html> element has a valid value',
        help: '<html> element must have a valid value for the lang attribute',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/html-lang-valid?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'identical-links-same-purpose',
        impact: null,
        tags: [Array],
        description: 'Ensure that links with the same accessible name serve a similar purpose',
        help: 'Links with the same name must have a similar purpose',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/identical-links-same-purpose?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'image-alt',
        impact: 'critical',
        tags: [Array],
        description: 'Ensures <img> elements have alternate text or a role of none or presentation',
        help: 'Images must have alternate text',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/image-alt?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'image-redundant-alt',
        impact: null,
        tags: [Array],
        description: 'Ensure image alternative is not repeated as text',
        help: 'Alternative text of images should not be repeated as text',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/image-redundant-alt?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'input-button-name',
        impact: null,
        tags: [Array],
        description: 'Ensures input buttons have discernible text',
        help: 'Input buttons must have discernible text',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/input-button-name?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'label-title-only',
        impact: null,
        tags: [Array],
        description: 'Ensures that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes',
        help: 'Form elements should have a visible label',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/label-title-only?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'label',
        impact: null,
        tags: [Array],
        description: 'Ensures every form element has a label',
        help: 'Form elements must have labels',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/label?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'link-name',
        impact: 'serious',
        tags: [Array],
        description: 'Ensures links have discernible text',
        help: 'Links must have discernible text',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/link-name?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'list',
        impact: null,
        tags: [Array],
        description: 'Ensures that lists are structured correctly',
        help: '<ul> and <ol> must only directly contain <li>, <script> or <template> elements',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/list?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'listitem',
        impact: null,
        tags: [Array],
        description: 'Ensures <li> elements are used semantically',
        help: '<li> elements must be contained in a <ul> or <ol>',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/listitem?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'meta-viewport-large',
        impact: null,
        tags: [Array],
        description: 'Ensures <meta name="viewport"> can scale a significant amount',
        help: 'Users should be able to zoom and scale the text up to 500%',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/meta-viewport-large?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'meta-viewport',
        impact: null,
        tags: [Array],
        description: 'Ensures <meta name="viewport"> does not disable text scaling and zooming',
        help: 'Zooming and scaling should not be disabled',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/meta-viewport?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'nested-interactive',
        impact: null,
        tags: [Array],
        description: 'Ensures interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies',
        help: 'Interactive controls must not be nested',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/nested-interactive?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'page-has-heading-one',
        impact: null,
        tags: [Array],
        description: 'Ensure that the page, or at least one of its frames contains a level-one heading',
        help: 'Page should contain a level-one heading',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/page-has-heading-one?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'region',
        impact: 'moderate',
        tags: [Array],
        description: 'Ensures all page content is contained by landmarks',
        help: 'All page content should be contained by landmarks',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/region?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'tabindex',
        impact: 'serious',
        tags: [Array],
        description: 'Ensures tabindex attribute values are not greater than 0',
        help: 'Elements should not have tabindex greater than zero',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/tabindex?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'table-duplicate-name',
        impact: null,
        tags: [Array],
        description: 'Ensure the <caption> element does not contain the same text as the summary attribute',
        help: 'tables should not have the same summary and caption',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/table-duplicate-name?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'td-headers-attr',
        impact: null,
        tags: [Array],
        description: 'Ensure that each cell in a table that uses the headers attribute refers only to other cells in that table',
        help: 'Table cells that use the headers attribute must only refer to cells in the same table',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/td-headers-attr?application=webdriverio',
        nodes: [Array]
      }
    ],
    incomplete: [
      {
        id: 'aria-allowed-attr',
        impact: 'serious',
        tags: [Array],
        description: "Ensures ARIA attributes are allowed for an element's role",
        help: 'Elements must only use allowed ARIA attributes',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/aria-allowed-attr?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'color-contrast',
        impact: 'serious',
        tags: [Array],
        description: 'Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds',
        help: 'Elements must have sufficient color contrast',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/color-contrast?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'video-caption',
        impact: 'critical',
        tags: [Array],
        description: 'Ensures <video> elements have captions',
        help: '<video> elements must have captions',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/video-caption?application=webdriverio',
        nodes: [Array]
      }
    ],
    violations: [
      {
        id: 'button-name',
        impact: 'critical',
        tags: [Array],
        description: 'Ensures buttons have discernible text',
        help: 'Buttons must have discernible text',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/button-name?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'color-contrast',
        impact: 'serious',
        tags: [Array],
        description: 'Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds',
        help: 'Elements must have sufficient color contrast',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/color-contrast?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'duplicate-id-active',
        impact: 'serious',
        tags: [Array],
        description: 'Ensures every id attribute value of active elements is unique',
        help: 'IDs of active elements must be unique',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/duplicate-id-active?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'duplicate-id-aria',
        impact: 'critical',
        tags: [Array],
        description: 'Ensures every id attribute value used in ARIA and in labels is unique',
        help: 'IDs used in ARIA and labels must be unique',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/duplicate-id-aria?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'duplicate-id',
        impact: 'minor',
        tags: [Array],
        description: 'Ensures every id attribute value is unique',
        help: 'id attribute value must be unique',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/duplicate-id?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'frame-title',
        impact: 'serious',
        tags: [Array],
        description: 'Ensures <iframe> and <frame> elements have an accessible name',
        help: 'Frames must have an accessible name',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/frame-title?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'html-has-lang',
        impact: 'serious',
        tags: [Array],
        description: 'Ensures every HTML document has a lang attribute',
        help: '<html> element must have a lang attribute',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/html-has-lang?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'image-alt',
        impact: 'critical',
        tags: [Array],
        description: 'Ensures <img> elements have alternate text or a role of none or presentation',
        help: 'Images must have alternate text',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/image-alt?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'landmark-one-main',
        impact: 'moderate',
        tags: [Array],
        description: 'Ensures the document has a main landmark',
        help: 'Document should have one main landmark',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/landmark-one-main?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'landmark-unique',
        impact: 'moderate',
        tags: [Array],
        help: 'Ensures landmarks are unique',
        description: 'Landmarks should have a unique role or role/label/title (i.e. accessible name) combination',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/landmark-unique?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'link-name',
        impact: 'serious',
        tags: [Array],
        description: 'Ensures links have discernible text',
        help: 'Links must have discernible text',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/link-name?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'region',
        impact: 'moderate',
        tags: [Array],
        description: 'Ensures all page content is contained by landmarks',
        help: 'All page content should be contained by landmarks',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/region?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'select-name',
        impact: 'critical',
        tags: [Array],
        description: 'Ensures select element has an accessible name',
        help: 'Select element must have an accessible name',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/select-name?application=webdriverio',
        nodes: [Array]
      },
      {
        id: 'tabindex',
        impact: 'serious',
        tags: [Array],
        description: 'Ensures tabindex attribute values are not greater than 0',
        help: 'Elements should not have tabindex greater than zero',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/tabindex?application=webdriverio',
        nodes: [Array]
      }
    ]
  }
  