var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from 'react';
import styles from './SimpleListOperations.module.scss';
import { TextField, Stack, Toggle } from 'office-ui-fabric-react/lib/';
import { Environment, EnvironmentType } from '@microsoft/sp-core-library';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import { initializeIcons } from '@uifabric/icons';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
var stackTokens = { childrenGap: 40 };
var DelIcon = { iconName: 'Delete' };
var ClearIcon = { iconName: 'Clear' };
var AddIcon = { iconName: 'Add' };
var CompleteIcon = { iconName: 'CompletedSolid' };
var _onChange2 = function (row) {
    return function (ev, checked) {
    };
};
export var formatStrHtml = function (str) {
    var parser = new DOMParser();
    var htmlEl = parser.parseFromString(str, 'text/html');
    return htmlEl.body;
};
export var formatStr = function (str) {
    var retStr = "";
    if (str) {
        var el = document.createElement('p');
        el.innerHTML = str;
        el.getElementsByTagName('div'); // Live NodeList of your anchor elements
        // console.log(el.innerHTML);
        // console.log(el.innerHTML.indexOf('div'));
        if (el.innerHTML != "" && el.innerHTML.indexOf('div') != -1)
            retStr = el.getElementsByTagName('div')[0].innerHTML;
    }
    return retStr;
};
initializeIcons();
var SimpleListOperations = /** @class */ (function (_super) {
    __extends(SimpleListOperations, _super);
    function SimpleListOperations(prop, state) {
        var _this = _super.call(this, prop) || this;
        _this.state = {
            addText: '',
            addComment: '',
            updateText: []
        };
        sp.setup({
            spfxContext: _this.props.spcontext
        });
        if (Environment.type === EnvironmentType.SharePoint) {
            _this._getListItems();
        }
        else if (Environment.type === EnvironmentType.Local) {
            // return (<div>Whoops! you are using local host...</div>);
        }
        return _this;
    }
    SimpleListOperations.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: styles.simpleListOperations },
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: styles.row },
                    React.createElement("div", { className: styles.column }, this.state.updateText.map(function (row, index) { return (React.createElement(Stack, { horizontal: true, tokens: stackTokens },
                        React.createElement(Toggle, { onText: "Completed", offText: "Not Started", disabled: row.deptstatus == "Completed" ? true : false, checked: row.deptstatus == "Completed" ? true : false, onChange: _this._onChange(row) }),
                        React.createElement(TextField, { disabled: true, underlined: true, value: row.empno }),
                        React.createElement(TextField, { disabled: true, underlined: true, value: row.lastname }),
                        React.createElement(TextField, { disabled: true, underlined: true, value: row.firstname }),
                        React.createElement(TextField, { className: styles.comRow, multiline: true, placeholder: "Type Comments", underlined: true, value: formatStr(row.comments), onChanged: function (textval) { row.comments = textval; } }))); }))))));
    };
    SimpleListOperations.prototype._onChange = function (row) {
        var _this = this;
        return function (ev, checked) {
            var newStatus = checked ? "Completed" : "Not Started";
            _this._updateListItem({ status: newStatus }, row);
        };
    };
    SimpleListOperations.prototype._updateListItem = function (_a, row) {
        var status = _a.status;
        return __awaiter(this, void 0, void 0, function () {
            var today;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        today = new Date();
                        return [4 /*yield*/, sp.web.lists.getByTitle("Requests").items.getById(row.id).update({
                                OData__Status: status,
                                DepartmentApproverComments: "Comments By: " + "\n" + "Comments Entered on : " + "\n" + today + "Comments: " + row.comments + "\n",
                                DepartmentApproverDate: today
                            })];
                    case 1:
                        _b.sent();
                        this._getListItems();
                        return [2 /*return*/];
                }
            });
        });
    };
    SimpleListOperations.prototype._getListItems = function () {
        return __awaiter(this, void 0, void 0, function () {
            var allItems, items;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sp.web.lists.getByTitle("Requests").items.getAll()];
                    case 1:
                        allItems = _a.sent();
                        items = [];
                        allItems.forEach(function (element) {
                            items.push({ id: element.Id,
                                title: element.Title,
                                comments: element.DepartmentApproverComments,
                                deptdate: element.DepartmentApproverDate,
                                deptstatus: element.OData__Status,
                                empno: element.EmployeeNumber,
                                lastname: element.LastName,
                                firstname: element.FirstName1
                            });
                        });
                        this.setState({ updateText: items });
                        return [2 /*return*/];
                }
            });
        });
    };
    SimpleListOperations.prototype._clearClicked = function () {
        this.setState({ addText: '', addComment: '' });
    };
    __decorate([
        autobind
    ], SimpleListOperations.prototype, "_clearClicked", null);
    return SimpleListOperations;
}(React.Component));
export default SimpleListOperations;
//# sourceMappingURL=SimpleListOperations.js.map