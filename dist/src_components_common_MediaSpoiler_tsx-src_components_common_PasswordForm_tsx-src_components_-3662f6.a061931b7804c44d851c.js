"use strict";
(self["webpackChunktelegram_t"] = self["webpackChunktelegram_t"] || []).push([["src_components_common_MediaSpoiler_tsx-src_components_common_PasswordForm_tsx-src_components_-3662f6"],{

/***/ "./src/components/common/AnimatedCounter.tsx":
/*!***************************************************!*\
  !*** ./src/components/common/AnimatedCounter.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global */ "./src/global/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_schedulers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/schedulers */ "./src/util/schedulers.ts");
/* harmony import */ var _hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useForceUpdate */ "./src/hooks/useForceUpdate.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_usePreviousDeprecated__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/usePreviousDeprecated */ "./src/hooks/usePreviousDeprecated.ts");
/* harmony import */ var _AnimatedCounter_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AnimatedCounter.module.scss */ "./src/components/common/AnimatedCounter.module.scss");









const ANIMATION_TIME = 200;
const MAX_SIMULTANEOUS_ANIMATIONS = 10;
let scheduledAnimationsCounter = 0;
const resetCounterOnTickEnd = (0,_util_schedulers__WEBPACK_IMPORTED_MODULE_4__.throttleWithTickEnd)(() => {
  scheduledAnimationsCounter = 0;
});
const AnimatedCounter = ({
  text,
  className,
  isDisabled,
  ref
}) => {
  const {
    isRtl
  } = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const prevText = (0,_hooks_usePreviousDeprecated__WEBPACK_IMPORTED_MODULE_7__["default"])(text);
  const forceUpdate = (0,_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const shouldAnimate = scheduleAnimation(!isDisabled && (0,_global_selectors__WEBPACK_IMPORTED_MODULE_2__.selectCanAnimateInterface)((0,_global__WEBPACK_IMPORTED_MODULE_1__.getGlobal)()) && prevText !== undefined && prevText !== text);
  const characters = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return shouldAnimate ? renderAnimatedCharacters(text, prevText) : text;
  }, [shouldAnimate, prevText, text]);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!shouldAnimate) return undefined;
    const timeoutId = window.setTimeout(() => {
      forceUpdate();
    }, ANIMATION_TIME);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [shouldAnimate, text]);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    ref: ref,
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(className, !isDisabled && _AnimatedCounter_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].root),
    dir: isRtl ? 'rtl' : undefined
  }, characters);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(AnimatedCounter));
function scheduleAnimation(condition) {
  if (!condition || scheduledAnimationsCounter >= MAX_SIMULTANEOUS_ANIMATIONS) return false;
  if (scheduledAnimationsCounter === 0) {
    resetCounterOnTickEnd();
  }
  scheduledAnimationsCounter++;
  return true;
}
function renderAnimatedCharacters(text, prevText) {
  const elements = [];
  const textLength = text.length;
  const prevTextLength = prevText?.length ?? 0;
  for (let i = 0; i <= textLength; i++) {
    const charIndex = textLength - i;
    const prevTextCharIndex = prevTextLength - i;
    if (prevText && prevTextCharIndex >= 0 && text[charIndex] !== prevText[prevTextCharIndex]) {
      elements.unshift( /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
        className: _AnimatedCounter_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].characterContainer
      }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
        className: _AnimatedCounter_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].character
      }, text[charIndex] ?? ''), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
        className: _AnimatedCounter_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].characterOld
      }, prevText[prevTextCharIndex]), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
        className: _AnimatedCounter_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].characterNew
      }, text[charIndex] ?? '')));
    } else {
      elements.unshift( /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, text[charIndex] ?? ''));
    }
  }
  return elements;
}

/***/ }),

/***/ "./src/components/common/AnimatedIconFromSticker.tsx":
/*!***********************************************************!*\
  !*** ./src/components/common/AnimatedIconFromSticker.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _api_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/types */ "./src/api/types/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useMedia */ "./src/hooks/useMedia.ts");
/* harmony import */ var _AnimatedIconWithPreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AnimatedIconWithPreview */ "./src/components/common/AnimatedIconWithPreview.tsx");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





function AnimatedIconFromSticker(props) {
  const {
    sticker,
    noLoad,
    forcePreview,
    ...otherProps
  } = props;
  const thumbDataUri = sticker?.thumbnail?.dataUri;
  const localMediaHash = sticker && (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getStickerMediaHash)(sticker, 'full');
  const previewBlobUrl = (0,_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__["default"])(sticker ? (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getStickerMediaHash)(sticker, 'preview') : undefined, noLoad && !forcePreview, _api_types__WEBPACK_IMPORTED_MODULE_1__.ApiMediaFormat.BlobUrl);
  const tgsUrl = (0,_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__["default"])(localMediaHash, noLoad);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_AnimatedIconWithPreview__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
    tgsUrl: tgsUrl,
    previewUrl: previewBlobUrl,
    thumbDataUri: thumbDataUri
    // eslint-disable-next-line react/jsx-props-no-spreading
  }, otherProps));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(AnimatedIconFromSticker));

/***/ }),

/***/ "./src/components/common/AnimatedIconWithPreview.tsx":
/*!***********************************************************!*\
  !*** ./src/components/common/AnimatedIconWithPreview.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_buildStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/buildStyle */ "./src/util/buildStyle.ts");
/* harmony import */ var _hooks_useFlag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useFlag */ "./src/hooks/useFlag.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useMediaTransitionDeprecated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useMediaTransitionDeprecated */ "./src/hooks/useMediaTransitionDeprecated.ts");
/* harmony import */ var _AnimatedIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AnimatedIcon */ "./src/components/common/AnimatedIcon.tsx");
/* harmony import */ var _AnimatedIconWithPreview_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AnimatedIconWithPreview.module.scss */ "./src/components/common/AnimatedIconWithPreview.module.scss");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








const ANIMATION_DURATION = 300;
const loadedPreviewUrls = new Set();
function AnimatedIconWithPreview(props) {
  const {
    previewUrl,
    thumbDataUri,
    className,
    ...otherProps
  } = props;
  const [isThumbOpen,, unmarkThumbOpen] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_3__["default"])(Boolean(thumbDataUri));
  const thumbClassNames = (0,_hooks_useMediaTransitionDeprecated__WEBPACK_IMPORTED_MODULE_5__["default"])(isThumbOpen);
  const [isPreviewOpen, markPreviewOpen, unmarkPreviewOpen] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_3__["default"])(loadedPreviewUrls.has(previewUrl));
  const previewClassNames = (0,_hooks_useMediaTransitionDeprecated__WEBPACK_IMPORTED_MODULE_5__["default"])(isPreviewOpen);
  const [isAnimationReady, markAnimationReady] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_3__["default"])(false);
  const handlePreviewLoad = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_4__["default"])(() => {
    markPreviewOpen();
    loadedPreviewUrls.add(previewUrl);
  });
  const handleAnimationReady = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_4__["default"])(() => {
    unmarkThumbOpen();
    unmarkPreviewOpen();
    setTimeout(markAnimationReady, ANIMATION_DURATION);
  });
  const {
    size
  } = props;
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(className, _AnimatedIconWithPreview_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].root),
    style: (0,_util_buildStyle__WEBPACK_IMPORTED_MODULE_2__["default"])(size !== undefined && `width: ${size}px; height: ${size}px;`)
  }, thumbDataUri && !isAnimationReady &&
  /*#__PURE__*/
  // eslint-disable-next-line jsx-a11y/alt-text
  _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
    src: thumbDataUri,
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_AnimatedIconWithPreview_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].preview, thumbClassNames),
    draggable: false
  }), previewUrl && !isAnimationReady &&
  /*#__PURE__*/
  // eslint-disable-next-line jsx-a11y/alt-text
  _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
    src: previewUrl,
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_AnimatedIconWithPreview_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].preview, previewClassNames),
    draggable: false,
    onLoad: handlePreviewLoad
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_AnimatedIcon__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, otherProps, {
    onLoad: handleAnimationReady
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(AnimatedIconWithPreview));

/***/ }),

/***/ "./src/components/common/AvatarList.tsx":
/*!**********************************************!*\
  !*** ./src/components/common/AvatarList.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _AvatarList_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AvatarList.module.scss */ "./src/components/common/AvatarList.module.scss");





const DEFAULT_LIMIT = 3;
const AvatarList = ({
  peers,
  size,
  className,
  limit = DEFAULT_LIMIT,
  badgeText
}) => {
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const pxSize = typeof size === 'number' ? size : _Avatar__WEBPACK_IMPORTED_MODULE_3__.AVATAR_SIZES[size];
  const renderingBadgeText = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (badgeText) return badgeText;
    if (!peers?.length || peers.length <= limit) return undefined;
    return `+${peers.length - limit}`;
  }, [badgeText, peers, limit]);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(className, _AvatarList_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].root),
    style: `--_size: ${pxSize}px;`,
    dir: lang.isRtl ? 'rtl' : 'ltr'
  }, peers?.slice(0, limit).map(peer => /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Avatar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: size,
    peer: peer,
    className: _AvatarList_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].avatar
  })), renderingBadgeText && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _AvatarList_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].badge
  }, renderingBadgeText));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(AvatarList));

/***/ }),

/***/ "./src/components/common/MediaSpoiler.tsx":
/*!************************************************!*\
  !*** ./src/components/common/MediaSpoiler.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/fasterdom/fasterdom */ "./src/lib/fasterdom/fasterdom.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _hooks_useCanvasBlur__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useCanvasBlur */ "./src/hooks/useCanvasBlur.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useShowTransitionDeprecated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useShowTransitionDeprecated */ "./src/hooks/useShowTransitionDeprecated.ts");
/* harmony import */ var _MediaSpoiler_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MediaSpoiler.module.scss */ "./src/components/common/MediaSpoiler.module.scss");







const BLUR_RADIUS = 25;
const ANIMATION_DURATION = 500;
const MediaSpoiler = ({
  isVisible,
  withAnimation,
  thumbDataUri,
  className,
  width,
  height
}) => {
  // eslint-disable-next-line no-null/no-null
  const ref = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    shouldRender,
    transitionClassNames
  } = (0,_hooks_useShowTransitionDeprecated__WEBPACK_IMPORTED_MODULE_5__["default"])(isVisible, undefined, true, withAnimation ? false : undefined, undefined, ANIMATION_DURATION);
  const canvasRef = (0,_hooks_useCanvasBlur__WEBPACK_IMPORTED_MODULE_3__["default"])(thumbDataUri, !shouldRender, undefined, BLUR_RADIUS, width, height);
  const handleClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_4__["default"])(e => {
    if (!ref.current) return;
    const el = ref.current;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const shiftX = x - rect.width / 2;
    const shiftY = y - rect.height / 2;
    (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_1__.requestMutation)(() => {
      el.setAttribute('style', `--click-shift-x: ${shiftX}px; --click-shift-y: ${shiftY}px`);
    });
  });
  if (!shouldRender) {
    return undefined;
  }
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])(_MediaSpoiler_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].root, transitionClassNames, className, withAnimation && _MediaSpoiler_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].maskAnimation),
    ref: ref,
    onClick: withAnimation ? handleClick : undefined
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("canvas", {
    ref: canvasRef,
    className: _MediaSpoiler_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].canvas,
    width: width,
    height: height
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _MediaSpoiler_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].dots
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(MediaSpoiler));

/***/ }),

/***/ "./src/components/common/PasswordForm.tsx":
/*!************************************************!*\
  !*** ./src/components/common/PasswordForm.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
/* harmony import */ var _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/fasterdom/fasterdom */ "./src/lib/fasterdom/fasterdom.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_stopEvent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/stopEvent */ "./src/util/stopEvent.ts");
/* harmony import */ var _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/windowEnvironment */ "./src/util/windowEnvironment.ts");
/* harmony import */ var _hooks_schedulers_useTimeout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/schedulers/useTimeout */ "./src/hooks/schedulers/useTimeout.ts");
/* harmony import */ var _hooks_useAppLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useAppLayout */ "./src/hooks/useAppLayout.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _icons_Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icons/Icon */ "./src/components/common/icons/Icon.tsx");











const PasswordForm = ({
  isLoading = false,
  isPasswordVisible,
  error,
  hint,
  placeholder = 'Password',
  submitLabel = 'Next',
  description,
  shouldShowSubmit,
  shouldResetValue,
  shouldDisablePasswordManager = false,
  noRipple = false,
  clearError,
  onChangePasswordVisibility,
  onInputChange,
  onSubmit
}) => {
  // eslint-disable-next-line no-null/no-null
  const inputRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const {
    isMobile
  } = (0,_hooks_useAppLayout__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const [password, setPassword] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [canSubmit, setCanSubmit] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const focusDelayTimeoutMs = isMobile ? 550 : 400;
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (shouldResetValue) {
      setPassword('');
    }
  }, [shouldResetValue]);
  (0,_hooks_schedulers_useTimeout__WEBPACK_IMPORTED_MODULE_6__["default"])(() => {
    if (!_util_windowEnvironment__WEBPACK_IMPORTED_MODULE_5__.IS_TOUCH_ENV) {
      inputRef.current.focus();
    }
  }, focusDelayTimeoutMs);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (error) {
      (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_2__.requestMutation)(() => {
        inputRef.current.focus();
        inputRef.current.select();
      });
    }
  }, [error]);
  function onPasswordChange(e) {
    if (error) {
      clearError();
    }
    const {
      target
    } = e;
    setPassword(target.value);
    setCanSubmit(target.value.length >= _config__WEBPACK_IMPORTED_MODULE_1__.MIN_PASSWORD_LENGTH);
    if (onInputChange) {
      onInputChange(target.value);
    }
  }
  function togglePasswordVisibility() {
    onChangePasswordVisibility(!isPasswordVisible);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (isLoading) {
      return;
    }
    if (canSubmit) {
      onSubmit(password);
    }
  }
  function renderFakeInput() {
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", {
      type: "password",
      id: "prevent_autofill",
      autoComplete: "off",
      className: "visually-hidden",
      tabIndex: -2
    });
  }
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("form", {
    action: "",
    onSubmit: onSubmit ? handleSubmit : _util_stopEvent__WEBPACK_IMPORTED_MODULE_4__["default"],
    autoComplete: "off"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])('input-group password-input', password && 'touched', error && 'error'),
    dir: lang.isRtl ? 'rtl' : undefined
  }, shouldDisablePasswordManager && renderFakeInput(), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", {
    ref: inputRef,
    className: "form-control",
    type: isPasswordVisible ? 'text' : 'password',
    id: "sign-in-password",
    value: password || '',
    autoComplete: shouldDisablePasswordManager ? 'one-time-code' : 'current-password',
    onChange: onPasswordChange,
    maxLength: 256,
    dir: "auto"
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", null, error || hint || placeholder), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "div-button toggle-password",
    onClick: togglePasswordVisibility,
    role: "button",
    tabIndex: 0,
    title: "Toggle password visibility",
    "aria-label": "Toggle password visibility"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_icons_Icon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    name: isPasswordVisible ? 'eye' : 'eye-closed'
  }))), description && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: "description"
  }, description), onSubmit && (canSubmit || shouldShowSubmit) && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    size: "smaller",
    type: "submit",
    ripple: !noRipple,
    isLoading: isLoading,
    disabled: !canSubmit
  }, submitLabel));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(PasswordForm));

/***/ }),

/***/ "./src/components/common/PeerChip.tsx":
/*!********************************************!*\
  !*** ./src/components/common/PeerChip.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global */ "./src/global/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_helpers_peers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global/helpers/peers */ "./src/global/helpers/peers.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _helpers_peerColor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/peerColor */ "./src/components/common/helpers/peerColor.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _FullNameTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FullNameTitle */ "./src/components/common/FullNameTitle.tsx");
/* harmony import */ var _icons_Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _PeerChip_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PeerChip.module.scss */ "./src/components/common/PeerChip.module.scss");












// eslint-disable-next-line @typescript-eslint/comma-dangle
const PeerChip = ({
  icon,
  title,
  isMinimized,
  canClose,
  isCloseNonDestructive,
  clickArg,
  peer,
  mockPeer,
  customPeer,
  className,
  isSavedMessages,
  withPeerColors,
  withEmojiStatus,
  onClick,
  itemClassName
}) => {
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const apiPeer = mockPeer || peer;
  const anyPeer = customPeer || apiPeer;
  const chat = apiPeer && (0,_global_helpers_peers__WEBPACK_IMPORTED_MODULE_3__.isApiPeerChat)(apiPeer) ? apiPeer : undefined;
  let iconElement;
  let titleElement;
  let titleText;
  if (icon && title) {
    iconElement = /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _PeerChip_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].iconWrapper
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_icons_Icon__WEBPACK_IMPORTED_MODULE_10__["default"], {
      name: icon,
      style: _PeerChip_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].icon
    }));
    titleElement = title;
  } else if (anyPeer) {
    iconElement = /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Avatar__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: _PeerChip_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].avatar,
      peer: anyPeer,
      size: "small",
      isSavedMessages: isSavedMessages
    });
    titleText = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getPeerTitle)(lang, anyPeer) || title;
    titleElement = title || /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_FullNameTitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
      peer: anyPeer,
      isSavedMessages: isSavedMessages,
      withEmojiStatus: withEmojiStatus
    });
  }
  const fullClassName = (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_5__["default"])(_PeerChip_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].root, (chat?.isForum || customPeer?.isAvatarSquare) && _PeerChip_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].squareAvatar, isMinimized && _PeerChip_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].minimized, canClose && _PeerChip_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].closeable, isCloseNonDestructive && _PeerChip_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].nonDestructive, !onClick && _PeerChip_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].notClickable, withPeerColors && (0,_helpers_peerColor__WEBPACK_IMPORTED_MODULE_6__.getPeerColorClass)(customPeer || peer), className);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: fullClassName,
    onClick: () => onClick?.(clickArg),
    title: isMinimized ? titleText : undefined,
    dir: lang.isRtl ? 'rtl' : undefined
  }, iconElement, !isMinimized && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_5__["default"])(_PeerChip_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].name, itemClassName),
    dir: "auto"
  }, titleElement), canClose && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _PeerChip_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].remove
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_icons_Icon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    name: "close"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  peerId,
  forceShowSelf
}) => {
  if (!peerId) {
    return {};
  }
  const peer = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectPeer)(global, peerId);
  const user = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectUser)(global, peerId);
  const isSavedMessages = !forceShowSelf && user && user.isSelf;
  return {
    peer,
    isSavedMessages
  };
})(PeerChip)));

/***/ }),

/***/ "./src/components/common/PremiumProgress.tsx":
/*!***************************************************!*\
  !*** ./src/components/common/PremiumProgress.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_buildStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/buildStyle */ "./src/util/buildStyle.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _hooks_useResizeObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useResizeObserver */ "./src/hooks/useResizeObserver.ts");
/* harmony import */ var _icons_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PremiumProgress.module.scss */ "./src/components/common/PremiumProgress.module.scss");







const PremiumProgress = ({
  leftText,
  rightText,
  floatingBadgeText,
  floatingBadgeIcon,
  progress,
  isPrimary,
  className
}) => {
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_3__["default"])();
  // eslint-disable-next-line no-null/no-null
  const floatingBadgeRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  // eslint-disable-next-line no-null/no-null
  const parentContainerRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [shiftX, setShiftX] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [tailPosition, setTailPosition] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const updateBadgePosition = () => {
    if (floatingBadgeRef.current && parentContainerRef.current && progress !== undefined) {
      const badgeWidth = floatingBadgeRef.current.offsetWidth;
      const parentWidth = parentContainerRef.current.offsetWidth;
      const minShift = badgeWidth / 2;
      const maxShift = parentWidth - badgeWidth / 2;
      const currentShift = progress * parentWidth;
      const safeShift = Math.max(minShift, Math.min(currentShift, maxShift));
      setShiftX(safeShift / parentWidth);
      let newTailPosition;
      if (currentShift < minShift) {
        newTailPosition = progress * parentWidth / (minShift * 2);
      } else if (currentShift > maxShift) {
        const progressMapped = (progress - maxShift / parentWidth) / (1 - maxShift / parentWidth);
        newTailPosition = 0.5 + progressMapped * 0.4;
      } else {
        newTailPosition = 0.5;
      }
      setTailPosition(newTailPosition);
    }
  };
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(updateBadgePosition, [progress]);
  (0,_hooks_useResizeObserver__WEBPACK_IMPORTED_MODULE_4__["default"])(parentContainerRef, updateBadgePosition);
  const hasFloatingBadge = Boolean(floatingBadgeIcon || floatingBadgeText);
  const isProgressFull = Boolean(progress) && progress > 0.99;
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    ref: parentContainerRef,
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].root, hasFloatingBadge && _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].withBadge, isPrimary && _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].primary, className),
    style: (0,_util_buildStyle__WEBPACK_IMPORTED_MODULE_2__["default"])(progress !== undefined && `--progress: ${progress}`, tailPosition !== undefined && `--tail-position: ${tailPosition}`, `--shift-x: ${shiftX}`)
  }, hasFloatingBadge && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].badgeContainer
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].floatingBadgeWrapper
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].floatingBadge,
    ref: floatingBadgeRef
  }, floatingBadgeIcon && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_icons_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: floatingBadgeIcon,
    className: _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].floatingBadgeIcon
  }), floatingBadgeText && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].floatingBadgeValue,
    dir: lang.isRtl ? 'rtl' : undefined
  }, floatingBadgeText)), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].floatingBadgeTriangle
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "none"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    d: "m 28,4 v 9 c 0.0089,7.283278 -3.302215,5.319646 -6.750951,8.589815 l -5.8284,5.82843 c -0.781,0.78105 -2.0474,0.78104 -2.8284,0 L 6.7638083,21.589815 C 2.8288652,17.959047 0.04527024,20.332086 0,13 V 4 C 0,4 0.00150581,0.97697493 3,1 5.3786658,1.018266 22.594519,0.9142007 25,1 c 2.992326,0.1067311 3,3 3,3 z",
    fill: "#7E85FF"
  }))))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].left
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, leftText)), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].right
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, rightText)), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].progress, isProgressFull && _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].fullProgress)
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].left
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, leftText)), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].right
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, rightText))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(PremiumProgress));

/***/ }),

/***/ "./src/components/common/gift/GiftRibbon.tsx":
/*!***************************************************!*\
  !*** ./src/components/common/gift/GiftRibbon.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _hooks_useUniqueId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useUniqueId */ "./src/hooks/useUniqueId.ts");
/* harmony import */ var _GiftRibbon_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GiftRibbon.module.scss */ "./src/components/common/gift/GiftRibbon.module.scss");






const COLORS = {
  red: [['#FF5B54', '#ED1C26'], ['#653633', '#532224']],
  blue: [['#6ED2FF', '#34A4FC'], ['#344F5A', '#152E42']]
};
const COLOR_KEYS = new Set(Object.keys(COLORS));
const GiftRibbon = ({
  text,
  color,
  className,
  theme
}) => {
  const randomId = (0,_hooks_useUniqueId__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const validSvgRandomId = `svg-${randomId}`; // ID must start with a letter

  const colorKey = COLOR_KEYS.has(color) ? color : undefined;
  const isDarkTheme = theme === 'dark';
  const gradientColor = colorKey ? COLORS[colorKey][isDarkTheme ? 1 : 0] : undefined;
  const startColor = gradientColor ? gradientColor[0] : color;
  const endColor = gradientColor ? gradientColor[1] : color;
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(_GiftRibbon_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].root, className)
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("svg", {
    className: _GiftRibbon_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].ribbon,
    width: "56",
    height: "56",
    viewBox: "0 0 56 56",
    fill: "none"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    d: "M52.4851 26.4853L29.5145 3.51472C27.2641 1.26428 24.2119 0 21.0293 0H2.82824C1.04643 0 0.154103 2.15429 1.41403 3.41422L52.5856 54.5858C53.8455 55.8457 55.9998 54.9534 55.9998 53.1716V34.9706C55.9998 31.788 54.7355 28.7357 52.4851 26.4853Z",
    fill: `url(#${validSvgRandomId})`
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("defs", null, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("linearGradient", {
    id: validSvgRandomId,
    x1: "27.9998",
    y1: "1",
    x2: "27.9998",
    y2: "55",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("stop", {
    "stop-color": startColor
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("stop", {
    offset: "1",
    "stop-color": endColor
  })))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _GiftRibbon_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].text
  }, text));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)(global => {
  return {
    theme: (0,_global_selectors__WEBPACK_IMPORTED_MODULE_2__.selectTheme)(global)
  };
})(GiftRibbon)));

