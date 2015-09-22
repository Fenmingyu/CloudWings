TabSidemenuApp
    .controller('NavCtrl', function ($scope, $state, $ionicSideMenuDelegate) {
        $state.go('intro');
        $scope.showMenu = function () {
            $ionicSideMenuDelegate.toggleLeft();
        };
        $scope.showRightMenu = function () {
            $ionicSideMenuDelegate.toggleRight();
        };
    })
    .controller('HomeTabCtrl', function ($scope) {
        $scope.data = {
            badgeCount: 2
        };
        $scope.part = function (path) {
            alert(path);
            console.log(path);
        }
    })
    .controller('MessageCtrl', function ($scope) {
        $scope.data = {
            badgeCount: 8
        };
    })
    .controller('BookingCtrl', function ($scope) {
        $scope.data = {
            badgeCount: 1
        };
    })
    .controller('LoginCtrl', function ($scope, $window, $state) {

        $scope.regions = [
            {
                code: 'US',
                value: 'English'
            },
            {
                code: 'ZH',
                value: '简体中文'
            }
        ];
        $scope.langs = {
            //home page (signin)
            signin_input_account: {
                US: 'Email/Phone number',
                ZH: '邮箱或手机号码'
            },
            signin_input_password: {
                US: 'Password',
                ZH: '密码'
            },
            signin_input_resetpwd: {
                US: 'Forgot Password?',
                ZH: '忘记登录密码？'
            },
            signin_input_login: {
                US: 'SIGN IN',
                ZH: '登录'
            },
            signin_input_signup: {
                US: 'Don\'t have an account? Sign Up',
                ZH: '没有帐户？ 注册'
            },
            //verify page
            verify_title: {
                US: 'Mobile Phone Verification',
                ZH: '手机验证'
            },
            verify_tip: {
                US: 'Tap on the button below to receive a verification code',
                ZH: '点击下面的按钮来接收验证码。'
            },
            verify_send_sms_btn: {
                US: 'SEND SMS WITH THE CODE',
                ZH: '发送短信的代码'
            },
            verify_submit_btn: {
                US: 'VERIFY CODE',
                ZH: '验证代码'
            },
            verify_input_smscode_placeholder: {
                US: 'Verification Code',
                ZH: '请输入验证代码'
            }

        };

        $scope.showForm = true;

        // Default values
        $scope.data = {};
        $scope.data.account = '';
        $scope.data.password = '';
        $scope.data.language = 'English';
        $scope.data.country_code = 'US';
        //$scope.data.signin_input_signup = 'US';

        $scope.updateLanguage = function (item) {
            $window.localStorage.setItem('language', item.code);
            $scope.data.country_code = item.code;
        }

        $scope.submit = function () {
            if (!$scope.data.account) {
                alert('Info required');
                return;
            } else {
                alert('Success!');
                $state.go('tabs.home');
            }
            //$scope.showForm = false;
        };
        $scope.resetpwd = function () {
            alert('resetpwd modal');
        };
        $scope.signup = function () {
            alert('signup modal');
        };
    })
    .controller('SignUpCtrl', function ($scope, $state, $ionicModal, $timeout, $ionicSideMenuDelegate) {
        $scope.showForm = true;

        // Default values
        $scope.data = {};
        $scope.data.name = '';
        $scope.data.email = '';
        $scope.data.phone = '';
        $scope.data.password = '';
        $scope.country = {
            name: 'China',
            icon: 'img/flags/China.png',
            dial_code: "+86",
            code: 'CN'
        };

        // Form data for the country list modal
        $scope.countries = [
            {
                name: "China",
                icon: 'img/flags/China.png',
                dial_code: "+86",
                code: "CN"
            },
            {
                name: "Hong Kong",
                icon: 'img/flags/Hong_Kong.png',
                dial_code: "+852",
                code: "HK"
            },
            {
                name: "Korea, Democratic People's Republic of",
                icon: 'img/flags/North_Korea.png',
                dial_code: "+850",
                code: "KP"
            },
            {
                name: "Russia",
                icon: 'img/flags/Russian_Federation.png',
                dial_code: "+7",
                code: "RU"
            },
            {
                name: "Germany",
                icon: 'img/flags/Germany.png',
                dial_code: "+49",
                code: "DE"
            },
            {
                name: "United States",
                icon: 'img/flags/United_States_of_America.png',
                dial_code: "+1",
                code: "US"
            },
            {
                name: "Israel",
                icon: 'img/flags/Israel.png',
                dial_code: "+972",
                code: "IL"
            },
            {
                name: "Afghanistan",
                icon: 'img/flags/Afghanistan.png',
                dial_code: "+93",
                code: "AF"
            },
            {
                name: "Albania",
                icon: 'img/flags/Albania.png',
                dial_code: "+355",
                code: "AL"
            },
            {
                name: "Algeria",
                icon: 'img/flags/Algeria.png',
                dial_code: "+213",
                code: "DZ"
            },
            {
                name: "AmericanSamoa",
                icon: 'img/flags/American_Samoa.png',
                dial_code: "+1 684",
                code: "AS"
            }, {
                name: "Andorra",
                icon: 'img/flags/Andorra.png',
                dial_code: "+376",
                code: "AD"
            }, {
                name: "Angola",
                icon: 'img/flags/Angola.png',
                dial_code: "+244",
                code: "AO"
            }, {
                name: "Anguilla",
                icon: 'img/flags/Anguilla.png',
                dial_code: "+1 264",
                code: "AI"
            }, {
                name: "Antigua and Barbuda",
                icon: 'img/flags/Antigua_and_Barbuda.png',
                dial_code: "+1268",
                code: "AG"
            }, {
                name: "Argentina",
                icon: 'img/flags/Argentina.png',
                dial_code: "+54",
                code: "AR"
            }, {
                name: "Armenia",
                icon: 'img/flags/Armenia.png',
                dial_code: "+374",
                code: "AM"
            }, {
                name: "Aruba",
                icon: 'img/flags/Aruba.png',
                dial_code: "+297",
                code: "AW"
            }, {
                name: "Australia",
                icon: 'img/flags/Australia.png',
                dial_code: "+61",
                code: "AU"
            }, {
                name: "Austria",
                icon: 'img/flags/Austria.png',
                dial_code: "+43",
                code: "AT"
            }, {
                name: "Azerbaijan",
                icon: 'img/flags/Azerbaijan.png',
                dial_code: "+994",
                code: "AZ"
            }, {
                name: "Bahamas",
                icon: 'img/flags/Bahamas.png',
                dial_code: "+1 242",
                code: "BS"
            }, {
                name: "Bahrain",
                icon: 'img/flags/Bahrain.png',
                dial_code: "+973",
                code: "BH"
            }, {
                name: "Bangladesh",
                icon: 'img/flags/Bangladesh.png',
                dial_code: "+880",
                code: "BD"
            }, {
                name: "Barbados",
                icon: 'img/flags/Barbados.png',
                dial_code: "+1 246",
                code: "BB"
            }, {
                name: "Belarus",
                icon: 'img/flags/Belarus.png',
                dial_code: "+375",
                code: "BY"
            }, {
                name: "Belgium",
                icon: 'img/flags/Belgium.png',
                dial_code: "+32",
                code: "BE"
            }, {
                name: "Belize",
                icon: 'img/flags/Belize.png',
                dial_code: "+501",
                code: "BZ"
            }, {
                name: "Benin",
                icon: 'img/flags/Benin.png',
                dial_code: "+229",
                code: "BJ"
            }, {
                name: "Bermuda",
                icon: 'img/flags/Bermuda.png',
                dial_code: "+1 441",
                code: "BM"
            }, {
                name: "Bhutan",
                icon: 'img/flags/Bhutan.png',
                dial_code: "+975",
                code: "BT"
            }, {
                name: "Bosnia and Herzegovina",
                icon: 'img/flags/Bosnia.png',
                dial_code: "+387",
                code: "BA"
            }, {
                name: "Botswana",
                icon: 'img/flags/Botswana.png',
                dial_code: "+267",
                code: "BW"
            }, {
                name: "Brazil",
                icon: 'img/flags/Brazil.png',
                dial_code: "+55",
                code: "BR"
            }, {
                name: "British Indian Ocean Territory",
                icon: 'img/flags/British_Virgin_Islands.png',
                dial_code: "+246",
                code: "IO"
            }, {
                name: "Bulgaria",
                icon: 'img/flags/Bulgaria.png',
                dial_code: "+359",
                code: "BG"
            }, {
                name: "Burkina Faso",
                icon: 'img/flags/Burkina_Faso.png',
                dial_code: "+226",
                code: "BF"
            }, {
                name: "Burundi",
                icon: 'img/flags/Burundi.png',
                dial_code: "+257",
                code: "BI"
            }, {
                name: "Cambodia",
                icon: 'img/flags/Cambodia.png',
                dial_code: "+855",
                code: "KH"
            }, {
                name: "Cameroon",
                icon: 'img/flags/Cameroon.png',
                dial_code: "+237",
                code: "CM"
            }, {
                name: "Canada",
                icon: 'img/flags/Canada.png',
                dial_code: "+1",
                code: "CA"
            }, {
                name: "Cape Verde",
                icon: 'img/flags/Cape_Verde.png',
                dial_code: "+238",
                code: "CV"
            }, {
                name: "Cayman Islands",
                icon: 'img/flags/Cayman_Islands.png',
                dial_code: "+ 345",
                code: "KY"
            }, {
                name: "Central African Republic",
                icon: 'img/flags/Central_African_Republic.png',
                dial_code: "+236",
                code: "CF"
            }, {
                name: "Chad",
                icon: 'img/flags/Chad.png',
                dial_code: "+235",
                code: "TD"
            }, {
                name: "Chile",
                icon: 'img/flags/Chile.png',
                dial_code: "+56",
                code: "CL"
            }, {
                name: "Christmas Island",
                icon: 'img/flags/Christmas_Island.png',
                dial_code: "+61",
                code: "CX"
            }, {
                name: "Colombia",
                icon: 'img/flags/Colombia.png',
                dial_code: "+57",
                code: "CO"
            }, {
                name: "Comoros",
                icon: 'img/flags/Comoros.png',
                dial_code: "+269",
                code: "KM"
            }, {
                name: "Congo",
                icon: 'img/flags/Republic_of_the_Congo.png',
                dial_code: "+242",
                code: "CG"
            }, {
                name: "Cook Islands",
                icon: 'img/flags/Cook_Islands.png',
                dial_code: "+682",
                code: "CK"
            }, {
                name: "Costa Rica",
                icon: 'img/flags/Costa_Rica.png',
                dial_code: "+506",
                code: "CR"
            }, {
                name: "Croatia",
                icon: 'img/flags/Croatia.png',
                dial_code: "+385",
                code: "HR"
            }, {
                name: "Cuba",
                icon: 'img/flags/Cuba.png',
                dial_code: "+53",
                code: "CU"
            }, {
                name: "Cyprus",
                icon: 'img/flags/Cyprus.png',
                dial_code: "+537",
                code: "CY"
            }, {
                name: "Czech Republic",
                icon: 'img/flags/Czech_Republic.png',
                dial_code: "+420",
                code: "CZ"
            }, {
                name: "Denmark",
                icon: 'img/flags/Denmark.png',
                dial_code: "+45",
                code: "DK"
            }, {
                name: "Djibouti",
                icon: 'img/flags/Djibouti.png',
                dial_code: "+253",
                code: "DJ"
            }, {
                name: "Dominica",
                icon: 'img/flags/Dominica.png',
                dial_code: "+1 767",
                code: "DM"
            }, {
                name: "Dominican Republic",
                icon: 'img/flags/Dominican_Republic.png',
                dial_code: "+1 849",
                code: "DO"
            }, {
                name: "Ecuador",
                icon: 'img/flags/Ecuador.png',
                dial_code: "+593",
                code: "EC"
            }, {
                name: "Egypt",
                icon: 'img/flags/Egypt.png',
                dial_code: "+20",
                code: "EG"
            }, {
                name: "El Salvador",
                icon: 'img/flags/El_Salvador.png',
                dial_code: "+503",
                code: "SV"
            }, {
                name: "Equatorial Guinea",
                icon: 'img/flags/Equatorial_Guinea.png',
                dial_code: "+240",
                code: "GQ"
            }, {
                name: "Eritrea",
                icon: 'img/flags/Eritrea.png',
                dial_code: "+291",
                code: "ER"
            }, {
                name: "Estonia",
                icon: 'img/flags/Estonia.png',
                dial_code: "+372",
                code: "EE"
            }, {
                name: "Ethiopia",
                icon: 'img/flags/Ethiopia.png',
                dial_code: "+251",
                code: "ET"
            }, {
                name: "Faroe Islands",
                icon: 'img/flags/Faroe_Islands.png',
                dial_code: "+298",
                code: "FO"
            }, {
                name: "Fiji",
                icon: 'img/flags/Fiji.png',
                dial_code: "+679",
                code: "FJ"
            }, {
                name: "Finland",
                icon: 'img/flags/Finland.png',
                dial_code: "+358",
                code: "FI"
            }, {
                name: "France",
                icon: 'img/flags/France.png',
                dial_code: "+33",
                code: "FR"
            }, {
                name: "French Guiana",
                icon: 'img/flags/France.png',
                dial_code: "+594",
                code: "GF"
            }, {
                name: "French Polynesia",
                icon: 'img/flags/French_Polynesia.png',
                dial_code: "+689",
                code: "PF"
            }, {
                name: "Gabon",
                icon: 'img/flags/Gabon.png',
                dial_code: "+241",
                code: "GA"
            }, {
                name: "Gambia",
                icon: 'img/flags/Gambia.png',
                dial_code: "+220",
                code: "GM"
            }, {
                name: "Georgia",
                icon: 'img/flags/Georgia.png',
                dial_code: "+995",
                code: "GE"
            }, {
                name: "Ghana",
                icon: 'img/flags/Ghana.png',
                dial_code: "+233",
                code: "GH"
            }, {
                name: "Gibraltar",
                icon: 'img/flags/Gibraltar.png',
                dial_code: "+350",
                code: "GI"
            }, {
                name: "Greece",
                icon: 'img/flags/Greece.png',
                dial_code: "+30",
                code: "GR"
            }, {
                name: "Greenland",
                icon: 'img/flags/Greenland.png',
                dial_code: "+299",
                code: "GL"
            }, {
                name: "Grenada",
                icon: 'img/flags/Grenada.png',
                dial_code: "+1 473",
                code: "GD"
            }, {
                name: "Guam",
                icon: 'img/flags/Guam.png',
                dial_code: "+1 671",
                code: "GU"
            }, {
                name: "Guatemala",
                icon: 'img/flags/Guatemala.png',
                dial_code: "+502",
                code: "GT"
            }, {
                name: "Guinea",
                icon: 'img/flags/Guinea.png',
                dial_code: "+224",
                code: "GN"
            }, {
                name: "Guinea Bissau",
                icon: 'img/flags/Guinea_Bissau.png',
                dial_code: "+245",
                code: "GW"
            }, {
                name: "Guyana",
                icon: 'img/flags/Guyana.png',
                dial_code: "+595",
                code: "GY"
            }, {
                name: "Haiti",
                icon: 'img/flags/Haiti.png',
                dial_code: "+509",
                code: "HT"
            }, {
                name: "Honduras",
                icon: 'img/flags/Honduras.png',
                dial_code: "+504",
                code: "HN"
            }, {
                name: "Hungary",
                icon: 'img/flags/Hungary.png',
                dial_code: "+36",
                code: "HU"
            }, {
                name: "Iceland",
                icon: 'img/flags/Iceland.png',
                dial_code: "+354",
                code: "IS"
            }, {
                name: "India",
                icon: 'img/flags/India.png',
                dial_code: "+91",
                code: "IN"
            }, {
                name: "Indonesia",
                icon: 'img/flags/Indonesia.png',
                dial_code: "+62",
                code: "ID"
            }, {
                name: "Iraq",
                icon: 'img/flags/Iraq.png',
                dial_code: "+964",
                code: "IQ"
            }, {
                name: "Ireland",
                icon: 'img/flags/Ireland.png',
                dial_code: "+353",
                code: "IE"
            }, {
                name: "Israel",
                icon: 'img/flags/Israel.png',
                dial_code: "+972",
                code: "IL"
            }, {
                name: "Italy",
                icon: 'img/flags/Italy.png',
                dial_code: "+39",
                code: "IT"
            }, {
                name: "Jamaica",
                icon: 'img/flags/Jamaica.png',
                dial_code: "+1 876",
                code: "JM"
            }, {
                name: "Japan",
                icon: 'img/flags/Japan.png',
                dial_code: "+81",
                code: "JP"
            }, {
                name: "Jordan",
                icon: 'img/flags/Jordan.png',
                dial_code: "+962",
                code: "JO"
            }, {
                name: "Kazakhstan",
                icon: 'img/flags/Kazakhstan.png',
                dial_code: "+7 7",
                code: "KZ"
            }, {
                name: "Kenya",
                icon: 'img/flags/Kenya.png',
                dial_code: "+254",
                code: "KE"
            }, {
                name: "Kiribati",
                icon: 'img/flags/Kiribati.png',
                dial_code: "+686",
                code: "KI"
            }, {
                name: "Kuwait",
                icon: 'img/flags/Kuwait.png',
                dial_code: "+965",
                code: "KW"
            }, {
                name: "Kyrgyzstan",
                icon: 'img/flags/Kyrgyzstan.png',
                dial_code: "+996",
                code: "KG"
            }, {
                name: "Latvia",
                icon: 'img/flags/Latvia.png',
                dial_code: "+371",
                code: "LV"
            }, {
                name: "Lebanon",
                icon: 'img/flags/Lebanon.png',
                dial_code: "+961",
                code: "LB"
            }, {
                name: "Lesotho",
                icon: 'img/flags/Lesotho.png',
                dial_code: "+266",
                code: "LS"
            }, {
                name: "Liberia",
                icon: 'img/flags/Liberia.png',
                dial_code: "+231",
                code: "LR"
            }, {
                name: "Liechtenstein",
                icon: 'img/flags/Liechtenstein.png',
                dial_code: "+423",
                code: "LI"
            }, {
                name: "Lithuania",
                icon: 'img/flags/Lithuania.png',
                dial_code: "+370",
                code: "LT"
            }, {
                name: "Luxembourg",
                icon: 'img/flags/Luxembourg.png',
                dial_code: "+352",
                code: "LU"
            }, {
                name: "Madagascar",
                icon: 'img/flags/Madagascar.png',
                dial_code: "+261",
                code: "MG"
            }, {
                name: "Malawi",
                icon: 'img/flags/Malawi.png',
                dial_code: "+265",
                code: "MW"
            }, {
                name: "Malaysia",
                icon: 'img/flags/Malaysia.png',
                dial_code: "+60",
                code: "MY"
            }, {
                name: "Maldives",
                icon: 'img/flags/Maldives.png',
                dial_code: "+960",
                code: "MV"
            }, {
                name: "Mali",
                icon: 'img/flags/Mali.png',
                dial_code: "+223",
                code: "ML"
            }, {
                name: "Malta",
                icon: 'img/flags/Malta.png',
                dial_code: "+356",
                code: "MT"
            }, {
                name: "Marshall Islands",
                icon: 'img/flags/Marshall_Islands.png',
                dial_code: "+692",
                code: "MH"
            }, {
                name: "Martinique",
                icon: 'img/flags/Martinique.png',
                dial_code: "+596",
                code: "MQ"
            }, {
                name: "Mauritania",
                icon: 'img/flags/Mauritania.png',
                dial_code: "+222",
                code: "MR"
            }, {
                name: "Mauritius",
                icon: 'img/flags/Mauritius.png',
                dial_code: "+230",
                code: "MU"
            }, {
                name: "Mexico",
                icon: 'img/flags/Mexico.png',
                dial_code: "+52",
                code: "MX"
            }, {
                name: "Monaco",
                icon: 'img/flags/Monaco.png',
                dial_code: "+377",
                code: "MC"
            }, {
                name: "Mongolia",
                icon: 'img/flags/Mongolia.png',
                dial_code: "+976",
                code: "MN"
            }, {
                name: "Montenegro",
                icon: 'img/flags/Serbia_and_Montenegro.png',
                dial_code: "+382",
                code: "ME"
            }, {
                name: "Montserrat",
                icon: 'img/flags/Montserrat.png',
                dial_code: "+1664",
                code: "MS"
            }, {
                name: "Morocco",
                icon: 'img/flags/Morocco.png',
                dial_code: "+212",
                code: "MA"
            }, {
                name: "Myanmar",
                icon: 'img/flags/Myanmar.png',
                dial_code: "+95",
                code: "MM"
            }, {
                name: "Namibia",
                icon: 'img/flags/Namibia.png',
                dial_code: "+264",
                code: "NA"
            }, {
                name: "Nauru",
                icon: 'img/flags/Nauru.png',
                dial_code: "+674",
                code: "NR"
            }, {
                name: "Nepal",
                icon: 'img/flags/Nepal.png',
                dial_code: "+977",
                code: "NP"
            }, {
                name: "Netherlands",
                icon: 'img/flags/Netherlands.png',
                dial_code: "+31",
                code: "NL"
            }, {
                name: "Netherlands Antilles",
                icon: 'img/flags/Netherlands_Antilles.png',
                dial_code: "+599",
                code: "AN"
            }, {
                name: "New Zealand",
                icon: 'img/flags/New_Zealand.png',
                dial_code: "+64",
                code: "NZ"
            }, {
                name: "Nicaragua",
                icon: 'img/flags/Nicaragua.png',
                dial_code: "+505",
                code: "NI"
            }, {
                name: "Niger",
                icon: 'img/flags/Niger.png',
                dial_code: "+227",
                code: "NE"
            }, {
                name: "Nigeria",
                icon: 'img/flags/Nigeria.png',
                dial_code: "+234",
                code: "NG"
            }, {
                name: "Niue",
                icon: 'img/flags/Niue.png',
                dial_code: "+683",
                code: "NU"
            }, {
                name: "Norfolk Island",
                icon: 'img/flags/Norfolk_Island.png',
                dial_code: "+672",
                code: "NF"
            }, {
                name: "Norway",
                icon: 'img/flags/Norway.png',
                dial_code: "+47",
                code: "NO"
            }, {
                name: "Oman",
                icon: 'img/flags/Oman.png',
                dial_code: "+968",
                code: "OM"
            }, {
                name: "Pakistan",
                icon: 'img/flags/Pakistan.png',
                dial_code: "+92",
                code: "PK"
            }, {
                name: "Palau",
                icon: 'img/flags/Palau.png',
                dial_code: "+680",
                code: "PW"
            }, {
                name: "Panama",
                icon: 'img/flags/Panama.png',
                dial_code: "+507",
                code: "PA"
            }, {
                name: "Papua New Guinea",
                icon: 'img/flags/Papua_New_Guinea.png',
                dial_code: "+675",
                code: "PG"
            }, {
                name: "Paraguay",
                icon: 'img/flags/Paraguay.png',
                dial_code: "+595",
                code: "PY"
            }, {
                name: "Peru",
                icon: 'img/flags/Peru.png',
                dial_code: "+51",
                code: "PE"
            }, {
                name: "Philippines",
                icon: 'img/flags/Philippines.png',
                dial_code: "+63",
                code: "PH"
            }, {
                name: "Poland",
                icon: 'img/flags/Poland.png',
                dial_code: "+48",
                code: "PL"
            }, {
                name: "Portugal",
                icon: 'img/flags/Portugal.png',
                dial_code: "+351",
                code: "PT"
            }, {
                name: "Puerto Rico",
                icon: 'img/flags/Puerto_Rico.png',
                dial_code: "+1 939",
                code: "PR"
            }, {
                name: "Qatar",
                icon: 'img/flags/Qatar.png',
                dial_code: "+974",
                code: "QA"
            }, {
                name: "Romania",
                icon: 'img/flags/Romania.png',
                dial_code: "+40",
                code: "RO"
            }, {
                name: "Rwanda",
                icon: 'img/flags/Rwanda.png',
                dial_code: "+250",
                code: "RW"
            }, {
                name: "Samoa",
                icon: 'img/flags/Samoa.png',
                dial_code: "+685",
                code: "WS"
            }, {
                name: "San Marino",
                icon: 'img/flags/San_Marino.png',
                dial_code: "+378",
                code: "SM"
            }, {
                name: "Saudi Arabia",
                icon: 'img/flags/Saudi_Arabia.png',
                dial_code: "+966",
                code: "SA"
            }, {
                name: "Senegal",
                icon: 'img/flags/Senegal.png',
                dial_code: "+221",
                code: "SN"
            }, {
                name: "Serbia",
                icon: 'img/flags/Serbia_and_Montenegro.png',
                dial_code: "+381",
                code: "RS"
            }, {
                name: "Seychelles",
                icon: 'img/flags/Seychelles.png',
                dial_code: "+248",
                code: "SC"
            }, {
                name: "Sierra Leone",
                icon: 'img/flags/Sierra_Leone.png',
                dial_code: "+232",
                code: "SL"
            }, {
                name: "Singapore",
                icon: 'img/flags/Singapore.png',
                dial_code: "+65",
                code: "SG"
            }, {
                name: "Slovakia",
                icon: 'img/flags/Slovakia.png',
                dial_code: "+421",
                code: "SK"
            }, {
                name: "Slovenia",
                icon: 'img/flags/Slovenia.png',
                dial_code: "+386",
                code: "SI"
            }, {
                name: "Solomon Islands",
                icon: 'img/flags/Soloman_Islands.png',
                dial_code: "+677",
                code: "SB"
            }, {
                name: "South Africa",
                icon: 'img/flags/South_Africa.png',
                dial_code: "+27",
                code: "ZA"
            }, {
                name: "South Georgia and the South Sandwich Islands",
                icon: 'img/flags/South_Georgia.png',
                dial_code: "+500",
                code: "GS"
            }, {
                name: "Spain",
                icon: 'img/flags/Spain.png',
                dial_code: "+34",
                code: "ES"
            }, {
                name: "Sri Lanka",
                icon: 'img/flags/Sri_Lanka.png',
                dial_code: "+94",
                code: "LK"
            }, {
                name: "Sudan",
                icon: 'img/flags/Sudan.png',
                dial_code: "+249",
                code: "SD"
            }, {
                name: "Suriname",
                icon: 'img/flags/Suriname.png',
                dial_code: "+597",
                code: "SR"
            }, {
                name: "Swaziland",
                icon: 'img/flags/Swaziland.png',
                dial_code: "+268",
                code: "SZ"
            }, {
                name: "Sweden",
                icon: 'img/flags/Sweden.png',
                dial_code: "+46",
                code: "SE"
            }, {
                name: "Switzerland",
                icon: 'img/flags/Switzerland.png',
                dial_code: "+41",
                code: "CH"
            }, {
                name: "Tajikistan",
                icon: 'img/flags/Tajikistan.png',
                dial_code: "+992",
                code: "TJ"
            }, {
                name: "Thailand",
                icon: 'img/flags/Thailand.png',
                dial_code: "+66",
                code: "TH"
            }, {
                name: "Togo",
                icon: 'img/flags/Togo.png',
                dial_code: "+228",
                code: "TG"
            }, {
                name: "Tonga",
                icon: 'img/flags/Tonga.png',
                dial_code: "+676",
                code: "TO"
            }, {
                name: "Trinidad and Tobago",
                icon: 'img/flags/Trinidad_and_Tobago.png',
                dial_code: "+1 868",
                code: "TT"
            }, {
                name: "Tunisia",
                icon: 'img/flags/Tunisia.png',
                dial_code: "+216",
                code: "TN"
            }, {
                name: "Turkey",
                icon: 'img/flags/Turkey.png',
                dial_code: "+90",
                code: "TR"
            }, {
                name: "Turkmenistan",
                icon: 'img/flags/Turkmenistan.png',
                dial_code: "+993",
                code: "TM"
            }, {
                name: "Turks and Caicos Islands",
                icon: 'img/flags/Turks_and_Caicos_Islands.png',
                dial_code: "+1 649",
                code: "TC"
            }, {
                name: "Tuvalu",
                icon: 'img/flags/Tuvalu.png',
                dial_code: "+688",
                code: "TV"
            }, {
                name: "Uganda",
                icon: 'img/flags/Uganda.png',
                dial_code: "+256",
                code: "UG"
            }, {
                name: "Ukraine",
                icon: 'img/flags/Ukraine.png',
                dial_code: "+380",
                code: "UA"
            }, {
                name: "United Arab Emirates",
                icon: 'img/flags/UAE.png',
                dial_code: "+971",
                code: "AE"
            }, {
                name: "United Kingdom",
                icon: 'img/flags/United_Kingdom.png',
                dial_code: "+44",
                code: "GB"
            }, {
                name: "Uruguay",
                icon: 'img/flags/Uruguay.png',
                dial_code: "+598",
                code: "UY"
            }, {
                name: "Uzbekistan",
                icon: 'img/flags/Uzbekistan.png',
                dial_code: "+998",
                code: "UZ"
            }, {
                name: "Vanuatu",
                icon: 'img/flags/Vanuatu.png',
                dial_code: "+678",
                code: "VU"
            }, {
                name: "Wallis and Futuna",
                icon: 'img/flags/Wallis_and_Futuna.png',
                dial_code: "+681",
                code: "WF"
            }, {
                name: "Yemen",
                icon: 'img/flags/Yemen.png',
                dial_code: "+967",
                code: "YE"
            }, {
                name: "Zambia",
                icon: 'img/flags/Zambia.png',
                dial_code: "+260",
                code: "ZM"
            }, {
                name: "Zimbabwe",
                icon: 'img/flags/Zimbabwe.png',
                dial_code: "+263",
                code: "ZW"
            }, {
                name: "Bolivia, Plurinational State of",
                icon: 'img/flags/Bolivia.png',
                dial_code: "+591",
                code: "BO"
            }, {
                name: "Brunei Darussalam",
                icon: 'img/flags/Brunei.png',
                dial_code: "+673",
                code: "BN"
            }, {
                name: "Congo, The Democratic Republic of the",
                icon: 'img/flags/Democratic_Republic_of_the_Congo.png',
                dial_code: "+243",
                code: "CD"
            }, {
                name: "Falkland Islands (Malvinas)",
                icon: 'img/flags/Falkland_Islands.png',
                dial_code: "+500",
                code: "FK"
            }, {
                name: "Iran, Islamic Republic of",
                icon: 'img/flags/Iran.png',
                dial_code: "+98",
                code: "IR"
            }, {
                name: "Korea, Republic of",
                icon: 'img/flags/South_Korea.png',
                dial_code: "+82",
                code: "KR"
            }, {
                name: "Lao People's Democratic Republic",
                icon: 'img/flags/Laos.png',
                dial_code: "+856",
                code: "LA"
            }, {
                name: "Libyan Arab Jamahiriya",
                icon: 'img/flags/Libya.png',
                dial_code: "+218",
                code: "LY"
            }, {
                name: "Macao",
                icon: 'img/flags/Macao.png',
                dial_code: "+853",
                code: "MO"
            }, {
                name: "Macedonia, The Former Yugoslav Republic of",
                icon: 'img/flags/Macedonia.png',
                dial_code: "+389",
                code: "MK"
            }, {
                name: "Micronesia, Federated States of",
                icon: 'img/flags/Micronesia.png',
                dial_code: "+691",
                code: "FM"
            }, {
                name: "Moldova, Republic of",
                icon: 'img/flags/Moldova.png',
                dial_code: "+373",
                code: "MD"
            }, {
                name: "Mozambique",
                icon: 'img/flags/Mozambique.png',
                dial_code: "+258",
                code: "MZ"
            }, {
                name: "Pitcairn",
                icon: 'img/flags/Pitcairn_Islands.png',
                dial_code: "+872",
                code: "PN"
            }, {
                name: "Saint Barthélemy",
                icon: 'img/flags/Saint_Kitts_and_Nevis.png',
                dial_code: "+590",
                code: "BL"
            }, {
                name: "Saint Helena, Ascension and Tristan Da Cunha",
                icon: 'img/flags/Saint_Lucia.png',
                dial_code: "+290",
                code: "SH"
            }, {
                name: "Saint Kitts and Nevis",
                icon: 'img/flags/Saint_Kitts_and_Nevis.png',
                dial_code: "+1 869",
                code: "KN"
            }, {
                name: "Saint Lucia",
                icon: 'img/flags/Saint_Lucia.png',
                dial_code: "+1 758",
                code: "LC"
            }, {
                name: "Saint Martin",
                icon: 'img/flags/Saint_Lucia.png',
                dial_code: "+590",
                code: "MF"
            }, {
                name: "Saint Pierre and Miquelon",
                icon: 'img/flags/Saint_Pierre.png',
                dial_code: "+508",
                code: "PM"
            }, {
                name: "Saint Vincent and the Grenadines",
                icon: 'img/flags/Saint_Vicent_and_the_Grenadines.png',
                dial_code: "+1 784",
                code: "VC"
            }, {
                name: "Somalia",
                icon: 'img/flags/Somalia.png',
                dial_code: "+252",
                code: "SO"
            }, {
                name: "Syrian Arab Republic",
                icon: 'img/flags/Syria.png',
                dial_code: "+963",
                code: "SY"
            }, {
                name: "Taiwan, Province of China",
                icon: 'img/flags/Taiwan.png',
                dial_code: "+886",
                code: "TW"
            }, {
                name: "Tanzania, United Republic of",
                icon: 'img/flags/Tanzania.png',
                dial_code: "+255",
                code: "TZ"
            }, {
                name: "Timor-Leste",
                icon: 'img/flags/Timor-Leste.png',
                dial_code: "+670",
                code: "TL"
            }, {
                name: "Venezuela, Bolivarian Republic of",
                icon: 'img/flags/Venezuela.png',
                dial_code: "+58",
                code: "VE"
            }, {
                name: "Viet Nam",
                icon: 'img/flags/Vietnam.png',
                dial_code: "+84",
                code: "VN"
            }];

        $scope.updateCountry = function (item) {
            $scope.modal.hide();
            $scope.country = item;
        }

        // Open the country list modal
        $scope.openCountryModal = function () {
            $scope.modal.show();
        };
        // Create the country modal that we will use later
        $ionicModal.fromTemplateUrl('templates/country-list.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeModal = function () {
            $scope.modal.hide();
        };

        $scope.signup = function () {
            if (!$scope.data.name || !$scope.data.email || !$scope.data.password) {
                alert('Info required');
                return;
            } else {
                $state.go('tabs.home');
            }
            //$scope.showForm = false;
        };
    })
    .controller('PwdRecoveryCtrl', function ($scope) {
        $scope.showForm = true;

        // Default values
        $scope.data = {};
        $scope.data.email = '';

        $scope.pwd_recovery = function () {
            if (!$scope.data.email) {
                alert('Password recovery function');
                return;
            }
            //$scope.showForm = false;
        };
    })
    .controller('IntroCtrl', function ($scope, $state, $ionicSlideBoxDelegate) {
        $scope.data = {};
        // Called to navigate to the main app
        $scope.startApp = function () {
            $state.go('tabs.home');
        };
        $scope.next = function () {
            $ionicSlideBoxDelegate.next();
        };
        $scope.previous = function () {
            $ionicSlideBoxDelegate.previous();
        };

        // Called each time the slide changes
        $scope.slideChanged = function (index) {
            $scope.slideIndex = index;
        };
    })
    .controller('PhoneVerifyCtrl', function ($scope, $state) {
        $scope.showForm = true;

        // Default values
        $scope.data = {};
        $scope.data.smscode = '';

        $scope.send_sms = function () {
            if (!$scope.data.smscode) {
                alert('Smscode Info required');
                return;
            }
            //$scope.showForm = false;
        };
        $scope.verify = function () {
            alert('verify modal');
        };
    })
    .controller('CalendarViewCtrl', function ($scope) {
        //Calendar options
        $scope.options = {
            defaultDate: new Date([2015, 06, 23]),
            minDate: new Date([2015, 06, 9]),
            maxDate: new Date([2015, 12, 31]),
            disabledDates: [
                new Date([2015, 06, 17]),
                new Date([2015, 06, 20]),
                new Date([2015, 06, 26]),
                new Date([2015, 07, 5]),
                new Date([2015, 07, 6]),
                new Date([2015, 07, 7]),
                new Date([2015, 07, 8]),
                new Date([2015, 07, 9]),
                new Date([2015, 07, 10]),
                new Date([2015, 07, 11]),
            ],
            dayNamesLength: 1,
            eventClick: function (date) {
                console.log(date);
            },
            dateClick: function (date) {
                console.log(date);
            },
            changeMonth: function (month) {
                console.log(month);
            }
        };

        $scope.events = [
            {foo: 'bar', date: new Date([2015, 6, 24])},
            {foo: 'bar', date: new Date([2015, 6, 19])}
        ];

        //Custom data
        $scope.timeButtons = [
            {
                time: '10:00',
                period: 'am',
                active: ''
            },
            {
                time: '10:30',
                period: 'am',
                active: ''
            },
            {
                time: '11:00',
                period: 'am',
                active: 'active'
            },
            {
                time: '11:30',
                period: 'am',
                active: ''
            },
            {
                time: '12:00',
                period: 'pm',
                active: ''
            }
        ];

        $scope.active = 'item2';

        $scope.setActive = function (type, item, $index) {
            $scope.active = type;
            console.log(item);
            console.log($index);
            $scope.timeButtons[$index] = item;
        };

        $scope.isActive = function (type) {
            return type === $scope.active;
        };

        $scope.updateTime = function () {
            console.log('updateTime');
        }
    })
    .controller('SearchCtrl',function($scope, $timeout, $ionicFilterBar){
        var filterBarInstance;

        function getItems () {
            var items = [];
            for (var x = 1; x < 2000; x++) {
                items.push({text: 'This is item number ' + x + ' which is an ' + (x % 2 === 0 ? 'EVEN' : 'ODD') + ' number.'});
            }
            $scope.items = items;
        }

        getItems();

        $scope.showFilterBar = function () {
            filterBarInstance = $ionicFilterBar.show({
                items: $scope.items,
                update: function (filteredItems) {
                    $scope.items = filteredItems;
                }
            });
        };

        $scope.refreshItems = function () {
            if (filterBarInstance) {
                filterBarInstance();
                filterBarInstance = null;
            }

            $timeout(function () {
                getItems();
                $scope.$broadcast('scroll.refreshComplete');
            }, 1000);
        };
    })
    .controller('ApiCtrl',function($scope,$ionicModal, $ionicPopup,$http,UserService){
        //User info Modal
        $ionicModal.fromTemplateUrl('templates/userinfo-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });
        $scope.openModal = function() {
            $scope.modal.show();
        };
        $scope.closeModal = function() {
            $scope.modal.hide();
        };
        //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hidden', function() {
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function() {
            // Execute action
        });

        $scope.currentUser = UserService.get({user: 1});

        var query = UserService.query();
        query.$promise.then(function(data) {
            $scope.users = data;
            // Do whatever when the request is finished
            console.log($scope.users);
        });
        $scope.setDataForUser = function(userID){
            $scope.currentUser = UserService.get({user:userID});
            $scope.openModal();
        };
        $scope.addUser = function(){
            var data = {name: 'Saimonaaa', email: 'saimon@devdactic.com'};
            $scope.showAlert(JSON.stringify(data));
            UserService.save(data);
        };
        $scope.updateUser = function(){
            $scope.showAlert(JSON.stringify($scope.currentUser));
            UserService.update({user: 1}, $scope.currentUser);
        };
        // An alert dialog
        $scope.showAlert = function(msg) {
            var alertPopup = $ionicPopup.alert({
                title: 'API ALERT',
                template: msg
            });
            alertPopup.then(function(res) {
                console.log(res);
            });
        };

    })
    .controller('FlickrCtrl', function($scope,$ionicPopup, Flickr) {

        $scope.errorMsg = '';

        var doSearch = ionic.debounce(function(query) {
            $scope.errorMsg = 'Requesting ' + $scope.query + '... ';
            Flickr.search(query).then(function(resp) {
                $scope.photos = resp;
                $scope.errorMsg = query+' : Success found.';
            });
        }, 500);

        $scope.search = function() {
            doSearch($scope.query);
        }

        // An alert dialog
        $scope.showAlert = function(msg) {
            var alertPopup = $ionicPopup.alert({
                title: 'Flickr Message',
                template: msg
            });
            alertPopup.then(function(res) {
                console.log(res);
            });
        };
    })
;
