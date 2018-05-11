app.controller('barcodeController', ['$http', '$scope', 'barcodeService',
    function ($http, $scope, barcodeService) {
        var errorAudio = new Audio('audio/beep.mp3');
        var successAudio = new Audio('audio/beep.mp3');
        var profileId = 70;
        var pivvitId=1;
        var response;


        $scope.useBarcode = function (barcodeBase, profileId,pivvitId) {
            response = barcodeService.validateBarcode(barcodeBase, profileId,pivvitId);
            if (response) {
                $scope.$apply(function () {
                    errorAudio.play();
                    $scope.successBarcode = false
                    $scope.errorBarcodeInvalid = JSON.parse(response).message;
                })
            }
            else {

                $http({
                    method: 'POST',
                    url: '/getBarcode',
                    data: { code: barcodeBase }
                }).then(function (response) {
                    var data=response.data
                    if (!data.success ) {
                        errorAudio.play();
                        $scope.errorBarcodeInvalid = data.message;
                        $scope.successBarcode = false

                    } else {
                        successAudio.play();
                        $scope.errorBarcodeInvalid = false
                        $scope.successBarcode = data.message;
                    }
                });
            }
        };

        function init() {
            var video = document.querySelector('video');
            var canvas = document.querySelector('canvas');
            var ctx = canvas.getContext('2d');
            var localMediaStream = null;
            var worker = new Worker('scripts/libs/barcode/zbar-processor.js');
            worker.onmessage = function (event) {
                if (event.data.length == 0) return;
                var CodeResult = event.data[0];
                var code = CodeResult[2];
                $scope.code = CodeResult[2]
                $scope.format = CodeResult[0]
                $scope.useBarcode(code, profileId,pivvitId);

            };

            function snapshot() {
                if (localMediaStream === null) return;
                canvas.width =video.videoWidth ;
                canvas.height = video.videoHeight;
                var ctx = canvas.getContext('2d');
                ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight,
                    0, 0, canvas.width, canvas.height);
                var data = ctx.getImageData(0, 0, canvas.width, canvas.height);
                worker.postMessage(data);
            }

            setInterval(snapshot, 2000);

            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
            window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;

            var constraints = { video: { facingMode: ( "environment") } };

            if (navigator.getUserMedia) {
                navigator.getUserMedia(constraints,
                    function (stream) { // success callback
                        if (video.mozSrcObject !== undefined) {
                            video.mozSrcObject = stream;
                        } else {
                            video.src = (window.URL && window.URL.createObjectURL(stream)) || stream;
                        }
                        localMediaStream = true;
                    },
                    function (error) {
                        console.error(error);
                    });
            }
            else {
            }
        }
        setTimeout(function () {
            init()
        }, 1000)

    }]);