/***/ }),

/***/ "./src/components/common/helpers/gifts.ts":
/*!************************************************!*\
  !*** ./src/components/common/helpers/gifts.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGiftAttributes: () => (/* binding */ getGiftAttributes),
/* harmony export */   getGiftAttributesFromList: () => (/* binding */ getGiftAttributesFromList),
/* harmony export */   getGiftMessage: () => (/* binding */ getGiftMessage),
/* harmony export */   getStickerFromGift: () => (/* binding */ getStickerFromGift),
/* harmony export */   getTotalGiftAvailability: () => (/* binding */ getTotalGiftAvailability)
/* harmony export */ });
function getStickerFromGift(gift) {
  if (gift.type === 'starGift') {
    return gift.sticker;
  }
  return gift.attributes.find(attr => attr.type === 'model')?.sticker;
}
function getTotalGiftAvailability(gift) {
  if (gift.type === 'starGift') {
    return gift.availabilityTotal;
  }
  return gift.totalCount;
}
function getGiftMessage(gift) {
  if (gift.type !== 'starGiftUnique') return undefined;
  return gift.attributes.find(attr => attr.type === 'model')?.message;
}
function getGiftAttributes(gift) {
  if (gift.type !== 'starGiftUnique') return undefined;
  return getGiftAttributesFromList(gift.attributes);
}
function getGiftAttributesFromList(attributes) {
  const model = attributes.find(attr => attr.type === 'model');
  const backdrop = attributes.find(attr => attr.type === 'backdrop');
  const pattern = attributes.find(attr => attr.type === 'pattern');
  const originalDetails = attributes.find(attr => attr.type === 'originalDetails');
  return {
    model,
    originalDetails,
    pattern,
    backdrop
  };
}

/***/ }),

/***/ "./src/components/common/helpers/sortChatIds.ts":
/*!******************************************************!*\
  !*** ./src/components/common/helpers/sortChatIds.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sortChatIds)
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_iteratees__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/iteratees */ "./src/util/iteratees.ts");



const VERIFIED_PRIORITY_BASE = 3e9;
const PINNED_PRIORITY_BASE = 3e8;
function sortChatIds(chatIds, shouldPrioritizeVerified = false, priorityIds, currentUserId) {
  // Avoid calling sort on every global change
  const global = (0,_global__WEBPACK_IMPORTED_MODULE_0__.getGlobal)();
  return (0,_util_iteratees__WEBPACK_IMPORTED_MODULE_2__.orderBy)(chatIds, id => {
    if (id === currentUserId) {
      return Infinity;
    }
    const chat = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_1__.selectChat)(global, id);
    if (!chat) {
      return 0;
    }
    let priority = 0;
    const lastMessage = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_1__.selectChatLastMessage)(global, id);
    if (lastMessage) {
      priority += lastMessage.date;
    }
    if (shouldPrioritizeVerified && chat.isVerified) {
      priority += VERIFIED_PRIORITY_BASE; // ~100 years in seconds
    }
    if (priorityIds && priorityIds.includes(id)) {
      priority = Date.now() + PINNED_PRIORITY_BASE + (priorityIds.length - priorityIds.indexOf(id));
    }
    return priority;
  }, 'desc');
}

/***/ }),

/***/ "./src/components/common/pickers/PeerPicker.tsx":
/*!******************************************************!*\
  !*** ./src/components/common/pickers/PeerPicker.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/fasterdom/fasterdom */ "./src/lib/fasterdom/fasterdom.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_helpers_peers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../global/helpers/peers */ "./src/global/helpers/peers.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_iteratees__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../util/iteratees */ "./src/util/iteratees.ts");
/* harmony import */ var _util_memo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../util/memo */ "./src/util/memo.ts");
/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../hooks/useInfiniteScroll */ "./src/hooks/useInfiniteScroll.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _ui_Checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ui/Checkbox */ "./src/components/ui/Checkbox.tsx");
/* harmony import */ var _ui_InfiniteScroll__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ui/InfiniteScroll */ "./src/components/ui/InfiniteScroll.tsx");
/* harmony import */ var _ui_InputText__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ui/InputText */ "./src/components/ui/InputText.tsx");
/* harmony import */ var _ui_Loading__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../ui/Loading */ "./src/components/ui/Loading.tsx");
/* harmony import */ var _ui_Radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../ui/Radio */ "./src/components/ui/Radio.tsx");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _FullNameTitle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../FullNameTitle */ "./src/components/common/FullNameTitle.tsx");
/* harmony import */ var _icons_Icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _PeerChip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../PeerChip */ "./src/components/common/PeerChip.tsx");
/* harmony import */ var _PickerItem__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./PickerItem */ "./src/components/common/pickers/PickerItem.tsx");
/* harmony import */ var _PickerStyles_module_scss__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./PickerStyles.module.scss */ "./src/components/common/pickers/PickerStyles.module.scss");
























// Focus slows down animation, also it breaks transition layout in Chrome
const FOCUS_DELAY_MS = 500;
const MAX_FULL_ITEMS = 10;
const ALWAYS_FULL_ITEMS_COUNT = 5;
const ITEM_CLASS_NAME = 'PeerPickerItem';
const PeerPicker = ({
  className,
  categories,
  itemIds,
  categoryPlaceholderKey,
  filterValue,
  filterPlaceholder,
  notFoundText,
  searchInputId,
  itemClassName,
  isLoading,
  noScrollRestore,
  isSearchable,
  lockedUnselectedSubtitle,
  forceShowSelf,
  isViewOnly,
  itemInputType,
  withStatus,
  withPeerTypes,
  withDefaultPadding,
  onFilterChange,
  onDisabledClick,
  onLoadMore,
  ...optionalProps
}) => {
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_12__["default"])();
  const allowMultiple = optionalProps.allowMultiple;
  const lockedSelectedIds = allowMultiple ? optionalProps.lockedSelectedIds : undefined;
  const lockedUnselectedIds = allowMultiple ? optionalProps.lockedUnselectedIds : undefined;
  const selectedCategories = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (allowMultiple) {
      return optionalProps.selectedCategories;
    }
    return optionalProps.selectedCategory ? [optionalProps.selectedCategory] : _util_memo__WEBPACK_IMPORTED_MODULE_9__.MEMO_EMPTY_ARRAY;
  }, [allowMultiple, optionalProps.selectedCategory, optionalProps.selectedCategories]);
  const selectedIds = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (allowMultiple) {
      return optionalProps.selectedIds;
    }
    return optionalProps.selectedId ? [optionalProps.selectedId] : _util_memo__WEBPACK_IMPORTED_MODULE_9__.MEMO_EMPTY_ARRAY;
  }, [allowMultiple, optionalProps.selectedId, optionalProps.selectedIds]);

  // eslint-disable-next-line no-null/no-null
  const inputRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const shouldMinimize = selectedIds.length > MAX_FULL_ITEMS;
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isSearchable) return undefined;
    const timeoutId = window.setTimeout(() => {
      (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_3__.requestMeasure)(() => {
        inputRef.current?.focus();
      });
    }, FOCUS_DELAY_MS);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isSearchable]);
  const lockedSelectedIdsSet = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => new Set(lockedSelectedIds), [lockedSelectedIds]);
  const lockedUnselectedIdsSet = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => new Set(lockedUnselectedIds), [lockedUnselectedIds]);
  const unlockedSelectedIds = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return selectedIds.filter(id => !lockedSelectedIdsSet.has(id));
  }, [lockedSelectedIdsSet, selectedIds]);
  const categoriesByType = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!categories) return {};
    return (0,_util_iteratees__WEBPACK_IMPORTED_MODULE_8__.buildCollectionByKey)(categories, 'type');
  }, [categories]);
  const sortedItemIds = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (filterValue) {
      return itemIds;
    }
    const lockedSelectedBucket = [];
    const unlockedBucket = [];
    const lockedUnselectableBucket = [];
    itemIds.forEach(id => {
      if (lockedSelectedIdsSet.has(id)) {
        lockedSelectedBucket.push(id);
      } else if (lockedUnselectedIdsSet.has(id)) {
        lockedUnselectableBucket.push(id);
      } else {
        unlockedBucket.push(id);
      }
    });
    return lockedSelectedBucket.concat(unlockedBucket, lockedUnselectableBucket);
  }, [filterValue, itemIds, lockedSelectedIdsSet, lockedUnselectedIdsSet]);
  const handleItemClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(id => {
    if (lockedSelectedIdsSet.has(id)) {
      onDisabledClick?.(id, true);
      return;
    }
    if (lockedUnselectedIdsSet.has(id)) {
      onDisabledClick?.(id, false);
      return;
    }
    if (allowMultiple && categoriesByType[id]) {
      const categoryType = categoriesByType[id].type;
      const newSelectedCategories = selectedCategories?.slice() || [];
      if (newSelectedCategories.includes(categoryType)) {
        newSelectedCategories.splice(newSelectedCategories.indexOf(categoryType), 1);
      } else {
        newSelectedCategories.push(categoryType);
      }
      optionalProps.onSelectedCategoriesChange?.(newSelectedCategories);
      return;
    }
    if (allowMultiple) {
      const newSelectedIds = selectedIds.slice();
      if (newSelectedIds.includes(id)) {
        newSelectedIds.splice(newSelectedIds.indexOf(id), 1);
      } else {
        newSelectedIds.push(id);
      }
      optionalProps.onSelectedIdsChange?.(newSelectedIds);
      return;
    }
    if (categoriesByType[id]) {
      optionalProps.onSelectedCategoryChange?.(categoriesByType[id].type);
      return;
    }
    optionalProps.onSelectedIdChange?.(id);
  });
  const handleFilterChange = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(e => {
    const {
      value
    } = e.currentTarget;
    onFilterChange?.(value);
  });
  const [viewportIds, getMore] = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_10__["default"])(onLoadMore, sortedItemIds, Boolean(filterValue));
  const renderItem = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)((id, isCategory) => {
    const global = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getGlobal)();
    const category = isCategory ? categoriesByType[id] : undefined;
    const peer = !isCategory ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_6__.selectPeer)(global, id) : undefined;
    const peerOrCategory = peer || category;
    if (!peerOrCategory) {
      if (_config__WEBPACK_IMPORTED_MODULE_2__.DEBUG) return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
        key: id
      }, "No peer or category with ID ", id);
      return undefined;
    }
    const isSelf = peer && !(0,_global_helpers_peers__WEBPACK_IMPORTED_MODULE_5__.isApiPeerChat)(peer) ? peer.isSelf && !forceShowSelf : undefined;
    const isAlwaysUnselected = lockedUnselectedIdsSet.has(id);
    const isAlwaysSelected = lockedSelectedIdsSet.has(id);
    const isLocked = isAlwaysUnselected || isAlwaysSelected;
    const isChecked = category ? selectedCategories?.includes(category.type) : selectedIds.includes(id);
    function getInputElement() {
      if (isLocked) return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_icons_Icon__WEBPACK_IMPORTED_MODULE_20__["default"], {
        name: "lock-badge"
      });
      if (itemInputType === 'radio') {
        return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Radio__WEBPACK_IMPORTED_MODULE_17__["default"], {
          checked: isChecked,
          disabled: isLocked,
          onlyInput: true
        });
      }
      if (itemInputType === 'checkbox') {
        return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Checkbox__WEBPACK_IMPORTED_MODULE_13__["default"], {
          checked: isChecked,
          disabled: isLocked,
          onlyInput: true
        });
      }
      return undefined;
    }
    function getSubtitle() {
      if (isAlwaysUnselected) return [lockedUnselectedSubtitle];
      if (withStatus && peer) {
        if ((0,_global_helpers_peers__WEBPACK_IMPORTED_MODULE_5__.isApiPeerChat)(peer)) {
          return [(0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.getGroupStatus)(lang, peer)];
        }
        const userStatus = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_6__.selectUserStatus)(global, peer.id);
        return [(0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.getUserStatus)(lang, peer, userStatus), (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.isUserOnline)(peer, userStatus, true) && _PickerStyles_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].onlineStatus)];
      }
      if (withPeerTypes && peer) {
        const langKey = (0,_global_helpers_peers__WEBPACK_IMPORTED_MODULE_5__.getPeerTypeKey)(peer);
        return langKey && [lang(langKey)];
      }
      return undefined;
    }
    const [subtitle, subtitleClassName] = getSubtitle() || [];
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_PickerItem__WEBPACK_IMPORTED_MODULE_22__["default"], {
      key: id,
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_7__["default"])(ITEM_CLASS_NAME, itemClassName),
      title: /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_FullNameTitle__WEBPACK_IMPORTED_MODULE_19__["default"], {
        peer: peerOrCategory
      }),
      avatarElement: /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Avatar__WEBPACK_IMPORTED_MODULE_18__["default"], {
        peer: peer || category,
        isSavedMessages: isSelf,
        size: "medium"
      }),
      subtitle: subtitle,
      subtitleClassName: subtitleClassName,
      disabled: isLocked,
      inactive: isViewOnly,
      ripple: true,
      inputElement: getInputElement(),
      inputPosition: "end"
      // eslint-disable-next-line react/jsx-no-bind
      ,
      onClick: () => handleItemClick(id)
      // eslint-disable-next-line react/jsx-no-bind
      ,
      onDisabledClick: onDisabledClick && (() => onDisabledClick(id, isAlwaysSelected))
    });
  }, [categoriesByType, forceShowSelf, isViewOnly, itemClassName, itemInputType, lang, lockedSelectedIdsSet, lockedUnselectedIdsSet, lockedUnselectedSubtitle, onDisabledClick, selectedCategories, selectedIds, withPeerTypes, withStatus]);
  const beforeChildren = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!categories?.length) return undefined;
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      key: "categories"
    }, categoryPlaceholderKey && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _PickerStyles_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].pickerCategoryTitle
    }, lang(categoryPlaceholderKey)), categories?.map(category => renderItem(category.type, true)), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _PickerStyles_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].pickerCategoryTitle
    }, lang('FilterChats')));
  }, [categories, categoryPlaceholderKey, lang, renderItem]);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_7__["default"])(_PickerStyles_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].container, className)
  }, isSearchable && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_7__["default"])(_PickerStyles_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].header, 'custom-scroll'),
    dir: lang.isRtl ? 'rtl' : undefined
  }, selectedCategories?.map(category => /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_PeerChip__WEBPACK_IMPORTED_MODULE_21__["default"], {
    className: _PickerStyles_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].peerChip,
    customPeer: categoriesByType[category],
    onClick: handleItemClick,
    clickArg: category,
    canClose: true
  })), lockedSelectedIds?.map((id, i) => /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_PeerChip__WEBPACK_IMPORTED_MODULE_21__["default"], {
    className: _PickerStyles_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].peerChip,
    peerId: id,
    isMinimized: shouldMinimize && i < selectedIds.length - ALWAYS_FULL_ITEMS_COUNT,
    forceShowSelf: forceShowSelf,
    onClick: handleItemClick,
    clickArg: id
  })), unlockedSelectedIds.map((id, i) => /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_PeerChip__WEBPACK_IMPORTED_MODULE_21__["default"], {
    className: _PickerStyles_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].peerChip,
    peerId: id,
    isMinimized: shouldMinimize && i + (lockedSelectedIds?.length || 0) < selectedIds.length - ALWAYS_FULL_ITEMS_COUNT,
    canClose: true,
    onClick: handleItemClick,
    clickArg: id
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_InputText__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: searchInputId,
    ref: inputRef,
    value: filterValue,
    onChange: handleFilterChange,
    placeholder: filterPlaceholder || lang('SelectChat')
  })), viewportIds?.length ? /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_InfiniteScroll__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_7__["default"])(_PickerStyles_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].pickerList, withDefaultPadding && _PickerStyles_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].padded, 'custom-scroll'),
    items: viewportIds,
    itemSelector: `.${ITEM_CLASS_NAME}`,
    beforeChildren: beforeChildren,
    onLoadMore: getMore,
    noScrollRestore: noScrollRestore
  }, viewportIds.map(id => renderItem(id))) : !isLoading && viewportIds && !viewportIds.length ? /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: _PickerStyles_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].noResults
  }, notFoundText || 'Sorry, nothing found.') : /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Loading__WEBPACK_IMPORTED_MODULE_16__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(PeerPicker));

/***/ }),

/***/ "./src/components/common/pickers/PickerItem.tsx":
/*!******************************************************!*\
  !*** ./src/components/common/pickers/PickerItem.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/windowEnvironment */ "./src/util/windowEnvironment.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _ui_RippleEffect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/RippleEffect */ "./src/components/ui/RippleEffect.tsx");
/* harmony import */ var _PickerItem_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PickerItem.module.scss */ "./src/components/common/pickers/PickerItem.module.scss");







const PickerItem = ({
  title,
  subtitle,
  avatarElement,
  inputElement,
  inputPosition = 'start',
  disabled,
  inactive,
  ripple,
  className,
  titleClassName,
  subtitleClassName,
  style,
  onClick,
  onDisabledClick
}) => {
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const isClickable = !inactive && !disabled;
  const handleClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_3__["default"])(() => {
    if (inactive) return;
    if (disabled) {
      onDisabledClick?.();
      return;
    }
    onClick?.();
  });
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_PickerItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].root, subtitle && _PickerItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].multiline, disabled && _PickerItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].disabled, isClickable && _PickerItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].clickable, avatarElement && _PickerItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].withAvatar, className),
    onClick: handleClick,
    style: style,
    dir: lang.isRtl ? 'rtl' : undefined,
    role: isClickable ? 'button' : undefined
    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    ,
    tabIndex: isClickable ? 0 : undefined
  }, !disabled && !inactive && ripple && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_RippleEffect__WEBPACK_IMPORTED_MODULE_5__["default"], null), inputElement && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_PickerItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].input, inputPosition === 'end' ? _PickerItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].endInput : _PickerItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].startInput)
  }, inputElement), avatarElement && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _PickerItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].avatarElement
  }, avatarElement), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_PickerItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].title, titleClassName)
  }, title), subtitle && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_PickerItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].subtitle, subtitleClassName)
  }, subtitle), !inputElement && _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_2__.IS_IOS && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _PickerItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].separator
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PickerItem);

/***/ }),

/***/ "./src/components/common/profile/RadialPatternBackground.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/common/profile/RadialPatternBackground.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/fasterdom/fasterdom */ "./src/lib/fasterdom/fasterdom.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_buildStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/buildStyle */ "./src/util/buildStyle.ts");
/* harmony import */ var _util_files__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../util/files */ "./src/util/files.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useMedia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hooks/useMedia */ "./src/hooks/useMedia.ts");
/* harmony import */ var _hooks_useResizeObserver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hooks/useResizeObserver */ "./src/hooks/useResizeObserver.ts");
/* harmony import */ var _hooks_window_useDevicePixelRatio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../hooks/window/useDevicePixelRatio */ "./src/hooks/window/useDevicePixelRatio.ts");
/* harmony import */ var _RadialPatternBackground_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./RadialPatternBackground.module.scss */ "./src/components/common/profile/RadialPatternBackground.module.scss");











const RINGS = 3;
const BASE_RING_ITEM_COUNT = 8;
const RING_INCREMENT = 0.5;
const CENTER_EMPTINESS = 0.05;
const MAX_RADIUS = 0.4;
const BASE_ICON_SIZE = 20;
const MIN_SIZE = 250;
const RadialPatternBackground = ({
  backgroundColors,
  patternColor,
  patternIcon,
  clearBottomSector,
  className
}) => {
  // eslint-disable-next-line no-null/no-null
  const containerRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  // eslint-disable-next-line no-null/no-null
  const canvasRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [getContainerSize, setContainerSize] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useSignal)({
    width: 0,
    height: 0
  });
  const dpr = (0,_hooks_window_useDevicePixelRatio__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const [emojiImage, setEmojiImage] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const previewMediaHash = patternIcon && (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getStickerMediaHash)(patternIcon, 'preview');
  const previewUrl = (0,_hooks_useMedia__WEBPACK_IMPORTED_MODULE_7__["default"])(previewMediaHash);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!previewUrl) return;
    (0,_util_files__WEBPACK_IMPORTED_MODULE_5__.preloadImage)(previewUrl).then(setEmojiImage);
  }, [previewUrl]);
  const patternPositions = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const coordinates = [];
    for (let ring = 1; ring <= RINGS; ring++) {
      const ringItemCount = Math.floor(BASE_RING_ITEM_COUNT * (1 + (ring - 1) * RING_INCREMENT));
      const ringProgress = ring / RINGS;
      const ringRadius = CENTER_EMPTINESS + (MAX_RADIUS - CENTER_EMPTINESS) * ringProgress;
      const angleShift = ring % 2 === 0 ? Math.PI / ringItemCount : 0;
      for (let i = 0; i < ringItemCount; i++) {
        const angle = i / ringItemCount * Math.PI * 2 + angleShift;
        if (clearBottomSector && angle > Math.PI * 0.45 && angle < Math.PI * 0.55) {
          continue;
        }

        // Slightly oval
        const xOffset = ringRadius * 1.71 * Math.cos(angle);
        const yOffset = ringRadius * Math.sin(angle);
        const x = 0.5 + xOffset;
        const y = 0.5 + yOffset;
        const sizeFactor = 1.4 - ringProgress * Math.random();
        coordinates.push({
          x,
          y,
          sizeFactor
        });
      }
    }
    return coordinates;
  }, [clearBottomSector]);
  (0,_hooks_useResizeObserver__WEBPACK_IMPORTED_MODULE_8__["default"])(containerRef, entry => {
    setContainerSize({
      width: entry.contentRect.width,
      height: entry.contentRect.height
    });
  });
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const container = containerRef.current;
    if (container) {
      setContainerSize({
        width: container.clientWidth,
        height: container.clientHeight
      });
    }
  }, [setContainerSize]);
  const draw = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_6__["default"])(() => {
    const canvas = canvasRef.current;
    if (!canvas || !emojiImage) return;
    const ctx = canvas.getContext('2d');
    const {
      width,
      height
    } = canvas;
    if (!width || !height) return;
    ctx.save();
    patternPositions.forEach(({
      x,
      y,
      sizeFactor
    }) => {
      const centerShift = (width - Math.max(width, MIN_SIZE * dpr)) / 2; // Shift coords if canvas is smaller than `MIN_SIZE`
      const renderX = x * Math.max(width, MIN_SIZE * dpr) + centerShift;
      const renderY = y * Math.max(height, MIN_SIZE * dpr) + centerShift;
      const size = BASE_ICON_SIZE * dpr * sizeFactor * (centerShift ? 0.8 : 1);
      ctx.drawImage(emojiImage, renderX - size / 2, renderY - size / 2, size, size);
    });
    ctx.restore();
    if (patternColor) {
      ctx.save();
      ctx.fillStyle = patternColor;
      ctx.globalCompositeOperation = 'source-atop';
      ctx.fillRect(0, 0, width, height);
      ctx.restore();
    }
    const radialGradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width / 2);
    radialGradient.addColorStop(0, '#FFFFFF77');
    radialGradient.addColorStop(1, '#FFFFFF');

    // Alpha mask
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = radialGradient;
    ctx.fillRect(0, 0, width, height);
    ctx.restore();
  });
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    draw();
  }, [emojiImage]);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const {
      width,
      height
    } = getContainerSize();
    const canvas = canvasRef.current;
    if (!width || !height) {
      return;
    }
    const maxSide = Math.max(width, height);
    (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_1__.requestMutation)(() => {
      canvas.width = maxSide * dpr;
      canvas.height = maxSide * dpr;
      draw();
    });
  }, [getContainerSize, dpr]);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    ref: containerRef,
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(_RadialPatternBackground_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].root, className),
    style: (0,_util_buildStyle__WEBPACK_IMPORTED_MODULE_4__["default"])(`--_bg-1: ${backgroundColors[0]}`, `--_bg-2: ${backgroundColors[1] || backgroundColors[0]}`)
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("canvas", {
    className: _RadialPatternBackground_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].canvas,
    ref: canvasRef
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(RadialPatternBackground));

/***/ }),

