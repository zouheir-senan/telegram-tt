"use strict";
(self["webpackChunktelegram_t"] = self["webpackChunktelegram_t"] || []).push([["BundleAuth"],{

/***/ "./src/bundles/auth.ts":
/*!*****************************!*\
  !*** ./src/bundles/auth.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthCode: () => (/* reexport safe */ _components_auth_AuthCode__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   AuthPassword: () => (/* reexport safe */ _components_auth_AuthPassword__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   AuthRegister: () => (/* reexport safe */ _components_auth_AuthRegister__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _components_auth_AuthCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/auth/AuthCode */ "./src/components/auth/AuthCode.tsx");
/* harmony import */ var _components_auth_AuthPassword__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/auth/AuthPassword */ "./src/components/auth/AuthPassword.tsx");
/* harmony import */ var _components_auth_AuthRegister__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/auth/AuthRegister */ "./src/components/auth/AuthRegister.tsx");




/***/ }),

/***/ "./src/components/auth/AuthCode.tsx":
/*!******************************************!*\
  !*** ./src/components/auth/AuthCode.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global */ "./src/global/index.ts");
/* harmony import */ var _util_iteratees__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/iteratees */ "./src/util/iteratees.ts");
/* harmony import */ var _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/windowEnvironment */ "./src/util/windowEnvironment.ts");
/* harmony import */ var _hooks_useHistoryBack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useHistoryBack */ "./src/hooks/useHistoryBack.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _common_TrackingMonkey__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/TrackingMonkey */ "./src/components/common/TrackingMonkey.tsx");
/* harmony import */ var _ui_InputText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui/InputText */ "./src/components/ui/InputText.tsx");
/* harmony import */ var _ui_Loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ui/Loading */ "./src/components/ui/Loading.tsx");










const CODE_LENGTH = 5;
const AuthCode = ({
  authPhoneNumber,
  authIsCodeViaApp,
  authIsLoading,
  authErrorKey
}) => {
  const {
    setAuthCode,
    returnToAuthPhoneNumber,
    clearAuthErrorKey
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_5__["default"])();
  // eslint-disable-next-line no-null/no-null
  const inputRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [code, setCode] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [isTracking, setIsTracking] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [trackingDirection, setTrackingDirection] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!_util_windowEnvironment__WEBPACK_IMPORTED_MODULE_3__.IS_TOUCH_ENV) {
      inputRef.current.focus();
    }
  }, []);
  (0,_hooks_useHistoryBack__WEBPACK_IMPORTED_MODULE_4__["default"])({
    isActive: true,
    onBack: returnToAuthPhoneNumber
  });
  const onCodeChange = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    if (authErrorKey) {
      clearAuthErrorKey();
    }
    const {
      currentTarget: target
    } = e;
    target.value = target.value.replace(/[^\d]+/, '').substr(0, CODE_LENGTH);
    if (target.value === code) {
      return;
    }
    setCode(target.value);
    if (!isTracking) {
      setIsTracking(true);
    } else if (!target.value.length) {
      setIsTracking(false);
    }
    if (code && code.length > target.value.length) {
      setTrackingDirection(-1);
    } else {
      setTrackingDirection(1);
    }
    if (target.value.length === CODE_LENGTH) {
      setAuthCode({
        code: target.value
      });
    }
  }, [authErrorKey, code, isTracking, setAuthCode]);
  function handleReturnToAuthPhoneNumber() {
    returnToAuthPhoneNumber();
  }
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    id: "auth-code-form",
    className: "custom-scroll"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "auth-form"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_TrackingMonkey__WEBPACK_IMPORTED_MODULE_7__["default"], {
    code: code,
    codeLength: CODE_LENGTH,
    isTracking: isTracking,
    trackingDirection: trackingDirection
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h1", null, authPhoneNumber, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "auth-number-edit div-button",
    onClick: handleReturnToAuthPhoneNumber,
    role: "button",
    tabIndex: 0,
    title: lang('WrongNumber'),
    "aria-label": lang('WrongNumber')
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "edit"
  }))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: "note"
  }, lang(authIsCodeViaApp ? 'SentAppCode' : 'LoginJustSentSms', undefined, {
    withNodes: true,
    withMarkdown: true
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_InputText__WEBPACK_IMPORTED_MODULE_8__["default"], {
    ref: inputRef,
    id: "sign-in-code",
    label: lang('Code'),
    onInput: onCodeChange,
    value: code,
    error: authErrorKey && lang.withRegular(authErrorKey),
    autoComplete: "off",
    inputMode: "numeric"
  }), authIsLoading && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Loading__WEBPACK_IMPORTED_MODULE_9__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)(global => (0,_util_iteratees__WEBPACK_IMPORTED_MODULE_2__.pick)(global, ['authPhoneNumber', 'authIsCodeViaApp', 'authIsLoading', 'authErrorKey']))(AuthCode)));

