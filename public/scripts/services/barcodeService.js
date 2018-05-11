app
    .factory('barcodeService', ['$http', function ($http) {
        var currentDate;
        var error

        return {
            validateBarcode: function (code, profileId,pivvit) {
                currentDate = new Date();
                currentDate = Date.parse(currentDate);
                var codeInform = code.split('-'),
                    pivvitId = parseInt(codeInform[0]),
                    codeProfilId = parseInt(codeInform[1]),
                    expiredDate = Date.parse(codeInform[2])
                if (codeProfilId !== profileId || pivvitId !== pivvit) {
                    error = "INVALID";
                    return JSON.stringify({'success': false, 'message': error});
                }
                else if (expiredDate < currentDate) {
                    error = "EXPIRED";
                    return JSON.stringify({'success': false, 'message': error});
                }else{
                    return false;
                }

            }

        }
    }]);