/***/ "./src/components/common/reactions/CustomEmojiEffect.tsx":
/*!***************************************************************!*\
  !*** ./src/components/common/reactions/CustomEmojiEffect.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_buildStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/buildStyle */ "./src/util/buildStyle.ts");
/* harmony import */ var _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/windowEnvironment */ "./src/util/windowEnvironment.ts");
/* harmony import */ var _hooks_useMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/useMedia */ "./src/hooks/useMedia.ts");
/* harmony import */ var _CustomEmoji__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../CustomEmoji */ "./src/components/common/CustomEmoji.tsx");
/* harmony import */ var _CustomEmojiEffect_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CustomEmojiEffect.module.scss */ "./src/components/common/reactions/CustomEmojiEffect.module.scss");








const EFFECT_AMOUNT = 7;
const CustomEmojiEffect = ({
  reaction,
  isLottie,
  className,
  particleSize,
  onEnded
}) => {
  const stickerHash = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_1__.getStickerHashById)(reaction.documentId, true);
  const previewMediaData = (0,_hooks_useMedia__WEBPACK_IMPORTED_MODULE_5__["default"])(!isLottie ? stickerHash : undefined);
  const paths = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!_util_windowEnvironment__WEBPACK_IMPORTED_MODULE_4__.IS_OFFSET_PATH_SUPPORTED) return [];
    return Array.from({
      length: EFFECT_AMOUNT
    }).map(() => generateRandomDropPath(particleSize));
  }, [particleSize]);
  if (!previewMediaData && !isLottie) {
    return undefined;
  }
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])(_CustomEmojiEffect_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].root, className),
    style: (0,_util_buildStyle__WEBPACK_IMPORTED_MODULE_3__["default"])(Boolean(particleSize) && `--particle-size: ${particleSize}px`)
  }, paths.map((path, i) => {
    const style = `--offset-path: path('${path}');`;
    if (isLottie) {
      return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_CustomEmoji__WEBPACK_IMPORTED_MODULE_6__["default"], {
        documentId: reaction.documentId,
        className: _CustomEmojiEffect_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].particle,
        style: style,
        withSharedAnimation: true,
        size: particleSize,
        onAnimationEnd: i === 0 ? onEnded : undefined
      });
    }
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
      src: previewMediaData,
      alt: "",
      className: _CustomEmojiEffect_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].particle,
      style: style,
      draggable: false,
      onAnimationEnd: i === 0 ? onEnded : undefined
    });
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(CustomEmojiEffect));
function generateRandomDropPath(particleSize = 20) {
  const x = (particleSize / 2 + Math.random() * particleSize * 3) * (Math.random() > 0.5 ? 1 : -1);
  const y = particleSize + Math.random() * particleSize * 4;
  return `M 0 0 C 0 0 ${x} ${-y - particleSize} ${x} ${y}`;
}

/***/ }),

/***/ "./src/components/common/reactions/PaidReactionEmoji.tsx":
/*!***************************************************************!*\
  !*** ./src/components/common/reactions/PaidReactionEmoji.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../util/windowEnvironment */ "./src/util/windowEnvironment.ts");
/* harmony import */ var _helpers_animatedAssets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/animatedAssets */ "./src/components/common/helpers/animatedAssets.ts");
/* harmony import */ var _helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/mediaDimensions */ "./src/components/common/helpers/mediaDimensions.ts");
/* harmony import */ var _hooks_useEffectWithPrevDeps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hooks/useEffectWithPrevDeps */ "./src/hooks/useEffectWithPrevDeps.ts");
/* harmony import */ var _hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../hooks/useIntersectionObserver */ "./src/hooks/useIntersectionObserver.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useShowTransition__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../hooks/useShowTransition */ "./src/hooks/useShowTransition.ts");
/* harmony import */ var _AnimatedIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../AnimatedIcon */ "./src/components/common/AnimatedIcon.tsx");
/* harmony import */ var _icons_StarIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../icons/StarIcon */ "./src/components/common/icons/StarIcon.tsx");
/* harmony import */ var _ReactionAnimatedEmoji_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ReactionAnimatedEmoji.module.scss */ "./src/components/common/reactions/ReactionAnimatedEmoji.module.scss");















const ICON_SIZE = 1.5 * _helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_7__.REM;
const EFFECT_SIZE = 6.5 * _helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_7__.REM;
const MAX_EFFECT_COUNT = _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_5__.IS_IOS || _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_5__.IS_ANDROID ? 2 : 5;
const QUALITY = _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_5__.IS_IOS || _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_5__.IS_ANDROID ? 2 : 3;
const PaidReactionEmoji = ({
  containerId,
  reaction,
  className,
  size = ICON_SIZE,
  effectSize = EFFECT_SIZE,
  activeReactions,
  localAmount,
  withEffects,
  observeIntersection
}) => {
  const {
    stopActiveReaction
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();

  // eslint-disable-next-line no-null/no-null
  const ref = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  // eslint-disable-next-line no-null/no-null
  const effectRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [effectsIds, setEffectsIds] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const isIntersecting = (0,_hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_9__.useIsIntersecting)(ref, observeIntersection);
  const activeReaction = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => activeReactions?.find(active => (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.isSameReaction)(active, reaction)), [activeReactions, reaction]);
  const shouldPlayEffect = Boolean(withEffects && activeReaction);
  const canAddMoreEffects = effectsIds.length < MAX_EFFECT_COUNT;
  (0,_hooks_useEffectWithPrevDeps__WEBPACK_IMPORTED_MODULE_8__["default"])(([prevLocalAmount]) => {
    if (!shouldPlayEffect) {
      setEffectsIds([]);
      return;
    }
    if (!localAmount || localAmount <= (prevLocalAmount || 0)) {
      return;
    }
    if (canAddMoreEffects) {
      setEffectsIds(prev => [...prev, Date.now()]);
    }
  }, [localAmount, canAddMoreEffects, shouldPlayEffect]);
  const {
    shouldRender: shouldRenderEffect
  } = (0,_hooks_useShowTransition__WEBPACK_IMPORTED_MODULE_11__["default"])({
    ref: effectRef,
    noMountTransition: true,
    isOpen: shouldPlayEffect,
    className: 'slow',
    withShouldRender: true
  });
  const handleEnded = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_10__["default"])(() => {
    const newEffectsIds = effectsIds.slice(1);
    setEffectsIds(newEffectsIds);
    if (!newEffectsIds.length) {
      stopActiveReaction({
        containerId,
        reaction
      });
    }
  });
  const rootClassName = (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])(_ReactionAnimatedEmoji_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].root, shouldRenderEffect && _ReactionAnimatedEmoji_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].animating, className);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: rootClassName,
    ref: ref,
    teactFastList: true
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_icons_StarIcon__WEBPACK_IMPORTED_MODULE_13__["default"], {
    key: "icon",
    type: "gold",
    size: "adaptive",
    style: `width: ${size}px; height: ${size}px`
  }), shouldRenderEffect && effectsIds.map(id => /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_AnimatedIcon__WEBPACK_IMPORTED_MODULE_12__["default"], {
    key: id,
    ref: effectRef,
    className: _ReactionAnimatedEmoji_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].effect,
    size: effectSize,
    tgsUrl: _helpers_animatedAssets__WEBPACK_IMPORTED_MODULE_6__.LOCAL_TGS_URLS.StarReactionEffect,
    play: isIntersecting,
    noLoop: true,
    forceAlways: true,
    nonInteractive: true,
    quality: QUALITY,
    onEnded: handleEnded
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  containerId
}) => {
  const {
    activeReactions
  } = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectTabState)(global);
  const withEffects = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectPerformanceSettingsValue)(global, 'reactionEffects');
  return {
    activeReactions: activeReactions?.[containerId],
    withEffects
  };
})(PaidReactionEmoji)));

/***/ }),

/***/ "./src/components/common/reactions/ReactionAnimatedEmoji.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/common/reactions/ReactionAnimatedEmoji.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_math__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../util/math */ "./src/util/math.ts");
/* harmony import */ var _helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/mediaDimensions */ "./src/components/common/helpers/mediaDimensions.ts");
/* harmony import */ var _hooks_useFlag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hooks/useFlag */ "./src/hooks/useFlag.ts");
/* harmony import */ var _hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hooks/useIntersectionObserver */ "./src/hooks/useIntersectionObserver.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useMedia__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../hooks/useMedia */ "./src/hooks/useMedia.ts");
/* harmony import */ var _hooks_useShowTransitionDeprecated__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../hooks/useShowTransitionDeprecated */ "./src/hooks/useShowTransitionDeprecated.ts");
/* harmony import */ var _hooks_useCustomEmoji__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../hooks/useCustomEmoji */ "./src/components/common/hooks/useCustomEmoji.ts");
/* harmony import */ var _AnimatedSticker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../AnimatedSticker */ "./src/components/common/AnimatedSticker.tsx");
/* harmony import */ var _CustomEmoji__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../CustomEmoji */ "./src/components/common/CustomEmoji.tsx");
/* harmony import */ var _CustomEmojiEffect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./CustomEmojiEffect */ "./src/components/common/reactions/CustomEmojiEffect.tsx");
/* harmony import */ var _ReactionStaticEmoji__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ReactionStaticEmoji */ "./src/components/common/reactions/ReactionStaticEmoji.tsx");
/* harmony import */ var _ReactionAnimatedEmoji_module_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ReactionAnimatedEmoji.module.scss */ "./src/components/common/reactions/ReactionAnimatedEmoji.module.scss");


















const ICON_SIZE = 1.5 * _helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_6__.REM;
const CENTER_ICON_MULTIPLIER = 1.9;
const EFFECT_SIZE = 6.5 * _helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_6__.REM;
const CUSTOM_EMOJI_EFFECT_MULTIPLIER = 0.5;
const MIN_PARTICLE_SIZE = _helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_6__.REM;
const ReactionAnimatedEmoji = ({
  containerId,
  reaction,
  className,
  size = ICON_SIZE,
  effectSize = EFFECT_SIZE,
  activeReactions,
  availableReactions,
  genericEffects,
  withEffects,
  withEffectOnly,
  shouldPause,
  shouldLoop,
  loopLimit,
  observeIntersection
}) => {
  const {
    stopActiveReaction
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();

  // eslint-disable-next-line no-null/no-null
  const ref = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const isCustom = reaction.type === 'custom';
  const availableReaction = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => availableReactions?.find(r => (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.isSameReaction)(r.reaction, reaction)), [availableReactions, reaction]);
  const centerIconId = availableReaction?.centerIcon?.id;
  const {
    customEmoji
  } = (0,_hooks_useCustomEmoji__WEBPACK_IMPORTED_MODULE_12__["default"])(isCustom ? reaction.documentId : undefined);
  const assignedEffectId = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!isCustom) return availableReaction?.aroundAnimation?.id;
    if (!customEmoji) return undefined;
    const assignedId = availableReactions?.find(available => available.reaction.emoticon === customEmoji.emoji)?.aroundAnimation?.id;
    return assignedId;
  }, [availableReaction, availableReactions, customEmoji, isCustom]);
  const effectId = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (assignedEffectId) {
      return assignedEffectId;
    }
    if (!genericEffects?.stickers) {
      return undefined;
    }
    const {
      stickers
    } = genericEffects;
    const randomIndex = Math.floor(Math.random() * stickers.length);
    return stickers[randomIndex].id;
  }, [assignedEffectId, genericEffects]);
  const isIntersecting = (0,_hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_8__.useIsIntersecting)(ref, observeIntersection);
  const mediaHashCenterIcon = centerIconId && (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getStickerHashById)(centerIconId);
  const mediaHashEffect = effectId && (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getStickerHashById)(effectId);
  const mediaDataCenterIcon = (0,_hooks_useMedia__WEBPACK_IMPORTED_MODULE_10__["default"])(mediaHashCenterIcon);
  const mediaDataEffect = (0,_hooks_useMedia__WEBPACK_IMPORTED_MODULE_10__["default"])(mediaHashEffect);
  const activeReaction = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => activeReactions?.find(active => (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.isSameReaction)(active, reaction)), [activeReactions, reaction]);
  const shouldPlayEffect = Boolean(withEffects && activeReaction && (isCustom || mediaDataCenterIcon) && mediaDataEffect);
  const shouldPlayCenter = isIntersecting && (shouldPlayEffect && !withEffectOnly || shouldLoop);
  const {
    shouldRender: shouldRenderEffect,
    transitionClassNames: animationClassNames
  } = (0,_hooks_useShowTransitionDeprecated__WEBPACK_IMPORTED_MODULE_11__["default"])(shouldPlayEffect, undefined, true, 'slow');
  const {
    shouldRender: shouldRenderCenter,
    transitionClassNames: centerAnimationClassNames
  } = (0,_hooks_useShowTransitionDeprecated__WEBPACK_IMPORTED_MODULE_11__["default"])(shouldPlayCenter, undefined, true, 'slow');
  const handleEnded = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_9__["default"])(() => {
    stopActiveReaction({
      containerId,
      reaction
    });
  });
  const [isAnimationLoaded, markAnimationLoaded, unmarkAnimationLoaded] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const shouldShowStatic = !isCustom && (!shouldPlayCenter || !isAnimationLoaded);
  const {
    shouldRender: shouldRenderStatic,
    transitionClassNames: staticClassNames
  } = (0,_hooks_useShowTransitionDeprecated__WEBPACK_IMPORTED_MODULE_11__["default"])(shouldShowStatic, undefined, true);
  const rootClassName = (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])(_ReactionAnimatedEmoji_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].root, shouldRenderEffect && _ReactionAnimatedEmoji_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].animating, withEffectOnly && _ReactionAnimatedEmoji_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].withEffectOnly, className);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: rootClassName,
    ref: ref
  }, !withEffectOnly && shouldRenderStatic && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ReactionStaticEmoji__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: staticClassNames,
    reaction: reaction,
    availableReactions: availableReactions,
    size: size,
    observeIntersection: observeIntersection
  }), !withEffectOnly && isCustom && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_CustomEmoji__WEBPACK_IMPORTED_MODULE_14__["default"], {
    documentId: reaction.documentId,
    className: _ReactionAnimatedEmoji_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].customEmoji,
    size: size,
    noPlay: shouldPause,
    noVideoOnMobile: true,
    loopLimit: loopLimit,
    observeIntersectionForPlaying: observeIntersection,
    forceAlways: true
  }), shouldRenderCenter && !isCustom && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_AnimatedSticker__WEBPACK_IMPORTED_MODULE_13__["default"], {
    key: `${centerIconId}-${size}`,
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])(_ReactionAnimatedEmoji_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].animatedIcon, centerAnimationClassNames),
    size: (0,_util_math__WEBPACK_IMPORTED_MODULE_5__.roundToNearestEven)(size * CENTER_ICON_MULTIPLIER),
    tgsUrl: mediaDataCenterIcon,
    play: isIntersecting && !shouldPause,
    noLoop: !shouldLoop,
    onLoad: markAnimationLoaded,
    onEnded: unmarkAnimationLoaded,
    forceAlways: true
  }), shouldRenderEffect && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_AnimatedSticker__WEBPACK_IMPORTED_MODULE_13__["default"], {
    key: `${effectId}-${effectSize}`,
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])(_ReactionAnimatedEmoji_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].effect, animationClassNames),
    size: effectSize,
    tgsUrl: mediaDataEffect,
    play: isIntersecting,
    noLoop: true,
    onEnded: handleEnded,
    forceAlways: true
  }), isCustom && !assignedEffectId && isIntersecting && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_CustomEmojiEffect__WEBPACK_IMPORTED_MODULE_15__["default"], {
    reaction: reaction,
    className: animationClassNames,
    particleSize: Math.max(size * CUSTOM_EMOJI_EFFECT_MULTIPLIER, MIN_PARTICLE_SIZE),
    onEnded: handleEnded
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  containerId
}) => {
  const {
    genericEmojiEffects,
    reactions
  } = global;
  const {
    activeReactions
  } = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectTabState)(global);
  const withEffects = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectPerformanceSettingsValue)(global, 'reactionEffects');
  return {
    activeReactions: activeReactions?.[containerId],
    availableReactions: reactions.availableReactions,
    genericEffects: genericEmojiEffects,
    withEffects
  };
})(ReactionAnimatedEmoji)));

/***/ }),

/***/ "./src/components/common/reactions/ReactionStaticEmoji.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/common/reactions/ReactionStaticEmoji.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useMedia */ "./src/hooks/useMedia.ts");
/* harmony import */ var _hooks_useMediaTransitionDeprecated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useMediaTransitionDeprecated */ "./src/hooks/useMediaTransitionDeprecated.ts");
/* harmony import */ var _CustomEmoji__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CustomEmoji */ "./src/components/common/CustomEmoji.tsx");
/* harmony import */ var _icons_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _ReactionStaticEmoji_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ReactionStaticEmoji.scss */ "./src/components/common/reactions/ReactionStaticEmoji.scss");
/* harmony import */ var _assets_blank_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../assets/blank.png */ "./src/assets/blank.png");









const ReactionStaticEmoji = ({
  reaction,
  availableReactions,
  className,
  size,
  withIconHeart,
  observeIntersection
}) => {
  const availableReaction = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => availableReactions?.find(available => (0,_global_helpers__WEBPACK_IMPORTED_MODULE_1__.isSameReaction)(available.reaction, reaction)), [availableReactions, reaction]);
  const staticIconId = availableReaction?.staticIcon?.id;
  const mediaHash = staticIconId ? `document${staticIconId}` : undefined;
  const mediaData = (0,_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__["default"])(mediaHash);
  const transitionClassNames = (0,_hooks_useMediaTransitionDeprecated__WEBPACK_IMPORTED_MODULE_4__["default"])(mediaData);
  const shouldApplySizeFix = reaction.type === 'emoji' && reaction.emoticon === '🦄';
  const shouldReplaceWithHeartIcon = withIconHeart && reaction.type === 'emoji' && reaction.emoticon === '❤';
  if (reaction.type === 'custom') {
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_CustomEmoji__WEBPACK_IMPORTED_MODULE_5__["default"], {
      documentId: reaction.documentId,
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])('ReactionStaticEmoji', className),
      size: size,
      observeIntersectionForPlaying: observeIntersection
    });
  }
  if (shouldReplaceWithHeartIcon) {
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_icons_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
      name: "heart",
      className: "ReactionStaticEmoji",
      style: `font-size: ${size}px; width: ${size}px`
    });
  }
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])('ReactionStaticEmoji', shouldApplySizeFix && 'with-unicorn-fix', transitionClassNames, className),
    style: size ? `width: ${size}px; height: ${size}px` : undefined,
    src: mediaData || _assets_blank_png__WEBPACK_IMPORTED_MODULE_8__,
    alt: availableReaction?.title,
    draggable: false
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(ReactionStaticEmoji));

/***/ }),

/***/ "./src/components/left/settings/folders/IconSelector.tsx":
/*!***************************************************************!*\
  !*** ./src/components/left/settings/folders/IconSelector.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   icons: () => (/* binding */ icons),
/* harmony export */   isSvgIcon: () => (/* binding */ isSvgIcon)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _IconSelector_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconSelector.scss */ "./src/components/left/settings/folders/IconSelector.scss");