/***/ }),

/***/ "./src/components/auth/AuthPassword.tsx":
/*!**********************************************!*\
  !*** ./src/components/auth/AuthPassword.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global */ "./src/global/index.ts");
/* harmony import */ var _util_iteratees__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/iteratees */ "./src/util/iteratees.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _common_PasswordForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/PasswordForm */ "./src/components/common/PasswordForm.tsx");
/* harmony import */ var _common_PasswordMonkey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/PasswordMonkey */ "./src/components/common/PasswordMonkey.tsx");






const AuthPassword = ({
  authIsLoading,
  authErrorKey,
  authHint
}) => {
  const {
    setAuthPassword,
    clearAuthErrorKey
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const [showPassword, setShowPassword] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleChangePasswordVisibility = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(isVisible => {
    setShowPassword(isVisible);
  }, []);
  const handleSubmit = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(password => {
    setAuthPassword({
      password
    });
  }, [setAuthPassword]);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    id: "auth-password-form",
    className: "custom-scroll"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "auth-form"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_PasswordMonkey__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isPasswordVisible: showPassword
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h1", null, lang('LoginHeaderPassword')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: "note"
  }, lang('LoginEnterPasswordDescription')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_PasswordForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    clearError: clearAuthErrorKey,
    error: authErrorKey && lang.withRegular(authErrorKey),
    hint: authHint,
    isLoading: authIsLoading,
    isPasswordVisible: showPassword,
    onChangePasswordVisibility: handleChangePasswordVisibility,
    onSubmit: handleSubmit
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)(global => (0,_util_iteratees__WEBPACK_IMPORTED_MODULE_2__.pick)(global, ['authIsLoading', 'authErrorKey', 'authHint']))(AuthPassword)));

/***/ }),

/***/ "./src/components/auth/AuthRegister.tsx":
/*!**********************************************!*\
  !*** ./src/components/auth/AuthRegister.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global */ "./src/global/index.ts");
/* harmony import */ var _util_iteratees__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/iteratees */ "./src/util/iteratees.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _ui_AvatarEditable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/AvatarEditable */ "./src/components/ui/AvatarEditable.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _ui_InputText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/InputText */ "./src/components/ui/InputText.tsx");







const AuthRegister = ({
  authIsLoading,
  authErrorKey
}) => {
  const {
    signUp,
    clearAuthErrorKey,
    uploadProfilePhoto
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const [isButtonShown, setIsButtonShown] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [croppedFile, setCroppedFile] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [firstName, setFirstName] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [lastName, setLastName] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const handleFirstNameChange = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    if (authErrorKey) {
      clearAuthErrorKey();
    }
    const {
      target
    } = event;
    setFirstName(target.value);
    setIsButtonShown(target.value.length > 0);
  }, [authErrorKey]);
  const handleLastNameChange = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    const {
      target
    } = event;
    setLastName(target.value);
  }, []);
  function handleSubmit(event) {
    event.preventDefault();
    signUp({
      firstName,
      lastName
    });
    if (croppedFile) {
      uploadProfilePhoto({
        file: croppedFile
      });
    }
  }
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    id: "auth-registration-form",
    className: "custom-scroll"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "auth-form"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("form", {
    action: "",
    method: "post",
    onSubmit: handleSubmit
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_AvatarEditable__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onChange: setCroppedFile
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", null, lang('YourName')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: "note"
  }, lang('LoginRegisterDesc')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_InputText__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "registration-first-name",
    label: lang('LoginRegisterFirstNamePlaceholder'),
    onChange: handleFirstNameChange,
    value: firstName,
    error: authErrorKey && lang.withRegular(authErrorKey),
    autoComplete: "given-name"
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_InputText__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "registration-last-name",
    label: lang('LoginRegisterLastNamePlaceholder'),
    onChange: handleLastNameChange,
    value: lastName,
    autoComplete: "family-name"
  }), isButtonShown && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: "smaller",
    type: "submit",
    ripple: true,
    isLoading: authIsLoading
  }, lang('Next')))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)(global => (0,_util_iteratees__WEBPACK_IMPORTED_MODULE_2__.pick)(global, ['authIsLoading', 'authErrorKey']))(AuthRegister)));

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

