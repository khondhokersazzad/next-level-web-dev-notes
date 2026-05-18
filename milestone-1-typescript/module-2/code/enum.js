"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Role;
(function (Role) {
    Role["admin"] = "Admin";
    Role["moderator"] = "Moderator";
    Role["user"] = "User";
})(Role || (Role = {}));
// let role:Role = Role.admin 
const canEdit = (role) => {
    if (role === Role.admin || role === Role.moderator) {
        return true;
    }
    else {
        return false;
    }
};
console.log(canEdit(Role.moderator));
//# sourceMappingURL=enum.js.map