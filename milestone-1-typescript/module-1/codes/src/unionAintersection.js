"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getDashBoard = (role) => {
    if (role === 'admin') {
        return "Admin Dashboard";
    }
    else if (role === 'user') {
        return "User Dashboard";
    }
    else {
        return 'Guest Dashboard';
    }
};
console.log(getDashBoard('guest'));
//# sourceMappingURL=unionAintersection.js.map