/***/ "./src/components/common/PasswordMonkey.tsx":
/*!**************************************************!*\
  !*** ./src/components/common/PasswordMonkey.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
/* harmony import */ var _helpers_animatedAssets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/animatedAssets */ "./src/components/common/helpers/animatedAssets.ts");
/* harmony import */ var _hooks_schedulers_useTimeout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/schedulers/useTimeout */ "./src/hooks/schedulers/useTimeout.ts");
/* harmony import */ var _hooks_useAppLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useAppLayout */ "./src/hooks/useAppLayout.ts");
/* harmony import */ var _hooks_useFlag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useFlag */ "./src/hooks/useFlag.ts");
/* harmony import */ var _AnimatedSticker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AnimatedSticker */ "./src/components/common/AnimatedSticker.tsx");
/* harmony import */ var _PasswordMonkey_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PasswordMonkey.scss */ "./src/components/common/PasswordMonkey.scss");








const PEEK_MONKEY_SHOW_DELAY = 2000;
const SEGMENT_COVER_EYES = [0, 50];
const SEGMENT_UNCOVER_EYE = [0, 20];
const SEGMENT_COVER_EYE = [20, 0];
const PasswordMonkey = ({
  isPasswordVisible,
  isBig
}) => {
  const [isFirstMonkeyLoaded, markFirstMonkeyLoaded] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_5__["default"])(false);
  const [isPeekShown, markPeekShown] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_5__["default"])(false);
  const {
    isMobile
  } = (0,_hooks_useAppLayout__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const stikerSize = isMobile ? _config__WEBPACK_IMPORTED_MODULE_1__.STICKER_SIZE_AUTH_MOBILE : _config__WEBPACK_IMPORTED_MODULE_1__.STICKER_SIZE_AUTH;
  (0,_hooks_schedulers_useTimeout__WEBPACK_IMPORTED_MODULE_3__["default"])(markPeekShown, PEEK_MONKEY_SHOW_DELAY);
  const handleFirstMonkeyLoad = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(markFirstMonkeyLoaded, [markFirstMonkeyLoaded]);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    id: "monkey",
    className: isBig ? 'big' : ''
  }, !isFirstMonkeyLoaded && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "monkey-preview"
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_AnimatedSticker__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: isBig ? _config__WEBPACK_IMPORTED_MODULE_1__.STICKER_SIZE_TWO_FA : stikerSize,
    className: isPeekShown ? 'hidden' : 'shown',
    tgsUrl: _helpers_animatedAssets__WEBPACK_IMPORTED_MODULE_2__.LOCAL_TGS_URLS.MonkeyClose,
    playSegment: SEGMENT_COVER_EYES,
    noLoop: true,
    onLoad: handleFirstMonkeyLoad
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_AnimatedSticker__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: isBig ? _config__WEBPACK_IMPORTED_MODULE_1__.STICKER_SIZE_TWO_FA : stikerSize,
    className: isPeekShown ? 'shown' : 'hidden',
    tgsUrl: _helpers_animatedAssets__WEBPACK_IMPORTED_MODULE_2__.LOCAL_TGS_URLS.MonkeyPeek,
    playSegment: isPasswordVisible ? SEGMENT_UNCOVER_EYE : SEGMENT_COVER_EYE,
    noLoop: true
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(PasswordMonkey));

/***/ }),

/***/ "./src/components/common/TrackingMonkey.tsx":
/*!**************************************************!*\
  !*** ./src/components/common/TrackingMonkey.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
/* harmony import */ var _helpers_animatedAssets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/animatedAssets */ "./src/components/common/helpers/animatedAssets.ts");
/* harmony import */ var _hooks_useAppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useAppLayout */ "./src/hooks/useAppLayout.ts");
/* harmony import */ var _AnimatedSticker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AnimatedSticker */ "./src/components/common/AnimatedSticker.tsx");
/* harmony import */ var _PasswordMonkey_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PasswordMonkey.scss */ "./src/components/common/PasswordMonkey.scss");