const icons = [{
  name: 'bot',
  icon: '🤖',
  svg: /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    d: "M21.116 16.8597C21.8886 16.8597 22.5149 16.0768 22.5149 15.1111C22.5149 14.1453 21.8886 13.3625 21.116 13.3625C20.3434 13.3625 19.7171 14.1453 19.7171 15.1111C19.7171 16.0768 20.3434 16.8597 21.116 16.8597Z",
    fill: "black"
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    d: "M14.8791 16.8597C15.6517 16.8597 16.278 16.0768 16.278 15.1111C16.278 14.1454 15.6517 13.3625 14.8791 13.3625C14.1065 13.3625 13.4802 14.1454 13.4802 15.1111C13.4802 16.0768 14.1065 16.8597 14.8791 16.8597Z",
    fill: "black"
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M27.0395 21.2574V15.3174C27.0395 10.3252 22.9925 6.27826 18.0004 6.27826C13.0082 6.27826 8.96124 10.3252 8.96124 15.3174V21.2574C8.96124 24.1502 8.96124 25.5966 9.52422 26.7015C10.0194 27.6734 10.8096 28.4636 11.7815 28.9588C12.8864 29.5217 14.3328 29.5217 17.2256 29.5217H18.7752C21.6679 29.5217 23.1143 29.5217 24.2192 28.9588C25.1911 28.4636 25.9813 27.6734 26.4765 26.7015C27.0395 25.5966 27.0395 24.1502 27.0395 21.2574ZM11.5434 15.3174C11.5434 11.7516 14.4341 8.86088 17.9999 8.86088C21.5658 8.86088 24.4565 11.7516 24.4565 15.3174V16.7772C24.4565 18.2549 23.608 19.6077 22.1748 19.9675C21.0836 20.2414 19.6533 20.4826 17.9999 20.4826C16.3466 20.4826 14.9163 20.2414 13.8251 19.9675C12.3919 19.6077 11.5434 18.2549 11.5434 16.7772V15.3174Z",
    fill: "black"
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    d: "M30.2676 16.4C31.096 16.4 31.7676 17.0716 31.7676 17.9V24.3565C31.7676 25.1849 31.096 25.8565 30.2676 25.8565C29.4392 25.8565 28.7676 25.1849 28.7676 24.3565V17.9C28.7676 17.0716 29.4392 16.4 30.2676 16.4Z",
    fill: "black"
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    d: "M7.23291 17.9C7.23291 17.0716 6.56134 16.4 5.73291 16.4C4.90448 16.4 4.23291 17.0716 4.23291 17.9V24.3565C4.23291 25.1849 4.90448 25.8565 5.73291 25.8565C6.56134 25.8565 7.23291 25.1849 7.23291 24.3565V17.9Z",
    fill: "black"
  }))
}, {
  name: 'channel',
  icon: '📢',
  svg: /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    d: "M12.1765 22.708H15.5855C16.0157 22.708 16.2308 22.708 16.4395 22.7306C17.0143 22.7929 17.568 22.9829 18.0601 23.2866C18.2387 23.3969 18.4085 23.5289 18.7481 23.7931L22.3164 26.5684C24.4611 28.2365 25.5335 29.0706 26.4338 29.0629C27.217 29.0562 27.9551 28.6953 28.4412 28.0811C29 27.3751 29 26.0166 29 23.2996V11.7634C29 9.04635 29 7.68782 28.4412 6.98185C27.9551 6.3677 27.217 6.00672 26.4338 6.00005C25.5335 5.99239 24.4611 6.82644 22.3164 8.49455L18.7481 11.2699C18.4085 11.534 18.2387 11.6661 18.0601 11.7763C17.568 12.0801 17.0143 12.27 16.4395 12.3324C16.2308 12.355 16.0157 12.355 15.5855 12.355H12.1765C9.31759 12.355 7 14.6726 7 17.5315C7 20.3904 9.31758 22.708 12.1765 22.708Z",
    fill: "black"
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    d: "M12.2982 25.1742C12.1764 25.4348 12.1764 25.7709 12.1764 26.4431V27.8844C12.1764 29.3139 13.3352 30.4727 14.7646 30.4727C16.1941 30.4727 17.3529 29.3139 17.3529 27.8844V26.4431C17.3529 25.7709 17.3529 25.4348 17.231 25.1742C17.1026 24.8995 16.8817 24.6786 16.6069 24.5501C16.3464 24.4283 16.0103 24.4283 15.3381 24.4283H14.1912C13.519 24.4283 13.1829 24.4283 12.9224 24.5501C12.6476 24.6786 12.4267 24.8995 12.2982 25.1742Z",
    fill: "black"
  }))
}, {
  name: 'chat',
  icon: '✅',
  svg: /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    d: "M30 17.2847C30 11.2598 24.6274 6.37561 18 6.37561C11.3726 6.37561 6 11.2598 6 17.2847C6 20.7209 7.60509 23.5375 10.3363 25.5371C10.6856 25.7929 11.0073 27.2137 10.2288 28.4072C9.45024 29.6006 8.47959 30.146 8.96637 30.3502C9.26647 30.4761 11.0397 30.5384 12.3196 29.8206C14.1496 28.7943 14.6613 27.7725 15.0551 27.8629C15.9973 28.079 16.9839 28.1938 18 28.1938C24.6274 28.1938 30 23.3096 30 17.2847Z",
    fill: "black"
  }))
}, {
  name: 'chats',
  icon: '💬',
  svg: /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    d: "M22.3902 9.03227C20.3914 7.162 17.595 6 14.5 6C8.42487 6 3.5 10.4772 3.5 16C3.5 19.1499 4.97133 21.7318 7.47498 23.5647C7.79515 23.7991 8.09005 25.1016 7.37638 26.1956C7.08455 26.643 6.76327 26.991 6.51594 27.2589C6.15843 27.6462 5.95542 27.8661 6.21917 27.9767C6.49426 28.0921 8.11974 28.1492 9.29294 27.4912C10.2112 26.9763 10.7674 26.4625 11.1419 26.1166C11.4516 25.8305 11.6371 25.6592 11.8005 25.6967C12.3863 25.831 12.9908 25.9227 13.6098 25.9677C13.6182 25.9683 13.6267 25.9689 13.6351 25.9695C13.9205 25.9897 14.2089 26 14.5 26C20.5751 26 25.5 21.5228 25.5 16C25.5 13.2908 24.3149 10.8332 22.3902 9.03227Z",
    fill: "black"
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    d: "M32.5 19C32.5 15.0932 30.0356 11.7097 26.4429 10.0641C26.0059 9.86387 25.6121 10.3758 25.8411 10.7985C26.6828 12.3527 27.16 14.1145 27.16 16C27.16 21.6043 22.944 26.1149 17.4721 27.3341C16.9915 27.4412 16.8851 28.0914 17.3467 28.2627C18.6282 28.738 20.0305 29 21.5 29C22.4314 29 23.3358 28.8948 24.1995 28.6967C24.3629 28.6592 24.5484 28.8305 24.8581 29.1166C25.2326 29.4625 25.7888 29.9763 26.7071 30.4912C27.8803 31.1492 29.5057 31.0921 29.7808 30.9767C30.0446 30.8661 29.8416 30.6462 29.4841 30.2589C29.2367 29.991 28.9155 29.643 28.6236 29.1956C27.91 28.1016 28.2048 26.7991 28.525 26.5647C31.0287 24.7318 32.5 22.1499 32.5 19Z",
    fill: "black"
  }))
}, {
  name: 'user',
  icon: '👤',
  svg: /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    d: "M19 16.8125C22.0376 16.8125 24.5 14.3501 24.5 11.3125C24.5 8.27493 22.0376 5.8125 19 5.8125C15.9624 5.8125 13.5 8.27493 13.5 11.3125C13.5 14.3501 15.9624 16.8125 19 16.8125Z",
    fill: "black"
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    d: "M8 25.5942C8 27.5787 9.60875 29.1875 11.5933 29.1875H26.4067C28.3912 29.1875 30 27.5787 30 25.5942C30 24.7942 29.8042 23.999 29.2698 23.4036C28.008 21.9978 24.9618 19.5625 19 19.5625C13.0382 19.5625 9.992 21.9978 8.7302 23.4036C8.19579 23.999 8 24.7942 8 25.5942Z",
    fill: "black"
  }))
}, {
  name: 'group',
  icon: '👥',
  svg: /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    d: "M14.3333 17.3333C16.9107 17.3333 19 15.244 19 12.6667C19 10.0893 16.9107 8 14.3333 8C11.756 8 9.66667 10.0893 9.66667 12.6667C9.66667 15.244 11.756 17.3333 14.3333 17.3333Z",
    fill: "black"
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    d: "M5 25.3654C5 26.8204 6.17955 28 7.63461 28H21.0376C22.4901 27.997 23.6667 26.8186 23.6667 25.3654C23.6667 24.5819 23.4961 23.799 23.0277 23.1928C22.9608 23.1062 22.8879 23.0232 22.8084 22.9443C22.4728 22.611 22.0286 22.2323 21.4585 21.8601C21.4277 21.8399 21.3965 21.8198 21.365 21.7998C19.9048 20.8708 17.6512 20 14.3333 20C9.6174 20 7.05162 21.7592 5.85822 22.9443C5.22282 23.5753 5 24.4699 5 25.3654Z",
    fill: "black"
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    d: "M25.1023 28H30.823C32.0253 28 33 27.0253 33 25.823C33 25.0652 32.806 24.3089 32.2604 23.7831C31.2358 22.7956 29.037 21.3333 25 21.3333C24.7745 21.3333 24.5548 21.3379 24.3406 21.3467L24.368 21.3738C25.5844 22.5817 25.88 24.1575 25.88 25.3654C25.88 26.3368 25.5943 27.2415 25.1023 28Z",
    fill: "black"
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    d: "M25 18.6667C27.2091 18.6667 29 16.8758 29 14.6667C29 12.4575 27.2091 10.6667 25 10.6667C22.7909 10.6667 21 12.4575 21 14.6667C21 16.8758 22.7909 18.6667 25 18.6667Z",
    fill: "black"
  }))
}, {
  name: 'star',
  icon: '⭐',
  svg: /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.8151 27.4314C17.4066 27.0754 18.1464 27.0754 18.7379 27.4314L23.2643 30.1558C24.6767 31.0059 26.4164 29.739 26.0409 28.1338L24.8434 23.0146C24.6854 22.3394 24.9152 21.6324 25.4399 21.1792L29.4253 17.7361C30.6744 16.6571 30.0084 14.6069 28.3637 14.4678L23.1107 14.0233C22.4222 13.9651 21.8224 13.5308 21.5521 12.8949L19.4922 8.04816C18.849 6.53473 16.7039 6.53473 16.0607 8.04816L14.0008 12.8949C13.7306 13.5308 13.1307 13.9651 12.4422 14.0233L7.18921 14.4678C5.54451 14.6069 4.8786 16.6571 6.12762 17.7361L10.1131 21.1792C10.6377 21.6324 10.8675 22.3394 10.7096 23.0146L9.51201 28.1338C9.1365 29.739 10.8762 31.0059 12.2887 30.1558L16.8151 27.4314Z",
    fill: "black"
  }))
}, {
  name: 'folder',
  icon: '',
  // default is folder icon
  svg: /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    d: "M6.21265 9.53789C6 10.1456 6 10.9016 6 12.4135C6 12.6655 6 12.7915 6.03544 12.8928C6.09892 13.0742 6.24156 13.2169 6.42298 13.2803C6.52427 13.3158 6.65026 13.3158 6.90226 13.3158H29.2421C29.3595 13.3158 29.4181 13.3158 29.4672 13.308C29.7375 13.2652 29.9494 13.0533 29.9922 12.783C30 12.7339 30 12.6752 30 12.5579C30 12.0885 30 11.8538 29.9689 11.6574C29.7977 10.5764 28.9499 9.72863 27.8689 9.55742C27.6725 9.52632 27.4378 9.52632 26.9684 9.52632H19.1548C18.9418 9.52632 18.8353 9.52632 18.7327 9.52075C17.8706 9.47396 17.0503 9.13419 16.4077 8.55768C16.3312 8.48907 16.2559 8.41377 16.1053 8.26319C15.9547 8.1126 15.8794 8.03725 15.8029 7.96863C15.1602 7.39213 14.3399 7.05236 13.4778 7.00557C13.3752 7 13.2687 7 13.0557 7H11.4135C9.90159 7 9.14562 7 8.53789 7.21265C7.44937 7.59354 6.59354 8.44937 6.21265 9.53789Z",
    fill: "black"
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    d: "M6.20651 16.8766C6 17.282 6 17.8125 6 18.8737V20.3895C6 23.2192 6 24.6341 6.5507 25.7149C7.03512 26.6656 7.80807 27.4386 8.75878 27.923C9.8396 28.4737 11.2545 28.4737 14.0842 28.4737H21.9158C24.7455 28.4737 26.1604 28.4737 27.2412 27.923C28.1919 27.4386 28.9649 26.6656 29.4493 25.7149C30 24.6341 30 23.2192 30 20.3895V18.8737C30 17.8125 30 17.282 29.7935 16.8766C29.6118 16.5201 29.322 16.2303 28.9655 16.0486C28.5602 15.8421 28.0296 15.8421 26.9684 15.8421H9.03158C7.97043 15.8421 7.43985 15.8421 7.03454 16.0486C6.67803 16.2303 6.38817 16.5201 6.20651 16.8766Z",
    fill: "black"
  }))
}];
const IconSelector = ({
  onEmojiSelect
}) => {
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "folderIcons"
  }, icons.map(i => /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("i", {
    key: i.name,
    onClick: () => onEmojiSelect(i.icon, i.name)
  }, i.svg)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconSelector);
const isSvgIcon = emoji => {
  console.log("test", emoji);
  if (undefined === emoji) return 'folder';
  const foundIcon = icons.find(value => value.icon === emoji);
  // eslint-disable-next-line no-null/no-null
  return foundIcon ? foundIcon.name : null;
};

/***/ }),

/***/ "./src/components/middle/ActionMessage.tsx":
/*!*************************************************!*\
  !*** ./src/components/middle/ActionMessage.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global */ "./src/global/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_helpers_replies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global/helpers/replies */ "./src/global/helpers/replies.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_textFormat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util/textFormat */ "./src/util/textFormat.ts");
/* harmony import */ var _common_helpers_gifts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/helpers/gifts */ "./src/components/common/helpers/gifts.ts");
/* harmony import */ var _common_helpers_renderActionMessageText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/helpers/renderActionMessageText */ "./src/components/common/helpers/renderActionMessageText.tsx");
/* harmony import */ var _common_helpers_renderText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/helpers/renderText */ "./src/components/common/helpers/renderText.tsx");
/* harmony import */ var _common_helpers_renderTextWithEntities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/helpers/renderTextWithEntities */ "./src/components/common/helpers/renderTextWithEntities.tsx");
/* harmony import */ var _helpers_preventMessageInputBlur__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/preventMessageInputBlur */ "./src/components/middle/helpers/preventMessageInputBlur.ts");
/* harmony import */ var _hooks_useContextMenuHandlers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hooks/useContextMenuHandlers */ "./src/hooks/useContextMenuHandlers.ts");
/* harmony import */ var _hooks_useEnsureMessage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/useEnsureMessage */ "./src/hooks/useEnsureMessage.ts");
/* harmony import */ var _hooks_useFlag__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../hooks/useFlag */ "./src/hooks/useFlag.ts");
/* harmony import */ var _hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../hooks/useIntersectionObserver */ "./src/hooks/useIntersectionObserver.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _hooks_useResizeMessageObserver__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../hooks/useResizeMessageObserver */ "./src/hooks/useResizeMessageObserver.ts");
/* harmony import */ var _hooks_useShowTransitionDeprecated__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../hooks/useShowTransitionDeprecated */ "./src/hooks/useShowTransitionDeprecated.ts");
/* harmony import */ var _message_hooks_useFocusMessage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./message/hooks/useFocusMessage */ "./src/components/middle/message/hooks/useFocusMessage.ts");
/* harmony import */ var _common_AnimatedIconFromSticker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../common/AnimatedIconFromSticker */ "./src/components/common/AnimatedIconFromSticker.tsx");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../common/Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _common_gift_GiftRibbon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../common/gift/GiftRibbon */ "./src/components/common/gift/GiftRibbon.tsx");
/* harmony import */ var _common_profile_RadialPatternBackground__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../common/profile/RadialPatternBackground */ "./src/components/common/profile/RadialPatternBackground.tsx");
/* harmony import */ var _common_Sparkles__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../common/Sparkles */ "./src/components/common/Sparkles.tsx");
/* harmony import */ var _ActionMessageSuggestedAvatar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ActionMessageSuggestedAvatar */ "./src/components/middle/ActionMessageSuggestedAvatar.tsx");
/* harmony import */ var _ActionMessageUpdatedAvatar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ActionMessageUpdatedAvatar */ "./src/components/middle/ActionMessageUpdatedAvatar.tsx");
/* harmony import */ var _message_ContextMenuContainer_async__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./message/ContextMenuContainer.async */ "./src/components/middle/message/ContextMenuContainer.async.tsx");
/* harmony import */ var _message_reactions_Reactions__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./message/reactions/Reactions */ "./src/components/middle/message/reactions/Reactions.tsx");
/* harmony import */ var _message_SimilarChannels__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./message/SimilarChannels */ "./src/components/middle/message/SimilarChannels.tsx");































const APPEARANCE_DELAY = 10;
const STAR_GIFT_STICKER_SIZE = 120;
const ActionMessage = ({
  message,
  threadId,
  isEmbedded,
  appearanceOrder = 0,
  isJustAdded,
  isLastInList,
  senderUser,
  senderChat,
  targetUserIds,
  targetMessage,
  targetChatId,
  targetChat,
  isFocused,
  focusDirection,
  noFocusHighlight,
  premiumGiftSticker,
  starsGiftSticker,
  isInsideTopic,
  topic,
  memoFirstUnreadIdRef,
  canPlayAnimatedEmojis,
  patternColor,
  observeIntersectionForReading,
  observeIntersectionForLoading,
  observeIntersectionForPlaying,
  onIntersectPinnedMessage,
  currentUserId,
  isCurrentUserPremium
}) => {
  const {
    openPremiumModal,
    requestConfetti,
    checkGiftCode,
    getReceipt,
    openGiftInfoModalFromMessage,
    openPrizeStarsTransactionFromGiveaway
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const oldLang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_17__["default"])();
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_16__["default"])();

  // eslint-disable-next-line no-null/no-null
  const ref = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,_hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_15__.useOnIntersect)(ref, observeIntersectionForReading);
  (0,_hooks_useEnsureMessage__WEBPACK_IMPORTED_MODULE_13__["default"])(message.chatId, message.replyInfo?.type === 'message' ? message.replyInfo.replyToMsgId : undefined, targetMessage);
  (0,_message_hooks_useFocusMessage__WEBPACK_IMPORTED_MODULE_20__["default"])({
    elementRef: ref,
    chatId: message.chatId,
    isFocused,
    focusDirection,
    noFocusHighlight,
    isJustAdded
  });
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useUnmountCleanup)(() => {
    if (message.isPinned) {
      onIntersectPinnedMessage?.({
        viewportPinnedIdsToRemove: [message.id]
      });
    }
  });
  const noAppearanceAnimation = appearanceOrder <= 0;
  const [isShown, markShown] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_14__["default"])(noAppearanceAnimation);
  const isPremiumGift = message.content.action?.type === 'giftPremium';
  const isGiftCode = message.content.action?.type === 'giftCode';
  const isSuggestedAvatar = message.content.action?.type === 'suggestProfilePhoto' && message.content.action.photo;
  const isUpdatedAvatar = message.content.action?.type === 'updateProfilePhoto' && message.content.action.photo;
  const isJoinedMessage = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.isJoinedChannelMessage)(message);
  const isStarsGift = message.content.action?.type === 'giftStars';
  const isStarGift = message.content.action?.type === 'starGift';
  const isStarGiftUnique = message.content.action?.type === 'starGiftUnique';
  const isPrizeStars = message.content.action?.type === 'prizeStars';
  const withServiceReactions = Boolean(message.areReactionsPossible && message?.reactions);
  (0,_hooks_useResizeMessageObserver__WEBPACK_IMPORTED_MODULE_18__["default"])(ref, isLastInList);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (noAppearanceAnimation) {
      return;
    }
    setTimeout(markShown, appearanceOrder * APPEARANCE_DELAY);
  }, [appearanceOrder, markShown, noAppearanceAnimation]);
  const isVisible = (0,_hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_15__.useIsIntersecting)(ref, observeIntersectionForPlaying);
  const shouldShowConfettiRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)((() => {
    const isUnread = memoFirstUnreadIdRef?.current && message.id >= memoFirstUnreadIdRef.current;
    return isPremiumGift && !message.isOutgoing && isUnread;
  })());
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isVisible && shouldShowConfettiRef.current) {
      shouldShowConfettiRef.current = false;
      requestConfetti({
        withStars: true
      });
    }
  }, [isVisible, requestConfetti]);
  const {
    transitionClassNames
  } = (0,_hooks_useShowTransitionDeprecated__WEBPACK_IMPORTED_MODULE_19__["default"])(isShown, undefined, noAppearanceAnimation, false);

  // No need for expensive global updates on users and chats, so we avoid them
  const usersById = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getGlobal)().users.byId;
  const targetUsers = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return targetUserIds ? targetUserIds.map(userId => usersById?.[userId]).filter(Boolean) : undefined;
  }, [targetUserIds, usersById]);
  const renderContent = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    return (0,_common_helpers_renderActionMessageText__WEBPACK_IMPORTED_MODULE_8__.renderActionMessageText)(oldLang, message, senderUser, senderChat, targetUsers, targetMessage, targetChatId, topic, {
      isEmbedded
    }, observeIntersectionForLoading, observeIntersectionForPlaying);
  }, [isEmbedded, message, observeIntersectionForLoading, observeIntersectionForPlaying, oldLang, senderChat, senderUser, targetChatId, targetMessage, targetUsers, topic]);
  const {
    isContextMenuOpen,
    contextMenuAnchor,
    handleBeforeContextMenu,
    handleContextMenu,
    handleContextMenuClose,
    handleContextMenuHide
  } = (0,_hooks_useContextMenuHandlers__WEBPACK_IMPORTED_MODULE_12__["default"])(ref);
  const isContextMenuShown = contextMenuAnchor !== undefined;
  const handleMouseDown = e => {
    (0,_helpers_preventMessageInputBlur__WEBPACK_IMPORTED_MODULE_11__.preventMessageInputBlur)(e);
    handleBeforeContextMenu(e);
  };
  const handleStarGiftClick = () => {
    const starGift = message.content.action?.starGift;
    if (!starGift) return;
    openGiftInfoModalFromMessage({
      chatId: message.chatId,
      messageId: message.id
    });
  };
  const handlePremiumGiftClick = () => {
    openPremiumModal({
      isGift: true,
      fromUserId: senderUser?.id,
      toUserId: targetUserIds?.[0],
      monthsAmount: message.content.action?.months || 0
    });
  };
  const handlePrizeStarsClick = () => {
    openPrizeStarsTransactionFromGiveaway({
      chatId: message.chatId,
      messageId: message.id
    });
  };
  const handleGiftCodeClick = () => {
    const slug = message.content.action?.slug;
    if (!slug) return;
    checkGiftCode({
      slug,
      message: {
        chatId: message.chatId,
        messageId: message.id
      }
    });
  };
  const handleClick = () => {
    if (message.content.action?.type === 'receipt') {
      getReceipt({
        chatId: message.chatId,
        messageId: message.id
      });
    }
  };

  // TODO Refactoring for action rendering
  const shouldSkipRender = isInsideTopic && message.content.action?.text === 'TopicWasCreatedAction';
  if (shouldSkipRender) {
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      ref: ref
    });
  }
  if (isEmbedded) {
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      ref: ref,
      className: "embedded-action-message"
    }, renderContent());
  }
  function renderGift() {
    const giftMessage = message.content.action?.message;
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "action-message-gift",
      tabIndex: 0,
      role: "button",
      onClick: handlePremiumGiftClick
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_AnimatedIconFromSticker__WEBPACK_IMPORTED_MODULE_21__["default"], {
      key: message.id,
      sticker: premiumGiftSticker,
      play: canPlayAnimatedEmojis,
      noLoop: true,
      nonInteractive: true
    }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("strong", null, oldLang('ActionGiftPremiumTitle')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, oldLang('ActionGiftPremiumSubtitle', oldLang('Months', message.content.action?.months, 'i'))), giftMessage && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "action-message-gift-subtitle"
    }, (0,_common_helpers_renderTextWithEntities__WEBPACK_IMPORTED_MODULE_10__.renderTextWithEntities)({
      text: giftMessage.text,
      entities: giftMessage.entities
    })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "action-message-button"
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Sparkles__WEBPACK_IMPORTED_MODULE_25__["default"], {
      preset: "button"
    }), oldLang('ActionGiftPremiumView')));
  }
  function renderGiftCode() {
    const isFromGiveaway = message.content.action?.isGiveaway;
    const isUnclaimed = message.content.action?.isUnclaimed;
    const giftMessage = message.content.action?.message;
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "action-message-gift action-message-centered",
      tabIndex: 0,
      role: "button",
      onClick: handleGiftCodeClick
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_AnimatedIconFromSticker__WEBPACK_IMPORTED_MODULE_21__["default"], {
      key: message.id,
      sticker: premiumGiftSticker,
      play: canPlayAnimatedEmojis,
      noLoop: true,
      nonInteractive: true
    }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("strong", null, oldLang(isUnclaimed ? 'BoostingUnclaimedPrize' : 'BoostingCongratulations')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "action-message-subtitle"
    }, targetChat && (0,_common_helpers_renderText__WEBPACK_IMPORTED_MODULE_9__["default"])(oldLang(isFromGiveaway ? 'BoostingReceivedGiftFrom' : isUnclaimed ? 'BoostingReceivedPrizeFrom' : 'BoostingYouHaveUnclaimedPrize', (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getChatTitle)(oldLang, targetChat)), ['simple_markdown'])), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "action-message-subtitle"
    }, (0,_common_helpers_renderText__WEBPACK_IMPORTED_MODULE_9__["default"])(oldLang('BoostingUnclaimedPrizeDuration', oldLang('Months', message.content.action?.months, 'i')), ['simple_markdown'])), giftMessage && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "action-message-gift-subtitle"
    }, (0,_common_helpers_renderTextWithEntities__WEBPACK_IMPORTED_MODULE_10__.renderTextWithEntities)({
      text: giftMessage.text,
      entities: giftMessage.entities
    })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "action-message-button"
    }, oldLang('BoostingReceivedGiftOpenBtn')));
  }
  function renderStarsGift() {
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "action-message-gift action-message-centered",
      tabIndex: 0,
      role: "button",
      onClick: handleStarGiftClick
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_AnimatedIconFromSticker__WEBPACK_IMPORTED_MODULE_21__["default"], {
      key: message.id,
      sticker: starsGiftSticker,
      play: canPlayAnimatedEmojis,
      noLoop: true,
      nonInteractive: true
    }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "action-message-stars-balance"
    }, (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_6__.formatInteger)(message.content.action.stars), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("strong", null, oldLang('Stars'))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "action-message-stars-subtitle"
    }, (0,_common_helpers_renderText__WEBPACK_IMPORTED_MODULE_9__["default"])(oldLang(!message.isOutgoing ? 'ActionGiftStarsSubtitleYou' : 'ActionGiftStarsSubtitle', (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getChatTitle)(oldLang, targetChat)), ['simple_markdown'])), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "action-message-button"
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Sparkles__WEBPACK_IMPORTED_MODULE_25__["default"], {
      preset: "button"
    }), oldLang('ActionGiftPremiumView')));
  }
  function renderStarGiftUserCaption() {
    const starGift = message.content.action?.starGift;
    if (!starGift) return undefined;
    const {
      fromId,
      peerId
    } = starGift;
    const fromPeer = fromId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectPeer)((0,_global__WEBPACK_IMPORTED_MODULE_1__.getGlobal)(), fromId) : undefined;
    const targetPeer = peerId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectPeer)((0,_global__WEBPACK_IMPORTED_MODULE_1__.getGlobal)(), peerId) : starGift.type === 'starGiftUnique' && !message.isOutgoing ? targetChat : undefined;
    if (targetPeer && targetPeer.id !== currentUserId) {
      return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
        className: "action-message-user-caption"
      }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, " ", lang('GiftTo'), " "), starGift.type === 'starGift' && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_22__["default"], {
        className: "action-message-user-avatar",
        size: "micro",
        peer: targetPeer
      }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, " ", (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getPeerTitle)(lang, targetPeer), " "));
    }
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "action-message-user-caption"
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, " ", lang('GiftFrom'), " "), starGift.type === 'starGift' && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_22__["default"], {
      className: "action-message-user-avatar",
      size: "micro",
      peer: fromPeer || senderUser
    }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, " ", (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getPeerTitle)(lang, fromPeer || senderUser), " "));
  }
  function renderStarGiftUserDescription() {
    const starGift = message.content.action?.starGift;
    const targetChatTitle = targetChat && (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getPeerTitle)(lang, targetChat);
    const starGiftMessage = starGift?.message;
    if (!starGift) return undefined;
    if (starGiftMessage) {
      return (0,_common_helpers_renderTextWithEntities__WEBPACK_IMPORTED_MODULE_10__.renderTextWithEntities)({
        text: starGiftMessage.text,
        entities: starGiftMessage.entities
      });
    }
    const amountToConvert = starGift?.starsToConvert;
    if (starGift.isSaved) {
      return lang(starGift.savedId ? 'ActionStarGiftChannelDisplaying' : 'ActionStarGiftDisplaying');
    }
    if (starGift.isUpgraded) {
      return lang('ActionStarGiftUpgraded');
    }
    if (message.isOutgoing) {
      if (amountToConvert) {
        return lang('ActionStarGiftPeerOutDescription', {
          peer: targetChatTitle || 'Someone',
          count: amountToConvert
        }, {
          withNodes: true,
          pluralValue: amountToConvert
        });
      }
      if (starGift.canUpgrade) {
        return lang('ActionStarGiftPeerOutDescriptionUpgrade', {
          peer: targetChatTitle || 'Someone'
        });
      }
    }
    if (starGift.isConverted) {
      return message.isOutgoing ? lang('GiftInfoPeerDescriptionOutConverted', {
        amount: (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_6__.formatInteger)(amountToConvert),
        peer: targetChatTitle || 'Chat'
      }, {
        pluralValue: amountToConvert,
        withNodes: true,
        withMarkdown: true
      }) : lang('GiftInfoDescriptionConverted', {
        amount: (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_6__.formatInteger)(amountToConvert)
      }, {
        pluralValue: amountToConvert,
        withNodes: true,
        withMarkdown: true
      });
    }
    if (amountToConvert) {
      return lang('ActionStarGiftDescription2', {
        count: amountToConvert
      }, {
        withNodes: true,
        pluralValue: amountToConvert
      });
    }
    if (starGift.canUpgrade) {
      return lang('ActionStarGiftDescriptionUpgrade');
    }
    return undefined;
  }
  function renderStarGift() {
    const starGift = message.content.action?.starGift;
    if (!starGift || starGift.gift.type !== 'starGift') return undefined;
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "action-message-gift action-message-centered",
      tabIndex: 0,
      role: "button",
      onClick: handleStarGiftClick
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_AnimatedIconFromSticker__WEBPACK_IMPORTED_MODULE_21__["default"], {
      sticker: starGift.gift.sticker,
      play: canPlayAnimatedEmojis,
      noLoop: true,
      nonInteractive: true,
      size: STAR_GIFT_STICKER_SIZE
    }), renderStarGiftUserCaption(), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "action-message-gift-subtitle"
    }, renderStarGiftUserDescription()), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "action-message-button"
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Sparkles__WEBPACK_IMPORTED_MODULE_25__["default"], {
      preset: "button"
    }), starGift.alreadyPaidUpgradeStars && (!message.isOutgoing || targetUsers?.[0]?.isSelf) ? lang('ActionStarGiftUnpack') : oldLang('ActionGiftPremiumView')), starGift.gift.availabilityTotal && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_gift_GiftRibbon__WEBPACK_IMPORTED_MODULE_23__["default"], {
      color: patternColor || 'blue',
      text: oldLang('Gift2Limited1OfRibbon', (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_6__.formatIntegerCompact)(starGift.gift.availabilityTotal))
    }));
  }
  function renderStarGiftUnique() {
    const starGift = message.content.action?.starGift;
    if (!starGift || starGift.gift.type !== 'starGiftUnique') return undefined;
    const sticker = (0,_common_helpers_gifts__WEBPACK_IMPORTED_MODULE_7__.getStickerFromGift)(starGift.gift);
    const attributes = (0,_common_helpers_gifts__WEBPACK_IMPORTED_MODULE_7__.getGiftAttributes)(starGift.gift);
    const {
      backdrop,
      pattern,
      model
    } = attributes || {};
    if (!backdrop || !pattern || !model) return undefined;
    const backgroundColors = [backdrop.centerColor, backdrop.edgeColor];
    const adaptedPatternColor = `${backdrop.patternColor.slice(0, 7)}55`;
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "action-message-gift action-message-centered action-message-unique",
      tabIndex: 0,
      role: "button",
      style: `--pattern-color: ${adaptedPatternColor}`,
      onClick: handleStarGiftClick
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "action-message-unique-background-wrapper"
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_profile_RadialPatternBackground__WEBPACK_IMPORTED_MODULE_24__["default"], {
      className: "action-message-unique-background",
      backgroundColors: backgroundColors,
      patternColor: backdrop.patternColor,
      patternIcon: pattern.sticker,
      clearBottomSector: true
    })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_AnimatedIconFromSticker__WEBPACK_IMPORTED_MODULE_21__["default"], {
      sticker: sticker,
      play: canPlayAnimatedEmojis,
      noLoop: true,
      nonInteractive: true,
      size: STAR_GIFT_STICKER_SIZE
    }), renderStarGiftUserCaption(), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "action-message-unique-title",
      style: `color: ${backdrop.textColor}`
    }, starGift.gift.title, " #", starGift.gift.number), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "action-message-unique-properties",
      style: `color: ${backdrop.textColor}`
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "action-message-unique-property"
    }, oldLang('Gift2AttributeModel')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "action-message-unique-value"
    }, model.name), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "action-message-unique-property"
    }, oldLang('Gift2AttributeBackdrop')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "action-message-unique-value"
    }, backdrop.name), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "action-message-unique-property"
    }, oldLang('Gift2AttributeSymbol')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "action-message-unique-value"
    }, pattern.name)), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "action-message-button"
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Sparkles__WEBPACK_IMPORTED_MODULE_25__["default"], {
      preset: "button"
    }), oldLang('Gift2UniqueView')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_gift_GiftRibbon__WEBPACK_IMPORTED_MODULE_23__["default"], {
      color: adaptedPatternColor,
      text: oldLang('ActionStarGift')
    }));
  }
  function renderPrizeStars() {
    const isUnclaimed = message.content.action?.isUnclaimed;
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "action-message-gift action-message-centered",
      tabIndex: 0,
      role: "button",
      onClick: handlePrizeStarsClick
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_AnimatedIconFromSticker__WEBPACK_IMPORTED_MODULE_21__["default"], {
      key: message.id,
      sticker: starsGiftSticker,
      play: canPlayAnimatedEmojis,
      noLoop: true,
      nonInteractive: true
    }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("strong", null, oldLang(isUnclaimed ? 'BoostingUnclaimedPrize' : 'BoostingCongratulations')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "action-message-subtitle"
    }, targetChat && (0,_common_helpers_renderText__WEBPACK_IMPORTED_MODULE_9__["default"])(oldLang(isUnclaimed ? 'BoostingReceivedPrizeFrom' : 'BoostingYouHaveUnclaimedPrize', (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getChatTitle)(oldLang, targetChat)), ['simple_markdown'])), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "action-message-subtitle"
    }, (0,_common_helpers_renderText__WEBPACK_IMPORTED_MODULE_9__["default"])(lang('PrizeCredits2', {
      count: /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_6__.formatInteger)(message.content.action?.stars))
    }, {
      withNodes: true,
      pluralValue: message.content.action?.stars
    }), ['simple_markdown'])), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "action-message-button"
    }, oldLang('ActionGiftPremiumView')));
  }
  const className = (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_5__["default"])('ActionMessage message-list-item', isFocused && !noFocusHighlight && 'focused', (isPremiumGift || isSuggestedAvatar || isUpdatedAvatar) && 'centered-action', isContextMenuShown && 'has-menu-open', isLastInList && 'last-in-list', transitionClassNames);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    ref: ref,
    id: (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getMessageHtmlId)(message.id),
    className: className,
    "data-message-id": message.id,
    "data-is-pinned": message.isPinned || undefined,
    onMouseDown: handleMouseDown,
    onContextMenu: handleContextMenu
  }, !isSuggestedAvatar && !isGiftCode && !isJoinedMessage && !isUpdatedAvatar && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: "action-message-content",
    onClick: handleClick
  }, renderContent()), isPremiumGift && renderGift(), isGiftCode && renderGiftCode(), isStarsGift && renderStarsGift(), isStarGift && renderStarGift(), isStarGiftUnique && renderStarGiftUnique(), isPrizeStars && renderPrizeStars(), isSuggestedAvatar && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ActionMessageSuggestedAvatar__WEBPACK_IMPORTED_MODULE_26__["default"], {
    message: message,
    renderContent: renderContent
  }), isUpdatedAvatar && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ActionMessageUpdatedAvatar__WEBPACK_IMPORTED_MODULE_27__["default"], {
    message: message,
    renderContent: renderContent
  }), isJoinedMessage && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_message_SimilarChannels__WEBPACK_IMPORTED_MODULE_30__["default"], {
    chatId: targetChatId
  }), contextMenuAnchor && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_message_ContextMenuContainer_async__WEBPACK_IMPORTED_MODULE_28__["default"], {
    isOpen: isContextMenuOpen,
    anchor: contextMenuAnchor,
    message: message,
    messageListType: "thread",
    onClose: handleContextMenuClose,
    onCloseAnimationEnd: handleContextMenuHide
  }), withServiceReactions && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_message_reactions_Reactions__WEBPACK_IMPORTED_MODULE_29__["default"], {
    isOutside: true,
    message: message,
    threadId: threadId,
    observeIntersection: observeIntersectionForPlaying,
    isCurrentUserPremium: isCurrentUserPremium
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  message,
  threadId
}) => {
  const {
    chatId,
    senderId,
    content
  } = message;
  const {
    targetUserIds,
    targetChatId
  } = content.action || {};
  const targetMessageId = (0,_global_helpers_replies__WEBPACK_IMPORTED_MODULE_3__.getMessageReplyInfo)(message)?.replyToMsgId;
  const targetMessage = targetMessageId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectChatMessage)(global, chatId, targetMessageId) : undefined;
  const theme = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectTheme)(global);
  const {
    patternColor
  } = global.settings.themes[theme] || {};
  const isFocused = threadId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectIsMessageFocused)(global, message, threadId) : false;
  const {
    direction: focusDirection,
    noHighlight: noFocusHighlight
  } = isFocused && (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectTabState)(global).focusedMessage || {};
  const senderUser = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectUser)(global, senderId || chatId);
  const senderChat = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectChat)(global, chatId);
  const targetChat = targetChatId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectChat)(global, targetChatId) : undefined;
  const giftDuration = content.action?.months;
  const premiumGiftSticker = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectGiftStickerForDuration)(global, giftDuration);
  const starCount = content.action?.stars;
  const starsGiftSticker = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectGiftStickerForStars)(global, starCount);
  const topic = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectTopicFromMessage)(global, message);
  return {
    senderUser,
    senderChat,
    targetChat,
    targetChatId,
    targetUserIds,
    targetMessage,
    isFocused,
    premiumGiftSticker,
    starsGiftSticker,
    topic,
    patternColor,
    canPlayAnimatedEmojis: (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectCanPlayAnimatedEmojis)(global),
    ...(isFocused && {
      focusDirection,
      noFocusHighlight
    }),
    isCurrentUserPremium: (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectIsCurrentUserPremium)(global),
    currentUserId: global.currentUserId
  };
})(ActionMessage)));

