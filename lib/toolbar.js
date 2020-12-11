"use strict";

const { Save } = require("@material-ui/icons");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _toolbarDraggableItem = _interopRequireDefault(require("./toolbar-draggable-item"));

var _UUID = _interopRequireDefault(require("./UUID"));

var _store = _interopRequireDefault(require("./stores/store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Toolbar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Toolbar, _React$Component);

  function Toolbar(props) {
    var _this;

    _classCallCheck(this, Toolbar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Toolbar).call(this, props));
    var items = _this.props.items ? _this.props.items : _this._defaultItems();
    _this.state = {
      items: items
    };

    _store["default"].subscribe(function (state) {
      return _this.setState({
        store: state
      });
    });

    _this.create = _this.create.bind(_assertThisInitialized(_this));
    return _this;
  }

  function load1800(){
    alert('hi');
  }
var labelArray=["CLEANLINESS/DAMAGE/MISSING ITEMS (Interior/Exterior)/UNUSUAL NOISE OR OCCURRENCE","LEAKS/FLUID LEVELS","SAFETY DEVICES","BATTERIES (Fluid/damage/cleanliness/security)/INSTRUMENTS/GAUGES","DRIVE BELTS (Fraying/cracking/tension)/PULLY/MOTOR","STEERING/SPRINGS/SHACKLES","EXHAUST SYSTEM/SPARK ARRESTORS (Damage/leaks)","TIRES/ WHEELS (Lug nuts/cracks) TRACKS","HEATER/DEFROSTER/AIR-CONDITIONER/AUXILLIARY GENERATORS/AUXILLARY HEATERS","BRAKES (Servicing-Parking)/CLUTCHES (Operate)/ACCELERATOR PEDAL (Damage/worn)","WINDSHIELD (Wipers/washer fluid/cracks)","HYDRAULIC HOSES (Damage/frayed)/CYLINDERS/VALVES","COLD WEATHER AIDS (Ether/alcohol injector/battery heater/oil-engine heater/coolant heater, etc.)","POWER TAKE-OFF (PTO)","WINCH/TOW CONNECTIONS","AIR TANKS","MAST TINES/ROLLERIZED TINES","ROLLERS/POWER CONVEYORS/RAILS/LADDERS/CAT WALKS/CARGO BED","BED (K-LOAD) TOP/HALF/LOWEST/ROLL/SHIFT/YAW","LOWER LOBE CAB SHIFT","EMERGENCY STAND-BY SYSTEM","MARKINGS-CHECK LEGIBILITY","CHUTES/AUGERS/FAN BLADES/WEAR SHOES","DRUMS/CROWNS/FAIR LEADS","BOOMS/OUTRIGGERS/BASKET/PLATFORM/TURNTABLE","BROOMS/SPROCKETS/CHAINS","BLADES/REELS/SICKLE BARS/FLAILS","KETTLE/HOISTING MECHANISM/AGITATORS","SHEAVES/BLOCKS/CABLES","MOULDBOARDS/BOWLS/CUTTING EDGES/SKIDS","PUMPS/PIPING/DISCHARGE VALVES FOR LEAKS, CORROSION/SPARE BARS","FIREFIGHTING SPECIALIZED EQUIPMENT/SAFETY DEVICES","FIREFIGHTING SYSTEM OPERATION AND FOAM/WATER LEVELS","AUXILLIARY FIREFIGHTING SYSTEM","HOSE/REELS/HANDLINES/TURRETS"];

  _createClass(Toolbar, [{
    key: "_defaultItems",
    value: function _defaultItems() {
      return [ 
      /*{
        key: 'Header',
        name: 'Header Text',
        icon: 'fas fa-heading',
        "static": true,
        content: 'Placeholder Text...'
      },{
        key: 'Label',
        name: 'Label',
        "static": true,
        icon: 'fas fa-font',
        content: 'Placeholder Text...'
      }, {
        key: 'Paragraph',
        name: 'Paragraph',
        "static": true,
        icon: 'fas fa-paragraph',
        content: 'Placeholder Text...'
      }, {
        key: 'LineBreak',
        name: 'Line Break',
        "static": true,
        icon: 'fas fa-arrows-alt-h'
      }, {
        key: 'Dropdown',
        canHaveAnswer: true,
        name: 'Dropdown',
        icon: 'far fa-caret-square-down',
        label: 'Placeholder Label',
        field_name: 'dropdown_',
        options: []
      }, {
        key: 'Tags',
        canHaveAnswer: true,
        name: 'Tags',
        icon: 'fas fa-tags',
        label: 'Placeholder Label',
        field_name: 'tags_',
        options: []
      }, {
        key: 'Checkboxes',
        canHaveAnswer: true,
        name: 'Checkboxes',
        icon: 'far fa-check-square',
        label: 'Placeholder Label',
        field_name: 'checkboxes_',
        options: []
      },
      */ 
     {
      key: 'RadioButtons',
      canHaveAnswer: true,
      name: 'Template 1800',
      icon: 'far fa-dot-circle',
      label: 'Template 1800',
      field_name: 'radiobuttons_',
      options: []
    }, 
    /*
    {
        key: 'RadioButtons',
        canHaveAnswer: true,
        name: 'Pass/Fail',
        icon: 'far fa-dot-circle',
        label: 'Pass/Fail',
        field_name: 'radiobuttons_',
        options: []
      }, 
      */
      /*
      {
        key: 'TextInput',
        canHaveAnswer: true,
        name: 'Text Input',
        label: 'Placeholder Label',
        icon: 'fas fa-font',
        field_name: 'text_input_'
      }, 
      */
     /*
      {
        key: 'NumberInput',
        canHaveAnswer: true,
        name: 'Number Input',
        label: 'Number Input: ',
        icon: 'fas fa-plus',
        field_name: 'number_input_'
      }, 
      */
      /*{
        key: 'TextArea',
        canHaveAnswer: true,
        name: 'Multi-line Input',
        label: 'Placeholder Label',
        icon: 'fas fa-text-height',
        field_name: 'text_area_'
      }, {
        key: 'Image',
        name: 'Image',
        label: '',
        icon: 'far fa-image',
        field_name: 'image_',
        src: ''
      }, {
        key: 'Rating',
        canHaveAnswer: true,
        name: 'Rating',
        label: 'Placeholder Label',
        icon: 'fas fa-star',
        field_name: 'rating_'
      }, {
        key: 'DatePicker',
        canDefaultToday: true,
        canReadOnly: true,
        dateFormat: 'MM/dd/yyyy',
        timeFormat: 'hh:mm aa',
        showTimeSelect: false,
        showTimeSelectOnly: false,
        name: 'Date',
        icon: 'far fa-calendar-alt',
        label: 'Placeholder Label',
        field_name: 'date_picker_'
      }, {
        key: 'Signature',
        canReadOnly: true,
        name: 'Signature',
        icon: 'fas fa-pen-square',
        label: 'Signature',
        field_name: 'signature_'
      }, {
        key: 'HyperLink',
        name: 'Web site',
        icon: 'fas fa-link',
        "static": true,
        content: 'Placeholder Web site link ...',
        href: 'http://www.example.com'
      }, {
        key: 'Download',
        name: 'File Attachment',
        icon: 'fas fa-file',
        "static": true,
        content: 'Placeholder file name ...',
        field_name: 'download_',
        file_path: '',
        _href: ''
      },
      */
     /*
      {
        key: 'Range',
        name: 'Percentage',
        icon: 'fas fa-arrows-alt-h',
        label: '',
        field_name: 'range_',
        step: 1,
        default_value: 0,
        min_value: 0,
        max_value: 100,
        min_label: '%',
        max_label: ''
      },
      {
        key: 'Range',
        name: 'Range',
        icon: 'fas fa-sliders-h',
        label: 'Example Range Slider',
        field_name: 'range_',
        step: 1,
        default_value: 3,
        min_value: 1,
        max_value: 5,
        min_label: '',
        max_label: ''
      },
*/
      {
        key: 'SaveMe',
        name: 'Save Form',
        icon: '',
        label: 'Example Range Slider',
        field_name: 'save_',
        step: 1,
        default_value: 3,
        min_value: 1,
        max_value: 5,
        min_label: '',
        max_label: ''
      },
      
      /* {
        key: 'Camera',
        name: 'Camera',
        icon: 'fas fa-camera',
        label: 'Placeholder Label',
        field_name: 'camera_'
      }
    */
   ];
    }
  }, {
    key: "create",
    value: function create(item) {
      var k=0;
      var elementOptions = {
        id: _UUID["default"].uuid(),
        element: item.element || item.key,
        text: item.name,
        "static": item["static"],
        required: false,
        showDescription: item.showDescription
      };

      if (this.props.showDescription === true && !item["static"]) {
        elementOptions.showDescription = true;
      }

      if (item["static"]) {
        elementOptions.bold = false;
        elementOptions.italic = false;
      }

      if (item.canHaveAnswer) {
        elementOptions.canHaveAnswer = item.canHaveAnswer;
      }

      if (item.canReadOnly) {
        elementOptions.readOnly = false;
      }

      if (item.canDefaultToday) {
        elementOptions.defaultToday = false;
      }

      if (item.content) {
        elementOptions.content = item.content;
      }

      if (item.href) {
        elementOptions.href = item.href;
      }

      elementOptions.canHavePageBreakBefore = item.canHavePageBreakBefore !== false;
      elementOptions.canHaveAlternateForm = item.canHaveAlternateForm !== false;
      elementOptions.canHaveDisplayHorizontal = item.canHaveDisplayHorizontal !== false;
      elementOptions.canHaveOptionCorrect = item.canHaveOptionCorrect !== false;
      elementOptions.canHaveOptionValue = item.canHaveOptionValue !== false;
      elementOptions.canPopulateFromApi = item.canPopulateFromApi !== false;

      if (item.key === 'Image') {
        elementOptions.src = item.src;
      }
      if (item.key === 'SaveMe') {
        window.location='https://www.rhinoapp.us/admin/SavedForms';
      }
      if (item.key === 'DatePicker') {
        elementOptions.dateFormat = item.dateFormat;
        elementOptions.timeFormat = item.timeFormat;
        elementOptions.showTimeSelect = item.showTimeSelect;
        elementOptions.showTimeSelectOnly = item.showTimeSelectOnly;
      }

      if (item.key === 'Download') {
        elementOptions._href = item._href;
        elementOptions.file_path = item.file_path;
      }

      if (item.key === 'Range') {
        elementOptions.step = item.step;
        elementOptions.default_value = item.default_value;
        elementOptions.min_value = item.min_value;
        elementOptions.max_value = item.max_value;
        elementOptions.min_label = item.min_label;
        elementOptions.max_label = item.max_label;
      }

      if (item.defaultValue) {
        elementOptions.defaultValue = item.defaultValue;
      }

      if (item.field_name) {
        elementOptions.field_name = item.field_name + _UUID["default"].uuid();
      }

      if (item.label) {
        elementOptions.label = item.label;
      }

      if (item.options) {
        if (item.options.length > 0) {
          elementOptions.options = item.options;
        } else {
          elementOptions.options = Toolbar._defaultItemOptions(elementOptions.element);
        }
      }
      k=k+1;
      return elementOptions;
    }
  }, {
    key: "_onClick",
    value: function _onClick(item) {
      // ElementActions.createElement(this.create(item));

      for(var i=0;i<35;i++){
        item.label=labelArray[i];
        _store["default"].dispatch('create', this.create(item));
      }

    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react["default"].createElement("div", {
        className: "react-form-builder-toolbar float-right"
      }, _react["default"].createElement("h4", null, "Template Docs"), _react["default"].createElement("ul", null, this.state.items.map(function (item) {


        return _react["default"].createElement(_toolbarDraggableItem["default"], {
          data: item,
          key: item.key,
          onClick: _this2._onClick.bind(_this2, item),
          onCreate: _this2.create
        });

        return _react["default"].createElement(_toolbarDraggableItem["default"], {
          data: item,
          key: item.key,
          onClick: _this2._onClick.bind(_this2, item),
          onCreate: _this2.create
        });
      })));
    }
  }], [{
    key: "_defaultItemOptions",
    value: function _defaultItemOptions(element) {
      switch (element) {
        case 'Dropdown':
          return [{
            value: 'place_holder_option_1',
            text: 'Place holder option 1',
            key: "dropdown_option_".concat(_UUID["default"].uuid())
          }, {
            value: 'place_holder_option_2',
            text: 'Place holder option 2',
            key: "dropdown_option_".concat(_UUID["default"].uuid())
          }];

        case 'Tags':
          return [{
            value: 'place_holder_tag_1',
            text: 'Place holder tag 1',
            key: "tags_option_".concat(_UUID["default"].uuid())
          }, {
            value: 'place_holder_tag_2',
            text: 'Place holder tag 2',
            key: "tags_option_".concat(_UUID["default"].uuid())
          }, {
            value: 'place_holder_tag_3',
            text: 'Place holder tag 3',
            key: "tags_option_".concat(_UUID["default"].uuid())
          }];

        case 'Checkboxes':
          return [{
            value: 'place_holder_option_1',
            text: 'Place holder option 1',
            key: "checkboxes_option_".concat(_UUID["default"].uuid())
          }, {
            value: 'place_holder_option_2',
            text: 'Place holder option 2',
            key: "checkboxes_option_".concat(_UUID["default"].uuid())
          }];

        case 'RadioButtons':
          return [{
            value: 'place_holder_option_1',
            text: 'Pass',
            key: "radiobuttons_option_".concat(_UUID["default"].uuid())
          }, {
            value: 'place_holder_option_2',
            text: 'Fail',
            key: "radiobuttons_option_".concat(_UUID["default"].uuid())
          },
        ];



        default:
          return [];
      }
    }
  }]);

  return Toolbar;
}(_react["default"].Component);

exports["default"] = Toolbar;