const TRACKING_START_FRAME = 15;
const TRACKING_END_FRAME = 180;
const TrackingMonkey = ({
  code,
  codeLength,
  trackingDirection,
  isTracking,
  isBig
}) => {
  const [isFirstMonkeyLoaded, setIsFirstMonkeyLoaded] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    isMobile
  } = (0,_hooks_useAppLayout__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const trackningFramesPerSymbol = (TRACKING_END_FRAME - TRACKING_START_FRAME) / codeLength;
  const stickerSize = isMobile ? _config__WEBPACK_IMPORTED_MODULE_1__.STICKER_SIZE_AUTH_MOBILE : _config__WEBPACK_IMPORTED_MODULE_1__.STICKER_SIZE_AUTH;
  const handleFirstMonkeyLoad = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => setIsFirstMonkeyLoaded(true), []);
  function getTrackingFrames() {
    const startFrame = code && code.length > 1 || trackingDirection < 0 ? TRACKING_START_FRAME + trackningFramesPerSymbol * (code.length - 1) : 0;
    const endFrame = code.length === codeLength ? TRACKING_END_FRAME : TRACKING_START_FRAME + trackningFramesPerSymbol * code.length;
    if (trackingDirection < 1) {
      return [endFrame, startFrame];
    }
    return [startFrame, endFrame];
  }
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    id: "monkey",
    className: isBig ? 'big' : ''
  }, !isFirstMonkeyLoaded && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "monkey-preview"
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_AnimatedSticker__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: isBig ? _config__WEBPACK_IMPORTED_MODULE_1__.STICKER_SIZE_TWO_FA : stickerSize,
    className: isTracking ? 'hidden' : undefined,
    tgsUrl: _helpers_animatedAssets__WEBPACK_IMPORTED_MODULE_2__.LOCAL_TGS_URLS.MonkeyIdle,
    play: !isTracking,
    onLoad: handleFirstMonkeyLoad
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_AnimatedSticker__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: isBig ? _config__WEBPACK_IMPORTED_MODULE_1__.STICKER_SIZE_TWO_FA : stickerSize,
    className: !isTracking ? 'hidden' : 'shown',
    tgsUrl: _helpers_animatedAssets__WEBPACK_IMPORTED_MODULE_2__.LOCAL_TGS_URLS.MonkeyTracking,
    playSegment: isTracking ? getTrackingFrames() : undefined,
    speed: 2,
    noLoop: true
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(TrackingMonkey));

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

/***/ "./src/hooks/useLayoutEffectWithPrevDeps.ts":
/*!**************************************************!*\
  !*** ./src/hooks/useLayoutEffectWithPrevDeps.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/teact/teact */ "./src/lib/teact/teact.ts");

const useLayoutEffectWithPrevDeps = (cb, dependencies, debugKey) => {
  const prevDepsRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  return (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    const prevDeps = prevDepsRef.current;
    prevDepsRef.current = dependencies;
    return cb(prevDeps || []);
    // eslint-disable-next-line react-hooks-static-deps/exhaustive-deps
  }, dependencies, debugKey);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLayoutEffectWithPrevDeps);

/***/ }),

/***/ "./src/util/directInputManager.ts":
/*!****************************************!*\
  !*** ./src/util/directInputManager.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   disableDirectTextInput: () => (/* binding */ disableDirectTextInput),
/* harmony export */   enableDirectTextInput: () => (/* binding */ enableDirectTextInput),
/* harmony export */   getIsDirectTextInputDisabled: () => (/* binding */ getIsDirectTextInputDisabled)
/* harmony export */ });
let counter = 0;
function disableDirectTextInput() {
  counter += 1;
}
function enableDirectTextInput() {
  counter -= 1;
}
function getIsDirectTextInputDisabled() {
  return counter > 0;
}

/***/ }),

/***/ "./src/util/hoc/freezeWhenClosed.ts":
/*!******************************************!*\
  !*** ./src/util/hoc/freezeWhenClosed.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ freezeWhenClosed)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");

function freezeWhenClosed(Component) {
  function ComponentWrapper(props) {
    const newProps = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(props);
    if (props.isOpen) {
      newProps.current = props;
    } else {
      newProps.current = {
        ...newProps.current,
        isOpen: false
      };
    }
    return Component(newProps.current);
  }
  return ComponentWrapper;
}

/***/ }),

/***/ "./src/util/trapFocus.ts":
/*!*******************************!*\
  !*** ./src/util/trapFocus.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ trapFocus)
/* harmony export */ });
function trapFocus(element) {
  function handleKeyDown(e) {
    if (e.key !== 'Tab') {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    const focusableElements = Array.from(element.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));
    if (!focusableElements.length) {
      return;
    }
    const currentFocusedIndex = focusableElements.findIndex(em => em.isSameNode(document.activeElement));
    let newFocusedIndex = 0;
    if (currentFocusedIndex >= 0) {
      if (e.shiftKey) {
        newFocusedIndex = currentFocusedIndex > 0 ? currentFocusedIndex - 1 : focusableElements.length - 1;
      } else {
        newFocusedIndex = currentFocusedIndex < focusableElements.length - 1 ? currentFocusedIndex + 1 : 0;
      }
    }
    focusableElements[newFocusedIndex].focus();
  }
  document.addEventListener('keydown', handleKeyDown, false);
  return () => {
    document.removeEventListener('keydown', handleKeyDown, false);
  };
}

/***/ }),

/***/ "./src/components/common/PasswordMonkey.scss":
/*!***************************************************!*\
  !*** ./src/components/common/PasswordMonkey.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=BundleAuth.cfc08968618e4ad54e98.js.map