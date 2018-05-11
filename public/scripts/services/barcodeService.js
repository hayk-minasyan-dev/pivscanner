app
    .factory('barcodeService', ['$http', function ($http) {
        var currentDate;
        var error
        var response;


        // 'tid' => $this->params['pivvit_id'],
        //     'pid' => $this->params['profile_id'],
        //     'sid' => $this->params['seller_id'],
        //     'str' => strtotime($this->params['start_date']),
        //     'end' => strtotime($this->params['end_date']),
        //     'quantity' => $this->params['quantity']


        return {

            validateBarcode: function (code, profileId,pivvit) {
               var pivvitId=pivvit.toLowerCase()
                currentDate = new Date();
                currentDate = Date.parse(currentDate);
                var codeInform = code.split('-'),
                    isPivvit = codeInform[0].toString().toLowerCase(),
                    codeProfilId = parseInt(codeInform[1]),
                    expiredDate = Date.parse(codeInform[2])
                if (codeProfilId !== profileId || isPivvit !== pivvitId) {
                    error = "INVALID";
                    return JSON.stringify({'success': false, 'message': error});
                }
                else if (expiredDate < currentDate) {
                    error = "EXPIRED";
                    return JSON.stringify({'success': false, 'message': error});
                }else{
                    return false;
                }


            },

            useBarcode: function (code) {
                {
                    var data = {data: code}
                    $http.post('/getBarcode', data).then(function (response) {
                        if (response.data === 'error') {
                            error = "ALREADY USED";
                            return JSON.stringify({'success': false, 'message': error});

                        } else {
                            var successBarcode = 'ACCEPTED'
                            return JSON.stringify({'success': true, 'message': successBarcode});
                        }
                    });
                }
            }


        }
    }]);