/***/ }),

/***/ "./src/components/middle/ActionMessageSuggestedAvatar.tsx":
/*!****************************************************************!*\
  !*** ./src/components/middle/ActionMessageSuggestedAvatar.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global */ "./src/global/index.ts");
/* harmony import */ var _api_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/types */ "./src/api/types/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types */ "./src/types/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _util_files__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/files */ "./src/util/files.ts");
/* harmony import */ var _hooks_useFlag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useFlag */ "./src/hooks/useFlag.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useMedia__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useMedia */ "./src/hooks/useMedia.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _ui_ConfirmDialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ui/ConfirmDialog */ "./src/components/ui/ConfirmDialog.tsx");
/* harmony import */ var _ui_CropModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ui/CropModal */ "./src/components/ui/CropModal.tsx");













const ActionMessageSuggestedAvatar = ({
  message,
  renderContent
}) => {
  const {
    openMediaViewer,
    uploadProfilePhoto,
    showNotification
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const {
    isOutgoing
  } = message;
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const [cropModalBlob, setCropModalBlob] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [isVideoModalOpen, openVideoModal, closeVideoModal] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_6__["default"])(false);
  const photo = message.content.action.photo;
  const suggestedPhotoUrl = (0,_hooks_useMedia__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.getPhotoMediaHash)(photo, 'full'));
  const suggestedVideoUrl = (0,_hooks_useMedia__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.getVideoProfilePhotoMediaHash)(photo));
  const isVideo = message.content.action.photo?.isVideo;
  const showAvatarNotification = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(() => {
    showNotification({
      title: lang('ApplyAvatarHintTitle'),
      message: lang('ApplyAvatarHint'),
      action: {
        action: 'requestNextSettingsScreen',
        payload: {
          screen: _types__WEBPACK_IMPORTED_MODULE_3__.SettingsScreens.Main
        }
      },
      actionText: lang('Open')
    });
  });
  const handleSetSuggestedAvatar = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(file => {
    setCropModalBlob(undefined);
    uploadProfilePhoto({
      file
    });
    showAvatarNotification();
  });
  const handleCloseCropModal = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(() => {
    setCropModalBlob(undefined);
  });
  const handleSetVideo = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(async () => {
    if (!suggestedVideoUrl) return;
    closeVideoModal();
    showAvatarNotification();

    // TODO Once we support uploading video avatars, add crop/trim modal here
    const blob = await (0,_util_files__WEBPACK_IMPORTED_MODULE_5__.fetchBlob)(suggestedVideoUrl);
    uploadProfilePhoto({
      file: new File([blob], 'avatar.mp4'),
      isVideo: true,
      videoTs: photo.videoSizes?.find(l => l.videoStartTs !== undefined)?.videoStartTs
    });
  });
  const handleViewSuggestedAvatar = async () => {
    if (!isOutgoing && suggestedPhotoUrl) {
      if (isVideo) {
        openVideoModal();
      } else {
        setCropModalBlob(await (0,_util_files__WEBPACK_IMPORTED_MODULE_5__.fetchBlob)(suggestedPhotoUrl));
      }
    } else {
      openMediaViewer({
        chatId: message.chatId,
        messageId: message.id,
        threadId: _api_types__WEBPACK_IMPORTED_MODULE_2__.MAIN_THREAD_ID,
        origin: _types__WEBPACK_IMPORTED_MODULE_3__.MediaViewerOrigin.SuggestedAvatar
      });
    }
  };
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: "action-message-suggested-avatar",
    tabIndex: 0,
    role: "button",
    onClick: handleViewSuggestedAvatar
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    photo: message.content.action.photo,
    loopIndefinitely: true,
    withVideo: isVideo,
    size: "jumbo"
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, renderContent()), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: "action-message-button"
  }, lang(isVideo ? 'ViewVideoAction' : 'ViewPhotoAction')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_CropModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
    file: cropModalBlob,
    onClose: handleCloseCropModal,
    onChange: handleSetSuggestedAvatar
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_ConfirmDialog__WEBPACK_IMPORTED_MODULE_11__["default"], {
    isOpen: isVideoModalOpen,
    title: lang('SuggestedVideo'),
    confirmHandler: handleSetVideo,
    onClose: closeVideoModal,
    textParts: renderContent()
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(ActionMessageSuggestedAvatar));

/***/ }),

/***/ "./src/components/middle/ActionMessageUpdatedAvatar.tsx":
/*!**************************************************************!*\
  !*** ./src/components/middle/ActionMessageUpdatedAvatar.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global */ "./src/global/index.ts");
/* harmony import */ var _api_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/types */ "./src/api/types/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types */ "./src/types/index.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Avatar */ "./src/components/common/Avatar.tsx");






const ActionMessageUpdatedAvatar = ({
  message,
  renderContent
}) => {
  const {
    openMediaViewer
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const handleViewUpdatedAvatar = () => {
    openMediaViewer({
      chatId: message.chatId,
      messageId: message.id,
      threadId: _api_types__WEBPACK_IMPORTED_MODULE_2__.MAIN_THREAD_ID,
      origin: _types__WEBPACK_IMPORTED_MODULE_3__.MediaViewerOrigin.SuggestedAvatar
    });
  };
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, renderContent()), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: "action-message-updated-avatar",
    tabIndex: 0,
    role: "button",
    onClick: handleViewUpdatedAvatar,
    "aria-label": lang('ViewPhotoAction')
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    photo: message.content.action.photo,
    loopIndefinitely: true,
    withVideo: true,
    size: "jumbo"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(ActionMessageUpdatedAvatar));

/***/ }),

/***/ "./src/components/middle/message/ContextMenuContainer.async.tsx":
/*!**********************************************************************!*\
  !*** ./src/components/middle/message/ContextMenuContainer.async.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_moduleLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/moduleLoader */ "./src/util/moduleLoader.ts");
/* harmony import */ var _hooks_useModuleLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useModuleLoader */ "./src/hooks/useModuleLoader.ts");



const ContextMenuContainerAsync = props => {
  const {
    isOpen
  } = props;
  const ContextMenuContainer = (0,_hooks_useModuleLoader__WEBPACK_IMPORTED_MODULE_2__["default"])(_util_moduleLoader__WEBPACK_IMPORTED_MODULE_1__.Bundles.Extra, 'ContextMenuContainer', !isOpen);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return ContextMenuContainer ? /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(ContextMenuContainer, props) : undefined;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContextMenuContainerAsync);

/***/ }),

/***/ "./src/components/middle/message/SimilarChannels.tsx":
/*!***********************************************************!*\
  !*** ./src/components/middle/message/SimilarChannels.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_textFormat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/textFormat */ "./src/util/textFormat.ts");
/* harmony import */ var _hooks_schedulers_useTimeout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/schedulers/useTimeout */ "./src/hooks/schedulers/useTimeout.ts");
/* harmony import */ var _hooks_useAverageColor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useAverageColor */ "./src/hooks/useAverageColor.ts");
/* harmony import */ var _hooks_useFlag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hooks/useFlag */ "./src/hooks/useFlag.ts");
/* harmony import */ var _hooks_useHorizontalScroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hooks/useHorizontalScroll */ "./src/hooks/useHorizontalScroll.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _ui_placeholder_Skeleton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ui/placeholder/Skeleton */ "./src/components/ui/placeholder/Skeleton.tsx");
/* harmony import */ var _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SimilarChannels.module.scss */ "./src/components/middle/message/SimilarChannels.module.scss");
















const DEFAULT_BADGE_COLOR = '#3C3C4399';
const SHOW_CHANNELS_NUMBER = 10;
const MIN_SKELETON_DELAY = 300;
const MAX_SKELETON_DELAY = 2000;
const SimilarChannels = ({
  chatId,
  similarChannelIds,
  shouldShowInChat,
  count,
  isCurrentUserPremium
}) => {
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_10__["default"])();
  const {
    toggleChannelRecommendations,
    loadChannelRecommendations
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const [isShowing, markShowing, markNotShowing] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_7__["default"])(false);
  const [isHiding, markHiding, markNotHiding] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_7__["default"])(false);
  // eslint-disable-next-line no-null/no-null
  const ref = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const similarChannels = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!similarChannelIds) {
      return undefined;
    }
    const global = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getGlobal)();
    return similarChannelIds.map(id => (0,_global_selectors__WEBPACK_IMPORTED_MODULE_2__.selectChat)(global, id)).filter(Boolean);
  }, [similarChannelIds]);
  // Show skeleton while loading similar channels
  const [shoulRenderSkeleton, setShoulRenderSkeleton] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(!similarChannelIds);
  const firstSimilarChannels = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => similarChannels?.slice(0, SHOW_CHANNELS_NUMBER), [similarChannels]);
  const areSimilarChannelsPresent = Boolean(firstSimilarChannels?.length);
  (0,_hooks_useHorizontalScroll__WEBPACK_IMPORTED_MODULE_8__["default"])(ref, !areSimilarChannelsPresent || !shouldShowInChat || shoulRenderSkeleton, true);
  const isAnimating = isHiding || isShowing;
  const shouldRenderChannels = Boolean(!shoulRenderSkeleton && (shouldShowInChat || isAnimating) && areSimilarChannelsPresent);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!similarChannelIds) {
      loadChannelRecommendations({
        chatId
      });
    }
  }, [chatId, similarChannelIds]);
  (0,_hooks_schedulers_useTimeout__WEBPACK_IMPORTED_MODULE_5__["default"])(() => setShoulRenderSkeleton(false), MAX_SKELETON_DELAY);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (shoulRenderSkeleton && similarChannels && shouldShowInChat) {
      const id = setTimeout(() => {
        setShoulRenderSkeleton(false);
      }, MIN_SKELETON_DELAY);
      return () => clearTimeout(id);
    }
    return undefined;
  }, [similarChannels, shouldShowInChat, shoulRenderSkeleton]);
  const handleToggle = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_9__["default"])(() => {
    toggleChannelRecommendations({
      chatId
    });
    if (shouldShowInChat) {
      markNotShowing();
      markHiding();
    } else {
      markShowing();
      markNotHiding();
    }
  });
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(_SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].root)
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "join-text"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(areSimilarChannelsPresent && _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].joinText),
    onClick: areSimilarChannelsPresent ? handleToggle : undefined
  }, lang('ChannelJoined'))), shoulRenderSkeleton && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_placeholder_Skeleton__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].skeleton
  }), shouldRenderChannels && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(isShowing && _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].isAppearing, isHiding && _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].isHiding)
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].notch
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("svg", {
    width: "19",
    height: "7",
    viewBox: "0 0 19 7",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].notchPath,
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M19 7C16.8992 7 13.59 3.88897 11.5003 1.67424C10.7648 0.894688 10.397 0.50491 10.0434 0.385149C9.70568 0.270811 9.4225 0.270474 9.08456 0.38401C8.73059 0.50293 8.36133 0.892443 7.62279 1.67147C5.52303 3.88637 2.18302 7 0 7L19 7Z",
    fill: "white"
  }))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].inner
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].header
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].title
  }, lang('SimilarChannels')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].close,
    color: "translucent",
    onClick: handleToggle
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
    name: "close"
  }))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    ref: ref,
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(_SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].channelList, 'no-scrollbar')
  }, firstSimilarChannels?.map((channel, i) => {
    return i === SHOW_CHANNELS_NUMBER - 1 ? /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(MoreChannels, {
      channel: channel,
      chatId: chatId,
      channelsCount: count - SHOW_CHANNELS_NUMBER + 1,
      isCurrentUserPremium: isCurrentUserPremium
    }) : /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(SimilarChannel, {
      channel: channel
    });
  })))));
};
function SimilarChannel({
  channel
}) {
  const {
    openChat
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const color = (0,_hooks_useAverageColor__WEBPACK_IMPORTED_MODULE_6__["default"])(channel, DEFAULT_BADGE_COLOR);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].item,
    onClick: () => openChat({
      id: channel.id
    })
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].avatar,
    key: channel.id,
    size: "large",
    peer: channel
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    style: `background: ${color}`,
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].badge
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
    name: "user-filled",
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].icon
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].membersCount
  }, (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_4__.formatIntegerCompact)(channel?.membersCount || 0))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].channelTitle
  }, channel.title));
}
function MoreChannels({
  channel,
  chatId,
  channelsCount,
  isCurrentUserPremium
}) {
  const {
    openPremiumModal,
    openChatWithInfo
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_10__["default"])();
  const handleClickMore = () => {
    if (isCurrentUserPremium) {
      openChatWithInfo({
        id: chatId,
        shouldReplaceHistory: true,
        profileTab: 'similarChannels',
        forceScrollProfileTab: true
      });
    } else {
      openPremiumModal();
    }
  };
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(_SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].item, _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].lastItem),
    onClick: () => handleClickMore()
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].avatar,
    key: channel.id,
    size: "large",
    peer: channel
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].fakeAvatar
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].fakeAvatarInner
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(_SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].fakeAvatar, _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].lastFakeAvatar)
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].fakeAvatarInner
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].badge
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].membersCount
  }, `+${channelsCount}`), !isCurrentUserPremium && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
    name: "lock-badge",
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].icon
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].channelTitle
  }, lang('MoreSimilar')));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  chatId
}) => {
  const {
    similarChannelIds,
    shouldShowInChat,
    count
  } = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_2__.selectSimilarChannelIds)(global, chatId) || {};
  const isCurrentUserPremium = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_2__.selectIsCurrentUserPremium)(global);
  return {
    similarChannelIds,
    shouldShowInChat,
    count,
    isCurrentUserPremium
  };
})(SimilarChannels)));

