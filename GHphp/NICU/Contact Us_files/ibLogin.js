var Byond;
(function(Byond) {
    var Core = Byond.Core;
    var Modules;
    (function(Modules) {
        var InternetBanking;
        (function(InternetBanking) {
            var defaultSecureSettings = {
                url: 'https://digital.qudosbank.com.au/?defaultURL=true',
                target: 'IBANK4'
            };
            var sites;
            var ibWindow;
            var maintenanceWindow;
            var version = '?v' + Math.random();


            var xmlhttp = new XMLHttpRequest();
            var url = "/templates/client/javascript/internetBankingSites.json";

            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    sites = JSON.parse(this.responseText);
                    if (sites._default != null) {
                        _extend(defaultSecureSettings, sites._default);
                    }

                }
            };
            xmlhttp.open("GET", url, true);
            xmlhttp.send();

            // Byond.Common.NetRequest('/templates/client/javascript/internetBankingSites.json' + version, function (e) {
            //     if (this.status != 404) {
            //         try {
            //             sites = JSON.parse(this.responseText);
            //             if (sites._default != null) {
            //                 _extend(defaultSecureSettings, sites._default);
            //             }
            //         }
            //         catch (e) {
            //             throw new Error(Core.ERR.NOT_PARSED.replace(Core.ERR.REPLACE_VAR, "external JSON file"));
            //         }
            //     }
            // });

            function _extend(_object, _extends) {
                for (var i in _extends) {
                    if (Object.prototype.hasOwnProperty.call(_extends, i)) {
                        _object[i] = _extends[i];
                    }
                }
            }

            function sizeBuilder() {
                return ("width=" + (screen.width - 30) +
                    ",height=" + (screen.height - 100));
            }

            function isDown() {
                if (!maintenanceWindow)
                    maintenanceWindow = document.body.querySelector('#maintenanceWindow');
                if (!maintenanceWindow)
                    return false;
                var content = maintenanceWindow.textContent.trim();
                if (content === '')
                    return false;
                if (content === 'test')
                    console.log('TESTING MAINTENANCE WINDOW', sites);
                if (sites != null && !sites.maintenance)
                    throw new Error(Byond.Core.ERR.NOT_PARSED.replace(Byond.Core.ERR.REPLACE_VAR, "maintenance settings json"));
                return true;
            }
            InternetBanking.isDown = isDown;

            function createIBWindow(details) {
                if (details != null) {
                    if (details.url == null)
                        throw new Error(Core.ERR.NOT_DEFINED.replace(Core.ERR.REPLACE_VAR, "details.url"));
                    if (typeof(details.url) !== 'string')
                        throw new Error(Core.ERR.NOT_AN_INSTANCE_OF
                            .replace(Core.ERR.REPLACE_VAR, "details.url")
                            .replace(Core.ERR.REPLACE_INST, "string"));
                }
                var deets = defaultSecureSettings;
                _extend(deets, details);
                if (deets.url[0] == '/')
                    deets.url = window.location.protocol + '//' + window.location.hostname + deets.url;
                if (deets.target !== "self") {
                    ibWindow = window.open(deets.url, deets.target, "status=yes,scrollbars=yes,resizable=yes,top=0,left=0," + sizeBuilder(), true);
                } else {
                    window.location.assign(deets.url);
                }
            }

            function closeWindow() {
                if (ibWindow != null) {
                    ibWindow.close();
                }
            }
            InternetBanking.closeWindow = closeWindow;

            function Login(mode, siteObj) {

                var xmlhttp = new XMLHttpRequest();
                var url = "/templates/client/javascript/internetBankingSites.json";

                xmlhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        sites = JSON.parse(this.responseText);
                        if (sites._default != null) {
                            _extend(defaultSecureSettings, sites._default);
                        }

                    }
                };
                xmlhttp.open("GET", url, true);
                xmlhttp.send();

                if (isDown())
                    mode = 'maintenance';
                if (mode == null && typeof(mode) !== 'string')
                    mode = 'desktop';
                if (!siteObj || !siteObj.url || typeof(siteObj.url) !== 'string')
                    siteObj = sites;
                createIBWindow(siteObj[mode]);
            }
            InternetBanking.Login = Login;
        })(InternetBanking = Modules.InternetBanking || (Modules.InternetBanking = {}));

        function IBLogin(mode, siteObj) {
            InternetBanking.Login(mode, siteObj);
        }
        Modules.IBLogin = IBLogin;
    })(Modules = Byond.Modules || (Byond.Modules = {}));
})(Byond || (Byond = {}));

function IBLogin() {
    Byond.Modules.IBLogin('desktop');
}

function IBLoginMobile() {
    Byond.Modules.IBLogin('mobile');
}

function iblogin() {
    IBLogin();
}

function Interntbanking(argument) {
    Byond.Modules.IBLogin("IBmobile");
}

function mobbanking(argument) {
    Byond.Modules.IBLogin("mobile");
}
//# sourceMappingURL=ibLogin.js.map