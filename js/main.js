var techtest;
(function (techtest) {
    var application = (function () {
        function application() {
        }
        application.prototype.addTask = function (company) {
            this.tasks.push(company);
        };
        application.prototype.processTasks = function () {
            this.tasks.forEach(function (company) {
                company.RenderUpdate();
            });
        };
        return application;
    }());
    techtest.application = application;
})(techtest || (techtest = {}));
var techtest;
(function (techtest) {
    var Company = (function () {
        function Company() {
        }
        Company.prototype.UpdateRecieved = function () {
        };
        Company.prototype.Render = function () {
        };
        Company.prototype.RenderUpdate = function () {
        };
        return Company;
    }());
    techtest.Company = Company;
})(techtest || (techtest = {}));
var test = "test";
//# sourceMappingURL=main.js.map