/***/ }),

/***/ "./src/components/middle/message/hooks/useFocusMessage.ts":
/*!****************************************************************!*\
  !*** ./src/components/middle/message/hooks/useFocusMessage.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useFocusMessage)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _lib_teact_teact_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib/teact/teact-dom */ "./src/lib/teact/teact-dom.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../config */ "./src/config.ts");
/* harmony import */ var _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../lib/fasterdom/fasterdom */ "./src/lib/fasterdom/fasterdom.ts");
/* harmony import */ var _util_animateScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/animateScroll */ "./src/util/animateScroll.ts");






// This is used when the viewport was replaced.
const BOTTOM_FOCUS_OFFSET = 500;
const RELOCATED_FOCUS_OFFSET = _config__WEBPACK_IMPORTED_MODULE_2__.SCROLL_MAX_DISTANCE;
const FOCUS_MARGIN = 20;
function useFocusMessage({
  elementRef,
  chatId,
  isFocused,
  focusDirection,
  noFocusHighlight,
  isResizingContainer,
  isJustAdded,
  isQuote,
  scrollTargetPosition
}) {
  const isRelocatedRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(!isJustAdded);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    const isRelocated = isRelocatedRef.current;
    isRelocatedRef.current = false;
    if (isFocused && elementRef.current) {
      const messagesContainer = elementRef.current.closest('.MessageList');
      // `noFocusHighlight` is always called with “scroll-to-bottom” buttons
      const isToBottom = noFocusHighlight;
      const scrollPosition = scrollTargetPosition || isToBottom ? 'end' : 'centerOrTop';
      const exec = () => {
        const maxDistance = focusDirection !== undefined ? isToBottom ? BOTTOM_FOCUS_OFFSET : RELOCATED_FOCUS_OFFSET : undefined;
        const result = (0,_util_animateScroll__WEBPACK_IMPORTED_MODULE_4__["default"])({
          container: messagesContainer,
          element: elementRef.current,
          position: scrollPosition,
          margin: FOCUS_MARGIN,
          maxDistance,
          forceDirection: focusDirection,
          forceNormalContainerHeight: isResizingContainer,
          shouldReturnMutationFn: true
        });
        if (isQuote) {
          const firstQuote = elementRef.current.querySelector('.is-quote');
          if (firstQuote) {
            (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_3__.requestMutation)(() => {
              (0,_lib_teact_teact_dom__WEBPACK_IMPORTED_MODULE_1__.addExtraClass)(firstQuote, 'animate');
            });
          }
        }
        return result;
      };
      if (isRelocated) {
        // We need this to override scroll setting from Message List layout effect
        (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_3__.requestForcedReflow)(exec);
      } else {
        (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_3__.requestMeasure)(() => {
          (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_3__.requestMutation)(exec());
        });
      }
    }
  }, [elementRef, chatId, isFocused, focusDirection, noFocusHighlight, isResizingContainer, isQuote, scrollTargetPosition]);
}

/***/ }),

/***/ "./src/components/middle/message/reactions/ReactionButton.tsx":
/*!********************************************************************!*\
  !*** ./src/components/middle/message/reactions/ReactionButton.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_textFormat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/textFormat */ "./src/util/textFormat.ts");
/* harmony import */ var _common_helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/helpers/mediaDimensions */ "./src/components/common/helpers/mediaDimensions.ts");
/* harmony import */ var _hooks_data_useSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../hooks/data/useSelector */ "./src/hooks/data/useSelector.ts");
/* harmony import */ var _hooks_useContextMenuHandlers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../hooks/useContextMenuHandlers */ "./src/hooks/useContextMenuHandlers.ts");
/* harmony import */ var _hooks_useEffectWithPrevDeps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../hooks/useEffectWithPrevDeps */ "./src/hooks/useEffectWithPrevDeps.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_usePrevious__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../hooks/usePrevious */ "./src/hooks/usePrevious.ts");
/* harmony import */ var _hooks_useShowTransition__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../hooks/useShowTransition */ "./src/hooks/useShowTransition.ts");
/* harmony import */ var _common_AnimatedCounter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/AnimatedCounter */ "./src/components/common/AnimatedCounter.tsx");
/* harmony import */ var _common_AvatarList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/AvatarList */ "./src/components/common/AvatarList.tsx");
/* harmony import */ var _common_reactions_PaidReactionEmoji__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/reactions/PaidReactionEmoji */ "./src/components/common/reactions/PaidReactionEmoji.tsx");
/* harmony import */ var _common_reactions_ReactionAnimatedEmoji__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../common/reactions/ReactionAnimatedEmoji */ "./src/components/common/reactions/ReactionAnimatedEmoji.tsx");
/* harmony import */ var _common_Sparkles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../common/Sparkles */ "./src/components/common/Sparkles.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _ReactionButton_module_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ReactionButton.module.scss */ "./src/components/middle/message/reactions/ReactionButton.module.scss");



















const REACTION_SIZE = 1.25 * _common_helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_5__.REM;
const MAX_SCALE = 3;
function selectStarsState(global) {
  return global.stars;
}
const ReactionButton = ({
  reaction,
  containerId,
  isOwnMessage,
  recentReactors,
  className,
  chosenClassName,
  chatId,
  messageId,
  observeIntersection,
  onClick,
  onPaidClick
}) => {
  const {
    openStarsBalanceModal,
    resetLocalPaidReactions,
    openPaidReactionModal,
    requestWave
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  // eslint-disable-next-line no-null/no-null
  const ref = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  // eslint-disable-next-line no-null/no-null
  const counterRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const animationRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const isPaid = reaction.reaction.type === 'paid';
  const starsState = (0,_hooks_data_useSelector__WEBPACK_IMPORTED_MODULE_6__["default"])(selectStarsState);
  const areStarsLoaded = Boolean(starsState);
  const handlePaidClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_9__["default"])((count = 1) => {
    onPaidClick?.(count);
  });
  const handleClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_9__["default"])(e => {
    if (reaction.reaction.type === 'paid') {
      e.stopPropagation(); // Prevent default message double click behavior
      handlePaidClick();
      return;
    }
    onClick?.(reaction.reaction);
  });
  const {
    isContextMenuOpen,
    handleBeforeContextMenu,
    handleContextMenu,
    handleContextMenuClose,
    handleContextMenuHide
  } = (0,_hooks_useContextMenuHandlers__WEBPACK_IMPORTED_MODULE_7__["default"])(ref, reaction.reaction.type !== 'paid', undefined, undefined, undefined, true);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isContextMenuOpen) {
      openPaidReactionModal({
        chatId,
        messageId
      });
      handleContextMenuClose();
      handleContextMenuHide();
    }
  }, [handleContextMenuClose, handleContextMenuHide, isContextMenuOpen, chatId, messageId]);
  (0,_hooks_useEffectWithPrevDeps__WEBPACK_IMPORTED_MODULE_8__["default"])(([prevReaction]) => {
    const amount = reaction.localAmount;
    const button = ref.current;
    if (!amount || !button || amount === prevReaction?.localAmount) return;
    if (areStarsLoaded && amount > starsState.balance.amount) {
      openStarsBalanceModal({
        originReaction: {
          chatId,
          messageId,
          amount
        }
      });
      resetLocalPaidReactions({
        chatId,
        messageId
      });
      return;
    }
    if (reaction.localAmount) {
      const {
        left,
        top
      } = button.getBoundingClientRect();
      const startX = left + button.offsetWidth / 2;
      const startY = top + button.offsetHeight / 2;
      requestWave({
        startX,
        startY
      });
    }
    const currentScale = Number(getComputedStyle(button).scale) || 1;
    animationRef.current?.cancel();
    // Animate scaling by 20%, and then returning to 1
    animationRef.current = button.animate([{
      scale: currentScale
    }, {
      scale: Math.min(currentScale * 1.2, MAX_SCALE),
      offset: 0.2
    }, {
      scale: 1
    }], {
      duration: 500 * currentScale,
      easing: 'ease-out'
    });
  }, [reaction, starsState?.balance, areStarsLoaded, chatId, messageId]);
  const prevAmount = (0,_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_10__["default"])(reaction.localAmount);
  const {
    shouldRender: shouldRenderPaidCounter
  } = (0,_hooks_useShowTransition__WEBPACK_IMPORTED_MODULE_11__["default"])({
    isOpen: Boolean(reaction.localAmount),
    ref: counterRef,
    className: 'slow',
    withShouldRender: true
  });
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(_ReactionButton_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].root, isOwnMessage && _ReactionButton_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].own, isPaid && _ReactionButton_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].paid, (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.isReactionChosen)(reaction) && _ReactionButton_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].chosen, (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.isReactionChosen)(reaction) && chosenClassName, className),
    size: "tiny",
    ref: ref,
    onMouseDown: handleBeforeContextMenu,
    onContextMenu: handleContextMenu,
    onClick: handleClick
  }, reaction.reaction.type === 'paid' ? /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Sparkles__WEBPACK_IMPORTED_MODULE_16__["default"], {
    preset: "button"
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_reactions_PaidReactionEmoji__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: _ReactionButton_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].animatedEmoji,
    containerId: containerId,
    reaction: reaction.reaction,
    size: REACTION_SIZE,
    localAmount: reaction.localAmount,
    observeIntersection: observeIntersection
  }), shouldRenderPaidCounter && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_AnimatedCounter__WEBPACK_IMPORTED_MODULE_12__["default"], {
    ref: counterRef,
    text: `+${(0,_util_textFormat__WEBPACK_IMPORTED_MODULE_4__.formatIntegerCompact)(reaction.localAmount || prevAmount)}`,
    className: _ReactionButton_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].paidCounter
  })) : /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_reactions_ReactionAnimatedEmoji__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: _ReactionButton_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].animatedEmoji,
    containerId: containerId,
    reaction: reaction.reaction,
    size: REACTION_SIZE,
    observeIntersection: observeIntersection
  }), recentReactors?.length ? /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_AvatarList__WEBPACK_IMPORTED_MODULE_13__["default"], {
    size: "mini",
    peers: recentReactors
  }) : /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_AnimatedCounter__WEBPACK_IMPORTED_MODULE_12__["default"], {
    text: (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_4__.formatIntegerCompact)(reaction.count + (reaction.localAmount || 0)),
    className: _ReactionButton_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].counter
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(ReactionButton));

/***/ }),

/***/ "./src/components/middle/message/reactions/Reactions.tsx":
/*!***************************************************************!*\
  !*** ./src/components/middle/message/reactions/Reactions.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_keys_messageKey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../util/keys/messageKey */ "./src/util/keys/messageKey.ts");
/* harmony import */ var _hooks_useEffectOnce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../hooks/useEffectOnce */ "./src/hooks/useEffectOnce.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _ReactionButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ReactionButton */ "./src/components/middle/message/reactions/ReactionButton.tsx");
/* harmony import */ var _SavedTagButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SavedTagButton */ "./src/components/middle/message/reactions/SavedTagButton.tsx");
/* harmony import */ var _Reactions_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Reactions.scss */ "./src/components/middle/message/reactions/Reactions.scss");












const MAX_RECENT_AVATARS = 3;
const PAID_SEND_DELAY = 5000;
const Reactions = ({
  message,
  threadId,
  isOutside,
  maxWidth,
  metaChildren,
  observeIntersection,
  noRecentReactors,
  isCurrentUserPremium,
  tags
}) => {
  const {
    toggleReaction,
    addLocalPaidReaction,
    updateMiddleSearch,
    performMiddleSearch,
    openPremiumModal,
    resetLocalPaidReactions,
    showNotification
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const {
    results,
    areTags,
    recentReactions
  } = message.reactions;
  const withServiceReactions = Boolean(message.areReactionsPossible && message.reactions);
  const totalCount = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => results.reduce((acc, reaction) => acc + reaction.count, 0), [results]);
  const recentReactorsByReactionKey = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const global = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getGlobal)();
    return recentReactions?.reduce((acc, recentReaction) => {
      const {
        reaction,
        peerId
      } = recentReaction;
      const key = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getReactionKey)(reaction);
      const peer = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectPeer)(global, peerId);
      if (!peer) return acc;
      const peers = acc[key] || [];
      peers.push(peer);
      acc[key] = peers;
      return acc;
    }, {});
  }, [recentReactions]);
  const props = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const messageKey = (0,_util_keys_messageKey__WEBPACK_IMPORTED_MODULE_5__.getMessageKey)(message);
    return results.map(reaction => {
      const reactionKey = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getReactionKey)(reaction.reaction);
      const recentReactors = recentReactorsByReactionKey?.[reactionKey];
      const shouldHideRecentReactors = totalCount > MAX_RECENT_AVATARS || noRecentReactors;
      const tag = areTags ? tags?.[reactionKey] : undefined;
      return {
        reaction,
        reactionKey,
        messageKey,
        recentReactors: !shouldHideRecentReactors ? recentReactors : undefined,
        isChosen: (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.isReactionChosen)(reaction),
        tag
      };
    });
  }, [message, noRecentReactors, recentReactorsByReactionKey, results, areTags, tags, totalCount]);
  const handleClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(reaction => {
    if (areTags) {
      if (!isCurrentUserPremium) {
        openPremiumModal({
          initialSection: 'saved_tags'
        });
        return;
      }
      updateMiddleSearch({
        chatId: message.chatId,
        threadId,
        update: {
          savedTag: reaction
        }
      });
      performMiddleSearch({
        chatId: message.chatId,
        threadId
      });
      return;
    }
    toggleReaction({
      chatId: message.chatId,
      messageId: message.id,
      reaction
    });
  });
  const paidLocalCount = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => results.find(r => r.reaction.type === 'paid')?.localAmount || 0, [results]);
  const handlePaidClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(count => {
    addLocalPaidReaction({
      chatId: message.chatId,
      messageId: message.id,
      count
    });
  });
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!paidLocalCount) return;
    showNotification({
      localId: (0,_util_keys_messageKey__WEBPACK_IMPORTED_MODULE_5__.getMessageKey)(message),
      title: lang('StarsSentTitle'),
      message: lang('StarsSentText', paidLocalCount),
      actionText: lang('StarsSentUndo'),
      cacheBreaker: paidLocalCount.toString(),
      action: {
        action: 'resetLocalPaidReactions',
        payload: {
          chatId: message.chatId,
          messageId: message.id
        }
      },
      dismissAction: {
        action: 'sendPaidReaction',
        payload: {
          chatId: message.chatId,
          messageId: message.id
        }
      },
      duration: PAID_SEND_DELAY,
      shouldShowTimer: true,
      disableClickDismiss: true,
      icon: 'star'
    });
  }, [lang, message, paidLocalCount]);
  const handleRemoveReaction = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(reaction => {
    toggleReaction({
      chatId: message.chatId,
      messageId: message.id,
      reaction
    });
  });

  // Reset paid reactions on unmount
  (0,_hooks_useEffectOnce__WEBPACK_IMPORTED_MODULE_6__["default"])(() => () => {
    resetLocalPaidReactions({
      chatId: message.chatId,
      messageId: message.id
    });
  });
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])('Reactions', isOutside && 'is-outside', withServiceReactions && 'is-service'),
    style: maxWidth ? `max-width: ${maxWidth}px` : undefined,
    dir: lang.isRtl ? 'rtl' : 'ltr'
  }, props.map(({
    reaction,
    recentReactors,
    messageKey,
    reactionKey,
    isChosen,
    tag
  }) => areTags ? /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_SavedTagButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    key: reactionKey,
    className: "message-reaction",
    chosenClassName: "chosen",
    containerId: messageKey,
    isOwnMessage: message.isOutgoing,
    isChosen: isChosen,
    reaction: reaction.reaction,
    tag: tag,
    withContextMenu: isCurrentUserPremium,
    onClick: handleClick,
    onRemove: handleRemoveReaction,
    observeIntersection: observeIntersection
  }) : /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ReactionButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    key: reactionKey,
    chatId: message.chatId,
    messageId: message.id,
    className: "message-reaction",
    chosenClassName: "chosen",
    containerId: messageKey,
    isOwnMessage: message.isOutgoing,
    recentReactors: recentReactors,
    reaction: reaction,
    onClick: handleClick,
    onPaidClick: handlePaidClick,
    observeIntersection: observeIntersection
  })), metaChildren);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(Reactions));

/***/ }),

/***/ "./src/components/middle/message/reactions/SavedTagButton.tsx":
/*!********************************************************************!*\
  !*** ./src/components/middle/message/reactions/SavedTagButton.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global */ "./src/global/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _common_helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/helpers/mediaDimensions */ "./src/components/common/helpers/mediaDimensions.ts");
/* harmony import */ var _hooks_useContextMenuHandlers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../hooks/useContextMenuHandlers */ "./src/hooks/useContextMenuHandlers.ts");
/* harmony import */ var _hooks_useFlag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../hooks/useFlag */ "./src/hooks/useFlag.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _common_reactions_ReactionAnimatedEmoji__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/reactions/ReactionAnimatedEmoji */ "./src/components/common/reactions/ReactionAnimatedEmoji.tsx");
/* harmony import */ var _modals_prompt_PromptDialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../modals/prompt/PromptDialog */ "./src/components/modals/prompt/PromptDialog.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _ui_Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../ui/Menu */ "./src/components/ui/Menu.tsx");
/* harmony import */ var _ui_MenuItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../ui/MenuItem */ "./src/components/ui/MenuItem.tsx");
/* harmony import */ var _ReactionButton_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ReactionButton.module.scss */ "./src/components/middle/message/reactions/ReactionButton.module.scss");














const REACTION_SIZE = 1.25 * _common_helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_3__.REM;
const TITLE_MAX_LENGTH = 15;
const LOOP_LIMIT = 1;
const SavedTagButton = ({
  reaction,
  tag,
  containerId,
  isChosen,
  isOwnMessage,
  className,
  chosenClassName,
  withCount,
  isDisabled,
  withContextMenu,
  observeIntersection,
  onClick,
  onRemove
}) => {
  const {
    editSavedReactionTag
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  // eslint-disable-next-line no-null/no-null
  const ref = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  // eslint-disable-next-line no-null/no-null
  const menuRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const [isRenamePromptOpen, openRenamePrompt, closeRenamePrompt] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const {
    title,
    count
  } = tag || {};
  const hasText = Boolean(title || withCount && count);
  const handleClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_6__["default"])(() => {
    onClick?.(reaction);
  });
  const handleRemoveClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_6__["default"])(() => {
    onRemove?.(reaction);
  });
  const handleRenameTag = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_6__["default"])(newTitle => {
    editSavedReactionTag({
      reaction,
      title: newTitle
    });
    closeRenamePrompt();
  });
  const {
    isContextMenuOpen,
    contextMenuAnchor,
    handleBeforeContextMenu,
    handleContextMenu,
    handleContextMenuClose,
    handleContextMenuHide
  } = (0,_hooks_useContextMenuHandlers__WEBPACK_IMPORTED_MODULE_4__["default"])(ref, !withContextMenu, undefined, undefined, undefined, true);
  const getTriggerElement = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_6__["default"])(() => ref.current);
  const getRootElement = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_6__["default"])(() => document.body);
  const getMenuElement = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_6__["default"])(() => menuRef.current);
  const getLayout = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_6__["default"])(() => ({
    withPortal: true,
    shouldAvoidNegativePosition: true
  }));
  if (withCount && count === 0) {
    return undefined;
  }
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])(_ReactionButton_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].root, _ReactionButton_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].tag, isOwnMessage && _ReactionButton_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].own, isChosen && _ReactionButton_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].chosen, isChosen && chosenClassName, isDisabled && _ReactionButton_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].disabled, className),
    size: "tiny",
    onClick: handleClick,
    onMouseDown: handleBeforeContextMenu,
    onContextMenu: handleContextMenu,
    ref: ref
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_reactions_ReactionAnimatedEmoji__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: _ReactionButton_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].animatedEmoji,
    containerId: containerId,
    reaction: reaction,
    loopLimit: LOOP_LIMIT,
    size: REACTION_SIZE,
    observeIntersection: observeIntersection
  }), hasText && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: _ReactionButton_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].tagText
  }, title && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, title), withCount && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, count)), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("svg", {
    className: _ReactionButton_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].tail,
    width: "15",
    height: "30",
    viewBox: "0 0 15 30"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    className: _ReactionButton_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].tailFill,
    d: "m 0,30 c 3.1855,0 6.1803,-1.5176 8.0641,-4.0864 l 5.835,-7.9568 c 1.2906,-1.7599 1.2906,-4.1537 0,-5.9136 L 8.0641,4.08636 C 6.1803,1.51761 3.1855,0 0,0"
  })), withContextMenu && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_modals_prompt_PromptDialog__WEBPACK_IMPORTED_MODULE_9__["default"], {
    isOpen: isRenamePromptOpen,
    maxLength: TITLE_MAX_LENGTH,
    title: lang(tag?.title ? 'SavedTagRenameTag' : 'SavedTagLabelTag'),
    subtitle: lang('SavedTagLabelTagText'),
    placeholder: lang('SavedTagLabelPlaceholder'),
    initialValue: tag?.title,
    onClose: closeRenamePrompt,
    onSubmit: handleRenameTag
  }), withContextMenu && contextMenuAnchor && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Menu__WEBPACK_IMPORTED_MODULE_11__["default"], {
    ref: menuRef,
    isOpen: isContextMenuOpen,
    anchor: contextMenuAnchor,
    getTriggerElement: getTriggerElement,
    getRootElement: getRootElement,
    getMenuElement: getMenuElement,
    getLayout: getLayout,
    autoClose: true,
    withPortal: true,
    onClose: handleContextMenuClose,
    onCloseAnimationEnd: handleContextMenuHide
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
    icon: "tag-filter",
    onClick: handleClick
  }, lang('SavedTagFilterByTag')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
    icon: "tag-name",
    onClick: openRenamePrompt
  }, lang(tag?.title ? 'SavedTagRenameTag' : 'SavedTagLabelTag')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
    icon: "tag-crossed",
    destructive: true,
    onClick: handleRemoveClick
  }, lang('SavedTagRemoveTag'))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(SavedTagButton));

/***/ }),

/***/ "./src/components/modals/prompt/PromptDialog.tsx":
/*!*******************************************************!*\
  !*** ./src/components/modals/prompt/PromptDialog.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _ui_InputText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/InputText */ "./src/components/ui/InputText.tsx");
/* harmony import */ var _ui_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/Modal */ "./src/components/ui/Modal.tsx");
/* harmony import */ var _PromptDialog_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PromptDialog.module.scss */ "./src/components/modals/prompt/PromptDialog.module.scss");







const PromptDialog = ({
  isOpen,
  title,
  subtitle,
  placeholder,
  submitText,
  maxLength,
  initialValue = '',
  onClose,
  onSubmit
}) => {
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const [text, setText] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue);
  const handleTextChange = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_1__["default"])(e => {
    setText(e.target.value);
  });
  const handleSubmit = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_1__["default"])(() => {
    onSubmit(text);
  });
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "narrow",
    title: title,
    isOpen: isOpen,
    onClose: onClose,
    isSlim: true
  }, Boolean(subtitle) && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _PromptDialog_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].subtitle
  }, subtitle), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_InputText__WEBPACK_IMPORTED_MODULE_4__["default"], {
    placeholder: placeholder,
    value: text,
    onChange: handleTextChange,
    maxLength: maxLength,
    teactExperimentControlled: true
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "dialog-buttons mt-2"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "confirm-dialog-button",
    onClick: handleSubmit
  }, submitText || lang('Save')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "confirm-dialog-button",
    isText: true,
    onClick: onClose
  }, lang('Cancel'))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(PromptDialog));

/***/ }),

/***/ "./src/global/helpers/payments.ts":
/*!****************************************!*\
  !*** ./src/global/helpers/payments.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   areInputSavedGiftsEqual: () => (/* binding */ areInputSavedGiftsEqual),
