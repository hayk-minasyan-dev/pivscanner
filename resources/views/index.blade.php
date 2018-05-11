<!DOCTYPE html>
<html lang="en">
<head >
    <base href="/">
    <meta charset="UTF-8" >
    <meta name="viewport" content="width=device-width,height=device-height initial-scale=1.0">
    <title>zoo</title>

    <link href="{{('favicon.ico')}}" rel="shortcut icon" />
    <link href="{{('scripts/libs/angular/bootstrap-css/css/bootstrap.css')}}" rel="stylesheet">
    <link href="{{('scripts/libs/angular/font-awesome/web-fonts-with-css/css/fontawesome.css')}}" rel="stylesheet">
    <link href="{{('css/main-responsive.css')}}" rel="stylesheet">

</head>
<body  ng-app="zooApp">

<div  ng-controller="barcodeController">

    <div  class="uiView">
    </div>
</div>


<script src="{{('scripts/libs/angular/jquery/dist/jquery.min.js')}}"></script>
<script src="{{('scripts/libs/angular/angular/angular.js')}}"></script>
<script src="{{('scripts/libs/angular/angular-bootstrap/ui-bootstrap.min.js')}}"></script>
<script src="{{('scripts/libs/angular/angular-touch.js')}}"></script>
<script src="{{('scripts/libs/angular/angular-bootstrap/ui-bootstrap-tpls.min.js')}}"></script>
<script src="{{('scripts/libs/angular/angular-ui-router/release/angular-ui-router.js')}}"></script>

<script src="{{('scripts/app.js')}}"></script>
<script src="{{('scripts/services/barcodeService.js')}}"></script>
<script src="{{('scripts/controllers/barcodeController.js')}}"></script>

</body>
</html>