/* harmony export */   buildStarsTransactionCustomPeer: () => (/* binding */ buildStarsTransactionCustomPeer),
/* harmony export */   formatStarsAmount: () => (/* binding */ formatStarsAmount),
/* harmony export */   formatStarsTransactionAmount: () => (/* binding */ formatStarsTransactionAmount),
/* harmony export */   getPrizeStarsTransactionFromGiveaway: () => (/* binding */ getPrizeStarsTransactionFromGiveaway),
/* harmony export */   getRequestInputInvoice: () => (/* binding */ getRequestInputInvoice),
/* harmony export */   getRequestInputSavedStarGift: () => (/* binding */ getRequestInputSavedStarGift),
/* harmony export */   getStarsTransactionFromGift: () => (/* binding */ getStarsTransactionFromGift)
/* harmony export */ });
/* harmony import */ var _util_arePropsShallowEqual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/arePropsShallowEqual */ "./src/util/arePropsShallowEqual.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selectors */ "./src/global/selectors/index.ts");


function getRequestInputInvoice(global, inputInvoice) {
  if (inputInvoice.type === 'slug') return inputInvoice;
  if (inputInvoice.type === 'stargift') {
    const {
      peerId,
      shouldHideName,
      giftId,
      message,
      shouldUpgrade
    } = inputInvoice;
    const peer = (0,_selectors__WEBPACK_IMPORTED_MODULE_1__.selectPeer)(global, peerId);
    if (!peer) return undefined;
    return {
      type: 'stargift',
      peer,
      shouldHideName,
      giftId,
      message,
      shouldUpgrade
    };
  }
  if (inputInvoice.type === 'starsgift') {
    const {
      userId,
      stars,
      amount,
      currency
    } = inputInvoice;
    const user = (0,_selectors__WEBPACK_IMPORTED_MODULE_1__.selectUser)(global, userId);
    if (!user) return undefined;
    return {
      type: 'stars',
      purpose: {
        type: 'starsgift',
        user,
        stars,
        amount,
        currency
      }
    };
  }
  if (inputInvoice.type === 'stars') {
    const {
      stars,
      amount,
      currency
    } = inputInvoice;
    return {
      type: 'stars',
      purpose: {
        type: 'stars',
        stars,
        amount,
        currency
      }
    };
  }
  if (inputInvoice.type === 'chatInviteSubscription') {
    const {
      hash
    } = inputInvoice;
    return {
      type: 'chatInviteSubscription',
      hash
    };
  }
  if (inputInvoice.type === 'message') {
    const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_1__.selectChat)(global, inputInvoice.chatId);
    if (!chat) {
      return undefined;
    }
    return {
      type: 'message',
      chat,
      messageId: inputInvoice.messageId
    };
  }
  if (inputInvoice.type === 'giftcode') {
    const {
      userIds,
      boostChannelId,
      amount,
      currency,
      option,
      message
    } = inputInvoice;
    const users = userIds.map(id => (0,_selectors__WEBPACK_IMPORTED_MODULE_1__.selectUser)(global, id)).filter(Boolean);
    const boostChannel = boostChannelId ? (0,_selectors__WEBPACK_IMPORTED_MODULE_1__.selectChat)(global, boostChannelId) : undefined;
    return {
      type: 'giveaway',
      option,
      purpose: {
        type: 'giftcode',
        amount,
        currency,
        users,
        boostChannel,
        message
      }
    };
  }
  if (inputInvoice.type === 'starsgiveaway') {
    const {
      chatId,
      additionalChannelIds,
      amount,
      currency,
      untilDate,
      areWinnersVisible,
      countries,
      isOnlyForNewSubscribers,
      prizeDescription,
      stars,
      users
    } = inputInvoice;
    const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_1__.selectChat)(global, chatId);
    if (!chat) {
      return undefined;
    }
    const additionalChannels = additionalChannelIds?.map(id => (0,_selectors__WEBPACK_IMPORTED_MODULE_1__.selectChat)(global, id)).filter(Boolean);
    return {
      type: 'starsgiveaway',
      purpose: {
        type: 'starsgiveaway',
        amount,
        currency,
        chat,
        additionalChannels,
        untilDate,
        areWinnersVisible,
        countries,
        isOnlyForNewSubscribers,
        prizeDescription,
        stars,
        users
      }
    };
  }
  if (inputInvoice.type === 'giveaway') {
    const {
      chatId,
      additionalChannelIds,
      amount,
      currency,
      option,
      untilDate,
      areWinnersVisible,
      countries,
      isOnlyForNewSubscribers,
      prizeDescription
    } = inputInvoice;
    const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_1__.selectChat)(global, chatId);
    if (!chat) {
      return undefined;
    }
    const additionalChannels = additionalChannelIds?.map(id => (0,_selectors__WEBPACK_IMPORTED_MODULE_1__.selectChat)(global, id)).filter(Boolean);
    return {
      type: 'giveaway',
      option,
      purpose: {
        type: 'giveaway',
        amount,
        currency,
        chat,
        additionalChannels,
        untilDate,
        areWinnersVisible,
        countries,
        isOnlyForNewSubscribers,
        prizeDescription
      }
    };
  }
  if (inputInvoice.type === 'stargiftUpgrade') {
    const {
      inputSavedGift,
      shouldKeepOriginalDetails
    } = inputInvoice;
    const savedGift = getRequestInputSavedStarGift(global, inputSavedGift);
    if (!savedGift) return undefined;
    return {
      type: 'stargiftUpgrade',
      inputSavedGift: savedGift,
      shouldKeepOriginalDetails
    };
  }
  return undefined;
}
function getRequestInputSavedStarGift(global, inputGift) {
  if (inputGift.type === 'user') return inputGift;
  if (inputGift.type === 'chat') {
    const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_1__.selectChat)(global, inputGift.chatId);
    if (!chat) return undefined;
    return {
      type: 'chat',
      chat,
      savedId: inputGift.savedId
    };
  }
  return undefined;
}
function buildStarsTransactionCustomPeer(peer) {
  if (peer.type === 'appStore') {
    return {
      avatarIcon: 'star',
      isCustomPeer: true,
      titleKey: 'Stars.Intro.Transaction.AppleTopUp.Title',
      subtitleKey: 'Stars.Intro.Transaction.AppleTopUp.Subtitle',
      peerColorId: 5
    };
  }
  if (peer.type === 'playMarket') {
    return {
      avatarIcon: 'star',
      isCustomPeer: true,
      titleKey: 'Stars.Intro.Transaction.GoogleTopUp.Title',
      subtitleKey: 'Stars.Intro.Transaction.GoogleTopUp.Subtitle',
      peerColorId: 3
    };
  }
  if (peer.type === 'fragment') {
    return {
      avatarIcon: 'star',
      isCustomPeer: true,
      titleKey: 'Stars.Intro.Transaction.FragmentTopUp.Title',
      subtitleKey: 'Stars.Intro.Transaction.FragmentTopUp.Subtitle',
      customPeerAvatarColor: '#000000'
    };
  }
  if (peer.type === 'premiumBot') {
    return {
      avatarIcon: 'star',
      isCustomPeer: true,
      titleKey: 'Stars.Intro.Transaction.PremiumBotTopUp.Title',
      subtitleKey: 'Stars.Intro.Transaction.PremiumBotTopUp.Subtitle',
      peerColorId: 1,
      withPremiumGradient: true
    };
  }
  if (peer.type === 'ads') {
    return {
      avatarIcon: 'star',
      isCustomPeer: true,
      titleKey: 'Stars.Intro.Transaction.TelegramAds.Title',
      subtitleKey: 'Stars.Intro.Transaction.TelegramAds.Subtitle',
      peerColorId: 2
    };
  }
  if (peer.type === 'api') {
    return {
      avatarIcon: 'bots',
      isCustomPeer: true,
      titleKey: 'Stars.Intro.Transaction.TelegramBotApi.Title',
      subtitleKey: 'Stars.Intro.Transaction.TelegramBotApi.Subtitle',
      peerColorId: 4
    };
  }
  return {
    avatarIcon: 'star',
    isCustomPeer: true,
    titleKey: 'Stars.Intro.Transaction.Unsupported.Title',
    subtitleKey: 'Stars.Intro.Transaction.Unsupported.Title',
    peerColorId: 0
  };
}
function formatStarsTransactionAmount(lang, starsAmount) {
  const amount = starsAmount.amount + starsAmount.nanos / 1e9;
  if (amount < 0) {
    return `- ${lang.number(Math.abs(amount))}`;
  }
  return `+ ${lang.number(amount)}`;
}
function formatStarsAmount(lang, starsAmount) {
  return lang.number(starsAmount.amount + starsAmount.nanos / 1e9);
}
function getStarsTransactionFromGift(message) {
  const {
    action
  } = message.content;
  if (action?.type !== 'giftStars') return undefined;
  const {
    transactionId,
    stars
  } = action;
  return {
    id: transactionId,
    stars: {
      amount: stars,
      nanos: 0
    },
    peer: {
      type: 'peer',
      id: message.isOutgoing ? message.chatId : message.senderId || message.chatId
    },
    date: message.date,
    isGift: true,
    isMyGift: message.isOutgoing || undefined
  };
}
function getPrizeStarsTransactionFromGiveaway(message) {
  const {
    action
  } = message.content;
  if (action?.type !== 'prizeStars') return undefined;
  const {
    transactionId,
    stars,
    targetChatId
  } = action;
  return {
    id: transactionId,
    stars: {
      amount: stars,
      nanos: 0
    },
    peer: {
      type: 'peer',
      id: targetChatId
    },
    date: message.date,
    giveawayPostId: message.id
  };
}
function areInputSavedGiftsEqual(one, two) {
  return (0,_util_arePropsShallowEqual__WEBPACK_IMPORTED_MODULE_0__["default"])(one, two);
}

/***/ }),

/***/ "./src/global/helpers/peers.ts":
/*!*************************************!*\
  !*** ./src/global/helpers/peers.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPeerTypeKey: () => (/* binding */ getPeerTypeKey),
/* harmony export */   isApiPeerChat: () => (/* binding */ isApiPeerChat),
/* harmony export */   isApiPeerUser: () => (/* binding */ isApiPeerUser)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./src/config.ts");

function isApiPeerChat(peer) {
  return 'title' in peer;
}
function isApiPeerUser(peer) {
  return !isApiPeerChat(peer);
}
function getPeerTypeKey(peer) {
  if (isApiPeerChat(peer)) {
    if (peer.type === 'chatTypeBasicGroup' || peer.type === 'chatTypeSuperGroup') {
      return 'ChatList.PeerTypeGroup';
    }
    if (peer.type === 'chatTypeChannel') {
      return 'ChatList.PeerTypeChannel';
    }
    if (peer.type === 'chatTypePrivate') {
      return 'ChatList.PeerTypeNonContact';
    }
    return undefined;
  }
  if (peer.id === _config__WEBPACK_IMPORTED_MODULE_0__.SERVICE_NOTIFICATIONS_USER_ID) {
    return 'ServiceNotifications';
  }
  if (peer.isSupport) {
    return 'SupportStatus';
  }
  if (peer.type && peer.type === 'userTypeBot') {
    return 'ChatList.PeerTypeBot';
  }
  if (peer.isContact) {
    return 'ChatList.PeerTypeContact';
  }
  return 'ChatList.PeerTypeNonContactUser';
}

/***/ }),

/***/ "./src/hooks/schedulers/useTimeout.ts":
/*!********************************************!*\
  !*** ./src/hooks/schedulers/useTimeout.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _useLastCallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useLastCallback */ "./src/hooks/useLastCallback.ts");


function useTimeout(callback, delay) {
  const savedCallback = (0,_useLastCallback__WEBPACK_IMPORTED_MODULE_1__["default"])(callback);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (typeof delay !== 'number') {
      return undefined;
    }
    const id = setTimeout(() => savedCallback(), delay);
    return () => clearTimeout(id);
  }, [delay]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTimeout);

/***/ }),

/***/ "./src/hooks/useAverageColor.ts":
/*!**************************************!*\
  !*** ./src/hooks/useAverageColor.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _api_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/types */ "./src/api/types/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _util_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/colors */ "./src/util/colors.ts");
/* harmony import */ var _useMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useMedia */ "./src/hooks/useMedia.ts");





function useAverageColor(peer, fallbackColor = '#00000000') {
  const [color, setColor] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(fallbackColor);
  const imgBlobUrl = (0,_useMedia__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getChatAvatarHash)(peer), false, _api_types__WEBPACK_IMPORTED_MODULE_1__.ApiMediaFormat.BlobUrl);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (async () => {
      if (!imgBlobUrl) {
        return;
      }
      const averageColor = await (0,_util_colors__WEBPACK_IMPORTED_MODULE_3__.getAverageColor)(imgBlobUrl);
      setColor(`#${(0,_util_colors__WEBPACK_IMPORTED_MODULE_3__.rgb2hex)(averageColor)}`);
    })();
  }, [imgBlobUrl]);
  return color;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAverageColor);

/***/ }),

/***/ "./src/hooks/useCanvasBlur.ts":
/*!************************************!*\
  !*** ./src/hooks/useCanvasBlur.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useCanvasBlur)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _lib_fastBlur__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/fastBlur */ "./src/lib/fastBlur.js");
/* harmony import */ var _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/fasterdom/fasterdom */ "./src/lib/fasterdom/fasterdom.ts");
/* harmony import */ var _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/windowEnvironment */ "./src/util/windowEnvironment.ts");
/* harmony import */ var _useSyncEffect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useSyncEffect */ "./src/hooks/useSyncEffect.ts");





const RADIUS = 2;
const ITERATIONS = 2;
function useCanvasBlur(dataUri, isDisabled = false, withRaf, radius = RADIUS, preferredWidth, preferredHeight) {
  // eslint-disable-next-line no-null/no-null
  const canvasRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const isStarted = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,_useSyncEffect__WEBPACK_IMPORTED_MODULE_4__["default"])(() => {
    if (!isDisabled) {
      isStarted.current = false;
    }
  }, [dataUri, isDisabled]);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const canvas = canvasRef.current;
    if (!dataUri || !canvas || isDisabled || isStarted.current) {
      return;
    }
    isStarted.current = true;
    const img = new Image();
    const processBlur = () => {
      const width = preferredWidth || img.width;
      const height = preferredHeight || img.height;
      const ctx = canvas.getContext('2d', {
        alpha: false
      });
      (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_2__.requestMutation)(() => {
        canvas.width = width;
        canvas.height = height;
        if (_util_windowEnvironment__WEBPACK_IMPORTED_MODULE_3__.IS_CANVAS_FILTER_SUPPORTED) {
          ctx.filter = `blur(${radius}px)`;
        }
        ctx.drawImage(img, -radius * 2, -radius * 2, width + radius * 4, height + radius * 4);
        if (!_util_windowEnvironment__WEBPACK_IMPORTED_MODULE_3__.IS_CANVAS_FILTER_SUPPORTED) {
          (0,_lib_fastBlur__WEBPACK_IMPORTED_MODULE_1__["default"])(ctx, 0, 0, width, height, radius, ITERATIONS);
        }
      });
    };
    img.onload = () => {
      if (withRaf) {
        (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_2__.requestMeasure)(processBlur);
      } else {
        processBlur();
      }
    };
    img.src = dataUri;
  }, [dataUri, isDisabled, preferredHeight, preferredWidth, radius, withRaf]);
  return canvasRef;
}

/***/ }),

/***/ "./src/hooks/useEnsureMessage.ts":
/*!***************************************!*\
  !*** ./src/hooks/useEnsureMessage.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useEnsureMessage)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global */ "./src/global/index.ts");


function useEnsureMessage(chatId, messageId, message, replyOriginForId, isDisabled) {
  const {
    loadMessage
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isDisabled) return;
    if (messageId && !message) {
      loadMessage({
        chatId,
        messageId: messageId,
        replyOriginForId: replyOriginForId
      });
    }
  }, [isDisabled, chatId, message, messageId, replyOriginForId]);
}

/***/ }),

/***/ "./src/hooks/useHorizontalScroll.ts":
/*!******************************************!*\
  !*** ./src/hooks/useHorizontalScroll.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/teact/teact */ "./src/lib/teact/teact.ts");

const useHorizontalScroll = (containerRef, isDisabled, shouldPreventDefault = false) => {
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isDisabled) {
      return undefined;
    }
    const container = containerRef.current;
    function handleScroll(e) {
      // Ignore horizontal scroll and let it work natively (e.g. on touchpad)
      if (!e.deltaX) {
        container.scrollLeft += e.deltaY / 4;
        if (shouldPreventDefault) e.preventDefault();
      }
    }
    container.addEventListener('wheel', handleScroll, {
      passive: !shouldPreventDefault
    });
    return () => {
      container.removeEventListener('wheel', handleScroll);
    };
  }, [containerRef, isDisabled, shouldPreventDefault]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useHorizontalScroll);

/***/ }),

/***/ "./src/hooks/usePrevious.ts":
/*!**********************************!*\
  !*** ./src/hooks/usePrevious.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ usePrevious)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/teact/teact */ "./src/lib/teact/teact.ts");


// This is not render-dependent and will never allow previous to match current
function usePrevious(current) {
  const prevRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const lastRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  if (lastRef.current !== current) {
    prevRef.current = lastRef.current;
  }
  lastRef.current = current;
  return prevRef.current;
}

/***/ }),

/***/ "./src/hooks/useResizeMessageObserver.ts":
/*!***********************************************!*\
  !*** ./src/hooks/useResizeMessageObserver.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global */ "./src/global/index.ts");
/* harmony import */ var _util_animateScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/animateScroll */ "./src/util/animateScroll.ts");
/* harmony import */ var _useLastCallback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _useResizeObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useResizeObserver */ "./src/hooks/useResizeObserver.ts");
/* harmony import */ var _useThrottledCallback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useThrottledCallback */ "./src/hooks/useThrottledCallback.ts");






const BOTTOM_FOCUS_SCROLL_THRESHOLD = 5;
const THROTTLE_MS = 300;
const RESIZE_ANIMATION_DURATION = 400;
function useMessageResizeObserver(ref, shouldFocusOnResize = false) {
  const {
    focusLastMessage
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const messageHeightRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  const handleResize = (0,_useLastCallback__WEBPACK_IMPORTED_MODULE_3__["default"])(entry => {
    const lastHeight = messageHeightRef.current;
    const newHeight = entry.contentRect.height;
    messageHeightRef.current = newHeight;
    if ((0,_util_animateScroll__WEBPACK_IMPORTED_MODULE_2__.isAnimatingScroll)() || !lastHeight || newHeight <= lastHeight) return;
    const container = entry.target.closest('.MessageList');
    if (!container) return;
    (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.beginHeavyAnimation)(RESIZE_ANIMATION_DURATION);
    const resizeDiff = newHeight - lastHeight;
    const {
      offsetHeight,
      scrollHeight,
      scrollTop
    } = container;
    const currentScrollBottom = Math.round(scrollHeight - scrollTop - offsetHeight);
    const previousScrollBottom = currentScrollBottom - resizeDiff;
    if (previousScrollBottom <= BOTTOM_FOCUS_SCROLL_THRESHOLD) {
      focusLastMessage();
    }
  });
  const throttledResize = (0,_useThrottledCallback__WEBPACK_IMPORTED_MODULE_5__["default"])(handleResize, [handleResize], THROTTLE_MS, false);
  (0,_useResizeObserver__WEBPACK_IMPORTED_MODULE_4__["default"])(ref, throttledResize, !shouldFocusOnResize);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMessageResizeObserver);

/***/ }),

/***/ "./src/util/animateHorizontalScroll.ts":
/*!*********************************************!*\
  !*** ./src/util/animateHorizontalScroll.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ animateHorizontalScroll)
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ "./src/global/index.ts");
/* harmony import */ var _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/fasterdom/fasterdom */ "./src/lib/fasterdom/fasterdom.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation */ "./src/util/animation.ts");




const DEFAULT_DURATION = 300;
const stopById = new Map();
function animateHorizontalScroll(container, left, duration = DEFAULT_DURATION) {
  if (!(0,_global_selectors__WEBPACK_IMPORTED_MODULE_2__.selectCanAnimateInterface)((0,_global__WEBPACK_IMPORTED_MODULE_0__.getGlobal)())) {
    duration = 0;
  }
  const isRtl = container.getAttribute('dir') === 'rtl';
  const {
    scrollLeft,
    offsetWidth: containerWidth,
    scrollWidth,
    dataset: {
      scrollId
    }
  } = container;
  let path = left - scrollLeft;
  if (path < 0) {
    const remainingPath = -scrollLeft * (isRtl ? -1 : 1);
    path = Math.max(path, remainingPath);
  } else if (path > 0) {
    const remainingPath = scrollWidth - (scrollLeft + containerWidth);
    path = Math.min(path, remainingPath);
  }
  if (path === 0) {
    return Promise.resolve();
  }
  if (scrollId && stopById.has(scrollId)) {
    stopById.get(scrollId)();
  }
  const target = scrollLeft + path;
  return new Promise(resolve => {
    (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_1__.requestMutation)(() => {
      if (duration === 0) {
        container.scrollLeft = target;
        resolve();
        return;
      }
      let isStopped = false;
      const id = Math.random().toString();
      container.dataset.scrollId = id;
      stopById.set(id, () => {
        isStopped = true;
      });
      container.style.scrollSnapType = 'none';
      const startAt = Date.now();
      (0,_animation__WEBPACK_IMPORTED_MODULE_3__.animate)(() => {
        if (isStopped) return false;
        const t = Math.min((Date.now() - startAt) / duration, 1);
        const currentPath = path * (1 - transition(t));
        container.scrollLeft = Math.round(target - currentPath);
        if (t >= 1) {
          container.style.scrollSnapType = '';
          delete container.dataset.scrollId;
          stopById.delete(id);
          resolve();
        }
        return t < 1;
      }, _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_1__.requestMutation);
    });
  });
}
function transition(t) {
  return 1 - (1 - t) ** 3.5;
}

/***/ }),

/***/ "./src/util/animateScroll.ts":
/*!***********************************!*\
  !*** ./src/util/animateScroll.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cancelScrollBlockingAnimation: () => (/* binding */ cancelScrollBlockingAnimation),
/* harmony export */   "default": () => (/* binding */ animateScroll),
/* harmony export */   isAnimatingScroll: () => (/* binding */ isAnimatingScroll),
/* harmony export */   restartCurrentScrollAnimation: () => (/* binding */ restartCurrentScrollAnimation)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global */ "./src/global/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./src/types/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/fasterdom/fasterdom */ "./src/lib/fasterdom/fasterdom.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _visibility_getOffsetToContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visibility/getOffsetToContainer */ "./src/util/visibility/getOffsetToContainer.ts");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./animation */ "./src/util/animation.ts");
/* harmony import */ var _windowEnvironment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./windowEnvironment */ "./src/util/windowEnvironment.ts");









let isAnimating = false;
let currentArgs;
let onHeavyAnimationEnd;
function animateScroll(args) {
  currentArgs = args;
  const mutate = createMutateFunction(args);
  if (args.shouldReturnMutationFn) {
    return mutate;
  }
  (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_4__.requestMutation)(mutate);
  return undefined;
}
function restartCurrentScrollAnimation() {
  if (!isAnimating) {
    return;
  }
  (0,_animation__WEBPACK_IMPORTED_MODULE_7__.cancelSingleAnimation)();
  (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_4__.requestMeasure)(() => {
    (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_4__.requestMutation)(createMutateFunction(currentArgs));
  });
}
function createMutateFunction(args) {
  const {
    container,
    element,
    position,
    margin = 0,
    maxDistance = _config__WEBPACK_IMPORTED_MODULE_3__.SCROLL_MAX_DISTANCE,
    forceDirection,
    forceNormalContainerHeight
  } = args;
  let forceDuration = args.forceDuration;
  if (forceDirection === _types__WEBPACK_IMPORTED_MODULE_2__.FocusDirection.Static || !(0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectCanAnimateInterface)((0,_global__WEBPACK_IMPORTED_MODULE_1__.getGlobal)())) {
    forceDuration = 0;
  }
  const {
    offsetHeight: elementHeight
  } = element;
  const {
    scrollTop: currentScrollTop,
    offsetHeight: containerHeight,
    scrollHeight
  } = container;
  const elementTop = (0,_visibility_getOffsetToContainer__WEBPACK_IMPORTED_MODULE_6__["default"])(element, container).top;
  const targetContainerHeight = forceNormalContainerHeight && container.dataset.normalHeight ? Number(container.dataset.normalHeight) : containerHeight;
  let scrollTo;
  switch (position) {
    case 'start':
      scrollTo = elementTop - margin + (_windowEnvironment__WEBPACK_IMPORTED_MODULE_8__.IS_ANDROID ? 1 : 0);
      break;
    case 'end':
      scrollTo = elementTop + elementHeight + margin - targetContainerHeight;
      break;
    // 'nearest' is not supported yet
    case 'nearest':
    case 'center':
    case 'centerOrTop':
      scrollTo = elementHeight < targetContainerHeight ? elementTop + elementHeight / 2 - targetContainerHeight / 2 : elementTop - margin;
      break;
  }
  const scrollFrom = calculateScrollFrom(container, scrollTo, maxDistance, forceDirection);
  let path = scrollTo - scrollFrom;
  if (path < 0) {
    const remainingPath = -scrollFrom;
    path = Math.max(path, remainingPath);
  } else if (path > 0) {
    const remainingPath = scrollHeight - (scrollFrom + targetContainerHeight);
    path = Math.min(path, remainingPath);
  }
  const absPath = Math.abs(path);
  return () => {
    if (absPath < 1) {
      if (currentScrollTop !== scrollFrom) {
        container.scrollTop = scrollFrom;
      }
      return;
    }
    const target = scrollFrom + path;
    if (forceDuration === 0) {
      container.scrollTop = target;
      return;
    }
    const transition = absPath <= _config__WEBPACK_IMPORTED_MODULE_3__.SCROLL_SHORT_TRANSITION_MAX_DISTANCE ? shortTransition : longTransition;
    const duration = forceDuration || _config__WEBPACK_IMPORTED_MODULE_3__.SCROLL_MIN_DURATION + absPath / _config__WEBPACK_IMPORTED_MODULE_3__.SCROLL_MAX_DISTANCE * (_config__WEBPACK_IMPORTED_MODULE_3__.SCROLL_MAX_DURATION - _config__WEBPACK_IMPORTED_MODULE_3__.SCROLL_MIN_DURATION);
    const startAt = Date.now();
    isAnimating = true;
    const prevOnHeavyAnimationEnd = onHeavyAnimationEnd;
    onHeavyAnimationEnd = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.beginHeavyAnimation)(undefined, true);
    prevOnHeavyAnimationEnd?.();
    (0,_animation__WEBPACK_IMPORTED_MODULE_7__.animateSingle)(() => {
      const t = Math.min((Date.now() - startAt) / duration, 1);
      const currentPath = path * (1 - transition(t));
      const newScrollTop = Math.round(target - currentPath);
      container.scrollTop = newScrollTop;
      isAnimating = t < 1 && newScrollTop !== target;
      if (!isAnimating) {
        currentArgs = undefined;
        onHeavyAnimationEnd?.();
        onHeavyAnimationEnd = undefined;
      }
      return isAnimating;
    }, _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_4__.requestMutation);
  };
}
function isAnimatingScroll() {
  return isAnimating;
}
function cancelScrollBlockingAnimation() {
  onHeavyAnimationEnd();
  onHeavyAnimationEnd = undefined;
}
function calculateScrollFrom(container, scrollTo, maxDistance = _config__WEBPACK_IMPORTED_MODULE_3__.SCROLL_MAX_DISTANCE, forceDirection) {
  const {
    scrollTop
  } = container;
  if (forceDirection === undefined) {
    const offset = scrollTo - scrollTop;
    if (offset < -maxDistance) {
      return scrollTop + (offset + maxDistance);
    } else if (offset > maxDistance) {
      return scrollTop + (offset - maxDistance);
    }
  } else if (forceDirection === _types__WEBPACK_IMPORTED_MODULE_2__.FocusDirection.Up) {
    return scrollTo + maxDistance;
  } else if (forceDirection === _types__WEBPACK_IMPORTED_MODULE_2__.FocusDirection.Down) {
    return Math.max(0, scrollTo - maxDistance);
  }
  return scrollTop;
}
function shortTransition(t) {
  return 1 - (1 - t) ** 3.5;
}
function longTransition(t) {
  return 1 - (1 - t) ** 6;
}

/***/ }),

/***/ "./src/util/colors.ts":
/*!****************************!*\
  !*** ./src/util/colors.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertToRGBA: () => (/* binding */ convertToRGBA),
/* harmony export */   getAverageColor: () => (/* binding */ getAverageColor),
/* harmony export */   getColorLuma: () => (/* binding */ getColorLuma),
/* harmony export */   getPatternColor: () => (/* binding */ getPatternColor),
/* harmony export */   getTextColor: () => (/* binding */ getTextColor),
/* harmony export */   hex2rgb: () => (/* binding */ hex2rgb),
/* harmony export */   hsb2rgb: () => (/* binding */ hsb2rgb),
/* harmony export */   numberToHexColor: () => (/* binding */ numberToHexColor),
/* harmony export */   rgb2hex: () => (/* binding */ rgb2hex),
/* harmony export */   rgb2hsb: () => (/* binding */ rgb2hsb)
/* harmony export */ });
/* harmony import */ var _files__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./files */ "./src/util/files.ts");
/* eslint-disable eqeqeq */
/* eslint-disable prefer-template */
/* eslint-disable prefer-const */
/* eslint-disable prefer-destructuring */
/* eslint-disable one-var */
/* eslint-disable one-var-declaration-per-line */


const LUMA_THRESHOLD = 128;

/**
 * HEX > RGB
 * input: 'xxxxxx' (ex. 'ed15fa') case-insensitive
 * output: [r, g, b] ([0-255, 0-255, 0-255])
 */
function hex2rgb(param) {
  return [parseInt(param.substring(0, 2), 16), parseInt(param.substring(2, 4), 16), parseInt(param.substring(4, 6), 16)];
}

/**
 * RGB > HEX
 * input: [r, g, b] ([0-255, 0-255, 0-255])
 * output: 'xxxxxx' (ex. 'ff0000')
 */
function rgb2hex(param) {
  const p0 = param[0].toString(16);
  const p1 = param[1].toString(16);
  const p2 = param[2].toString(16);
  return (p0.length == 1 ? '0' + p0 : p0) + (p1.length == 1 ? '0' + p1 : p1) + (p2.length == 1 ? '0' + p2 : p2);
}

/**
 * Converts an RGB color value to HSV. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and v in the set [0, 1].
 *
 * @param   Number  r       The red color value
 * @param   Number  g       The green color value
 * @param   Number  b       The blue color value
 * @return  Array           The HSV representation
 */
function rgb2hsb([r, g, b]) {
  r /= 255;
  g /= 255;
  b /= 255;
  let max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    v = max;
  let d = max - min;
  s = max == 0 ? 0 : d / max;
  if (max == min) {
    h = 0; // achromatic
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return [h, s, v];
}

/**
 * Converts an HSV color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
 * Assumes h, s, and v are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   Number  h       The hue
 * @param   Number  s       The saturation
 * @param   Number  v       The value
 * @return  Array           The RGB representation
 */
function hsb2rgb([h, s, v]) {
  let r, g, b;
  let i = Math.floor(h * 6);
  let f = h * 6 - i;
  let p = v * (1 - s);
  let q = v * (1 - f * s);
  let t = v * (1 - (1 - f) * s);
  switch (i % 6) {
    case 0:
      r = v;
      g = t;
      b = p;
      break;
    case 1:
      r = q;
      g = v;
      b = p;
      break;
    case 2:
      r = p;
      g = v;
      b = t;
      break;
    case 3:
      r = p;
      g = q;
      b = v;
      break;
    case 4:
      r = t;
      g = p;
      b = v;
      break;
    case 5:
      r = v;
      g = p;
      b = q;
      break;
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}
async function getAverageColor(url) {
  // Only visit every 5 pixels
  const blockSize = 5;
  const defaultRGB = [0, 0, 0];
  let data;
  let width;
  let height;
  let i = -4;
  let length;
  let rgb = [0, 0, 0];
  let count = 0;
  const canvas = document.createElement('canvas');
  const context = canvas.getContext && canvas.getContext('2d');
  if (!context) {
    return defaultRGB;
  }
  const image = await (0,_files__WEBPACK_IMPORTED_MODULE_0__.preloadImage)(url);
  height = image.naturalHeight || image.offsetHeight || image.height;
  width = image.naturalWidth || image.offsetWidth || image.width;
  canvas.height = height;
  canvas.width = width;
  context.drawImage(image, 0, 0);
  try {
    data = context.getImageData(0, 0, width, height);
  } catch (e) {
    return defaultRGB;
  }
  length = data.data.length;

  // eslint-disable-next-line no-cond-assign
  while ((i += blockSize * 4) < length) {
    if (data.data[i + 3] === 0) continue; // Ignore fully transparent pixels
    ++count;
    rgb[0] += data.data[i];
    rgb[1] += data.data[i + 1];
    rgb[2] += data.data[i + 2];
  }
  rgb[0] = Math.floor(rgb[0] / count);
  rgb[1] = Math.floor(rgb[1] / count);
  rgb[2] = Math.floor(rgb[2] / count);
  return rgb;
}
function getColorLuma(rgbColor) {
  const [r, g, b] = rgbColor;
  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luma;
}

// Function was adapted from https://github.com/telegramdesktop/tdesktop/blob/35ff621b5b52f7e3553fb0f990ea13ade7101b8e/Telegram/SourceFiles/data/data_wall_paper.cpp#L518
function getPatternColor(rgbColor) {
  let [hue, saturation, value] = rgb2hsb(rgbColor);
  saturation = Math.min(1, saturation + 0.05 + 0.1 * (1 - saturation));
  value = value > 0.5 ? Math.max(0, value * 0.65) : Math.max(0, Math.min(1, 1 - value * 0.65));
  return `hsla(${hue * 360}, ${saturation * 100}%, ${value * 100}%, .4)`;
}

/* eslint-disable no-bitwise */
const convertToRGBA = color => {
  const alpha = color >> 24 & 0xff;
  const red = color >> 16 & 0xff;
  const green = color >> 8 & 0xff;
  const blue = color & 0xff;
  const alphaFloat = alpha / 255;
  return `rgba(${red}, ${green}, ${blue}, ${alphaFloat})`;
};
const numberToHexColor = color => {
  return `#${color.toString(16).padStart(6, '0')}`;
};
const getTextColor = color => {
  const r = color >> 16 & 0xff;
  const g = color >> 8 & 0xff;
  const b = color & 0xff;
  const luma = getColorLuma([r, g, b]);
  return luma > LUMA_THRESHOLD ? 'black' : 'white';
};

/***/ }),

/***/ "./src/util/objects/customPeer.ts":
/*!****************************************!*\
  !*** ./src/util/objects/customPeer.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CUSTOM_PEER_EXCLUDED_CHAT_TYPES: () => (/* binding */ CUSTOM_PEER_EXCLUDED_CHAT_TYPES),
/* harmony export */   CUSTOM_PEER_HIDDEN: () => (/* binding */ CUSTOM_PEER_HIDDEN),
/* harmony export */   CUSTOM_PEER_INCLUDED_CHAT_TYPES: () => (/* binding */ CUSTOM_PEER_INCLUDED_CHAT_TYPES),
/* harmony export */   CUSTOM_PEER_PREMIUM: () => (/* binding */ CUSTOM_PEER_PREMIUM)
/* harmony export */ });
const CUSTOM_PEER_PREMIUM = {
  isCustomPeer: true,
  type: 'premium',
  titleKey: 'PrivacyPremium',
  subtitleKey: 'PrivacyPremiumText',
  avatarIcon: 'star',
  isAvatarSquare: true,
  withPremiumGradient: true
};
const CUSTOM_PEER_INCLUDED_CHAT_TYPES = [{
  isCustomPeer: true,
  type: 'contacts',
  titleKey: 'FilterContacts',
  avatarIcon: 'user',
  isAvatarSquare: true,
  peerColorId: 5
}, {
  isCustomPeer: true,
  type: 'nonContacts',
  titleKey: 'FilterNonContacts',
  avatarIcon: 'non-contacts',
  isAvatarSquare: true,
  peerColorId: 4
}, {
  isCustomPeer: true,
  type: 'groups',
  titleKey: 'FilterGroups',
  avatarIcon: 'group',
  isAvatarSquare: true,
  peerColorId: 3
}, {
  isCustomPeer: true,
  type: 'channels',
  titleKey: 'FilterChannels',
  avatarIcon: 'channel',
  isAvatarSquare: true,
  peerColorId: 1
}, {
  isCustomPeer: true,
  type: 'bots',
  titleKey: 'FilterBots',
  avatarIcon: 'bots',
  isAvatarSquare: true,
  peerColorId: 6
}];
const CUSTOM_PEER_EXCLUDED_CHAT_TYPES = [{
  isCustomPeer: true,
  type: 'excludeMuted',
  titleKey: 'FilterMuted',
  avatarIcon: 'mute',
  isAvatarSquare: true,
  peerColorId: 6
}, {
  isCustomPeer: true,
  type: 'excludeRead',
  titleKey: 'FilterRead',
  avatarIcon: 'readchats',
  isAvatarSquare: true,
  peerColorId: 4
}, {
  isCustomPeer: true,
  type: 'excludeArchived',
  titleKey: 'FilterArchived',
  avatarIcon: 'archive',
  isAvatarSquare: true,
  peerColorId: 5
}];
const CUSTOM_PEER_HIDDEN = {
  isCustomPeer: true,
  type: 'hidden',
  titleKey: 'StarsTransactionHidden',
  avatarIcon: 'author-hidden',
  peerColorId: 4
};

/***/ }),

/***/ "./src/util/visibility/getOffsetToContainer.ts":
/*!*****************************************************!*\
  !*** ./src/util/visibility/getOffsetToContainer.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getOffsetToContainer)
/* harmony export */ });
function getOffsetToContainer(element, container) {
  let offsetTop = 0;
  let offsetLeft = 0;
  let current = element;
  while (current && current !== container && !current.contains(container)) {
    offsetTop += current.offsetTop;
    offsetLeft += current.offsetLeft;
    current = current.offsetParent;
  }
  return {
    top: offsetTop,
    left: offsetLeft
  };
}

/***/ }),

/***/ "./src/components/common/AnimatedCounter.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/common/AnimatedCounter.module.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"AnimatedCounter-module__root","character-container":"AnimatedCounter-module__character-container","characterContainer":"AnimatedCounter-module__character-container","character":"AnimatedCounter-module__character","character-old":"AnimatedCounter-module__character-old","characterOld":"AnimatedCounter-module__character-old","character-disappear":"AnimatedCounter-module__character-disappear","characterDisappear":"AnimatedCounter-module__character-disappear","character-new":"AnimatedCounter-module__character-new","characterNew":"AnimatedCounter-module__character-new","character-appear":"AnimatedCounter-module__character-appear","characterAppear":"AnimatedCounter-module__character-appear"});

/***/ }),

/***/ "./src/components/common/AnimatedIconWithPreview.module.scss":
/*!*******************************************************************!*\
  !*** ./src/components/common/AnimatedIconWithPreview.module.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"AnimatedIconWithPreview-module__root","preview":"AnimatedIconWithPreview-module__preview"});

/***/ }),

/***/ "./src/components/common/AvatarList.module.scss":
/*!******************************************************!*\
  !*** ./src/components/common/AvatarList.module.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"AvatarList-module__root","avatar":"AvatarList-module__avatar","badge":"AvatarList-module__badge"});

/***/ }),

/***/ "./src/components/common/MediaSpoiler.module.scss":
/*!********************************************************!*\
  !*** ./src/components/common/MediaSpoiler.module.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"MediaSpoiler-module__root","mask-animation":"MediaSpoiler-module__mask-animation","maskAnimation":"MediaSpoiler-module__mask-animation","circle-cut":"MediaSpoiler-module__circle-cut","circleCut":"MediaSpoiler-module__circle-cut","dots":"MediaSpoiler-module__dots","canvas":"MediaSpoiler-module__canvas","opacity-breath":"MediaSpoiler-module__opacity-breath","opacityBreath":"MediaSpoiler-module__opacity-breath","dots-animation":"MediaSpoiler-module__dots-animation","dotsAnimation":"MediaSpoiler-module__dots-animation"});

/***/ }),

/***/ "./src/components/common/PeerChip.module.scss":
/*!****************************************************!*\
  !*** ./src/components/common/PeerChip.module.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"PeerChip-module__root","minimized":"PeerChip-module__minimized","closeable":"PeerChip-module__closeable","remove":"PeerChip-module__remove","nonDestructive":"PeerChip-module__nonDestructive","notClickable":"PeerChip-module__notClickable","avatar":"PeerChip-module__avatar","iconWrapper":"PeerChip-module__iconWrapper","icon":"PeerChip-module__icon","name":"PeerChip-module__name","squareAvatar":"PeerChip-module__squareAvatar"});

/***/ }),

/***/ "./src/components/common/PremiumProgress.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/common/PremiumProgress.module.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"PremiumProgress-module__root","withBadge":"PremiumProgress-module__withBadge","badgeContainer":"PremiumProgress-module__badgeContainer","slide-in":"PremiumProgress-module__slide-in","slideIn":"PremiumProgress-module__slide-in","floating-badge-wrapper":"PremiumProgress-module__floating-badge-wrapper","floatingBadgeWrapper":"PremiumProgress-module__floating-badge-wrapper","rotate-in":"PremiumProgress-module__rotate-in","rotateIn":"PremiumProgress-module__rotate-in","floating-badge":"PremiumProgress-module__floating-badge","floatingBadge":"PremiumProgress-module__floating-badge","floating-badge-triangle":"PremiumProgress-module__floating-badge-triangle","floatingBadgeTriangle":"PremiumProgress-module__floating-badge-triangle","floating-badge-icon":"PremiumProgress-module__floating-badge-icon","floatingBadgeIcon":"PremiumProgress-module__floating-badge-icon","floating-badge-value":"PremiumProgress-module__floating-badge-value","floatingBadgeValue":"PremiumProgress-module__floating-badge-value","left":"PremiumProgress-module__left","right":"PremiumProgress-module__right","progress":"PremiumProgress-module__progress","fullProgress":"PremiumProgress-module__fullProgress","primary":"PremiumProgress-module__primary"});

/***/ }),

/***/ "./src/components/common/gift/GiftRibbon.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/common/gift/GiftRibbon.module.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"GiftRibbon-module__root","text":"GiftRibbon-module__text"});

/***/ }),

/***/ "./src/components/common/pickers/PickerItem.module.scss":
/*!**************************************************************!*\
  !*** ./src/components/common/pickers/PickerItem.module.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"PickerItem-module__root","clickable":"PickerItem-module__clickable","separator":"PickerItem-module__separator","disabled":"PickerItem-module__disabled","title":"PickerItem-module__title","subtitle":"PickerItem-module__subtitle","withAvatar":"PickerItem-module__withAvatar","multiline":"PickerItem-module__multiline","input":"PickerItem-module__input","startInput":"PickerItem-module__startInput","endInput":"PickerItem-module__endInput","avatarElement":"PickerItem-module__avatarElement"});

/***/ }),

/***/ "./src/components/common/pickers/PickerStyles.module.scss":
/*!****************************************************************!*\
  !*** ./src/components/common/pickers/PickerStyles.module.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"PickerStyles-module__container","header":"PickerStyles-module__header","pickerCategoryTitle":"PickerStyles-module__pickerCategoryTitle","peerChip":"PickerStyles-module__peerChip","pickerList":"PickerStyles-module__pickerList","padded":"PickerStyles-module__padded","noResults":"PickerStyles-module__noResults","onlineStatus":"PickerStyles-module__onlineStatus"});

/***/ }),

/***/ "./src/components/common/profile/RadialPatternBackground.module.scss":
/*!***************************************************************************!*\
  !*** ./src/components/common/profile/RadialPatternBackground.module.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"RadialPatternBackground-module__root","canvas":"RadialPatternBackground-module__canvas"});

/***/ }),

/***/ "./src/components/common/reactions/CustomEmojiEffect.module.scss":
/*!***********************************************************************!*\
  !*** ./src/components/common/reactions/CustomEmojiEffect.module.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"CustomEmojiEffect-module__root","particle":"CustomEmojiEffect-module__particle"});

/***/ }),

/***/ "./src/components/common/reactions/ReactionAnimatedEmoji.module.scss":
/*!***************************************************************************!*\
  !*** ./src/components/common/reactions/ReactionAnimatedEmoji.module.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"ReactionAnimatedEmoji-module__root","animated-icon":"ReactionAnimatedEmoji-module__animated-icon","animatedIcon":"ReactionAnimatedEmoji-module__animated-icon","effect":"ReactionAnimatedEmoji-module__effect","animating":"ReactionAnimatedEmoji-module__animating","withEffectOnly":"ReactionAnimatedEmoji-module__withEffectOnly"});

/***/ }),

/***/ "./src/components/common/reactions/ReactionStaticEmoji.scss":
/*!******************************************************************!*\
  !*** ./src/components/common/reactions/ReactionStaticEmoji.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/left/settings/folders/IconSelector.scss":
/*!****************************************************************!*\
  !*** ./src/components/left/settings/folders/IconSelector.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/middle/message/SimilarChannels.module.scss":
/*!*******************************************************************!*\
  !*** ./src/components/middle/message/SimilarChannels.module.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"SimilarChannels-module__root","notch":"SimilarChannels-module__notch","notch-path":"SimilarChannels-module__notch-path","notchPath":"SimilarChannels-module__notch-path","join-text":"SimilarChannels-module__join-text","joinText":"SimilarChannels-module__join-text","header":"SimilarChannels-module__header","title":"SimilarChannels-module__title","close":"SimilarChannels-module__close","icon":"SimilarChannels-module__icon","skeleton":"SimilarChannels-module__skeleton","inner":"SimilarChannels-module__inner","is-appearing":"SimilarChannels-module__is-appearing","isAppearing":"SimilarChannels-module__is-appearing","channels-appear":"SimilarChannels-module__channels-appear","channelsAppear":"SimilarChannels-module__channels-appear","is-hiding":"SimilarChannels-module__is-hiding","isHiding":"SimilarChannels-module__is-hiding","channels-disappear":"SimilarChannels-module__channels-disappear","channelsDisappear":"SimilarChannels-module__channels-disappear","channel-list":"SimilarChannels-module__channel-list","channelList":"SimilarChannels-module__channel-list","item":"SimilarChannels-module__item","last-item":"SimilarChannels-module__last-item","lastItem":"SimilarChannels-module__last-item","avatar":"SimilarChannels-module__avatar","badge":"SimilarChannels-module__badge","members-count":"SimilarChannels-module__members-count","membersCount":"SimilarChannels-module__members-count","channel-title":"SimilarChannels-module__channel-title","channelTitle":"SimilarChannels-module__channel-title","fake-avatar":"SimilarChannels-module__fake-avatar","fakeAvatar":"SimilarChannels-module__fake-avatar","fake-avatar-inner":"SimilarChannels-module__fake-avatar-inner","fakeAvatarInner":"SimilarChannels-module__fake-avatar-inner","last-fake-avatar":"SimilarChannels-module__last-fake-avatar","lastFakeAvatar":"SimilarChannels-module__last-fake-avatar"});

/***/ }),

/***/ "./src/components/middle/message/reactions/ReactionButton.module.scss":
/*!****************************************************************************!*\
  !*** ./src/components/middle/message/reactions/ReactionButton.module.scss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"ReactionButton-module__root","chosen":"ReactionButton-module__chosen","paid":"ReactionButton-module__paid","animated-emoji":"ReactionButton-module__animated-emoji","animatedEmoji":"ReactionButton-module__animated-emoji","tag":"ReactionButton-module__tag","tail":"ReactionButton-module__tail","is-safari":"ReactionButton-module__is-safari","isSafari":"ReactionButton-module__is-safari","tail-fill":"ReactionButton-module__tail-fill","tailFill":"ReactionButton-module__tail-fill","tag-text":"ReactionButton-module__tag-text","tagText":"ReactionButton-module__tag-text","counter":"ReactionButton-module__counter","disabled":"ReactionButton-module__disabled","paidCounter":"ReactionButton-module__paidCounter"});

/***/ }),

/***/ "./src/components/middle/message/reactions/Reactions.scss":
/*!****************************************************************!*\
  !*** ./src/components/middle/message/reactions/Reactions.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/modals/prompt/PromptDialog.module.scss":
/*!***************************************************************!*\
  !*** ./src/components/modals/prompt/PromptDialog.module.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"subtitle":"PromptDialog-module__subtitle"});

/***/ })

}]);
//# sourceMappingURL=src_components_common_MediaSpoiler_tsx-src_components_common_PasswordForm_tsx-src_components_-3662f6.a061931b7804c44d851c.js.map